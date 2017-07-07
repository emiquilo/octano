import { Component , OnInit } from '@angular/core';

import { User } from './model';
import { PersonService } from './person.service';


@Component({
	selector: 'create-user',
	templateUrl: './create-user.component.html',
})

export class CreateUserComponent implements OnInit {
	persons: User[] = [];
	showCreateUserModal: boolean = false;

	constructor(private personService: PersonService){}

	ngOnInit(): void{
		this.personService.getPersons()
		.then(persons => this.persons = persons);
	}

	deleteModal(){
		this.showCreateUserModal = false;
	}

	add(name: string, lastName: string): void {
		name = name.trim();
		lastName = lastName.trim();

		if (!name && !lastName) { return; }

		this.personService.create(name, lastName)
		.then(person => {
			console.log('usuario creado correctamente');
			this.showCreateUserModal = false;
		});
	}
}
