export class Photographer {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.tagline = data.tagline;
        this.country = data.country;
        this.city = data.city;
        this.price = data.price;
        this.portrait = data.portrait;
    }

    get id() {
        return this.id;
    }

    get name() {
        return this.name;
    }

    get tagline() {
        return this.tagline;
    }

    get country() {
        return this.country;
    }

    get city() {
        return this.city;
    }

    get price() {
        return this.price;
    }

    get portrait() {
        return this.portrait;
    }
}