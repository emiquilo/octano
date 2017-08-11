import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { PersonsComponent } from './persons.component';
import { PersonDetailComponent } from './person-detail.component';

const routes: Routes = [
	{ path: '', redirectTo: '/clientes', pathMatch: 'full' },
	{ path: 'dashboard',  component: DashboardComponent },
	{ path: 'detalle/:id', component: PersonDetailComponent },
	{ path: 'clientes',     component: PersonsComponent },
	{ path: 'tecnicos',     component: PersonsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
