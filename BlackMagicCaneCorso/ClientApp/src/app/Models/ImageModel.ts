export class ImageModel implements IImageModel{
    public url: string;
    public isProfile: boolean;

    constructor(data?: IImageModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.url = data['url'];
            this.isProfile = data["isProfile"];
        }
    }

    static fromJS(data: any): ImageModel {
        data = typeof data === 'object' ? data : {};
        let result = new ImageModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["url"] = this.url;
        data["isProfile"] = this.isProfile;
        return data; 
    }
}

export interface IImageModel {
    url: string;
    isProfile: boolean;
}