import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

import { User } from './model';
import { Moto } from './model';
import { PersonService } from './person.service';

@Component({
	selector: 'octano-cli',
	templateUrl: './octano-cli.component.html',
})

export class CliComponent implements OnInit {
	persons: User[];
	logs: string[] = [];
	commandInput = new FormControl("");

	constructor(
		private personService: PersonService,
		private router: Router) {}

	inputCommand(command: string) {
    // comandos soportados
		var commands = [
			/cargar-usuario (\w+) (\w+) (\d+)/,
			/eliminar-usuario (\w+) (\w+)/
		];

		// itero por todos los comandos a ver si alguno matchea
		// si, por ejemplo, matchea "cargar-usuario" llamamos a su respectivo handler
	}

	greeting() {
		setTimeout(()=> {this.logs.push(" Hola pescao!")}, 5000);
	}

	ngOnInit(){
		this.greeting();
	}

	shoot(){
		let name = this.commandInput.value;
		this.logs.push(name);
	}

}
