import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './model';
import { Moto } from './model';
import { PersonService } from './person.service';

@Component({
	selector: 'octano-cli',
	templateUrl: './octano-cli.component.html',
})

export class CliComponent implements OnInit {
	persons: User[];
	selectedPerson: User;

	constructor(
		private personService: PersonService,
		private router: Router) {}
	
}
