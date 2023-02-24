import { ImageModel, VideoModel } from "./MediaModel.js";

export class MediaFactory {
    constructor(data) {
        if (data.image) {
            return new ImageModel(data);
        }
        else if (data.video) {
            return new VideoModel(data);
        }
    }
}