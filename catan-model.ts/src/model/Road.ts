import type { Position } from "./Position";

export type RoadPosition = [Position, Position];

export type Road = {
	position: Position;
	playerId: string;
};
