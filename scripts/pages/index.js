import { createPhotographerCard } from '../factories/photographer.js';
import { getAllPhotographers } from '../services/photographer.services.js';


async function init() {
    try {
        const photographers = await getAllPhotographers();

        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const card = createPhotographerCard(photographer);
            photographersSection.appendChild(card);
        });
    }
    catch (error) {
        alert(error.message);
    }
};

init();