export class Experience {

    public static fromJson(json: any): Experience {
        return new Experience(json.company, json.position, json.description, new Date(json.start), new Date(json.end));
    }

    constructor(public company: string, public position: string, public description: string, public start: Date, public end: Date) {}

}
