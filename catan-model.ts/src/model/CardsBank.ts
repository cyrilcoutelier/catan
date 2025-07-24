import type DevelopmentCardType from "./DevelopmentCardType";
import type ResourcesSet from "./ResourcesSet";

type CardsBank = {
	resources: ResourcesSet;
	developmentCards: DevelopmentCardType[];
};

export type { CardsBank as default };
