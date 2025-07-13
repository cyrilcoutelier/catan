type ForestTerrain = {
	type: "forest";
	resource: "wood";
};

type PastureTerrain = {
	type: "pasture";
	resource: "wool";
};

type FieldTerrain = {
	type: "field";
	resource: "grain";
};

type MountainTerrain = {
	type: "mountain";
	resource: "ore";
};

type DesertTerrain = {
	type: "desert";
	resource: null;
};

type HillTerrain = {
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
