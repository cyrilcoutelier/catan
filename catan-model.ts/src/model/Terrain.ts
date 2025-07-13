import type { TwoDiceValue } from "./Dice";
import type { Position } from "./Position";

export type TerrainTriggerValue = Exclude<TwoDiceValue, 7>;

export type BaseTerrain = {
	position: Position;
	type: string;
	resource: string | null;
	triggerValue: TerrainTriggerValue;
};

export type ForestTerrain = BaseTerrain & {
	type: "forest";
	resource: "wood";
};

export type PastureTerrain = BaseTerrain & {
	type: "pasture";
	resource: "wool";
};

export type FieldTerrain = BaseTerrain & {
	type: "field";
	resource: "grain";
};

export type MountainTerrain = BaseTerrain & {
	type: "mountain";
	resource: "ore";
};

export type DesertTerrain = BaseTerrain & {
	type: "desert";
	resource: null;
};

export type HillTerrain = BaseTerrain & {
	type: "hill";
	resource: "brick";
};

export type Terrain =
	| ForestTerrain
	| PastureTerrain
	| FieldTerrain
	| MountainTerrain
	| DesertTerrain
	| HillTerrain;

export type TerrainType = Terrain["type"];
export type ResourceType = NonNullable<Terrain["resource"]>;
