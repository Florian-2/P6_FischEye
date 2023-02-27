import { PhotographerAPI, PortfolioAPI } from "../services/photographer.js";
import { PhotographerModel } from "../Photograpers/photographerModel.js";
import { PhotographerFactory } from "../Photograpers/photographerFactory.js";
import { FormModal } from "../templates/modalForm.js";
import { DropdownFilter } from "../templates/filter.js";
import { MediaFactory } from "../Media/MediaFactory.js";
import { Ligthbox } from "../templates/lightbox.js";


async function init() {
	const url = new URLSearchParams(window.location.search);
	const userId = Number(url.get("id"));
	let medias = [];

	try {
		const photographe = await new PhotographerAPI().getPhotographerById(userId);
		const portfolio = await new PortfolioAPI().getPortfolioPhotographer(userId);

		const photographeModel = new PhotographerModel({ profile: photographe, portfolio });
		const card = new PhotographerFactory(photographeModel, "header");
		document.getElementById("profile").appendChild(card);

		const btnOpenModal = document.querySelector("button");
		const modal = new FormModal(photographe.name);
		modal.initEvent(btnOpenModal);

		portfolio.forEach((media) => {
			const mediaModel = new MediaFactory(media);
			medias.push(mediaModel);
		});

		const mediaSort = new DropdownFilter(medias, photographeModel, "popularity");
		medias = mediaSort.sortPortfolio;

		// new Ligthbox(medias);
	}
	catch (error) {
		console.error(error);
	}
}

init();