export class Project {

    public static fromJson(json: any): Project {
        return new Project(json.name, json.images, json.link, json.description, json.tags);
    }

    constructor(public name: string, public images: string[], public link: string, public description: string, public tags: string[]) { }

}
