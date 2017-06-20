export class Experience {

    public static fromJson(json: any): Experience {
        let ends: Date = json.end ? new Date(json.end) : undefined;
        return new Experience(json.company, json.position, json.description, new Date(json.start), ends);
    }

    public experienceHeader: string = this.formHeader();

    constructor(public company: string, public position: string, public description: string, public start: Date, public end: Date) {}

    private formHeader(): string {
        return `${this.position}, ${this.company} (${this.start.toLocaleDateString()} - ${this.end ? this.end.toLocaleDateString() : 'continues'})`;
    }

}
