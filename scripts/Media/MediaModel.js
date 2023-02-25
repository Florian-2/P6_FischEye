class Media {
    constructor(data) {
        this._id = data.id;
        this._photographerId = data.photographerId;
        this._title = data.title;
        this._likes = data.likes;
        this._price = data.price;
        this._date = data.date;
    }

    get id() {
        return this._id;
    }

    get photographerId() {
        return this._photographerId;
    }

    get title() {
        return this._title;
    }

    get date() {
        return this._date;
    }

    get price() {
        return this._price;
    }

    get likes() {
        return this._likes;
    }
}

/**
 * @typedef {{ id: number; photographerId: number; title: string; image: string; likes: number; date: Date; price: number }} DataImage
 */

export class ImageModel extends Media {
    /**
     * @param {DataImage} data
     */
    constructor(data) {
        super(data);
        this._imagePath = data.image;
    }

    get path() {
        return `assets/portfolio/${super.photographerId}/${this._imagePath}`;
    }

    createHTML() {
        const img = document.createElement("img");
        img.src = this.path;
        img.alt = super.title;
        img.classList.add("media-thumbnail__image");
        return img;
    }
}

/**
 * @typedef {{ id: number; photographerId: number; title: string; video: string; likes: number; date: Date; price: number }} DataVideo
 */

export class VideoModel extends Media {
    /**
     * @param {DataVideo} data
     */
    constructor(data) {
        super(data);
        this._videoPath = data.video;
    }

    get path() {
        return `assets/portfolio/${super.photographerId}/${this._videoPath}`;
    }

    createHTML() {
        const video = document.createElement("video");
        video.src = this.path;
        video.classList.add("media-thumbnail__video");
        return video;
    }
}