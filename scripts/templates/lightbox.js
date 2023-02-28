import { ImageModel, VideoModel } from "../Media/MediaModel.js";

export class Ligthbox {
    static init(listMedia) {
        const links = document.querySelectorAll(".media-thumbnail__link");

        links.forEach(media => {
            media.addEventListener("click", (e) => {
                e.preventDefault();
                const article = e.target.parentElement.parentElement;
                const mediaID = Number(article.dataset.id);
                const media = listMedia.find((media) => media.id === mediaID);
                new Ligthbox(media, listMedia);
            });
        });
    }

    /**
     * @param {ImageModel | VideoModel} currentMedia
     * @param {Array<ImageModel, VideoModel>} listMedia
     */
    constructor(currentMedia, listMedia) {
        this.currentMedia = currentMedia;
        this.listMedia = listMedia;
        this.lightboxElement = this.render(currentMedia);
        this.loadMedia(currentMedia);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        document.body.append(this.lightboxElement);
        document.addEventListener("keyup", this.handleKeyUp);
    }

    /**
     * @param {MouseEvent | KeyboardEvent} e
     */
    handleKeyUp(e) {
        if (e.key === "Escape") {
            this.close();
        }
        else if (e.key === "ArrowLeft") {
            this.prev();
        }
        else if (e.key === "ArrowRight") {
            this.next();
        }
    }

    close() {
        this.lightboxElement.classList.add("fadeOut");
        // Suppression de l'élément html lightbox après 300ms, le temps que l'animation de disparition se lance
        setTimeout(() => this.lightboxElement.remove(), 300);
        document.removeEventListener("keyup", this.handleKeyUp);
    }

    /**
     * @param {MouseEvent | KeyboardEvent} e
     */
    next() {
        let indexCurrentMedia = this.listMedia.findIndex((media) => media.id === this.currentMedia.id);
        if (indexCurrentMedia === this.listMedia.length - 1) {
            indexCurrentMedia = -1;
        }
        this.currentMedia = this.listMedia[indexCurrentMedia + 1];
        this.loadMedia();
    }

    /**
     * @param {MouseEvent | KeyboardEvent} e
     */
    prev() {
        let indexCurrentMedia = this.listMedia.findIndex((media) => media.id === this.currentMedia.id);
        if (indexCurrentMedia === 0) {
            indexCurrentMedia = this.listMedia.length;
        }
        this.currentMedia = this.listMedia[indexCurrentMedia - 1];
        this.loadMedia();
    }

    loadMedia() {
        if (this.currentMedia.type === "image") {
            this.loadImage(this.currentMedia);
        }
        else if (this.currentMedia.type === "video") {
            this.loadVideo(this.currentMedia);
        }
        else {
            console.error("Format non pris en charge");
        }
    }

    loadImage() {
        const img = new Image();
        img.src = this.currentMedia.path;
        img.classList.add("lightbox-content__media", "fadeIn");

        const container = this.lightboxElement.querySelector(".lightbox-content");
        const loader = document.createElement("div");
        loader.classList.add("lightbox-content__loader");
        container.innerHTML = "";
        container.appendChild(loader);

        const title = this.createTitle();

        img.onload = () => {
            container.removeChild(loader);
            container.appendChild(img);
            container.appendChild(title);
        }
    }

    loadVideo() {
        const video = document.createElement("video");
        video.classList.add("lightbox-content__media", "fadeIn");
        video.src = this.currentMedia.path;
        video.autoplay = true;
        video.controls = true;

        const container = this.lightboxElement.querySelector(".lightbox-content");
        container.innerHTML = "";

        const title = this.createTitle();

        container.appendChild(video);
        container.appendChild(title);
    }

    createTitle() {
        const p = document.createElement("p");
        p.classList.add("lightbox-content__title")
        p.textContent = this.currentMedia.title;

        return p;
    }

    /**
     * @returns {HTMLElement}
     */
    render() {
        const template = document.getElementById("template-lightbox");
        const lightbox = document.importNode(template.content, true);

        lightbox.querySelector(".lightbox__close").addEventListener("click", () => this.close());
        lightbox.querySelector(".lightbox__next").addEventListener("click", () => this.next());
        lightbox.querySelector(".lightbox__prev").addEventListener("click", () => this.prev());

        document.body.append(lightbox);
        return document.querySelector(".lightbox");
    }
}