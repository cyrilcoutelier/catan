import type { CellPosition } from "./CellPosition";

export const CellType = [
	"desert",
	"brick",
	"wood",
	"sheep",
	"wheat",
	"ore",
	"water",
	"dock",
] as const;

export type Cell = {
	position: CellPosition;
	type: (typeof CellType)[number];
	number?: number; // Only for resource cells, not desert or water
	hasRobber?: boolean; // Only for desert cell
	hasPort?: boolean; // Only for dock cell
	portType?: string; // Only for dock cell, e.g., 'brick', 'wood', etc.
	portRatio?: number; // Only for dock cell, e.g., 2:1 or 3:1
};

export type Board = {
	radius: number;
	cells: Cell[];
};
