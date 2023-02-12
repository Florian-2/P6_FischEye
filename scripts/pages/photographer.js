import { getPhotographerById, getMediaPhotographer } from '../services/photographer.services.js';
import { createPhotographerHeader } from '../factories/photographer.js';


const url = new URLSearchParams(window.location.search);

async function init() {
    const userId = Number(url.get('id'));
    const user = await getPhotographerById(userId);
    const card = createPhotographerHeader(user);

    const photographersSection = document.querySelector("main");
    photographersSection.appendChild(card);

    const media = await getMediaPhotographer(userId);
    console.log({media});
}

init();