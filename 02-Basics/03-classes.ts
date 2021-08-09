class Animal {
	private legs = 0;
	protected name: string;
	protected age: number;
	public image: string;

	constructor({ name, age }: { name: string; age: number }) {
		this.name = name;
		this.age = age;
		this.image = this.searchImage(name);
	}

	private searchImage(name: string) {
		return `${name}`;
	}

	protected setLegs(legs: number) {
		this.legs = legs;
	}

	call() {
		return `Hey ${this.name}!`;
	}
}

class Cat extends Animal {
	isEvil = true;

	constructor({ name, age }: { name: string; age: number }) {
		super({ name, age });
		this.setLegs(4);
	}
}

const bob = new Cat({ name: 'Bob', age: 1 });

bob.call();
// bob.setLegs(4);
// bob.searchImage('Bob')
