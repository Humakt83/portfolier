import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Education } from './education/education';
import { SkillGroup } from './skills/skillgroup';
import { Experience } from './experience/experience';

const PREFIX_TO_DATA = 'assets/data/';

@Injectable()
export class CVService {

    constructor(private http: Http) {}

    public getExperience(): Observable<Experience[]> {
        return this.http.get(PREFIX_TO_DATA + 'experience.json')
            .map((response: Response) => response.json().map((json: any) => Experience.fromJson(json)));
    }

    public getEducation(): Observable<Education[]> {
        return this.http.get(PREFIX_TO_DATA + 'education.json')
            .map((response: Response) => response.json().map((json: any) => Education.fromJson(json)));
    }

    public getSkills(): Observable<SkillGroup[]> {
        return this.http.get(PREFIX_TO_DATA + 'skills.json')
            .map((response: Response) => response.json().map((json: any) => SkillGroup.fromJson(json)));
    }

    public skillsExists(): Observable<boolean> {
        return this.mapToExistsBooleanFlag(this.getSkills());
    }

    public experienceExists(): Observable<boolean> {
        return this.mapToExistsBooleanFlag(this.getExperience());
    }

    public educationExists(): Observable<boolean> {
        return this.mapToExistsBooleanFlag(this.getEducation());
    }

    private mapToExistsBooleanFlag(observable: Observable<any>): Observable<boolean> {
        return observable.map((results: any) => true)
        .catch((err: any) => Observable.of(false));
    }

}
