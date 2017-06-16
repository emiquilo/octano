import { Component, OnInit } from '@angular/core';

import { Person } from './person';
import { PersonService } from './person.service';


@Component({
	selector: 'dashboard',
	templateUrl: './dashboard.component.html',
})

export class DashboardComponent implements OnInit {
	persons: Person[] = [];

	constructor(private personService: PersonService){}

	ngOnInit(): void{
		this.personService.getPersons()
		.then(persons => this.persons = persons);
	}
}