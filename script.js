$(document).ready(function () {
  const init_nodes = {
    x8y0z0: {colour: "red", image: null},
    x0y8z0: {colour: "blue", image: null},
    x0y0z8: {colour: "pink", image: null},
    x8y8z0: {colour: "yellow", image: null},
    x8y0z8: {colour: "purple", image: null},
    x0y8z8: {colour: "green", image: null}
  };
  const nodes = [
    "x0y0z0",
    "x0y0z1",
    "x0y0z2",
    "x0y0z3",
    "x0y0z4",
    "x0y0z5",
    "x0y0z6",
    "x0y0z7",
    "x0y0z8",
    "x0y1z0",
    "x0y1z1",
    "x0y1z2",
    "x0y1z3",
    "x0y1z4",
    "x0y1z5",
    "x0y1z6",
    "x0y1z7",
    "x0y1z8",
    "x0y2z0",
    "x0y2z1",
    "x0y2z2",
    "x0y2z3",
    "x0y2z4",
    "x0y2z5",
    "x0y2z6",
    "x0y2z7",
    "x0y2z8",
    "x0y3z0",
    "x0y3z1",
    "x0y3z2",
    "x0y3z3",
    "x0y3z4",
    "x0y3z5",
    "x0y3z6",
    "x0y3z7",
    "x0y3z8",
    "x0y4z0",
    "x0y4z1",
    "x0y4z2",
    "x0y4z3",
    "x0y4z4",
    "x0y4z5",
    "x0y4z6",
    "x0y4z7",
    "x0y4z8",
    "x0y5z0",
    "x0y5z1",
    "x0y5z2",
    "x0y5z3",
    "x0y5z4",
    "x0y5z5",
    "x0y5z6",
    "x0y5z7",
    "x0y5z8",
    "x0y6z0",
    "x0y6z1",
    "x0y6z2",
    "x0y6z3",
    "x0y6z4",
    "x0y6z5",
    "x0y6z6",
    "x0y6z7",
    "x0y6z8",
    "x0y7z0",
    "x0y7z1",
    "x0y7z2",
    "x0y7z3",
    "x0y7z4",
    "x0y7z5",
    "x0y7z6",
    "x0y7z7",
    "x0y7z8",
    "x0y8z0",
    "x0y8z1",
    "x0y8z2",
    "x0y8z3",
    "x0y8z4",
    "x0y8z5",
    "x0y8z6",
    "x0y8z7",
    "x0y8z8",
    "x1y0z0",
    "x1y0z1",
    "x1y0z2",
    "x1y0z3",
    "x1y0z4",
    "x1y0z5",
    "x1y0z6",
    "x1y0z7",
    "x1y0z8",
    "x1y1z0",
    "x1y2z0",
    "x1y3z0",
    "x1y4z0",
    "x1y5z0",
    "x1y6z0",
    "x1y7z0",
    "x1y8z0",
    "x2y0z0",
    "x2y0z1",
    "x2y0z2",
    "x2y0z3",
    "x2y0z4",
    "x2y0z5",
    "x2y0z6",
    "x2y0z7",
    "x2y0z8",
    "x2y1z0",
    "x2y2z0",
    "x2y3z0",
    "x2y4z0",
    "x2y5z0",
    "x2y6z0",
    "x2y7z0",
    "x2y8z0",
    "x3y0z0",
    "x3y0z1",
    "x3y0z2",
    "x3y0z3",
    "x3y0z4",
    "x3y0z5",
    "x3y0z6",
    "x3y0z7",
    "x3y0z8",
    "x3y1z0",
    "x3y2z0",
    "x3y3z0",
    "x3y4z0",
    "x3y5z0",
    "x3y6z0",
    "x3y7z0",
    "x3y8z0",
    "x4y0z0",
    "x4y0z1",
    "x4y0z2",
    "x4y0z3",
    "x4y0z4",
    "x4y0z5",
    "x4y0z6",
    "x4y0z7",
    "x4y0z8",
    "x4y1z0",
    "x4y2z0",
    "x4y3z0",
    "x4y4z0",
    "x4y5z0",
    "x4y6z0",
    "x4y7z0",
    "x4y8z0",
    "x5y0z0",
    "x5y0z1",
    "x5y0z2",
    "x5y0z3",
    "x5y0z4",
    "x5y0z5",
    "x5y0z6",
    "x5y0z7",
    "x5y0z8",
    "x5y1z0",
    "x5y2z0",
    "x5y3z0",
    "x5y4z0",
    "x5y5z0",
    "x5y6z0",
    "x5y7z0",
    "x5y8z0",
    "x6y0z0",
    "x6y0z1",
    "x6y0z2",
    "x6y0z3",
    "x6y0z4",
    "x6y0z5",
    "x6y0z6",
    "x6y0z7",
    "x6y0z8",
    "x6y1z0",
    "x6y2z0",
    "x6y3z0",
    "x6y4z0",
    "x6y5z0",
    "x6y6z0",
    "x6y7z0",
    "x6y8z0",
    "x7y0z0",
    "x7y0z1",
    "x7y0z2",
    "x7y0z3",
    "x7y0z4",
    "x7y0z5",
    "x7y0z6",
    "x7y0z7",
    "x7y0z8",
    "x7y1z0",
    "x7y2z0",
    "x7y3z0",
    "x7y4z0",
    "x7y5z0",
    "x7y6z0",
    "x7y7z0",
    "x7y8z0",
    "x8y0z0",
    "x8y0z1",
    "x8y0z2",
    "x8y0z3",
    "x8y0z4",
    "x8y0z5",
    "x8y0z6",
    "x8y0z7",
    "x8y0z8",
    "x8y1z0",
    "x8y2z0",
    "x8y3z0",
    "x8y4z0",
    "x8y5z0",
    "x8y6z0",
    "x8y7z0",
    "x8y8z0"
  ];
  const colours = [
    "purple",
    "pink",
    "green",
    "blue",
    "yellow",
    "red"
  ];
  const images = [
    "abilitized",
    "air_and_sea",
    "alchemist_touch",
    "banner",
    "bigger_bloon_sabotage",
    "box_of_chocolates",
    "box_of_monkey",
    "broken_heart",
    "camo_flogged",
    "camo_trap",
    "deep_heat",
    "durable_shots",
    "el_dorado",
    "empty",
    "extra_empowered",
    "flint_tips",
    "fortifried",
    "glue_trap",
    "going_the_distance",
    "hard_baked",
    "heartless",
    "hero_boost",
    "magic_monkeys",
    "mana_bulwark",
    "marching_boots",
    "military_monkeys",
    "moab_clash",
    "moab_mine",
    "monkey_boost",
    "regeneration",
    "relic",
    "restoration",
    "road_spikes",
    "rounding_up",
    "royal_treatment",
    "sharpsplosion",
    "starting_stash",
    "super_monkey_storm",
    "support_simians",
    "techbot",
    "thrive"
  ];
  const ct_24_start_date_milli = 1687903200000;
  const one_day_milli = 86400000;
  let config = localStorage["config"] ? JSON.parse(localStorage["config"]) : null;
  
  function get_node_id (node_name) {
    try {
      const tile_el = $(`div.tile-code:contains(${node_name})`);
      return tile_el.parent().parent().attr("class").split(/\s+/)[2];
    } catch (e) {
      return null;
    }
  };

  function pascal_to_snake_case (text) {
    const new_text = text.replace(
      /(?<upperchar>[A-Z])/gm,
      (match, upperchar) => "_" + upperchar.toLowerCase()
    );
    return new_text.substr(1);
  };

  function get_rotated_node (node, rots=1) {
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

  function update_colour (node, colour=null) {
    config[get_rotated_node(node, 6 - config["rots"])]["colour"] = colour;
    localStorage["config"] = JSON.stringify(config);
    if (colour) {
      $(`.${node} .hexagon-inner`).attr("class", `hexagon-inner ${colour}`);
    } else {
      $(`.${node} .hexagon-inner`).attr("class", "hexagon-inner");
    }
  }

  function update_image (node, image=null) {
    config[get_rotated_node(node, 6 - config["rots"])]["image"] = image;
    localStorage["config"] = JSON.stringify(config);
    if (image) {
      $(`.${node} img`).attr("src", `images/${image}.webp`).addClass(image);
    } else {
      $(`.${node} img`).attr("src", "images/empty.png").removeAttr("class");
    }
  }
  
  function rotate_grid (rots=1) {
    config["rots"] = (config["rots"] + rots) % 6;
    localStorage["config"] = JSON.stringify(config);

    $(".tile").attr("class", function (ind, val) {
      let split_arr = val.split(" ");
      split_arr[2] = get_rotated_node(split_arr[2], rots);
      return split_arr.join(" ");
    });
  }

  function init_config () {
    config = {rots: 0};
    for (let node of nodes) {
      if (node in init_nodes) {
        config[node] = init_nodes[node];
      } else {
        config[node] = {colour: null, image: null};
      }
    }
    localStorage["config"] = JSON.stringify(config);
  }

  function load_config (config_obj) {
    let tiles = $(".tile").not(".home").children();
    tiles.attr("class", "hexagon-inner");
    tiles.children("img").removeAttr("class").attr("src", "images/empty.png");
    let rots = config_obj["rots"];

    if (rots === null) {
      init_config();
    } else {
      console.log(config_obj);
      for (let node of nodes) {
        // console.log(config_obj['x0y8z0']);
        // console.log(node, config_obj[node], node in config_obj && !(node in init_nodes && JSON.stringify(config_obj[node]) !== JSON.stringify(init_nodes[node])));
        if (node in config_obj && !(node in init_nodes && JSON.stringify(config_obj[node]) !== JSON.stringify(init_nodes[node]))) {
          let colour = config_obj[node]["colour"];
          let image = config_obj[node]["image"];
          // console.log(get_rotated_node(node, rots), colour, image, config[node]);
          // console.log(rots, node, get_rotated_node(node, rots), colour, image);
          if (colour) {
            $(`.${get_rotated_node(node, rots)} .hexagon-inner`).attr("class", `hexagon-inner ${colour}`);
          }
          if (image) {
            $(`.${get_rotated_node(node, rots)} img`).attr("src", `images/${image}.webp`).addClass(image);
          }
        } else {
          init_config();
          break;
        }
      }
    }

    localStorage["config"] = JSON.stringify(config);
  }
  
  if (config) {
    load_config(config);
  } else {
    init_config();
  }
  

  $("#toggle-ids").click(function () {
    if ($("#toggle-ids").text() === "Show Tile Names") {
      $("#toggle-ids").text("Hide Tile Names");
      $(".tile-code").removeClass("hidden");
    } else {
      $("#toggle-ids").text("Show Tile Names");
      $(".tile-code").addClass("hidden");
    }
  });

  $("#rotate").click(() => rotate_grid());

  $("#toggle-markers").click(function () {
    if ($("#toggle-markers").text() === "Banners")
      $("#toggle-markers").text("Relics");
    else if ($("#toggle-markers").text() === "Relics")
      $("#toggle-markers").text("Colours");
    else $("#toggle-markers").text("Banners");
  });

  $("#clear-banners").click(function () {
    $(".banner").each(function () {
      let node = $(this).parent().parent().attr("class").split(" ")[2];
      update_image(node);
    });
  });

  $("#clear-relics").click(function () {
    $("img[class]")
      .not(".banner")
      .each(function () {
        let node = $(this).parent().parent().attr("class").split(" ")[2];
        update_image(node);
      });
  });

  $("#clear-colours").click(function () {
    $(".tile")
      .not(".home")
      .children()
      .each(function () {
        let node = $(this).parent().attr("class").split(" ")[2];
        update_colour(node);
      });
  });

  $("#import").click(function () {
    $("#upload").trigger("click");
  });

  $("#upload").change(function (e) {
    let file = e.target.files[0];
    $(this).val("");
    if (file.type == "application/zip") {
      JSZip.loadAsync(file).then(async (content) => {
        let tile_promises = [];
        for (const tile_path of Object.keys(content.files)) {
          if (!content.files[tile_path].dir) {
            tile_promises.push(content.files[tile_path].async("text"));
          }
        }
        let tiles_data = await Promise.all(tile_promises);

        rotate_grid(6 - config["rots"]);
        init_config();

        for (const tile_raw of tiles_data) {
          if (tile_raw === null) continue;
          const tile_data = JSON.parse(tile_raw);
          let class_name = get_node_id(tile_data.Code);
          switch (tile_data.TileType) {
            case "Banner":
              config[class_name]["image"] = "banner";
              break;
            case "Relic":
              let relic_type = tile_data.RelicType;
              config[class_name]["image"] = pascal_to_snake_case(relic_type);
              break;
          }
        }

        load_config(config);
      });
    } else {
      let reader = new FileReader();
      reader.readAsText(file);
      reader.onload = function () {
        try {
          console.log(config['x0y8z0']);
          config = JSON.parse(reader.result);
          console.log(config['x0y8z0']);
          load_config(config);
        } catch {}
      };
    }
  });

  $("#export").click(function () {
    let date = new Date();
    let week = Math.floor((date.getTime() - ct_24_start_date_milli) / one_day_milli / 7);
    let ct_season = 24 + Math.ceil(week / 2);
    let ct_day = week % 2 ? 0 : Math.floor(
      ((date.getTime() - ct_24_start_date_milli) % (one_day_milli * 7)) / one_day_milli + 1
    );
    let download = $("<a></a>");

    download.attr(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(JSON.stringify(config))
    );
    download.attr("download", `CT${ct_season}-${ct_day}.json`);
    download.css("display", "none");
    $("body").append(download);
    $("a")[0].click();
    $("a").remove();
  });

  $(".tile").not(".home").click(function () {
      let node = $(this).attr("class").split(" ")[2];
      let inner = $(this).children().first();
      let home_colour = colours[config["rots"]];
      let colour = inner.attr("class").split(" ")[1]
        ? inner.attr("class").split(" ")[1]
        : null;
      let image = inner.children("img").attr("class");
      let relic = $("#select :selected").text();

      if ($("#toggle-markers").text() === "Banners") {
        if (image === "banner") {
          update_image(node);
        } else if (image === undefined) {
          update_image(node, "banner");
        }
      } else if ($("#toggle-markers").text() === "Relics") {
        if (image === undefined) {
          update_image(node, relic);
        } else if (image !== "banner") {
          update_image(node);
        }
      } else {
        if (colour === home_colour) {
          update_colour(node);
        } else {
          update_colour(node, home_colour);
        }
      }
    });
});
