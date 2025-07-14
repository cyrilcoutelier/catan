import type { DockType } from "./Dock";
import type { TerrainTriggerValue, TerrainType } from "./Terrain";
import type { Position } from "./Position";
import DevelopmentCardType from "./DevelopmentCardType";

export const CELL_DISTRIBUTION: Record<TerrainType, number> = {
	desert: 1,
	hill: 3,
	forest: 4,
	pasture: 4,
	field: 4,
	mountain: 3,
} as const;

export const DICE_TOKEN_DISTRIBUTION: Record<TerrainTriggerValue, number> = {
	2: 1,
	3: 2,
	4: 2,
	5: 2,
	6: 2,
	8: 2,
	9: 2,
	10: 2,
	11: 2,
	12: 1,
} as const;

export const DOCK_DISTRIBUTION: Record<DockType, number> = {
	wood: 1,
	brick: 1,
	wool: 1,
	grain: 1,
	ore: 1,
	generic: 3,
} as const;

export const DEVELOPMENT_CARD_DISTRIBUTION: Record<DevelopmentCardType, number> = {
	[DevelopmentCardType.RoadBuilding]: 2,
	[DevelopmentCardType.YearOfPlenty]: 2,
	[DevelopmentCardType.Monopoly]: 2,
	[DevelopmentCardType.Knight]: 14,
	[DevelopmentCardType.VictoryPoint]: 5,
};

export const START_NB_COLONIES = 5;
export const START_NB_CITIES = 4;
export const START_NB_ROADS = 15;

export const DOCK_LOCATIONS: Position[] = [];
