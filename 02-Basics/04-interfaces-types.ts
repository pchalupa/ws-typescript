interface User {
	name: string;
	age: number;
}

type GameType = 'RPG' | 'FPS'; // Union

interface Game {
	name: string;
	type: GameType;
}

interface Player extends User {
	games: Game[];
}

const Bob: Player = { name: 'Bob', age: 12, games: [{ name: 'Diablo', type: 'RPG' }] };
