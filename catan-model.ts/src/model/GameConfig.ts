type GameConfig = {
	randomColors: boolean;
	randomPorts: boolean;
	randomTiles: boolean;
	fixedStartPositions: boolean;
};

export const BEGINNER_GAME_CONFIG: GameConfig = {
	randomColors: false,
	randomPorts: false,
	randomTiles: false,
	fixedStartPositions: true,
};

export type { GameConfig as default };
