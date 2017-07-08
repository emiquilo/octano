import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './model';

export class InMemoryDataService implements InMemoryDbService  {
	createDb (){
		let users = [
			{
				id: 1,
				name: 'Facundo',
				lastName: 'Quilodran',
				type: 'Tecnico Mecanico',
				phone: '1161448411',
				motorbikes: [{
					brand: 'Zuzuki',
					cc: '125',
					kms:'1000',
					year: '2017',
					serviceHistory: {
						'electrico': ['remplazo bateria', 'remplazo cablecito'],
						'mecanico': ['remplazo motor']
					}
				}]

			},
			{
				id: 2,
				name: 'Emanuel',
				lastName: 'Morcillo',
				type: 'Cliente',
				phone: '1133213806',
				motorbikes: [
					{
						brand: 'Honda Econo',
						cc: '50',
						kms:'1000',
						year: '2017'
					},
					{
						brand: 'Honda Tornado',
						cc: '250',
						kms:'3000',
						year: '2017'
					}
				]

			},
			{
				id: 3,
				name: 'Silvio',
				lastName: 'Vitullo',
				type: 'Cliente',
				phone: '1150619568',
				motorbikes: [{
					brand: 'Yamaha fz',
					cc: '150',
					kms:'1000',
					year: '2015'
				}]

			},
			{
				id: 4,
				name: 'Emilio',
				lastName: 'Quilodran',
				type: 'Tecnico Mecanico',
				phone: '1560300788',
				motorbikes: [{
					brand: 'Honda',
					cc: '190',
					kms:'1000',
					year: '2017'
				}]

			},
			{
				id: 5,
				name: 'Eda',
				lastName: 'Luna',
				type: 'Cliente',
				phone: '12345',
				motorbikes: [{
					brand: 'Zanella',
					cc: '110',
					kms:'3600',
					year: '2015',
					serviceHistory: {
						'electrico': ['remplazo bateria', 'remplazo cablecito'],
						'mecanico': ['remplazo motor']
					}
				}]

			},
			{
				id: 6,
				name: 'Mauro',
				lastName: 'Fernandez',
				type: 'Cliente',
				phone: '1131409062',
				motorbikes: [{
					brand: 'Honda Titan',
					cc: '150',
					kms:'12600',
					year: '2015'
				}]
			}
		];

		let products = [
			{
				name: "Aceite Motul 4t 10w40",
				type: "service",
				price: 100,
				amount: 2
			},
			{
				name: "Lubricante w80",
				type: "service",
				price: 50,
				amount: 5
			}
		];

		return {users , products};
	}
}
