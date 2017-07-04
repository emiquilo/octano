import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
		<nav class="header navbar navbar-toggleable-md navbar-inverse bg-inverse">
			<button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<a class="navbar-brand" href="/">
			<span class="logo"></span>
				<span>Alto Octanaje</span>
				<span class="navbar-text">mecanica integral de motos</span>
			</a>

			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item active">
						<a class="nav-link" routerLink="/clientes" routerLinkActive="active">Clientes <span class="sr-only">(current)</span></a>
					</li>
					<li class="nav-item">
						<a class="nav-link" routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
					</li>
				</ul>

				<person-search></person-search>

			</div>
		</nav>
		<router-outlet></router-outlet>

	`
})

export class AppComponent {
	title = 'ALTO OCTANAJE';
}
