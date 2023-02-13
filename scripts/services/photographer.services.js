export class API {

    constructor() {
        this.url = "./data/photographers.json";
    }

    /**
     * @returns {Promise<{
     * photographers: {id: number, name: string, tagline: string, country: string, city: string, price: number, portrait: string}[], 
     * media: {id: number, photographerId: number, title: string, image: string, likes: number, price: number, date: string}[]
     * }>}
     */
    static async fetch() {
        const res = await fetch(this.url);

        if (!res.ok) {
            throw new Error(res.status);
        }

        const data = await res.json();
        return data;
    }
}

export class PhotographerAPI extends API {

    static async getAllPhotographers() {
        try {
            const { photographers } = await super.fetch();
            return photographers;
        }
        catch (error) {
            throw new Error(`Erreur ${error.status}, aucun photographe trouvé`);
        }
    }

    /**
     * @param {number} userId
    */
    static async getPhotographerById(userId) {
        try {
            const { photographers } = await super.fetch();
            const photographer = photographers.filter((photographer) => photographer.id === userId)[0];

            if (!photographer) {
                return window.location.href = "index.html";
            }

            return photographer;
        }
        catch (error) {
            throw new Error(`Erreur ${error.status}, le profil du photographe n'est pas disponible`);
        }
    }
}

export class PortfolioAPI extends API {
    /**
     * @param {number} userId
    */
    static async getPortfolioPhotographer(userId) {
        try {
            const { media } = await super.fetch();
            const portfolio = media.filter((media) => media.photographerId === userId);

            return portfolio;
        }
        catch (error) {
            throw new Error(`Erreur ${res.status}, le portfolio du photographe n'est pas disponible`);
        }
    }
}