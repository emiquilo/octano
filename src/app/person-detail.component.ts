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
		.switchMap((params: Params) => this.personService.getPerson(+params['id']))
		.subscribe(person => this.person = person);
	}

	goBack(): void {
		this.personService.updateModel();
		this.location.back();
	}

	delete(){
		this.personService.delete(this.person.id)
		.then(() => this.goBack());
	}

	hasServices(): boolean {
		var has_service = false;
		this.person.motorbikes.forEach( moto => {
			if(moto.serviceHistory){
				has_service = true;
			}
		} );

		return has_service;
	}

}
