const ResourceType = {
	Wood: "wood",
	Brick: "brick",
	Sheep: "sheep",
	Wheat: "wheat",
	Ore: "ore",
} as const;

type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

export default ResourceType;
