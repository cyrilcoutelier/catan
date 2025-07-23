import type { TwoDiceValue } from "./Dice";
import type { Position } from "./Position";
import type ResourceType from "./ResourceType";

export type TerrainTriggerValue = Exclude<TwoDiceValue, 7>;

export type BaseTerrain = {
	position: Position;
	type: string;
	resource: ResourceType | null;
	triggerValue: TerrainTriggerValue;
};

export type ForestTerrain = BaseTerrain & {
	type: "forest";
	resource: typeof ResourceType.Wood;
};

export type PastureTerrain = BaseTerrain & {
	type: "pasture";
	resource: typeof ResourceType.Sheep;
};

export type FieldTerrain = BaseTerrain & {
	type: "field";
	resource: typeof ResourceType.Wheat;
};

export type MountainTerrain = BaseTerrain & {
	type: "mountain";
	resource: typeof ResourceType.Ore;
};

export type DesertTerrain = BaseTerrain & {
	type: "desert";
	resource: null;
};

export type HillTerrain = BaseTerrain & {
	type: "hill";
	resource: typeof ResourceType.Brick;
};

export type Terrain =
	| ForestTerrain
	| PastureTerrain
	| FieldTerrain
	| MountainTerrain
	| DesertTerrain
	| HillTerrain;

export type TerrainType = Terrain["type"];
