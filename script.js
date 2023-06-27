$(document).ready(function() {
    let config = localStorage["config"] ? JSON.parse(localStorage["config"]) : null;
    let home_colour_rots = {
        "purple": 0,
        "pink": 1,
        "green": 2,
        "blue": 3,
        "yellow": 4,
        "red": 5,
    };
    let rot_60_transform = {
        "MRX": "MRX",
        "EAG": "FAH",
        "EAF": "FAF",
        "EAE": "FAE",
        "EAD": "FAD",
        "EAC": "FAC",
        "EAB": "FAB",
        "EAA": "FAA",
        "CAG": "DAG",
        "CAF": "DAF",
        "CAE": "DAE",
        "CAD": "DAD",
        "CAC": "DAC",
        "CAB": "DAB",
        "CAA": "DAA",
        "AAG": "BAG",
        "AAF": "BAF",
        "AAE": "BAE",
        "AAD": "BAD",
        "AAC": "BAC",
        "AAB": "BAB",
        "AAA": "BAA",
        "DAG": "EAG",
        "CBF": "DBF",
        "CBE": "DBE",
        "CBD": "DBD",
        "CBC": "DBC",
        "CBB": "DBB",
        "CBA": "DBA",
        "DBF": "EBF",
        "DAF": "EAF",
        "DCE": "ECE",
        "CDD": "DDD",
        "CDC": "DDC",
        "CDB": "DDB",
        "CDA": "DDA",
        "ECE": "FCE",
        "DBE": "EBE",
        "DAE": "EAE",
        "DCD": "ECD",
        "DEC": "EEC",
        "CFB": "DFB",
        "CFA": "DFA",
        "ECD": "FCD",
        "DDD": "EDD",
        "DBD": "EBD",
        "DAD": "EAD",
        "DCC": "ECC",
        "DEB": "EEB",
        "DGA": "EGA",
        "ECC": "FCC",
        "EEC": "FEC",
        "DDC": "EDC",
        "DBC": "EBC",
        "DAC": "EAC",
        "DCB": "ECB",
        "DEA": "EEA",
        "ECB": "FCB",
        "EEB": "FEB",
        "DFB": "EFB",
        "DDB": "EDB",
        "DBB": "EBB",
        "DAB": "EAB",
        "DCA": "ECA",
        "ECA": "FCA",
        "EEA": "FEA",
        "EGA": "FGA",
        "DFA": "EFA",
        "DDA": "EDA",
        "DBA": "EBA",
        "DAA": "EAA",
        "BAG": "CAG",
        "ABF": "BBF",
        "ABE": "BBE",
        "ABD": "BBD",
        "ABC": "BBC",
        "ABB": "BBB",
        "ABA": "BBA",
        "BBF": "CBF",
        "BAF": "CAF",
        "BCE": "CCE",
        "ADD": "BDD",
        "ADC": "BDC",
        "ADB": "BDB",
        "ADA": "BDA",
        "CCE": "DCE",
        "BBE": "CBE",
        "BAE": "CAE",
        "BCD": "CCD",
        "BEC": "CEC",
        "AFB": "BFB",
        "AFA": "BFA",
        "CCD": "DCD",
        "BDD": "CDD",
        "BBD": "CBD",
        "BAD": "CAD",
        "BCC": "CCC",
        "BEB": "CEB",
        "BGA": "CGA",
        "CCC": "DCC",
        "CEC": "DEC",
        "BDC": "CDC",
        "BBC": "CBC",
        "BAC": "CAC",
        "BCB": "CCB",
        "BEA": "CEA",
        "CCB": "DCB",
        "CEB": "DEB",
        "BFB": "CFB",
        "BDB": "CDB",
        "BBB": "CBB",
        "BAB": "CAB",
        "BCA": "CCA",
        "CCA": "DCA",
        "CEA": "DEA",
        "CGA": "DGA",
        "BFA": "CFA",
        "BDA": "CDA",
        "BBA": "CBA",
        "BAA": "CAA",
        "FAH": "AAG",
        "EBF": "FBF",
        "EBE": "FBE",
        "EBD": "FBD",
        "EBC": "FBC",
        "EBB": "FBB",
        "EBA": "FBA",
        "FBF": "ABF",
        "FAF": "AAF",
        "FCE": "ACE",
        "EDD": "FDD",
        "EDC": "FDC",
        "EDB": "FDB",
        "EDA": "FDA",
        "ACE": "BCE",
        "FBE": "ABE",
        "FAE": "AAE",
        "FCD": "ACD",
        "FEC": "AEC",
        "EFB": "FFB",
        "EFA": "FFA",
        "ACD": "BCD",
        "FDD": "ADD",
        "FBD": "ABD",
        "FAD": "AAD",
        "FCC": "ACC",
        "FEB": "AEB",
        "FGA": "AGA",
        "ACC": "BCC",
        "AEC": "BEC",
        "FDC": "ADC",
        "FBC": "ABC",
        "FAC": "AAC",
        "FCB": "ACB",
        "FEA": "AEA",
        "ACB": "BCB",
        "AEB": "BEB",
        "FFB": "AFB",
        "FDB": "ADB",
        "FBB": "ABB",
        "FAB": "AAB",
        "FCA": "ACA",
        "ACA": "BCA",
        "AEA": "BEA",
        "AGA": "BGA",
        "FFA": "AFA",
        "FDA": "ADA",
        "FBA": "ABA",
        "FAA": "AAA"
    };
    let ct_24_start_date_milli = 1687903200000;
    let one_day_milli = 86400000;

    function load_config(config_obj) {
        let tiles = $(".tile").not(".home").children();
        tiles.attr("class", "hexagon-inner");
        tiles.children("img").removeAttr("class").attr("src", "images/empty.png");
        let rots = (home_colour_rots[config_obj["x7y0z7"]["colour"]] - home_colour_rots[$(".x7y0z7 .hexagon-inner").attr("class").split(" ")[1]] + 6) % 6;
        
        for (let key in config_obj) {
            colour = config_obj[key]["colour"];
            image = config_obj[key]["image"];
            if (colour) {
                $(`.${key}`).children().first().attr("class", `hexagon-inner ${colour}`);
            }
            if (image) {
                $(`.${key} img`).attr("class", `${image}`).attr("src", `images/${image}.webp`);
            }
        }
        
        $(".tile-id").text(function(ind, val) {
            for (let i = 0; i < rots; i++) {
                val = rot_60_transform[val];
            }
            return val;
        });
    }

    if (config) {
        // load_config(config);
    } else {
        config = {};
        config["x7y0z0"] = {"colour": "red", "image": null};
        config["x0y7z0"] = {"colour": "blue", "image": null};
        config["x0y0z7"] = {"colour": "pink", "image": null};
        config["x7y7z0"] = {"colour": "yellow", "image": null};
        config["x7y0z7"] = {"colour": "purple", "image": null};
        config["x0y7z7"] = {"colour": "green", "image": null};
        localStorage["config"] = JSON.stringify(config);
    }

    $("#toggle-ids").click(function() {
        if ($("#toggle-ids").text() === "Show Tile Names") {
            $("#toggle-ids").text("Hide Tile Names");
            $(".tile-id").removeClass("hidden");
        } else {
            $("#toggle-ids").text("Show Tile Names");
            $(".tile-id").addClass("hidden");
        }
    });
    
    $("#rotate").click(function() {
        let new_config = {};
        for (let key in config) {
            val = config[key];
            let x = parseInt(key[1]);
            let y = parseInt(key[3]);
            let z = parseInt(key[5]);
            let m = Math.max(x, y, z);
            let new_key = `x${m - y}y${m - z}z${m - x}`;
            new_config[new_key] = val;
        }
        config = new_config;
        localStorage["config"] = JSON.stringify(config);

        $(".tile").attr("class", function(ind, val) {
            let split_arr = val.split(" ");
            let coords = split_arr[2];
            let x = parseInt(coords[1]);
            let y = parseInt(coords[3]);
            let z = parseInt(coords[5]);
            let m = Math.max(x, y, z);
            split_arr[2] = `x${m - y}y${m - z}z${m - x}`;
            return split_arr.join(" ");
        });
    });

    $("#toggle-markers").click(function() {
        if ($("#toggle-markers").text() === "Banners") $("#toggle-markers").text("Relics");
        else if ($("#toggle-markers").text() === "Relics") $("#toggle-markers").text("Colours");
        else $("#toggle-markers").text("Banners");
    });

    $("#clear-banners").click(function() {
        $(".banner").each(function() {
            let tile_id = $(this).parent().parent().attr("class").split(" ")[2];
            if (config[tile_id]["colour"]) config[tile_id]["image"] = null;
            else delete config[tile_id];
            $(this).removeAttr("class").attr("src", "images/empty.png");
        });
        localStorage["config"] = JSON.stringify(config);
    });

    $("#clear-relics").click(function() {
        $("img[class]").not(".banner").each(function() {
            let tile_id = $(this).parent().parent().attr("class").split(" ")[2];
            if (config[tile_id]["colour"]) config[tile_id]["image"] = null;
            else delete config[tile_id];
            $(this).removeAttr("class").attr("src", "images/empty.png");
        });
        localStorage["config"] = JSON.stringify(config);
    });

    $("#clear-colours").click(function() {
        $(".tile").not(".home").children(".purple, .pink, .green, .blue, .yellow, .red").each(function() {
            let tile_id = $(this).parent().attr("class").split(" ")[2];
            if (config[tile_id]["image"]) config[tile_id]["colour"] = null;
            else delete config[tile_id];
            $(this).attr("class", "hexagon-inner");
        });
        localStorage["config"] = JSON.stringify(config);
    });

    $("#import").click(function() {
        $("#upload").trigger("click");
    });

    $("#upload").change(function(e) {
        let file = e.target.files[0];
        $(this).val("");
        let reader = new FileReader();
        reader.readAsText(file);
        reader.onload = function() {
            try {
                config = JSON.parse(reader.result);
                load_config(config);
            } catch {}
        };
    });

    $("#export").click(function() {
        let date = new Date();
        let week = Math.floor((date.getTime() - ct_24_start_date_milli) / one_day_milli / 7);
        let ct_season = 24 + Math.ceil(week / 2);
        let ct_day = week % 2 ? 0 : Math.floor((date.getTime() - ct_24_start_date_milli) % (one_day_milli * 7) / one_day_milli + 1);
        let download = $("<a></a>");
        
        download.attr("href", "data:text/plain;charset=utf-8," + encodeURIComponent(JSON.stringify(config)));
        download.attr("download", `CT${ct_season}-${ct_day}.json`);
        download.css("display", "none");
        $("body").append(download);
        $("a")[0].click();
        $("a").remove();
    });

    $(".tile").not(".home").click(function() {
        let tile_id = $(this).attr("class").split(" ")[2];
        let inner = $(this).children().first();
        let home_colour = $(".x8y0z8").children().first().attr("class").split(" ")[1];
        let colour = inner.attr("class").split(" ")[1] ? inner.attr("class").split(" ")[1] : null;
        let image = inner.children("img").attr("class");
        console.log(tile_id, inner);
        
        if ($("#toggle-markers").text() === "Banners") {
            if (image === "banner") {
                if (config[tile_id]["colour"]) config[tile_id]["image"] = null;
                else delete config[tile_id];
                inner.children("img").removeAttr("class").attr("src", "images/empty.png");
            } else if (image === undefined) {
                if (config[tile_id]) config[tile_id]["image"] = "banner";
                else config[tile_id] = {"colour": null, "image": "banner"};
                inner.children("img").attr("class", "banner").attr("src", "images/banner.webp");
            }
        } else if ($("#toggle-markers").text() === "Relics") {
            if (image === undefined) {
                let relic = $("#select :selected").text();
                if (config[tile_id]) config[tile_id]["image"] = relic;
                else config[tile_id] = {"colour": null, "image": relic};
                inner.children("img").attr("class", relic).attr("src", `images/${relic}.webp`);
            } else if (image !== "banner") {
                if (config[tile_id]["colour"]) config[tile_id]["image"] = null;
                else delete config[tile_id];
                inner.children("img").removeAttr("class").attr("src", "images/empty.png");
            }
        } else {
            if (colour === home_colour) {
                if (config[tile_id]["image"]) config[tile_id]["colour"] = null;
                else delete config[tile_id];
                inner.removeClass(home_colour);
            } else {
                if (config[tile_id]) config[tile_id]["colour"] = home_colour;
                else config[tile_id] = {"colour": home_colour, "image": null};
                inner.attr("class", `hexagon-inner ${home_colour}`);
            }
        }
        localStorage["config"] = JSON.stringify(config);
    });
});