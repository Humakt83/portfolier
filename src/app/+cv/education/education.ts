export class Education {

    public static fromJson(json: any): Education {
        let ends: Date = json.end ? new Date(json.end) : undefined;
        return new Education(json.organizer, json.title, json.description, EducationType[<string> json.type], new Date(json.start), ends);
    }

    public educationHeader: string = this.formHeader();

    constructor(public organizer: string, public title: string, public description: string, public type: EducationType, public start: Date, public end: Date) { }

    private formHeader(): string {
        return `${this.organizer}, ${!!this.title ? this.title : ''} (${this.start.toLocaleDateString()} - ${this.end ? this.end.toLocaleDateString() : 'continues'})`;
    }

}

export enum EducationType {
    COURSE, CERTIFICATE, SCHOOL
}
