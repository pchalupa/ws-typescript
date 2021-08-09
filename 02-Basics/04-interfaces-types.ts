type GameType = 'RPG' | 'FPS';

interface User {
	name: string;
	age: number;
}

interface Game {
	name: string;
	type: GameType;
}

interface Player extends User {
	games: Game[];
}

class Judge implements User {
	name: string;
	age: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}
}
