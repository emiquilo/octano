/*
con la sentencia import, se invoca el NgModule	de @angular/core
el cual contiene los componentes para la aplicacion
*/
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent }  from './app.component';
import { FormSignInComponent }  from './form-signin.component';
import { CliComponent } from './octano-cli.component';
import { PersonsComponent } from './persons.component';
import { CreateUserComponent } from './create-user.component';
import { ProductsComponent } from './products.component';
import { PersonDetailComponent } from './person-detail.component';
import { PersonService } from './person.service';

/*
Usando la notacion NgModule se declara un modulo y en el parametro array imports
se inyectan los modulos necesarios para la app
*/

@NgModule({
	imports: [
 		BrowserModule,
 		FormsModule,
		ReactiveFormsModule,
 		HttpModule,
  	AppRoutingModule
	],

	declarations: [
		AppComponent,
		FormSignInComponent,
		CliComponent,
		PersonDetailComponent,
		PersonsComponent,
		CreateUserComponent,
		ProductsComponent
	],

	providers: [ PersonService ],

	bootstrap: [ AppComponent ]
})

/*se define la clase AppModule y la exporto para que sea accesible */
export class AppModule { }
