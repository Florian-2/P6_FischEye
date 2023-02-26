import { ImageModel, VideoModel } from "../Media/MediaModel.js";

export class MediaTemplate {

    constructor(data) {
        this.portfolio = data;
        // this.liked = false;
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
            console.log("if");
            media.setLikes = media.likes + 1;
            media.setLiked = true;
            p.textContent = media.likes;
            icon.classList.replace("fa-regular", "fa-solid");
        }
        else {
            console.log("else");
            media.setLikes = media.likes - 1;
            media.setLiked = false;
            p.textContent = media.likes;
            icon.classList.replace("fa-solid", "fa-regular");
        }
    }

    createMediaCard(data) {
        const template = document.getElementById("template-media");
        const card = document.importNode(template.content, true);

        const thumbnail = card.querySelector(".media-thumbnail");
        thumbnail.dataset.icon = data instanceof ImageModel ? "\uf002" : "\uf04b";

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
    }
}