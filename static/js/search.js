$(document).ready(function () {
  const nodes = {
    x0y0z0: "MRX",
    x0y0z1: "BAG",
    x0y0z2: "BAF",
    x0y0z3: "BAE",
    x0y0z4: "BAD",
    x0y0z5: "BAC",
    x0y0z6: "BAB",
    x0y0z7: "BAA",
    x0y1z0: "DAG",
    x0y1z1: "CAG",
    x0y1z2: "BBF",
    x0y1z3: "BBE",
    x0y1z4: "BBD",
    x0y1z5: "BBC",
    x0y1z6: "BBB",
    x0y1z7: "BBA",
    x0y2z0: "DAF",
    x0y2z1: "CBF",
    x0y2z2: "CAF",
    x0y2z3: "CCE",
    x0y2z4: "BDD",
    x0y2z5: "BDC",
    x0y2z6: "BDB",
    x0y2z7: "BDA",
    x0y3z0: "DAE",
    x0y3z1: "DCE",
    x0y3z2: "CBE",
    x0y3z3: "CAE",
    x0y3z4: "CCD",
    x0y3z5: "CEC",
    x0y3z6: "BFB",
    x0y3z7: "BFA",
    x0y4z0: "DAD",
    x0y4z1: "DCD",
    x0y4z2: "CDD",
    x0y4z3: "CBD",
    x0y4z4: "CAD",
    x0y4z5: "CCC",
    x0y4z6: "CEB",
    x0y4z7: "CGA",
    x0y5z0: "DAC",
    x0y5z1: "DCC",
    x0y5z2: "DEC",
    x0y5z3: "CDC",
    x0y5z4: "CBC",
    x0y5z5: "CAC",
    x0y5z6: "CCB",
    x0y5z7: "CEA",
    x0y6z0: "DAB",
    x0y6z1: "DCB",
    x0y6z2: "DEB",
    x0y6z3: "CFB",
    x0y6z4: "CDB",
    x0y6z5: "CBB",
    x0y6z6: "CAB",
    x0y6z7: "CCA",
    x0y7z0: "DAA",
    x0y7z1: "DCA",
    x0y7z2: "DEA",
    x0y7z3: "DGA",
    x0y7z4: "CFA",
    x0y7z5: "CDA",
    x0y7z6: "CBA",
    x0y7z7: "CAA",
    x1y0z0: "FAH",
    x1y0z1: "AAG",
    x1y0z2: "ABF",
    x1y0z3: "BCE",
    x1y0z4: "BCD",
    x1y0z5: "BCC",
    x1y0z6: "BCB",
    x1y0z7: "BCA",
    x1y1z0: "EAG",
    x1y2z0: "DBF",
    x1y3z0: "DBE",
    x1y4z0: "DBD",
    x1y5z0: "DBC",
    x1y6z0: "DBB",
    x1y7z0: "DBA",
    x2y0z0: "FAF",
    x2y0z1: "FBF",
    x2y0z2: "AAF",
    x2y0z3: "ABE",
    x2y0z4: "ADD",
    x2y0z5: "BEC",
    x2y0z6: "BEB",
    x2y0z7: "BEA",
    x2y1z0: "EBF",
    x2y2z0: "EAF",
    x2y3z0: "ECE",
    x2y4z0: "DDD",
    x2y5z0: "DDC",
    x2y6z0: "DDB",
    x2y7z0: "DDA",
    x3y0z0: "FAE",
    x3y0z1: "FBE",
    x3y0z2: "ACE",
    x3y0z3: "AAE",
    x3y0z4: "ABD",
    x3y0z5: "ADC",
    x3y0z6: "AFB",
    x3y0z7: "BGA",
    x3y1z0: "FCE",
    x3y2z0: "EBE",
    x3y3z0: "EAE",
    x3y4z0: "ECD",
    x3y5z0: "EEC",
    x3y6z0: "DFB",
    x3y7z0: "DFA",
    x4y0z0: "FAD",
    x4y0z1: "FBD",
    x4y0z2: "FDD",
    x4y0z3: "ACD",
    x4y0z4: "AAD",
    x4y0z5: "ABC",
    x4y0z6: "ADB",
    x4y0z7: "AFA",
    x4y1z0: "FCD",
    x4y2z0: "EDD",
    x4y3z0: "EBD",
    x4y4z0: "EAD",
    x4y5z0: "ECC",
    x4y6z0: "EEB",
    x4y7z0: "EGA",
    x5y0z0: "FAC",
    x5y0z1: "FBC",
    x5y0z2: "FDC",
    x5y0z3: "AEC",
    x5y0z4: "ACC",
    x5y0z5: "AAC",
    x5y0z6: "ABB",
    x5y0z7: "ADA",
    x5y1z0: "FCC",
    x5y2z0: "FEC",
    x5y3z0: "EDC",
    x5y4z0: "EBC",
    x5y5z0: "EAC",
    x5y6z0: "ECB",
    x5y7z0: "EEA",
    x6y0z0: "FAB",
    x6y0z1: "FBB",
    x6y0z2: "FDB",
    x6y0z3: "FFB",
    x6y0z4: "AEB",
    x6y0z5: "ACB",
    x6y0z6: "AAB",
    x6y0z7: "ABA",
    x6y1z0: "FCB",
    x6y2z0: "FEB",
    x6y3z0: "EFB",
    x6y4z0: "EDB",
    x6y5z0: "EBB",
    x6y6z0: "EAB",
    x6y7z0: "ECA",
    x7y0z0: "FAA",
    x7y0z1: "FBA",
    x7y0z2: "FDA",
    x7y0z3: "FFA",
    x7y0z4: "AGA",
    x7y0z5: "AEA",
    x7y0z6: "ACA",
    x7y0z7: "AAA",
    x7y1z0: "FCA",
    x7y2z0: "FEA",
    x7y3z0: "FGA",
    x7y4z0: "EFA",
    x7y5z0: "EDA",
    x7y6z0: "EBA",
    x7y7z0: "EAA",
    x8y0z0: "FAZ",
    x8y1z0: "FCZ",
    x8y2z0: "FEZ",
    x8y3z0: "FGZ",
    x8y4z0: "EHZ",
    x8y5z0: "EFZ",
    x8y6z0: "EDZ",
    x8y7z0: "EBZ",
    x8y8z0: "EAZ",
    x8y0z1: "FBZ",
    x8y0z2: "FDZ",
    x8y0z3: "FFZ",
    x8y0z4: "FHZ",
    x8y0z5: "AGZ",
    x8y0z6: "AEZ",
    x8y0z7: "ACZ",
    x8y0z8: "AAZ",
    x0y8z0: "DAZ",
    x1y8z0: "DBZ",
    x2y8z0: "DDZ",
    x3y8z0: "DFZ",
    x4y8z0: "DHZ",
    x5y8z0: "EGZ",
    x6y8z0: "EEZ",
    x7y8z0: "ECZ",
    x0y8z1: "DCZ",
    x0y8z2: "DEZ",
    x0y8z3: "DGZ",
    x0y8z4: "CHZ",
    x0y8z5: "CFZ",
    x0y8z6: "CDZ",
    x0y8z7: "CBZ",
    x0y8z8: "CAZ",
    x0y0z8: "BAZ",
    x1y0z8: "BCZ",
    x2y0z8: "BEZ",
    x3y0z8: "BGZ",
    x4y0z8: "AHZ",
    x5y0z8: "AFZ",
    x6y0z8: "ADZ",
    x7y0z8: "ABZ",
    x0y1z8: "BBZ",
    x0y2z8: "BDZ",
    x0y3z8: "BFZ",
    x0y4z8: "BHZ",
    x0y5z8: "CGZ",
    x0y6z8: "CEZ",
    x0y7z8: "CCZ"
  };
  const init_nodes = {
    AA: { colour: "purple" },
    BA: { colour: "pink" },
    CA: { colour: "green" },
    DA: { colour: "blue" },
    EA: { colour: "yellow" },
    FA: { colour: "red" }
  };
  const immutable_nodes = [
    "AA",
    "BA",
    "CA",
    "DA",
    "EA",
    "FA"
  ];
  const config_attributes = [
    "colour",
    "tile_type",
    "relic",
    "game_type",
    "boss",
    "tiers",
    "game_mode",
    "map",
    "difficulty",
    "cash",
    "start_round",
    "end_round",
    "max_towers",
    "monkey_knowledge",
    "selling",
    "ceramic_health",
    "moab_health",
    "bloon_speed",
    "moab_speed",
    "regrow_rate",
    "heroes",
    "towers"
  ];
  const colours = [
    "purple",
    "pink",
    "green",
    "blue",
    "yellow",
    "red"
  ];
  const game_types = [
    "",
    "",
    "race",
    "",
    "boss",
    "",
    "",
    "",
    "least_cash",
    "least_tiers"
  ];
  const bosses = [
    "bloonarius",
    "lych",
    "vortex",
    "dreadbloon",
    "phayze",
    "blastopopoulos"
  ];
  const all_heroes = [
    "quincy",
    "gwendolin",
    "striker_jones",
    "obyn_greenfoot",
    "rosalia",
    "corvus",
    "captain_churchill",
    "benjamin",
    "ezili",
    "pat_fusty",
    "adora",
    "admiral_brickell",
    "etienne",
    "sauda",
    "psi",
    "geraldo"
  ];
  const hero_bans = {
    least_tiers: [
      "sauda",
      "geraldo",
      "captain_churchill",
      "corvus",
      "gwendolin"
    ],
    leas_cash: [
      "sauda",
      "corvus"
    ],
    boss: [
      "benjamin",
      "corvus"
    ],
    race: []
  }
  const abbreviations = {
    dart_monkey: "Dart",
    boomerang_monkey: "Boomer",
    bomb_shooter: "Bomb",
    tack_shooter: "Tack",
    ice_monkey: "Ice",
    glue_gunner: "Glue",
    sniper_monkey: "Sniper",
    monkey_sub: "Sub",
    monkey_buccaneer: "Bucc",
    monkey_ace: "Ace",
    heli_pilot: "Heli",
    mortar_monkey: "Mortar",
    dartling_gunner: "Dartling",
    wizard_monkey: "Wiz",
    super_monkey: "Super",
    ninja_monkey: "Ninja",
    alchemist: "Alch",
    druid: "Druid",
    mermonkey: "Merm",
    banana_farm: "Farm",
    spike_factory: "Spac",
    monkey_village: "Village",
    engineer_monkey: "Engi",
    beast_handler: "Handler",
    quincy: "Quincy",
    gwendolin: "Gwen",
    striker_jones: "Jones",
    obyn_greenfoot: "Obyn",
    rosalia: "Rosalia",
    corvus: "Corvus",
    captain_churchill: "Churchill",
    benjamin: "Ben",
    ezili: "Ezili",
    pat_fusty: "Pat",
    adora: "Adora",
    admiral_brickell: "Brickell",
    etienne: "Eti",
    sauda: "Sauda",
    psi: "Psi",
    geraldo: "Geraldo"
  };
  const ct_start_season = 55;
  const ct_start_date_milli = 1726610400000;
  const one_day_milli = 86400000;
  const { protocol, host, pathname } = window.location;
  let config = localStorage["map/search"] ? JSON.parse(localStorage["map/search"]) : null;
  let rots = 0;
  let size = 7;
  let mapped_immutable_nodes;
  let mapped_init_nodes;


  function pascal_to_snake_case(text) {
    const new_text = text.replace(
      /(?<upperchar>[A-Z])/gm,
      (match, upperchar) => "_" + upperchar.toLowerCase()
    );
    return new_text.substr(1);
  }

  function snake_to_title_case(text) {
    return text.replace(/_/g, ' ').replace(/(?:^|\s)\S/g, function (match) {
      return match.toUpperCase();
    });
  }

  function get_rotated_node(node, rots = 1) {
    let x = parseInt(node[1]);
    let y = parseInt(node[3]);
    let z = parseInt(node[5]);
    let m = Math.max(x, y, z);
    for (let i = 0; i < rots; i++) {
      [x, y, z] = [m - y, m - z, m - x];
      m = Math.max(x, y, z);
    }
    return `x${x}y${y}z${z}`;
  }

  function get_node_id(node_name) {
    return get_rotated_node(Object.keys(nodes).find(key => nodes[key] === node_name), rots);
  }

  function get_node_name(node_id) {
    return nodes[get_rotated_node(node_id, 6 - rots)];
  }

  function map_node_name(node_name, dimension) {
    return node_name.length === 2 ? node_name + get_node_name(`x${dimension}y0z0`)[2] : node_name;
  }

  function update_node_defaults(dimension) {
    mapped_immutable_nodes = immutable_nodes.map(val => map_node_name(val, dimension));
    mapped_init_nodes = {};
    for (let i in init_nodes) {
      mapped_init_nodes[map_node_name(i, dimension)] = init_nodes[i];
    }
  }

  function update_grid_dimension(dimension) {
    size = dimension;
    if (config) config["size"] = dimension;
    update_node_defaults(dimension);
    update_grid(dimension);
    $(":root").attr("style", `--size:${dimension}`);
    $("#toggle-names").text("Show Tile Names");
  }

  function rotate_grid(rotations = 1) {
    rots = (rots + rotations) % 6;

    $(".tile").attr("class", function (ind, val) {
      let split_arr = val.split(" ");
      split_arr[2] = get_rotated_node(split_arr[2], rotations);
      return split_arr.join(" ");
    });
  }

  function create_modal(node, title) {
    $(".col-left").after(`<div id="${node}-modal" class="modal" tabindex="-1" role="dialog"></div>`);
    $(`#${node}-modal`).append(`<div class="modal-dialog" role="document"><div class="modal-content"></div></div></div>`);
    let header = $(`<div class="modal-header"><h5 class="modal-title">${title}</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>`);
    let body = $(`<div class="modal-body"></div>`);
    $(`#${node}-modal .modal-content`).append(header).append(body);
  }

  function populate_modals() {
    for (let node in config["tiles"]) {
      if (!(node in mapped_init_nodes) && config["tiles"][node]["map"]) {
        let inner = "<div>";
        let end_round = config["tiles"][node]["end_round"]
        if (config["tiles"][node]["game_type"] === "boss") {
          inner += `${config["tiles"][node]["tiers"]} Tier ${snake_to_title_case(config["tiles"][node]["boss"])}<br>`;
          end_round = `${config["tiles"][node]["tiers"] * 20 + 20}+`;
        } else {
          inner += snake_to_title_case(`${config["tiles"][node]["game_type"]}<br>`);
        }
        inner += `${snake_to_title_case(config["tiles"][node]["map"])} - ${snake_to_title_case(config["tiles"][node]["difficulty"])} ${snake_to_title_case(config["tiles"][node]["game_mode"])}<br>`;
        inner += `$${config["tiles"][node]["cash"]} - ${config["tiles"][node]["start_round"]}/${end_round}<br>`;
        if (config["tiles"][node]["max_towers"] !== -1) inner += `Max Towers: ${config["tiles"][node]["max_towers"]}<br>`;
        if (!config["tiles"][node]["selling"]) inner += `No Selling<br>`;
        if (config["tiles"][node]["ceramic_health"] !== 100) inner += `${config["tiles"][node]["ceramic_health"]}% Ceramic Health<br>`;
        if (config["tiles"][node]["moab_health"] !== 100) inner += `${config["tiles"][node]["moab_health"]}% Moab Health<br>`;
        if (config["tiles"][node]["bloon_speed"] !== 100) inner += `${config["tiles"][node]["bloon_speed"]}% Bloon Speed<br>`;
        if (config["tiles"][node]["moab_speed"] !== 100) inner += `${config["tiles"][node]["moab_speed"]}% Moab Speed<br>`;
        if (config["tiles"][node]["regrow_rate"] !== 100) inner += `${config["tiles"][node]["regrow_rate"]}% Regrow Rate<br>`;
        inner += "<br>";

        let heroes = config["tiles"][node]["heroes"];
        let towers = config["tiles"][node]["towers"];
        if (heroes.length) {
          inner += "Heroes:<br>";
          for (let i = 0; i < heroes.length; i++) {
            inner += abbreviations[heroes[i]];
            if (i < heroes.length - 1) inner += " - ";
          }
          inner += "<br><br>";
        }
        if (towers.length) {
          inner += "Towers:<br>";
          for (let i = 0; i < towers.length; i++) {
            if (towers[i]["max"] === -1) {
              inner += abbreviations[towers[i]["tower"]];
            } else {
              inner += `${towers[i]["max"]}x ${abbreviations[towers[i]["tower"]]}`;
            }
            if (i < towers.length - 1) inner += " - ";
          }
        }

        inner += "</div>";
        $(`#${node.toLowerCase()}-modal .modal-body`).html(inner);
      }
    }
  }

  function init_grid() {
    for (let node in nodes) {
      let node_name = get_node_name(node);
      let colour = node_name in mapped_init_nodes ? mapped_init_nodes[node_name]["colour"] : null;
      $(".col-left").after(`<div class="hexagon-border tile ${node}"></div>`);
      $(`.${node}`).append(`<div class="hexagon-inner"></div>`);
      let inner = $(`.${node} div`);

      if (mapped_immutable_nodes.includes(node_name)) {
        $(`.${node}`).addClass("immutable");
      }
      if (colour) {
        inner.addClass(colour);
      }
      inner.append(`<img src="/static/images/tiles/empty.png">`);
      if (!mapped_immutable_nodes.includes(node_name)) {
        inner.append(`<div class="tile-code">${node_name}</div>`);
      }

      create_modal(node_name.toLowerCase(), node_name);
    }
  }

  function update_grid(dimension) {
    $(".tile").removeClass("immutable");
    $(".tile").removeClass("hidden");
    $(".tile .hexagon-inner").attr("class", "hexagon-inner").empty();

    for (let node in nodes) {
      let node_name = get_node_name(node);
      let x = parseInt(node[1]);
      let y = parseInt(node[3]);
      let z = parseInt(node[5]);
      let colour = node_name in mapped_init_nodes ? mapped_init_nodes[node_name]["colour"] : null;
      let inner = $(`.${node} div`);

      if (mapped_immutable_nodes.includes(node_name)) {
        $(`.${node}`).addClass("immutable");
      }
      if (x > dimension || y > dimension || z > dimension) {
        $(`.${node}`).addClass("hidden");
      }
      if (colour) {
        inner.addClass(colour);
      }
      inner.append(`<img src="/static/images/tiles/empty.png">`);
      if (!mapped_immutable_nodes.includes(node_name)) {
        inner.append(`<div class="tile-code">${node_name}</div>`);
      }
    }
  }

  function check_config(cfg) {
    for (let node of Object.values(nodes)) {
      let node_id = get_node_id(node);
      let x = parseInt(node_id[1]);
      let y = parseInt(node_id[3]);
      let z = parseInt(node_id[5]);
      if (!(node in cfg["tiles"] || Math.max(x, y, z) > cfg["size"])) {
        return false;
      }
    }
    update_node_defaults(cfg["size"]);
    for (let node in mapped_init_nodes) {
      if (cfg["tiles"][node]["colour"] !== mapped_init_nodes[node]["colour"]) {
        return false;
      }
    }
    return true;
  }

  function init_config() {
    config = { "size": 7, "tiles": {} };
    for (let node of Object.values(nodes)) {
      config["tiles"][node] = {};
      for (let attribute of config_attributes) {
        config["tiles"][node][attribute] = null;
      }
      config["tiles"][node]["tile_type"] = "regular";
      config["tiles"][node]["heroes"] = [];
      config["tiles"][node]["towers"] = [];
      config["tiles"][node]["ceramic_health"] = 100;
      config["tiles"][node]["moab_health"] = 100;
      config["tiles"][node]["bloon_speed"] = 100;
      config["tiles"][node]["moab_speed"] = 100;
      config["tiles"][node]["regrow_rate"] = 100;

      if (node in mapped_init_nodes) {
        for (let attribute in mapped_init_nodes[node]) {
          config["tiles"][node][attribute] = mapped_init_nodes[node][attribute];
        }
      }
    }
    localStorage["map/search"] = JSON.stringify(config);
  }

  function load_config() {
    let tiles = $(".tile").not(".immutable").children();
    tiles.attr("class", "hexagon-inner");
    tiles.children("img").removeAttr("class").attr("src", "/static/images/tiles/empty.png").addClass("tile-image");

    if (!(check_config(config))) {
      init_config();
    }

    update_grid_dimension(config["size"]);
    localStorage["map/search"] = JSON.stringify(config);

    for (let node of Object.values(nodes)) {
      let node_id = get_node_id(node);
      if (node in config["tiles"]) {
        let colour = config["tiles"][node]["colour"];
        let tile_type = config["tiles"][node]["tile_type"];
        let relic = config["tiles"][node]["relic"];

        if (colour) {
          $(`.${node_id} .hexagon-inner`).attr("class", `hexagon-inner ${colour}`);
        }
        if (tile_type !== "regular") {
          if (tile_type === "banner") {
            $(`.${node_id} img`).attr("src", "/static/images/tiles/banner.webp").addClass("banner").addClass("tile-image");
          } else {
            $(`.${node_id} img`).attr("src", `/static/images/tiles/${relic}.webp`).addClass(relic).addClass("tile-image");
          }
        }
      }
    }

    populate_modals();
  }

  function onstart_config() {
    if (config) {
      load_config();
    } else {
      update_grid_dimension(size);
      init_config();
    }
  }

  async function get_latest_event() {
    let now = new Date();
    let week = Math.floor((now.getTime() - ct_start_date_milli) / one_day_milli / 7);
    let season = ct_start_season + Math.ceil(week / 2);
    while (season > 0) {
      let response = await fetch(`https://storage.googleapis.com/btd6-ct-map/events/${season}/tiles.json`, { method: "HEAD" });
      if (response.status !== 404) {
        return season;
      }
      season--;
    }
    return null;
  }

  async function populate_event_select() {
    let latest_event = await get_latest_event();
    let select = $("#historical-select");
    for (let i = 1; i < latest_event; i++) {
      select.append(`<option value="${i}">CT ${i}</option>`);
    }
    select.append(`<option value="${latest_event}" selected>CT ${latest_event}</option>`);
  }

  function load_alternate_config(json) {
    for (let node in json) {
      let attrs = { "colour": null };
      let game_data = json[node]["GameData"];
      let dc_model = game_data["dcModel"];
      attrs["tile_type"] = json[node]["TileType"] === "TeamFirstCapture" ? "regular" : pascal_to_snake_case(json[node]["TileType"]);
      attrs["relic"] = json[node]["RelicType"] !== "None" ? pascal_to_snake_case(json[node]["RelicType"]) : null;
      attrs["game_type"] = game_types[game_data["subGameType"]];
      attrs["boss"] = "bossData" in game_data ? bosses[game_data["bossData"]["bossBloon"]] : null;
      attrs["tiers"] = "bossData" in game_data ? game_data["bossData"]["TierCount"] : null;
      attrs["game_mode"] = pascal_to_snake_case(game_data["selectedMode"]);
      attrs["map"] = pascal_to_snake_case(game_data["selectedMap"]);
      if (attrs["map"] === "tutorial") attrs["map"] = "monkey_meadow";
      attrs["difficulty"] = pascal_to_snake_case(game_data["selectedDifficulty"]);
      attrs["cash"] = dc_model["startRules"]["cash"];
      attrs["start_round"] = dc_model["startRules"]["round"];
      attrs["end_round"] = dc_model["startRules"]["endRound"];
      attrs["max_towers"] = dc_model["maxTowers"];
      attrs["monkey_knowledge"] = !dc_model["disableMK"];
      attrs["selling"] = !dc_model["disableSelling"];
      attrs["ceramic_health"] = Math.round(dc_model["bloonModifiers"]["healthMultipliers"]["bloons"] * 100);
      attrs["moab_health"] = Math.round(dc_model["bloonModifiers"]["healthMultipliers"]["moabs"] * 100);
      attrs["bloon_speed"] = Math.round(dc_model["bloonModifiers"]["speedMultiplier"] * 100);
      attrs["moab_speed"] = Math.round(dc_model["bloonModifiers"]["moabSpeedMultiplier"] * 100);
      attrs["regrow_rate"] = Math.round(dc_model["bloonModifiers"]["regrowRateMultiplier"] * 100);
      attrs["heroes"] = [];
      attrs["towers"] = [];
      for (let tower of dc_model["towers"]["_items"]) {
        if (tower["max"] !== 0) {
          if (tower["tower"] === "ChosenPrimaryHero") {
            let hero_bans_list = hero_bans[attrs["game_type"]];
            for (let hero of all_heroes) {
              if (!hero_bans_list.includes(hero)) {
                attrs["heroes"].push(hero);
              }
            }
          } else if (tower["isHero"]) {
            attrs["heroes"].push(pascal_to_snake_case(tower["tower"]));
          } else {
            attrs["towers"].push({ "tower": pascal_to_snake_case(tower["tower"]), "max": tower["max"] });
          }
        }
      }
      config["tiles"][node] = attrs;
    }
  }

  async function load_event(event) {
    let response = await fetch(`https://storage.googleapis.com/btd6-ct-map/events/${event}/tiles.json`);
    if (response.status !== 404) {
      init_config();
      config["event"] = event;
      load_alternate_config(await response.json());
      load_config();
    }
  }


  update_node_defaults(size);
  init_grid();
  populate_event_select();


  $("#tile-type").multiselect({
    maxHeight: 200,
    nonSelectedText: "Select Tile Types",
    buttonWidth: "15em",
    numberDisplayed: 2
  });
  $("#game-type").multiselect({
    maxHeight: 200,
    nonSelectedText: "Select Game Types",
    buttonWidth: "15em",
    numberDisplayed: 2
  });
  $("#difficulty").multiselect({
    maxHeight: 200,
    nonSelectedText: "Select Difficulties",
    buttonWidth: "15em",
    numberDisplayed: 2
  });
  $("#game-mode").multiselect({
    maxHeight: 200,
    nonSelectedText: "Select Game Modes",
    buttonWidth: "15em",
    numberDisplayed: 2
  });
  $("#map").multiselect({
    includeSelectAllOption: true,
    maxHeight: 200,
    nonSelectedText: "Select Maps",
    buttonWidth: "15em",
    numberDisplayed: 2,
    enableClickableOptGroups: true
  });
  $("#modifiers").multiselect({
    includeSelectAllOption: true,
    maxHeight: 200,
    nonSelectedText: "Select Modifiers",
    buttonWidth: "15em",
    numberDisplayed: 2
  });
  $("#heroes").multiselect({
    includeSelectAllOption: true,
    maxHeight: 200,
    nonSelectedText: "Select Heroes",
    buttonWidth: "15em",
    numberDisplayed: 2
  });
  $("#towers").multiselect({
    includeSelectAllOption: true,
    maxHeight: 200,
    nonSelectedText: "Select Towers",
    buttonWidth: "15em",
    numberDisplayed: 2,
    enableClickableOptGroups: true
  });
  $("#boss-type").multiselect({
    maxHeight: 200,
    nonSelectedText: "Select Bosses",
    buttonWidth: "15em",
    numberDisplayed: 2
  });
  $("#boss-tiers").multiselect({
    maxHeight: 200,
    nonSelectedText: "Select Boss Tiers",
    buttonWidth: "15em",
    numberDisplayed: 2
  });


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

  $("#min-end-round").change(function () {
    if (this.value) {
      $("#max-end-round").attr("min", this.value);
    } else {
      $("#max-end-round").attr("min", 0);
    }
  });

  $("#max-end-round").change(function () {
    if (this.value) {
      $("#min-end-round").attr("max", this.value);
    } else {
      $("#min-end-round").attr("max", 100);
    }
  });

  $("#rotate").click(() => rotate_grid());

  $("#search").click(function () {
    let tile_types = $("#tile-type").val();
    let game_types = $("#game-type").val();
    let game_modes = $("#game-mode").val();
    let difficulties = $("#difficulty").val();
    let maps = $("#map").val();
    let modifiers = $("#modifiers").val();
    let heroes = $("#heroes").val();
    let towers = $("#towers").val();
    let boss_types = $("#boss-type").val();
    let boss_tiers = $("#boss-tiers").val() ? $("#boss-tiers").val().map(val => parseInt(val)) : null;
    let min_end_round = $("#min-end-round").val() ? $("#min-end-round").val() : null;
    let max_end_round = $("#max-end-round").val() ? $("#max-end-round").val() : null;

    $(".tile").not(".immutable").children(".hexagon-inner").attr("class", "hexagon-inner");
    if ([tile_types, game_types, game_modes, difficulties, maps, modifiers, heroes, towers, boss_types, boss_tiers, min_end_round, max_end_round].some(val => val !== null)) {
      for (let node in config["tiles"]) {
        let tile = config["tiles"][node];
        let node_id = get_node_id(node);
        if (!(node in init_nodes) && tile["map"]) {
          if (tile_types && !(tile_types.includes(tile["tile_type"]))) continue;
          if (game_types && !(game_types.includes(tile["game_type"]))) continue;
          if (game_modes && !(game_modes.includes(tile["game_mode"]))) continue;
          if (difficulties && !(difficulties.includes(tile["difficulty"]))) continue;
          if (maps && !(maps.includes(tile["map"]))) continue;
          if (modifiers && modifiers.every(val => val === "no_selling" ? tile["selling"] : tile[val] === 100)) continue;
          if (heroes && heroes.every(val => !tile["heroes"].includes(val))) continue;
          if (towers && towers.every(val => tile["towers"].every(obj => obj["tower"] !== val))) continue;
          if (boss_types && !(boss_types.includes(tile["boss"]))) continue;
          if (min_end_round && tile["end_round"] < min_end_round) continue;
          if (max_end_round && (tile["boss"] ? 101 : tile["end_round"]) > max_end_round) continue;
          $(`.${node_id} .hexagon-inner`).attr("class", "hexagon-inner grey");
        }
      }
    }
  });

  $("#clear").click(function () {
    $(".tile").not(".immutable").children(".hexagon-inner").attr("class", "hexagon-inner");
    $("select").multiselect("deselectAll");
    $("input").val("");
  });

  $("#export").click(function () {
    let nodes = $(".grey .tile-code");
    let tiles = [];
    for (let i of nodes) {
      let tile_export = { tile: i.innerText };
      let tile_data = config["tiles"][i.innerText];
      tile_export["tile_type"] = tile_data["tile_type"];
      if (tile_data["tile_type"] === "relic") {
        tile_export["relic"] = tile_data["relic"];
      }
      tile_export["game_type"] = tile_data["game_type"];
      if (tile_data["game_type"] === "boss") {
        tile_export["boss"] = tile_data["boss"];
      }
      tile_export["map"] = tile_data["map"];
      tiles.push(tile_export);
    }
    tiles.sort((a, b) => a.tile > b.tile ? 1 : -1);
    let download = $("<a></a>");

    download.attr(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(JSON.stringify(tiles))
    );
    download.attr("download", "filtered.json");
    download.css("display", "none");
    $("body").append(download);
    $("a")[0].click();
    $("a").remove();
  });

  $("#import").click(function () {
    $("#upload").trigger("click");
  });

  $("#upload").change(function (e) {
    let file = e.target.files[0];
    $(this).val("");
    rotate_grid(6 - rots);
    if (["application/zip", "application/x-zip-compressed", "multipart/x-zip", "application/zip-compressed", "application/x-zip"].includes(file.type)) {
      JSZip.loadAsync(file).then(async (content) => {
        let tile_promises = [];
        for (let tile_path in content.files) {
          if (!content.files[tile_path].dir) {
            tile_promises.push(content.files[tile_path].async("text"));
          }
        }
        let tile_data = await Promise.all(tile_promises);

        init_config();

        for (let tile_raw of tile_data) {
          if (tile_raw === null) continue;
          let data = JSON.parse(tile_raw);
          let node = data["Code"];
          let game_data = data["GameData"];
          let dc_model = game_data["dcModel"];
          let start_rules = dc_model["startRules"];
          let bloon_modifiers = dc_model["bloonModifiers"];

          config["tiles"][node]["tile_type"] = data["TileType"] === "TeamFirstCapture" ? "regular" : pascal_to_snake_case(data["TileType"]);
          config["tiles"][node]["relic"] = data["RelicType"] !== "None" ? pascal_to_snake_case(data["RelicType"]) : null;
          config["tiles"][node]["game_type"] = game_types[game_data["subGameType"]];
          config["tiles"][node]["boss"] = "bossData" in game_data ? bosses[game_data["bossData"]["bossBloon"]] : null;
          config["tiles"][node]["tiers"] = "bossData" in game_data ? game_data["bossData"]["TierCount"] : null;
          config["tiles"][node]["game_mode"] = pascal_to_snake_case(game_data["selectedMode"]);
          config["tiles"][node]["map"] = pascal_to_snake_case(game_data["selectedMap"]);
          if (config["tiles"][node]["map"] === "tutorial") config["tiles"][node]["map"] = "monkey_meadow";
          config["tiles"][node]["difficulty"] = pascal_to_snake_case(game_data["selectedDifficulty"]);
          config["tiles"][node]["cash"] = start_rules["cash"];
          config["tiles"][node]["start_round"] = start_rules["round"];
          config["tiles"][node]["end_round"] = start_rules["endRound"];
          config["tiles"][node]["max_towers"] = dc_model["maxTowers"];
          config["tiles"][node]["monkey_knowledge"] = !dc_model["disableMK"];
          config["tiles"][node]["selling"] = !dc_model["disableSelling"];
          config["tiles"][node]["ceramic_health"] = Math.round(bloon_modifiers["healthMultipliers"]["bloons"] * 100);
          config["tiles"][node]["moab_health"] = Math.round(bloon_modifiers["healthMultipliers"]["moabs"] * 100);
          config["tiles"][node]["bloon_speed"] = Math.round(bloon_modifiers["speedMultiplier"] * 100);
          config["tiles"][node]["moab_speed"] = Math.round(bloon_modifiers["moabSpeedMultiplier"] * 100);
          config["tiles"][node]["regrow_rate"] = Math.round(bloon_modifiers["regrowRateMultiplier"] * 100);

          for (let item of dc_model["towers"]["_items"]) {
            if (item && item["max"]) {
              let tower = item["tower"];
              let max = item["max"];
              if (item["isHero"]) {
                if (tower === "ChosenPrimaryHero") {
                  config["tiles"][node]["heroes"] = all_heroes;
                } else if (config["tiles"][node]["heroes"] !== all_heroes) {
                  config["tiles"][node]["heroes"].push(pascal_to_snake_case(tower));
                }
              } else {
                if (max === -1) {
                  config["tiles"][node]["towers"].push({ "tower": pascal_to_snake_case(tower), "max": -1 });
                } else {
                  config["tiles"][node]["towers"].push({ "tower": pascal_to_snake_case(tower), "max": max });
                }
              }
            }
          }
        }
        load_config();
      });
    } else {
      let reader = new FileReader();
      reader.readAsText(file);
      reader.onload = function () {
        try {
          config = JSON.parse(reader.result);
          load_config();
        } catch { }
      };
    }
  });

  $("#load").click(async function () {
    load_event($("#historical-select :selected").val());
    $("#historical-modal").modal("hide");
  });

  $(".tile").not(".immutable").click(function (e) {
    let node = $(this).attr("class").split(" ")[2];
    let node_name = get_node_name(node).toLowerCase();
    if ($(`#${node_name}-modal .modal-body`).html()) {
      $(`#${node_name}-modal`).modal();
    }
  });

  $(document).keypress(function (e) {
    switch (e.key) {
      case "r":
        rotate_grid();
        break;
      case "R":
        rotate_grid(5);
        break;
      case "Enter":
        $("#search").trigger("click");
        break;
    }
  })

  onstart_config();
});