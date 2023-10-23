$(document).ready(function () {
  const thrive_incomes = [
    13.75,
    17.5,
    26.5,
    32.5,
    29,
    33,
    41.75,
    45.5,
    73.5,
    70.5,
    39.5,
    62.25,
    78.5,
    74,
    75.75,
    50,
    72,
    95.25,
    51.75,
    74,
    101.5,
    82.5,
    49.25,
    63.25,
    104.25,
    185.5,
    168.25,
    99.5,
    116.75,
    153.25,
    225.25,
    141.75,
    212.5,
    448.25,
    443.75,
    490.5,
    585.25,
    689.75,
    500.25,
    605.25,
    639.25,
    413,
    571.25,
    856.75,
    711.75,
    515,
    1046.25,
    1826,
    1868.75,
    953.375,
    597.75,
    553.75,
    703.75,
    1092.875,
    864.625,
    708.125,
    960.5,
    1035,
    690.625,
    458.375,
    573.85,
    971.85,
    837.2,
    898.1,
    936.2,
    423.7,
    366.6,
    457.95,
    917.7,
    945.2,
    666,
    637.9,
    1022.4,
    1340.6,
    908.1,
    875.8,
    1761.8,
    2803.5,
    1937.55,
    1601.3,
    2440,
    2285.25,
    2856.5,
    2325.1,
    800.725,
    800.725,
    1391.6,
    1277,
    532.825,
    1037.325,
    2086.35,
    1524.75,
    2306.675,
    2749.025,
    3320.65,
    2744.95,
    2669,
    3021.175,
    990.875,
    474.4,
    703.05,
    2054.15,
    3338.725,
    2895.9375,
    1491.975,
    1357.5875,
    2363.6625,
    3308.8,
    2479.25,
    2983.575,
    2978.8375,
    1357.575,
    2091.4125,
    2697.075,
    2331.7625,
    1219.4125,
    1294.2125,
    1558.5,
    1758.675,
    1601.32,
    808.495,
    1090.415,
    1196.915,
    1652.745,
    1269.5,
    463.07,
    672.485,
    900.985,
    891.56,
    937.71,
    1287.21,
    1506.355,
    1073.235,
    772.075,
    832.955,
    1189.41,
    1063.56,
    721.995,
    615.425,
    133.46
  ]


  $("input[type='number']").change(function () {
    if (!(/^[0-9]*$/.test(this.value))) {
      this.value = this.dataset.prev;
    } else if (this.value - this.min < 0) {
      this.value = this.min;
    } else if (this.value - this.max > 0) {
      this.value = this.max;
    }
    this.dataset.prev = this.value;
  });

  $("#calc-max").click(function () {
    if ($("#thrives").val() && $("#max-round").val()) {
      let thrives = parseInt($("#thrives").val());
      let max_round = parseInt($("#max-round").val());
      let thrive_rounds = [[0, []], [thrive_incomes[0], [1]]];

      for (let i = 2; i < max_round; i++) {
        let thrive_uses = thrive_rounds[i - 2][1].slice();
        if (thrive_uses.length < thrives) {
          if (thrive_rounds[i - 1][0] > thrive_rounds[i - 2][0] + thrive_incomes[i - 1]) {
            thrive_rounds.push(thrive_rounds[i - 1]);
          } else {
            thrive_uses.push(i);
            thrive_rounds.push([thrive_rounds[i - 2][0] + thrive_incomes[i - 1], thrive_uses]);
          }
        } else {
          let min_thrive_index = 0;
          for (let j = 1; j < thrive_uses.length; j++) {
            if (thrive_incomes[thrive_uses[min_thrive_index] - 1] > thrive_incomes[thrive_uses[j] - 1]) {
              min_thrive_index = j;
            }
          }
          let new_thrive_income = thrive_rounds[i - 2][0] + thrive_incomes[i - 1] - thrive_incomes[thrive_uses[min_thrive_index] - 1];

          if (thrive_rounds[i - 1][0] > new_thrive_income) {
            thrive_rounds.push(thrive_rounds[i - 1]);
          } else {
            thrive_uses.splice(min_thrive_index, 1);
            thrive_uses.push(i);
            thrive_rounds.push([new_thrive_income, thrive_uses]);
          }
        }
      }
      $("table tr").remove();
      $("table thead").append("<tr><th>Rounds to Thrive</th><th>Cash Earned ($)</th></tr>");
      for (let i of thrive_rounds[max_round - 1][1]) {
        $("table tbody").append(`<tr><td>${i}</td><td>${thrive_incomes[i - 1]}</td></tr>`);
      }
      $("table tbody").append(`<tr><td>Total</td><td>${+(Math.round(thrive_rounds[max_round - 1][0] + "e+4")  + "e-4")}</td></tr>`);
    }
  });

  $("#calc-list").click(function () {
    if ($("#max-round").val()) {
      let max_round = parseInt($("#max-round").val());
      $("table tr").remove();
      $("table thead").append("<tr><th>Round</th><th>Cash Earned From Thriving ($)</th></tr>");
      for (let i = max_round - 2; i >= 0; i--) {
        $("table tbody").append(`<tr><td>${i + 1}</td><td>${thrive_incomes[i]}</td></tr>`);
      }
    }
  });
});