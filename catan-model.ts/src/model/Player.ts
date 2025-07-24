import type ConstructionsBank from "./ConstructionsBank";
import type DevelopmentCardsSet from "./DevelopmentCardsSet";
import type DevelopmentCardType from "./DevelopmentCardType";
import type PlayerConstructions from "./PlayerConstructions";
import type ResourcesSet from "./ResourcesSet";
import type TradeCentersSet from "./TradeCentersSet";

const PlayerId = {
	Red: "Red",
	Blue: "Blue",
	Green: "Green",
	Yellow: "Yellow",
} as const;

export type PlayerId = (typeof PlayerId)[keyof typeof PlayerId];

type Prettify<T> = {
	[K in keyof T]: T[K];
} & {};

type Player = Prettify<{
	id: string;
	name: string;
	color: string | null;
	resources: ResourcesSet;
	nextDevelopmentCard: DevelopmentCardType | null;
	developmentCards: DevelopmentCardsSet;
	constructionsBank: ConstructionsBank;
	ownedConstructions: PlayerConstructions;
	tradeCenters: TradeCentersSet;
	longestRoad: number;
	hasLongestRoad: boolean;
	armySize: number;
	hasLargestArmy: boolean;
	victoryPoints: number;
}>;

export type { Player as default };
