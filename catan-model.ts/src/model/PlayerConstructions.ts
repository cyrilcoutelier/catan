import ConstructionType from "./ConstructionType";

type PlayerConstructions = {
	[ConstructionType.Settlement]: number;
	[ConstructionType.City]: number;
};

export type { PlayerConstructions as default };
