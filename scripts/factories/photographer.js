/**
 * @param {Promise<{id: number, name: string, tagline: string, country: string, city: string, price: number, portrait: string}>} data
 * @returns {Node}
 */
export function createPhotographerCard(data) {
    const templateCard = document.getElementById("photographer-card");
    const card = document.importNode(templateCard.content, true);

    const picture = `assets/photographers/${data.portrait}`;

    card.querySelector("a").setAttribute("href", `photographer.html?id=${data.id}`);
    card.querySelector("img").setAttribute("src", picture);
    card.querySelector("h2").textContent = data.name;
    card.querySelector(".photographer-card__location").textContent = `${data.city}, ${data.country}`;
    card.querySelector(".photographer-card__tagline").textContent = data.tagline;
    card.querySelector(".photographer-card__price").textContent = `${data.price}€/jour`;

    return card;
}

/**
 * 
 * @returns {Node}
 */
export function createPhotographerHeader(data) {
    const templateCard = document.getElementById("photographer-header");
    const card = document.importNode(templateCard.content, true);

    const picture = `assets/photographers/${data.portrait}`;

    card.querySelector("img").setAttribute("src", picture);
    card.querySelector("h2").textContent = data.name;
    card.querySelector(".photographer-card__location").textContent = `${data.city}, ${data.country}`;
    card.querySelector(".photographer-card__tagline").textContent = data.tagline;

    return card;
}