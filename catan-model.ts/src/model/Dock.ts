import type { Position } from "./Position";
import type TradeCenterType from "./TradeCenterType";

export type Dock = {
	type: TradeCenterType;
	position: Position;
	portRation: number;
};
