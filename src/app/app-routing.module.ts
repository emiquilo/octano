import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormSignInComponent } from './form-signin.component';
import { CliComponent } from './octano-cli.component';
import { PersonsComponent } from './persons.component';
import { PersonDetailComponent } from './person-detail.component';

const routes: Routes = [
	{ path: '', redirectTo: '/clientes', pathMatch: 'full' },
	{ path: 'home',  component: CliComponent },
	{ path: 'login',     component: FormSignInComponent },
	{ path: 'clientes',     component: PersonsComponent },
	{ path: 'detalle/:id', component: PersonDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
