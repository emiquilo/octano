import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  FormBuilder,
  FormGroup
} from '@angular/forms';

@Component({
	selector: 'form-signin',
	templateUrl: './form-signin.component.html',
})

export class FormSignInComponent implements OnInit {
  loginForm: FormGroup;
  public isLogged: boolean;


  constructor( fb: FormBuilder ){
		this.isLogged = false;
    this.loginForm = fb.group({
      'user' : [],
      'pass' : []
    });
	}

  ngOnInit(): void {
    console.log('Estado login: ' + this.isLogged);
  }

	onSubmit(value): void {

    console.log('valores \n: ', value );

    if(value.user == "test" && value.pass == "test"){
			this.isLogged = true;
      console.log('Estado login: ' + this.isLogged);
		}
	}

	logOut(){
		this.isLogged = false;
	}
}
