import type { Position } from "./Position";
import type { ResourceType } from "./Terrain";

export type DockType = ResourceType | "generic";
export type Dock = {
	type: DockType;
	position: Position;
	portRation: number;
};
