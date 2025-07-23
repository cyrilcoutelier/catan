import type { TwoDiceValue } from "./Dice";
import ResourceType from "./ResourceType";
export type TerrainTriggerValue = Exclude<TwoDiceValue, 7>;

const TerrainType = {
	Forest: "forest",
	Pasture: "pasture",
	Field: "field",
	Mountain: "mountain",
	Desert: "desert",
	Hill: "hill"
} as const

export const TerrainResource = {
	Forest: ResourceType.Wood,
	Pasture: ResourceType.Sheep,
	Field: ResourceType.Wheat,
	Mountain: ResourceType.Ore,
	Desert: null,
	Hill: ResourceType.Brick,
} as const;

type TerrainType = (typeof TerrainType)[keyof typeof TerrainType];

export default TerrainType;
