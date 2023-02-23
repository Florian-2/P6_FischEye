export class Media {
    constructor(data) {
        this.metadata = data;
    }

    get id() {
        this.metadata.id;
    }

    get photographerId() {
        this.metadata.photographerId;
    }

    get title() {
        this.metadata.title;
    }

    get date() {
        this.metadata.date;
    }

    get price() {
        this.metadata.price;
    }

    get likes() {
        this.metadata.likes;
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
        this.data = data;
    }

    get imagePath() {
        return `assets/portfolio/${this.data.id}/${this.data.image}`;
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
        this.data = data;
    }

    get videoPath() {
        return `assets/portfolio/${this.data.id}/${this.data.video}`;
    }
}