import { ImageModel } from './ImageModel';

export class DogModel implements IDogModel{
    public name: string;
    public titles: string;
    public description: string;
    public images: Array<ImageModel>;
    public menuImage: string;

    constructor(data?: IDogModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
        if (!data) {
            this.images = [];
        }
    }

    init(data?: any) {
        if (data) {
            if (data["images"] && data["images"].constructor === Array) {
                this.images = [];
                for (let item of data["images"])
                    this.images.push(ImageModel.fromJS(item));
            }
            this.name = data['name'];
            this.titles = data["titles"];
        }
    }

    static fromJS(data: any): DogModel {
        data = typeof data === 'object' ? data : {};
        let result = new DogModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (this.images && this.images.constructor === Array) {
            data["images"] = [];
            for (let item of this.images)
                data["images"].push(item);
        }
        data["name"] = this.name;
        data["titles"] = this.titles;
        data["description"] = this.description;
        return data; 
    }
}
export interface IDogModel {
    name: string;
    titles: string;
    description: string;
    images: Array<ImageModel>;
    menuImage: string;
}