import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Person } from './person';
 
@Injectable()
export class PersonSearchService {
	constructor(private http: Http){}

	search(term: string): Observable<Person[]> {
		return this.http
			.get(`app/persons/?name=${term}`)
			.map(response => response.json().data as Person[])
	}
}