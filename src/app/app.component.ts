import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
		<div class="eva-3-container">
			<div class="header">
				<h1>
					<a routerLink="/">
						<span>{{title}}</span>
						<span class="text">mecanica integral de motos</span>
						<span class="logo"></span>
					</a>
				</h1>

				<nav class="eva-3-sub-nav -first">
					<div class="sub-nav-container">
						<div class="sub-nav-items-container">
							<li class="sub-nav-item">
								<a routerLink="/clientes" routerLinkActive="active">
									<label class="sub-nav-label -md">Clientes</label>
								</a>
							</li>
							<!-- TODO -->
							<!--<li class="sub-nav-item">
								<a routerLink="/tecnicos" routerLinkActive="active">
									<label class="sub-nav-label -md">Tecnicos</label>
								</a>
							</li>-->

							<li class="sub-nav-item">
								<a routerLink="/dashboard" routerLinkActive="active">
									<label class="sub-nav-label -md">Dashboard</label>
								</a>
							</li>
						</div>
					</div>
				</nav>
			</div>
			<router-outlet></router-outlet>
		</div>
	`,
	styleUrls: ['./app.component.css'],
})

export class AppComponent {
	title = 'ALTO OCTANAJE';
}