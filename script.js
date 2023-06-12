$(document).ready(function() {
    let config = localStorage["config"] ? JSON.parse(localStorage["config"]) : null;

    function load_config(config, overwrite) {
        if (overwrite) $(".tile").not(".home").children().attr("class", "hexagon-inner").html("");
        for (let key in config) {
            colour = config[key]["colour"];
            image = config[key]["image"];
            if (colour) {
                $(`.${key}`).children().first().attr("class", `hexagon-inner ${colour}`);
            }
            if (image) {
                $(`.${key}`).children().first().html(`<img class="${image}" src="images/${image}.webp">`);
            }
        }
    }

    if (config) {
        load_config(config, false);
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

    $("#toggle").click(function() {
        if ($("#toggle").text() === "Banners") $("#toggle").text("Relics");
        else if ($("#toggle").text() === "Relics") $("#toggle").text("Colours");
        else $("#toggle").text("Banners");
    });

    $("#clear_banners").click(function() {
        $(".banner").each(function() {
            let tile_id = $(this).parent().parent().attr("class").split(" ")[2];
            if (config[tile_id]["colour"]) config[tile_id]["image"] = null;
            else delete config[tile_id];
            $(this).remove();
        });
        localStorage["config"] = JSON.stringify(config);
    });

    $("#clear_relics").click(function() {
        $("img").not(".banner").each(function() {
            let tile_id = $(this).parent().parent().attr("class").split(" ")[2];
            if (config[tile_id]["colour"]) config[tile_id]["image"] = null;
            else delete config[tile_id];
            $(this).remove();
        });
    });

    $("#clear_colours").click(function() {
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
        let reader = new FileReader();
        reader.readAsText(file);
        reader.onload = function() {
            try {
                config = JSON.parse(reader.result);
                load_config(config, true);
            } catch {}
        };
    });

    $("#export").click(function() {
        let download = $("<a></a>");
        download.attr("href", "data:text/plain;charset=utf-8," + encodeURIComponent(JSON.stringify(config)));
        download.attr("download", "config.json");
        download.css("display", "none");
        $("body").append(download);
        $("a")[0].click();
        $("a").remove();
    });

    $(".tile").not(".home").click(function() {
        let tile_id = $(this).attr("class").split(" ")[2];
        let inner = $(this).children().first();
        let home_colour = $(".x7y0z7").children().first().attr("class").split(" ")[1];
        let colour = inner.attr("class").split(" ")[1] ? inner.attr("class").split(" ")[1] : null;
        let image = inner.children().first().length ? inner.children().first().attr("class") : null;
        
        if ($("#toggle").text() === "Banners") {
            if (image === "banner") {
                if (config[tile_id]["colour"]) config[tile_id]["image"] = null;
                else delete config[tile_id];
                inner.html("");
            } else if (image === null) {
                if (config[tile_id]) config[tile_id]["image"] = "banner";
                else config[tile_id] = {"colour": null, "image": "banner"};
                inner.html("<img class=\"banner\" src=\"images/banner.webp\">");
            }
        } else if ($("#toggle").text() === "Relics") {
            if (image === null) {
                $("#modal").modal();
                $(".custom-select").attr("id", $(this).attr("class").split(" ")[2]);
            } else if (image !== "banner") {
                if (config[tile_id]["colour"]) config[tile_id]["image"] = null;
                else delete config[tile_id];
                inner.html("");
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

    $("#save_relics").click(function() {
        let tile_id = $(".custom-select").attr("id");
        let relic = $(".custom-select :selected").text();
        if (config[tile_id]) config[tile_id]["image"] = relic;
        else config[tile_id] = {"colour": null, "image": relic};
        localStorage["config"] = JSON.stringify(config);
        $(`.${tile_id}`).children().first().html(`<img class="${relic}" src="images/${relic}.webp">`);
        $("#modal").modal("hide");
    });
});