import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  BehaviorSubject }    from 'rxjs/BehaviorSubject';

import { User } from './model';
import { Moto } from './model';
import { PersonService } from './person.service';

@Component({
	selector: 'my-persons',
	templateUrl: './persons.component.html',
})

export class PersonsComponent implements OnInit {
	persons: User[];
	selectedPerson: User;

	constructor(
		private personService: PersonService,
		private router: Router) {

		}

	ngOnInit(): void {
		this.personService.personsObs.subscribe(newPersons => {
			this.persons = newPersons;
		});
	}

	gotoDetail(index: number): void {
		this.router.navigate(['/detalle', index]);
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
