export class Project {

    public static fromJson(json: any): Project {
        return new Project(json.name, json.pictures, json.link, json.description, json.tags);
    }

    constructor(public name: string, public pictureFiles: string[], public link: string, public description: string, tags: string[]) {}

}
