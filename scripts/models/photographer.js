export class Photographer {
    constructor(data) {
        this._id = data.id;
        this._name = data.name;
        this._tagline = data.tagline;
        this._country = data.country;
        this._city = data.city;
        this._price = data.price;
        this._portrait = data.portrait;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name.toLocaleUpperCase();
    }

    get tagline() {
        return this._tagline;
    }

    get country() {
        return this._country;
    }

    get city() {
        return this._city;
    }

    get price() {
        return this._price;
    }

    get portrait() {
        return this._portrait;
    }
}