const DevelopmentCardType = {
	Knight: "Knight",
	VictoryPoint: "VictoryPoint",
	RoadBuilding: "RoadBuilding",
	YearOfPlenty: "YearOfPlenty",
	Monopoly: "Monopoly",
} as const;

type DevelopmentCardType =
	(typeof DevelopmentCardType)[keyof typeof DevelopmentCardType];

export default DevelopmentCardType;
