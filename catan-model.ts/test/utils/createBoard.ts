import type { Board } from "../../src/model/Board";

export default function createBoard(): Board {
	return {
		terrains: new Map(),
		docks: new Map(),
		towns: new Map(),
		roads: new Map(),
		robberPosition: [0, 0, 0],
	};
}
