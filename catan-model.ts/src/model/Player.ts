import type DevelopmentCardType from "./DevelopmentCardType";
import type { ResourceType } from "./Terrain";

type Prettify<T> = {
	[K in keyof T]: T[K];
} & {};

type PlayerResources = Record<ResourceType, number>;
type PLayerNextDevelopmentCard = Record<DevelopmentCardType, number>;
type PlayerTradeCenters = Record<ResourceType, boolean>;

type Player = Prettify<{
	id: string;
	name: string;
	color: string;
	resources: PlayerResources;
	nextDevelopmentCard: DevelopmentCardType;
	developmentCards: PLayerNextDevelopmentCard;
	bank: {
		settlements: number;
		cities: number;
		roads: number;
	};
	tradeCenters: PlayerTradeCenters;
	longestRoad: number;
	hasLongestRoad: boolean;
	victoryPoints: number;
}>;

export type { Player as default };
