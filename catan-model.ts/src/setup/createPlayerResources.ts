import type ResourcesSet from "../model/ResourcesSet";
import ResourceType from "../model/ResourceType";

export default function createPlayerResources(): ResourcesSet {
	return {
		[ResourceType.Brick]: 0,
		[ResourceType.Wood]: 0,
		[ResourceType.Sheep]: 0,
		[ResourceType.Wheat]: 0,
		[ResourceType.Ore]: 0,
	};
}
