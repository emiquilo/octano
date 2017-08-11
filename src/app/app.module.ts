/*
con la sentencia import, se invoca el NgModule	de @angular/core
el cual contiene los componentes para la aplicacion
*/
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent }  from './app.component';
import { DashboardComponent } from './dashboard.component';
import { PersonsComponent } from './persons.component';
import { CreateUserComponent } from './create-user.component';
import { ProductsComponent } from './products.component';
import { PersonDetailComponent } from './person-detail.component';
import { PersonService } from './person.service';
import { PersonSearchComponent } from './person-search.component';

/*
Usando la notacion NgModule se declara un modulo y en el parametro array imports
se inyectan los modulos necesarios para la app
*/

@NgModule({
	imports: [
 		BrowserModule,
 		FormsModule,
 		HttpModule,
  	AppRoutingModule
	],

	declarations: [
		AppComponent,
		DashboardComponent,
		PersonDetailComponent,
		PersonsComponent,
		PersonSearchComponent,
		CreateUserComponent,
		ProductsComponent
	],

	providers: [ PersonService ],

	bootstrap: [ AppComponent ]
})

/*se define la clase AppModule y la exporto para que sea accesible */
export class AppModule { }
