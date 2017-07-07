import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from './model';
import { PersonService } from './person.service';

@Component({
	selector: 'products',
	templateUrl: './products.component.html',
})

export class ProductsComponent implements OnInit {
	products: Product[];

	constructor(private personService: PersonService,
	private router: Router) {}

	getProducts(): void {
		this.personService
		.getProducts()
		.then(products => this.products = products);
	}

	ngOnInit(): void {
		this.getProducts();
	}



}
