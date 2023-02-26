import { ImageModel } from "../Media/MediaModel.js";

export class MediaTemplate {

    constructor(portfolio, photographer) {
        this.portfolio = portfolio;
        this.photographer = photographer;
    }

    /**
     * @param {Event} e
     */
    addLike(e) {
        const mediaId = Number(e.target.dataset.id);
        const media = this.portfolio.find((media) => media.id === mediaId);
        const btn = document.querySelector(`button[data-id="${mediaId}"]`);
        const p = btn.previousElementSibling;
        const icon = btn.querySelector("i.icon");

        if (!media.liked) {
            media.setLikes = media.likes + 1;
            media.setLiked = true;
            p.textContent = media.likes;
            icon.classList.replace("fa-regular", "fa-solid");
        }
        else {
            media.setLikes = media.likes - 1;
            media.setLiked = false;
            p.textContent = media.likes;
            icon.classList.replace("fa-solid", "fa-regular");
        }

        this.updateTotalLikes();
    }

    updateTotalLikes() {
        const totalLikes = this.portfolio.reduce((acc, curr) => acc + curr.likes, 0);
        const p = document.querySelector(".infos-likes__number");
        p.textContent = totalLikes;
    }

    createCardTotalLikes() {
        const totalLikes = this.portfolio.reduce((acc, curr) => acc + curr.likes, 0);
        const template = document.getElementById("template-infos");
        const info = document.importNode(template.content, true);

        info.querySelector(".infos-likes__number").textContent = totalLikes;
        info.querySelector(".infos-price").textContent = `${this.photographer.price}€/jour`;

		const section = document.getElementById("portfolio");
        section.append(info);
    }

    createMediaCard(data) {
        const template = document.getElementById("template-media");
        const card = document.importNode(template.content, true);

        const thumbnail = card.querySelector(".media-thumbnail");
        thumbnail.dataset.icon = data instanceof ImageModel ? "\uf03e" : "\uf04b";

        const link = card.querySelector(".media-thumbnail__link");
        link.setAttribute("href", data.path);
        link.append(data.createHTML());

        const btn = card.querySelector(".media-likes__like");
        btn.addEventListener("click", (e) => this.addLike(e));
        btn.setAttribute("data-id", data.id);

        card.querySelector(".media-detail__title").textContent = data.title;
        card.querySelector(".media-likes__number").textContent = data.likes;

        return card;
    }

    createPortfolio() {
        const list = this.portfolio.map((media) => this.createMediaCard(media));
		const section = document.getElementById("portfolio");
        section.innerHTML = "";
        section.append(...list);

        this.createCardTotalLikes();
    }
}