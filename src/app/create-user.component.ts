import { Component, Input , OnInit, Output, EventEmitter } from '@angular/core';

import { Person } from './person';
import { PersonService } from './person.service';


@Component({
	selector: 'create-user',
	templateUrl: './create-user.component.html',
})

export class CreateUserComponent implements OnInit {
	persons: Person[] = [];
	@Input() showCreateUserModal = false;
	@Output() onComplete = new EventEmitter<any>();

	constructor(private personService: PersonService){}

	ngOnInit(): void{
		this.personService.getPersons()
		.then(persons => this.persons = persons);
	}

	add(name: string): void {
		name = name.trim();

		if (!name) { return; }
		
		this.personService.create(name)
		.then(person => {
			this.onComplete.emit(person);
		});
	}
}