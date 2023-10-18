$(document).ready(function () {
  const xp_requirements = [
    0,
    180,
    460,
    1000,
    1860,
    3280,
    5180,
    8320,
    9380,
    13620,
    16380,
    14400,
    16650,
    14940,
    16380,
    17820,
    19260,
    20700,
    16470,
    17280
  ];
  const hero_multipliers = {
    quincy: 1,
    gwendolin: 1,
    striker_jones: 1,
    obyn_greenfoot: 1,
    geraldo: 1,
    captain_churchill: 1.71,
    benjamin: 1.5,
    ezili: 1.425,
    pat_fusty: 1.425,
    adora: 1.71,
    admiral_brickell: 1.425,
    etienne: 1,
    sauda: 1.425,
    psi: 1.5
  };
  const map_multipliers = {
    beginner: 1,
    intermediate: 1.1,
    advanced: 1.2,
    expert: 1.3
  };
  const mk_xp_requirement = 0.9;
  const mk_xp_buff = 0.9 * 1.1 * 1.05 * 1.08;
  const mk_starting_level = 3;
  const hero_boost_buff = 1.15;
  const extra_empowered_buff = 3;
  const energizer_buff = 1.5;


  $("input[type='number']").change(function() {
    if (!(/^[0-9]*$/.test(this.value))) {
      this.value = this.dataset.prev;
    } else if (this.value - this.min < 0) {
      this.value = this.min;
    } else if (this.value - this.max > 0) {
      this.value = this.max;
    }
    this.dataset.prev = this.value;
  });

  function get_cumulative_xp (round) {
    if (round <= 20) return 10 * round ** 2 + 30 * round;
    if (round <= 50) return 20 * round ** 2 - 360 * round + 3800;
    return 45 * round ** 2 - 2835 * round + 65050;
  }

  function get_xp (start_round, end_round) {
    let energizer_round = $("#energizer-round").val();
    if (energizer_round) {
      energizer_round = Math.max(energizer_round, start_round);
      if (energizer_round <= end_round) {
        return get_cumulative_xp(end_round) * energizer_buff - get_cumulative_xp(start_round - 1) - get_cumulative_xp(energizer_round - 1) * (energizer_buff - 1);
      }
    }
    return get_cumulative_xp(end_round) - get_cumulative_xp(start_round - 1);
  }

  function get_levelling_curve () {
    let xp_requirement_buff = hero_multipliers[$("#hero :selected").val()]
      * ($("#mk").is(":checked") ? mk_xp_requirement : 1);
    let xp_gain_buff = map_multipliers[$("#difficulty :selected").val()]
      * ($("#mk").is(":checked") ? mk_xp_buff : 1)
      * ($("#boost").val() ? hero_boost_buff ** $("#boost").val() : 1);
    let start_level = ($("#mk").is(":checked") ? mk_starting_level : 0)
      + ($("#empowered").val() ? extra_empowered_buff * $("#empowered").val() : 0);
    let start_round = parseInt($("#hero-round").val());
    let buffed_xp_requirements = xp_requirements.map(val => Math.round(val * xp_requirement_buff));
    let xp_requirements_cumulative = [0];
    let levelling_curve = [];

    for (let i = 0; i < buffed_xp_requirements.length - 1; i++) {
      xp_requirements_cumulative[i + 1] = xp_requirements_cumulative[i] + buffed_xp_requirements[i + 1];
    }
    let start_xp = xp_requirements_cumulative[Math.max(start_level - 1, 0)];
    
    for (let i = start_round; i < 141; i++) {
      let xp = start_xp + get_xp(start_round, i - 1) * xp_gain_buff;
      levelling_curve[i] = [];
      levelling_curve[i][0] = xp_requirements_cumulative.findIndex(val => val > xp);
      levelling_curve[i][1] = Math.round(xp_requirements_cumulative[levelling_curve[i][0]] - xp);
    }
    return levelling_curve;
  }

  $("input, select").change(function () {
    let levelling_curve = get_levelling_curve();
    $("table tr").remove();
    $("table thead").append("<tr><th>Round</th><th>Level</th><th>XP to Next Level</th></tr>");
    if ($("#detailed").is(":checked")) {
      for (let i = parseInt($("#hero-round").val()); i < 141; i++) {
        if (levelling_curve[i][0] === -1) {
          $("table tbody").append(`<tr><td>${i}</td><td>20</td><td>0</td></tr>`);
          break;
        }
        $("table tbody").append(`<tr><td>${i}</td><td>${levelling_curve[i][0]}</td><td>${levelling_curve[i][1]}</td></tr>`);
      }
    } else {
      for (let i = 1; i < 21; i++) {
        let round;
        if (i == 20) {
          round = levelling_curve.findIndex(val => val ? val[0] === -1 : false);
          $("table tbody").append(`<tr><td>${round}</td><td>20</td><td>0</td></tr>`);
        } else {
          round = levelling_curve.findIndex(val => val ? val[0] === i : false);
          if (round !== -1) {
            $("table tbody").append(`<tr><td>${round}</td><td>${i}</td><td>${levelling_curve[round][1]}</td></tr>`);
          }
        }
      }
    }
  });
});