import type DevelopmentCardType from "./DevelopmentCardType";
import type ResourcesSet from "./ResourcesSet";
import type TradeCentersSet from "./TradeCentersSet";

type Prettify<T> = {
	[K in keyof T]: T[K];
} & {};

type PLayerNextDevelopmentCard = Record<DevelopmentCardType, number>;

type Player = Prettify<{
	id: string;
	name: string;
	color: string;
	resources: ResourcesSet;
	nextDevelopmentCard: DevelopmentCardType;
	developmentCards: PLayerNextDevelopmentCard;
	bank: {
		settlements: number;
		cities: number;
		roads: number;
	};
	tradeCenters: TradeCentersSet;
	longestRoad: number;
	hasLongestRoad: boolean;
	victoryPoints: number;
}>;

export type { Player as default };
