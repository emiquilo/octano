import { Component , OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup
} from '@angular/forms';

import { User } from './model';
import { PersonService } from './person.service';


@Component({
	selector: 'create-user',
	templateUrl: './create-user.component.html',
})

export class CreateUserComponent implements OnInit {
	userForm: FormGroup;
	persons: User[] = [];
	showCreateUserModal: boolean = false;

	constructor(private personService: PersonService, fb: FormBuilder){
		this.userForm = fb.group({
			'name': [],
			'phone':[],
			'address': []
		});
	}

	ngOnInit(): void{
		this.personService.getPersons()
		.then(persons => this.persons = persons);
	}

	deleteModal(){
		this.showCreateUserModal = false;
	}

	onSubmit(value:string ): void {
		console.log("se manda valor ", value);
		this.personService.create( value );
	}
}
