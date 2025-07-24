import ResourceType from "../model/ResourceType";
import type TradeCentersSet from "../model/TradeCentersSet";
import { WILDCARD } from "../model/TradeCenterType";

export default function createPlayerTradeCenters(): TradeCentersSet {
	return {
		[ResourceType.Brick]: false,
		[ResourceType.Wood]: false,
		[ResourceType.Sheep]: false,
		[ResourceType.Wheat]: false,
		[ResourceType.Ore]: false,
		[WILDCARD]: false,
	};
}
