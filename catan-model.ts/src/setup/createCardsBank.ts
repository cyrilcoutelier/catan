import type CardsBank from "../model/CardsBank";
import createBankResourcesSet from "./createBankResourcesSet";
import createDevelopmentCards from "./createDevelopmentCards";

export default function createCardsBank(): CardsBank {
	const resources = createBankResourcesSet();
	const developmentCards = createDevelopmentCards();
	return {
		resources,
		developmentCards,
	};
}
