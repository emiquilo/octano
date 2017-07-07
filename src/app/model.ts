export class User {
	id: number;
	name: string;
	lastName: string;
	type: string;
	phone: number;
	motorbikes: Moto[];
}

export class Moto {
	brand: string;
	cc: number;
	kms: number;
	year: number;
	serviceHistory: any;
}

export class Product {
	name: string;
	status: boolean;
	type: any;
	price: number;
	amount: number;
}
