export class Home {
    constructor() {
        console.log("Home constructed");
    }

    registerClickListener(dom: Document): void {
        const colorChangerButton = dom.getElementById("color-changer-button") as HTMLInputElement;
        const aboutButton = dom.getElementById("about-button") as HTMLInputElement;

        colorChangerButton.addEventListener("click", () => {
            window.open("../color-changer.html", "_self");
        });

        aboutButton.addEventListener("click", () => {
            window.open("../about.html", "_self ");
        });
    }
}