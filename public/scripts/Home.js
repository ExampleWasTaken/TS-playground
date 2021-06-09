export class Home {
    constructor() {
        console.log("Home constructed");
    }
    registerClickListener(dom) {
        const colorChangerButton = dom.getElementById("color-changer-button");
        const aboutButton = dom.getElementById("about-button");
        colorChangerButton.addEventListener("click", () => {
            window.open("../color-changer.html", "_self");
        });
        aboutButton.addEventListener("click", () => {
            window.open("../about.html", "_self ");
        });
    }
}
