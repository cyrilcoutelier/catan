import type { Position } from "./Position";

export type TownPosition = [Position, Position, Position];
export type Town = {
	playerId: string;
	level: number; // 0 for settlement, 1 for city
};
