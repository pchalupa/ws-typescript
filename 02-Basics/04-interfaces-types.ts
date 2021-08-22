interface User {
	name: string;
	age: number;
}

type GameType = 'RPG' | 'FPS';

interface Game {
	name: string;
	type: GameType;
}

interface Player extends User {
	games: Game[];
}
