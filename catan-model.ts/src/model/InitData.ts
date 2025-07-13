import type { DockType } from "./Dock";
import type { TerrainTriggerValue, TerrainType } from "./Terrain";
import type { Position } from "./Position";

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

export const DOCK_LOCATIONS: Position[] = [];
