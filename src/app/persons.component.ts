import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Person } from './person';
import { Moto } from './person';
import { PersonService } from './person.service';

@Component({
	selector: 'my-persons',
	templateUrl: './persons.component.html',
})

export class PersonsComponent implements OnInit { 
	persons: Person[];
	selectedPerson: Person;

	constructor(
		private personService: PersonService,
		private router: Router) {}

	getPersons(): void {
		this.personService
		.getPersons()
		.then(persons => this.persons = persons);
	}

	add(name: string): void {
		name = name.trim();

		if (!name) { return; }
		
		this.personService.create(name)
		.then(person => {
			this.persons.push(person);
			this.selectedPerson = null;
		});
	}

	delete(person: Person): void {
		this.personService
		  .delete(person.id)
		  .then(() => {
		    this.persons = this.persons.filter(h => h !== person);
		    if (this.selectedPerson === person) { this.selectedPerson = null; }
		  });
	}

	ngOnInit(): void {
		this.getPersons();
	}

	onSelect(person: Person): void {
		this.selectedPerson = person;
	}

	gotoDetail(): void {
		this.router.navigate(['/detalle', this.selectedPerson.id]);
	}

	getMotorbikeServices(bike: Moto): number {
		if( !bike.serviceHistory ){
			return 0;
		}

		var services: number = 0;
		let types: string[] = Object.keys(bike.serviceHistory);
		types.forEach(type => {
			services += bike.serviceHistory[type].length;
		});
		return services;

	}
}