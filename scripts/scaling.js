window.addEventListener("resize", autoScale);
autoScale();

function autoScale() {
    if (window.innerWidth >= 820) {
        changeScale("original");
        console.log(`Request to set the original CSS was sent. Width: ${window.innerWidth}, height: ${window.innerHeight}`);
    } else {
        changeScale("mobile");
        console.log(`Request to set the mobile CSS was sent. Width: ${window.innerWidth}, height: ${window.innerHeight}`);
    };
};

function changeScale(size) {
    let scaleLink = document.getElementById("scale-link");
    scaleLink.setAttribute("href", `styles/${size}.css`);
};