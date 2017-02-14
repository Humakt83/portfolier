export class Education {

    public static fromJson(json: any): Education {
        let ends: Date = json.end ? new Date(json.end): undefined;
        return new Education(json.organizer, json.description, EducationType[<string> json.type], new Date(json.start), ends);
    }

    constructor(public organizer: string, public description: string, public type: EducationType, public start: Date, public end: Date) {}

}

export enum EducationType {
    COURSE, CERTIFICATE, SCHOOL
}
