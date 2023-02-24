export class MediaTemplate {

    constructor(data) {
        this.portfolio = data;
    }

    /**
     * @param {Event} e
     */
    addLike(e) {
        console.log("addLike()");
    }

    createCard(data) {
        const template = document.getElementById("template-media");
        const card = document.importNode(template.content, true);

        const link = card.querySelector(".media-thumbnail__link");
        link.setAttribute("href", data.path);
        link.appendChild(data.createHTML());

        card.querySelector(".media-detail__title").textContent = data.title;
        card.querySelector(".media-likes__number").textContent = data.likes;
        card.querySelector(".media-likes__like").addEventListener("click", (e) => this.addLike(e));

        return card;
    }

    createPortfolio() {
        const list = this.portfolio.map((media) => this.createCard(media));
		const section = document.getElementById("portfolio");
        section.innerHTML = "";
        section.append(...list);
    }
}