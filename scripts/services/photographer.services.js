export async function getAllPhotographers() {
    const res = await fetch("./data/photographers.json");

    if (res.ok) {
        const data = await res.json();
        return data.photographers;
    }

    throw new Error("Aucun photographe trouvé");
}

/**
 * 
 * @param {number} id
 * @return {Promise<{
 *      id: number,
 *      name: string,
 *      tagline: string,
 *      country: string,
 *      city: string,
 *      price: number
 *      portrait: string
 * }>} 
 */
export async function getPhotographerById(userId) {
    const res = await fetch("./data/photographers.json");

    if (res.ok) {
        const { photographers } = await res.json();
        const photographer = photographers.filter((photographer) => photographer.id === userId)[0];

        if (!photographer) {
            return window.location.href = "index.html";
        }

        return photographer;
    }
}

export async function getMediaPhotographer(userId) {
    const res = await fetch("./data/photographers.json");

    if (res.ok) {
        const { media } = await res.json();
        const portfolio = media.filter((media) => media.photographerId === userId);

        if (!portfolio) throw new Error("Média introuvable...");

        return portfolio;
    }

    throw new Error("Média introuvable...");
}