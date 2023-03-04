/* eslint-disable import/extensions */
import PhotographerAPI from '../services/photographer.js';
import PhotographerFactory from '../Photograpers/photographerFactory.js';
import PhotographerModel from '../Photograpers/photographerModel.js';

async function init() {
	try {
		const photographers = await new PhotographerAPI().getAllPhotographers();

		const photographersSection = document.querySelector('section.photographer_section');

		photographers.forEach((photographer) => {
			const photographeModel = new PhotographerModel({ profile: photographer });
			const card = PhotographerFactory.createPhotographer(photographeModel, 'card');
			photographersSection.appendChild(card);
		});
	} catch (error) {
		console.error(error);
	}
}

init();
