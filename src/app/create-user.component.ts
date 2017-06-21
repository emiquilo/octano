import { Component, Input , OnInit, Output, EventEmitter } from '@angular/core';

import { Person } from './person';
import { PersonService } from './person.service';


@Component({
	selector: 'create-user',
	templateUrl: './create-user.component.html',
})

export class CreateUserComponent implements OnInit {
	persons: Person[] = [];
	@Input() showCreateUserModal: Boolean;
	@Output() onComplete = new EventEmitter<any>();

	constructor(private personService: PersonService){}

	ngOnInit(): void{
		this.personService.getPersons()
		.then(persons => this.persons = persons);
	}

	deleteModal(){
		this.showCreateUserModal = false;
		console.log("la propiedad que concatena la clase para el modal tiene valor falso | " + + this.showCreateUserModal);
		return this.showCreateUserModal;
	}

	add(name: string, lastName: string): void {
		name = name.trim();
		lastName = lastName.trim();

		if (!name && !lastName) { return; }
		
		this.personService.create(name, lastName)
		.then(person => {
			this.onComplete.emit(person);
		});
	}
}