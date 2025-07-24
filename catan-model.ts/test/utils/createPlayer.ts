import type Player from "../../src/model/Player";
import createPlayerConstructionsBank from "../../src/setup/createPlayerConstructionsBank";
import createPlayerDevelopmentCards from "../../src/setup/createPlayerDevelopmentCards";
import createPlayerOwnedConstructions from "../../src/setup/createPlayerOwnedConstructions";
import createPlayerResources from "../../src/setup/createPlayerResources";
import createPlayerTradeCenters from "../../src/setup/createPlayerTradeCenters";
import createUuid from "../../src/utils/createUuid";

export default function createPlayer(): Player {
	return {
		id: createUuid(),
		name: "PlayerName",
		color: null,
		resources: createPlayerResources(),
		nextDevelopmentCard: null,
		developmentCards: createPlayerDevelopmentCards(),
		constructionsBank: createPlayerConstructionsBank(),
		ownedConstructions: createPlayerOwnedConstructions(),
		tradeCenters: createPlayerTradeCenters(),
		longestRoad: 0,
		hasLongestRoad: false,
		armySize: 0,
		hasLargestArmy: false,
		victoryPoints: 0,
	};
}
