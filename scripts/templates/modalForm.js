export class FormModal {
    #photographerName;

    /**
     * @param {string} photographerName 
     */
    constructor(photographerName) {
        this.#photographerName = photographerName;
        this.render();
    }

    /**
     * @param {HTMLButtonElement} btn
     */
    initEvent(btn) {
        btn.addEventListener("click", this.open);
    }

    open() {
        const modal = document.querySelector(".modal-overlay");
        modal.style.setProperty("display", "block");
    }

    close() {
        const modal = document.querySelector(".modal-overlay");
        modal.style.setProperty("display", "none");
    }

    /**
     * @param {SubmitEvent} e
     */
    submit(e) {
        e.preventDefault();
    }

    render() {
        const template = document.getElementById("template-formModal");
        const modal = document.importNode(template.content, true);
        modal.querySelector("h2").innerHTML = `Contactez-moi <br> ${this.#photographerName}`;
        modal.querySelector(".modal__close").addEventListener("click", this.close);
        modal.querySelector("form").addEventListener("submit", (e) => this.submit(e));

        const overlay = document.createElement("div");
        overlay.classList.add("modal-overlay");
        overlay.append(modal);
        document.getElementById("profile").append(overlay);
    }
}