import * as moment from 'moment';

export class Experience {

    public experienceHeader: string = this.formHeader();

    public static fromJson(json: any): Experience {
        const ends: moment.Moment = json.end ? moment(json.end) : undefined;
        return new Experience(json.company, json.position, json.description, moment(json.start), ends);
    }


    constructor(public company: string, public position: string, public description: string, public start: moment.Moment, public end: moment.Moment) {}

    private formHeader(): string {
        return `${this.position}, ${this.company} (${this.start.format('MMM YYYY')} - ${this.end ? this.end.format('MMM YYYY') : 'continues'})`;
    }

}
