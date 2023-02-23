import { ImageModel } from '../Media/Image/imageModel.js';
import { VideoModel } from '../Media/Video/videoModel.js';

export class MediaFactory {
    static createMedia(data, type) {
        switch (type) {
            case "image":
                return new ImageModel(data);
            case "video":
                return new VideoModel(data);
            default:
                throw new Error(`type '${type}' inconnu`);
        }
    }
}