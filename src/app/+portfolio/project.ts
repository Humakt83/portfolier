import * as moment from 'moment';

export class Project {
    
    public createdFormatted: string = this.created.format('MMM YYYY');

    public static fromJson(json: any): Project {
        return new Project(json.name, json.images, json.link, json.description, json.tags, json.created ? moment(json.created) : undefined);
    }

    constructor(public name: string, public images: string[], public link: string, public description: string, public tags: string[], public created: moment.Moment) {
     }

}
