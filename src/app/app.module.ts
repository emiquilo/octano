import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { DashboardComponent } from './dashboard.component';
import { PersonsComponent } from './persons.component';
import { CreateUserComponent } from './create-user.component';
import { ProductsComponent } from './products.component';
import { PersonDetailComponent } from './person-detail.component';
import { PersonService } from './person.service';
import { PersonSearchComponent } from './person-search.component';

@NgModule({
	imports: [
 		BrowserModule,
 		FormsModule,
 		HttpModule,
 		InMemoryWebApiModule.forRoot(InMemoryDataService),
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

export class AppModule { }
