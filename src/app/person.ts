export class Person {
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
