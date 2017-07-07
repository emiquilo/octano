import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User } from './model';

@Injectable()
export class PersonService {
	private headers = new Headers({'Content-Type': 'application/json'});
	private personsUrl = 'api/users';
	private productsUrl = 'api/products';

	constructor(private http: Http){}

	getPersons(): Promise<User[]> {
		return this.http.get(this.personsUrl)
			.toPromise()
			.then(response => response.json().data as User[])
			.catch(this.handleError);
	}

	getPerson(id: number): Promise<User> {
	  const url = `${this.personsUrl}/${id}`;
	  return this.http.get(url)
	    .toPromise()
	    .then(response => response.json().data as User)
	    .catch(this.handleError);
	}

	delete(id: number): Promise<void> {
		const url = `${this.personsUrl}/${id}`;
		return this.http.delete(url, {headers: this.headers})
			.toPromise()
			.then(() => null)
			.catch(this.handleError);
	}

	create(name: string, lastName: string): Promise<User> {
		console.log('se agrega a', name, lastName);
		return this.http
			.post(this.personsUrl, JSON.stringify({name: name}), {headers: this.headers})
			.toPromise()
			.then(res => res.json().data as User)
			.catch(this.handleError);
	}

	update(person: User): Promise<User> {
		const url = `${this.personsUrl}/${person.id}`;
		return this.http
			.put(url, JSON.stringify(person), {headers: this.headers})
			.toPromise()
			.then(() => person)
			.catch(this.handleError);
	}

	getProducts(): Promise<Product[]> {
		return this.http.get(this.productsUrl)
			.toPromise()
			.then(response => response.json().data as Product[])
			.catch(this.handleError);
	}

	private handleError(error:any): Promise<any> {
		console.log("Ocurrio un error", error); // for demo purposes only
		return Promise.reject(error.message || error);
	}

}
