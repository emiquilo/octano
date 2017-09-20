import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CliComponent } from './octano-cli.component';
import { PersonsComponent } from './persons.component';
import { PersonDetailComponent } from './person-detail.component';

const routes: Routes = [
	{ path: '', redirectTo: '/', pathMatch: 'full' },
	{ path: '',  component: CliComponent },
	{ path: 'clientes',     component: PersonsComponent },
	{ path: 'detalle/:id', component: PersonDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
