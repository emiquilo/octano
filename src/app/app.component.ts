import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
		<nav class="header navbar navbar-expand-lg navbar-dark bg-dark navbar navbar-toggleable-md">
			<button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<a class="navbar-brand" href="/">
			<span class="icon-fire"></span>
				<span>Alto Octanaje</span>
				<span class="navbar-text">mecanica integral de motos</span>
			</a>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<create-user></create-user>
			</div>
		</nav>
		<router-outlet></router-outlet>
	`
})

export class AppComponent {
	title = 'ALTO OCTANAJE';
}
