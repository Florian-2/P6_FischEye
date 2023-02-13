import { PhotographerFactory } from '../factories/photographerV2.js';
import { PhotographerAPI } from '../services/photographer.services.js';


async function init() {
    try {
        const photographers = await (new PhotographerAPI().getAllPhotographers());

        const photographersSection = document.querySelector("section.photographer_section");

        photographers.forEach((photographer) => {
            const card = new PhotographerFactory(photographer).createPhotographerCard();
            photographersSection.appendChild(card);
        });
    }
    catch (error) {
        console.error(error);
        alert("ERREUR");
    }
};

init();