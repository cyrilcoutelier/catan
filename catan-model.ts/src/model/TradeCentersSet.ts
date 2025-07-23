import type ResourceType from "./ResourceType";
import type TradeCenterType from "./TradeCenterType";
import { WILDCARD } from "./TradeCenterType";

type TradeCentersSet = Record<TradeCenterType, boolean>;

export type { TradeCentersSet as default };

export function getChangeRate(
	tradeCenteresSet: TradeCentersSet,
	resourceType: ResourceType,
) {
	if (tradeCenteresSet[resourceType]) {
		return 2;
	}
	if (tradeCenteresSet[WILDCARD]) {
		return 3;
	}
	return 4;
}
