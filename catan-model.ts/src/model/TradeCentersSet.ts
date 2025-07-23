import type ResourceType from "./ResourceType";
import {
	DEFAULT_CHANGE_RATE,
	SPECIFIC_CHANGE_RATE,
	WILDCARD_CHANGE_RATE,
} from "./Rules";
import type TradeCenterType from "./TradeCenterType";
import { WILDCARD } from "./TradeCenterType";

type TradeCentersSet = Record<TradeCenterType, boolean>;

export type { TradeCentersSet as default };

export function getChangeRate(
	tradeCenteresSet: TradeCentersSet,
	resourceType: ResourceType,
) {
	if (tradeCenteresSet[resourceType]) {
		return SPECIFIC_CHANGE_RATE;
	}
	if (tradeCenteresSet[WILDCARD]) {
		return WILDCARD_CHANGE_RATE;
	}
	return DEFAULT_CHANGE_RATE;
}
