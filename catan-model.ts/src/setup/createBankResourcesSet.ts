import { NB_RESOURCES_IN_BANK } from "../model/InitData";
import type ResourcesSet from "../model/ResourcesSet";
import ResourceType from "../model/ResourceType";

export default function createBankResourcesSet(): ResourcesSet {
	return {
		[ResourceType.Brick]: NB_RESOURCES_IN_BANK,
		[ResourceType.Wood]: NB_RESOURCES_IN_BANK,
		[ResourceType.Sheep]: NB_RESOURCES_IN_BANK,
		[ResourceType.Wheat]: NB_RESOURCES_IN_BANK,
		[ResourceType.Ore]: NB_RESOURCES_IN_BANK,
	};
}
