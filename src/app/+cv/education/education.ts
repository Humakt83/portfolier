import * as moment from 'moment';

export class Education {

    public static fromJson(json: any): Education {
        let ends: moment.Moment = json.end ? moment(json.end) : undefined;
        return new Education(json.organizer, json.title, json.description, EducationType[<string> json.type], moment(json.start), ends);
    }

    public educationHeader: string = this.formHeader();

    constructor(public organizer: string, public title: string, public description: string, public type: EducationType, public start: moment.Moment, public end: moment.Moment) { }

    private formHeader(): string {
        return `${this.organizer}, ${!!this.title ? this.title : ''} (${this.start.format('MMM YYYY')} - ${this.end ? this.end.format('MMM YYYY') : 'continues'})`;
    }

}

export enum EducationType {
    COURSE, CERTIFICATE, SCHOOL
}
