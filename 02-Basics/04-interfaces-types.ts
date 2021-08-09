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
