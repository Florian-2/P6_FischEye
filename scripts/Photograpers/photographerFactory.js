import { PhotographerTemplate } from '../Photograpers/photographerTemplate.js';

export class PhotographerFactory {
    constructor(data, type) {
        if (type === "card") {
            return new PhotographerTemplate(data).createPhotographerCard();
        }
        else if (type === "header") {
            return new PhotographerTemplate(data).createPhotographerHeader();
        }
        else {
            throw new Error("type inconnu");
        }
    }
}