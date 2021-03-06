var scene = document.querySelector("a-scene");

if (scene.hasLoaded) {
    run();
} else {
    scene.addEventListener("loaded", run);
}

function run() {
    let apartment = document.querySelector("#apartment");
    let flat = document.querySelector("#flat");
    let card = document.querySelector("#card");
    let but_1 = document.querySelector("#but_1");
    let but_2 = document.querySelector("#but_2");
    let but_3 = document.querySelector("#but_3");
    let aflag = true;
    let fflag = true;

    apartment.addEventListener("click", function (event) {
        //open card
        //close card
        console.log("A1");
        if (aflag) {
            card.setAttribute("animation__visible", {
                property: "scale",
                dur: 2000,
                easing: "easeInOutSine",
                to: "500 250 25",
            });
            card.setAttribute("animation__position", {
                property: "position",
                dur: 2000,
                easing: "easeInOutSine",
                to: "0 130 380",
            });
        } else {
            card.setAttribute("animation__visible", {
                property: "scale",
                dur: 2000,
                easing: "easeInOutSine",
                to: "0.01 0.01 0.01",
            });
            card.setAttribute("animation__position", {
                property: "position",
                dur: 2000,
                easing: "easeInOutSine",
                to: "0 130 -380",
            });
        }
        aflag = !aflag;
    });
    flat.addEventListener("click", function (event) {
        //open card
        //close card
        console.log("A2");
        if (fflag) {
            card.setAttribute("animation__visible", {
                property: "scale",
                dur: 2000,
                easing: "easeInOutSine",
                to: "500 250 25",
            });
            card.setAttribute("animation__position", {
                property: "position",
                dur: 2000,
                easing: "easeInOutSine",
                to: "0 130 380",
            });
        } else {
            card.setAttribute("animation__visible", {
                property: "scale",
                dur: 2000,
                easing: "easeInOutSine",
                to: "0.01 0.01 0.01",
            });
            card.setAttribute("animation__position", {
                property: "position",
                dur: 2000,
                easing: "easeInOutSine",
                to: "0 130 -380",
            });
        }
        fflag = !fflag;
    });

    but_1.addEventListener("click", function (event) {
        //open apartment
        //close card
        console.log("B1");
        card.setAttribute("animation__visible", {
            property: "scale",
            dur: 2000,
            easing: "easeInOutSine",
            to: "0.01 0.01 0.01",
        });
        card.setAttribute("animation__position", {
            property: "position",
            dur: 2000,
            easing: "easeInOutSine",
            to: "0 130 -380",
        });
        apartment.setAttribute("animation__visible", {
            property: "scale",
            dur: 2000,
            easing: "easeInOutSine",
            to: "25 25 25",
        });
        apartment.setAttribute("animation__position", {
            property: "position",
            dur: 2000,
            easing: "easeInOutSine",
            to: "0 0 0",
        });
        flat.setAttribute("animation__visible", {
            property: "scale",
            dur: 2000,
            easing: "easeInOutSine",
            to: "0.01 0.01 0.01",
        });
        flat.setAttribute("animation__position", {
            property: "position",
            dur: 2000,
            easing: "easeInOutSine",
            to: "0 0 -25",
        });
    });
    but_2.addEventListener("click", function (event) {
        //open flat
        //close card
        console.log("B2");
        card.setAttribute("animation__visible", {
            property: "scale",
            dur: 2000,
            easing: "easeInOutSine",
            to: "0.01 0.01 0.01",
        });
        card.setAttribute("animation__position", {
            property: "position",
            dur: 2000,
            easing: "easeInOutSine",
            to: "0 130 -380",
        });
        flat.setAttribute("animation__visible", {
            property: "scale",
            dur: 2000,
            easing: "easeInOutSine",
            to: "25 25 25",
        });
        flat.setAttribute("animation__position", {
            property: "position",
            dur: 2000,
            easing: "easeInOutSine",
            to: "0 50 0",
        });
        apartment.setAttribute("animation__visible", {
            property: "scale",
            dur: 2000,
            easing: "easeInOutSine",
            to: "0.01 0.01 0.01",
        });
        apartment.setAttribute("animation__position", {
            property: "position",
            dur: 2000,
            easing: "easeInOutSine",
            to: "0 0 -25",
        });
    });
    but_3.addEventListener("click", function (event) {
        //open link
        //close card
        console.log("B3");
        window.open("https://www.google.com", "_blank");
    });
}