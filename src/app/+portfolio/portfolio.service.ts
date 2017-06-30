import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Project } from './project';

const PREFIX_TO_DATA = 'assets/data/';

@Injectable()
export class PortfolioService {

    constructor(private http: Http) {}

    public getPortfolio(): Observable<Project[]> {
        return this.http.get(PREFIX_TO_DATA + 'portfolio.json')
            .map((response: Response) => response.json().map((json: any) => Project.fromJson(json)));
    }

    public portfolioExists(): Observable<boolean> {
        return this.getPortfolio()
        .map((results: Project[]) => true)
        .catch((err: any) => Observable.of(false));
    }

}
