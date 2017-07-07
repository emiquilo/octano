import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from './model';

@Injectable()
export class PersonSearchService {
	constructor(private http: Http){}

	search(term: string): Observable<User[]> {
		return this.http
			.get(`app/persons/?name=${term}`)
			.map(response => response.json().data as User[])
	}
}
