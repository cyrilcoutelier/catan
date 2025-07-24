const ConstructionType = {
	Settlement: "settlement",
	City: "city",
	Road: "road",
} as const;

type ConstructionType =
	(typeof ConstructionType)[keyof typeof ConstructionType];

export default ConstructionType;
