class Animal {
	protected name: string;
	protected age: number;

	constructor({ name, age }: { name: string; age: number }) {
		this.name = name;
		this.age = age;
	}

	// TODO: Method that can be inhereted
}

class Cat extends Animal {
	isEvil = true;

	constructor({ name, age }: { name: string; age: number }) {
		super({ name, age });
	}
}
