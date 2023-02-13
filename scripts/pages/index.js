import { PhotographerFactory } from '../factories/photographerV2.js';
import { PhotographerAPI } from '../services/photographer.services.js';
import { Photographer } from '../models/photographer.js';


async function init() {
    try {
        const photographers = await (new PhotographerAPI().getAllPhotographers());

        const photographersSection = document.querySelector("section.photographer_section");

        photographers.forEach((photographer) => {
            const photographeModel = new Photographer(photographer)
            // console.log(photographeModel);
            const card = new PhotographerFactory(photographeModel).createPhotographerCard();
            photographersSection.appendChild(card);
        });
    }
    catch (error) {
        console.error(error);
        // alert("ERREUR");
    }
};

init();