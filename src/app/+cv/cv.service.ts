import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Education } from './education';
import { SkillGroup } from './skills';
import { Experience } from './experience';

@Injectable()
export class CVService {

    constructor(private http: Http) {}

    public getExperience(): Observable<Experience[]> {
        return this.http.get('experience.json')
            .map((response: Response) => response.json().map((json: any) => Experience.fromJson(json)));
    }

    public getEducation(): Observable<Education[]> {
        return this.http.get('education.json')
            .map((response: Response) => response.json().map((json: any) => Education.fromJson(json)));
    }

    public getSkills(): Observable<SkillGroup[]> {
        return this.http.get('skills.json')
            .map((response: Response) => response.json().map((json: any) => SkillGroup.fromJson(json)));
    }

}
