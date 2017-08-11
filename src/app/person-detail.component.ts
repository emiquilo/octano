import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { User } from './model';
import { PersonService } from './person.service';


@Component({
	selector: 'person-detail',
	templateUrl: './person-detail.component.html',
})

export class PersonDetailComponent implements OnInit {
	person: User;

	constructor(
		private personService: PersonService,
		private route: ActivatedRoute,
		private location: Location
	){}

	ngOnInit(): void {
		this.route.params
		.switchMap((params: Params) => this.personService.getPersonTemp(+params['id']))
		.subscribe(person => this.person = person);
	}
	save(): void {
		this.personService.update(this.person)
		.then(() => this.goBack());
	}
	goBack(): void {
		this.location.back();
	}
}
