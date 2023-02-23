export class PhotographerTemplate {
    constructor(data) {
        this.photographer = data;
    }

    /**
     * @returns {Node}
     */
    createPhotographerCard() {
        const templateCard = document.getElementById("photographer-card");
        const card = document.importNode(templateCard.content, true);

        card.querySelector("a").setAttribute("href", `photographer.html?id=${this.photographer.id}`);
        card.querySelector("img").setAttribute("src", this.photographer.portrait);
        card.querySelector("h2").textContent = this.photographer.name;
        card.querySelector(".photographer-card__location").textContent = `${this.photographer.city}, ${this.photographer.country}`;
        card.querySelector(".photographer-card__tagline").textContent = this.photographer.tagline;
        card.querySelector(".photographer-card__price").textContent = `${this.photographer.price}€/jour`;

        return card;
    }

    /**
     * @returns {Node}
     */
    createPhotographerHeader() {
        const templateCard = document.getElementById("template-photographer-profile");
        const card = document.importNode(templateCard.content, true);

        card.querySelector("img").setAttribute("src", this.photographer.portrait);
        card.querySelector("h2").textContent = this.photographer.name;
        card.querySelector(".photographer-card__location").textContent = `${this.photographer.city}, ${this.photographer.country}`;
        card.querySelector(".photographer-card__tagline").textContent = this.photographer.tagline;

        return card;
    }
}