import type DevelopmentCardType from "./DevelopmentCardType";

type Player = {
	id: string;
	name: string;
	color: string;
	resources: {
		wood: number;
		brick: number;
		sheep: number;
		wheat: number;
		ore: number;
	};
	nextDevelopmentCard: null | DevelopmentCardType;
	developmentCards: {
		knight: number;
		victoryPoint: number;
		roadBuilding: number;
		yearOfPlenty: number;
		monopoly: number;
	};
	bank: {
		settlements: number;
		cities: number;
		roads: number;
	};
	tradeCenters: {
		wood: boolean;
		brick: boolean;
		sheep: boolean;
		wheat: boolean;
		ore: boolean;
		generic: boolean;
	};
	longestRoad: number;
	hasLongestRoad: boolean;
	armySize: number;
	hasLargestArmy: boolean;
	victoryPoints: number;
};

export type { Player as default };
