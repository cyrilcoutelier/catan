import DevelopmentCardType from "../model/DevelopmentCardType";
import { DEVELOPMENT_CARD_DISTRIBUTION } from "../model/InitData";

export default function createDevelopmentCards(): DevelopmentCardType[] {
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
