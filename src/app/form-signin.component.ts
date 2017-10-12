import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';

import {
  FormBuilder,
  FormGroup
} from '@angular/forms';

@Component({
	selector: 'form-signin',
	templateUrl: './form-signin.component.html',
  directives: [AppComponent]
})

export class FormSignInComponent implements OnInit {
  public isLogged: boolean;

  constructor(){
		this.isLogged = false;
	}

  ngOnInit(): void {
    console.log(`Estado login: ` this.isLogged);
  }

	login(usuario, pass){
    let usuario = document.getElementById('inputEmail').value;
    let pass =  document.getElementById('inputPassword').value;

    if(usuario == "test" && pass == "test"){
			this.isLogged = true;
      console.log(`Estado login: ` this.isLogged);
		}
	}

	logOut(){
		this.isLogged = false;
	}
}
