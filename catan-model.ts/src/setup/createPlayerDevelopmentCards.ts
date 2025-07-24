import type DevelopmentCardsSet from "../model/DevelopmentCardsSet";
import DevelopmentCardType from "../model/DevelopmentCardType";

export default function createPlayerDevelopmentCards(): DevelopmentCardsSet {
	return {
		[DevelopmentCardType.Knight]: 0,
		[DevelopmentCardType.RoadBuilding]: 0,
		[DevelopmentCardType.Monopoly]: 0,
		[DevelopmentCardType.YearOfPlenty]: 0,
		[DevelopmentCardType.VictoryPoint]: 0,
	};
}
