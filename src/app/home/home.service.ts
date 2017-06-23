import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Home } from './home';

@Injectable()
export class HomeService {

    constructor(private http: Http) {}

    public getHome(): Observable<Home> {
        return this.http.get('assets/data/home.json')
        .map((response: Response) => Home.fromJson(response.json()));
    }

}
