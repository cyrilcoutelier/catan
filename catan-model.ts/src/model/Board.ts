import type { Dock } from "./Dock";
import type { Position } from "./Position";
import type { Road } from "./Road";
import type { Terrain } from "./Terrain";
import type { Town } from "./Town";

export type Board = {
	terrains: Terrain[];
	docks: Dock[];
	towns: Town[];
	roads: Road[];
	robberPosition: Position;
};
