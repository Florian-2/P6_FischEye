import { PhotographerAPI, PortfolioAPI } from "../services/photographer.js";
import { PhotographerModel } from "../Photograpers/photographerModel.js";
import { PhotographerFactory } from "../Photograpers/photographerFactory.js";
import { FormModal } from "../templates/modalForm.js";
import { DropdownFilter } from "../templates/filter.js";



async function init() {
	const url = new URLSearchParams(window.location.search);
	const userId = Number(url.get("id"));

	try {
		const photographe = await new PhotographerAPI().getPhotographerById(userId);
		const portfolio = await new PortfolioAPI().getPortfolioPhotographer(userId);

		// const photographeModel = new PhotographerModel({ profile: photographe, portfolio });
		// const card = new PhotographerFactory(photographeModel, "header");
		// document.getElementById("profile").appendChild(card);

		// const btnOpenModal = document.querySelector("button");
		// const modal = new FormModal(photographe.name);
		// modal.initEvent(btnOpenModal);

		const filter = new DropdownFilter();
	} 
	catch (error) {
		console.error(error);
	}
}

init();
