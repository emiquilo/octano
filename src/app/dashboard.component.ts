import { Component, OnInit } from '@angular/core';

import { User } from './model';
import { PersonService } from './person.service';


@Component({
	selector: 'dashboard',
	templateUrl: './dashboard.component.html',
})

export class DashboardComponent implements OnInit {
	persons: User[] = [];

	constructor(private personService: PersonService){}

	ngOnInit(): void{
		this.personService.getPersons()
		.then(persons => this.persons = persons);
	}
}
