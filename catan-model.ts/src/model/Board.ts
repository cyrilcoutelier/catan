import type { Dock } from "./Dock";
import type { PlayerId } from "./Player";
import type { Position } from "./Position";
import type TerrainType from "./Terrain";
import type { TerrainTriggerValue } from "./Terrain";
import type { Town } from "./Town";

export type Board = {
	terrains: Map<
		Position,
		{
			type: TerrainType;
			triggerValue: TerrainTriggerValue;
		}
	>;
	docks: Map<[Position, Position], Dock>;
	towns: Map<[Position, Position, Position], Town>;
	roads: Map<[Position, Position], PlayerId>;
	robberPosition: Position;
};
