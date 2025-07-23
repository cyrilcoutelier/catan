import DevelopmentCardType from "./DevelopmentCardType";
import {
	DEVELOPMENT_CARD_DISTRIBUTION,
	NB_RESOURCES_IN_BANK,
} from "./InitData";
import type ResourcesSet from "./ResourcesSet";

type CardsBank = {
	resources: ResourcesSet;
	developmentCards: DevelopmentCardType[];
};

export function createInitialCardsBank(): CardsBank {
	const developmentCards = createInitialDevelopmentCards();
	return {
		resources: {
			wood: NB_RESOURCES_IN_BANK,
			brick: NB_RESOURCES_IN_BANK,
			sheep: NB_RESOURCES_IN_BANK,
			wheat: NB_RESOURCES_IN_BANK,
			ore: NB_RESOURCES_IN_BANK,
		},
		developmentCards,
	};
}

function createInitialDevelopmentCards(): DevelopmentCardType[] {
	const cards = [
		...createDevelopementCardsOfType(DevelopmentCardType.RoadBuilding),
		...createDevelopementCardsOfType(DevelopmentCardType.YearOfPlenty),
		...createDevelopementCardsOfType(DevelopmentCardType.Monopoly),
		...createDevelopementCardsOfType(DevelopmentCardType.Knight),
		...createDevelopementCardsOfType(DevelopmentCardType.VictoryPoint),
	];
	shuffleArray(cards);
	return cards;
}

function shuffleArray(array: Array<unknown>) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}

function createDevelopementCardsOfType(
	type: DevelopmentCardType,
): DevelopmentCardType[] {
	return Array(DEVELOPMENT_CARD_DISTRIBUTION[type]).fill(type);
}

export type { CardsBank as default };
