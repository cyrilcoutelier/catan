import ErrorCode from "../error/ErrorCode";
import GameError from "../error/GameError";
import type Game from "../model/Game";
import type ResourceType from "../model/ResourceType";
import { getChangeRate } from "../model/TradeCentersSet";
import moveResources from "../utils/moveResources";

export type Options = {
	dryRun: boolean;
	playerId: string;
	givenResourceType: ResourceType;
	receivedResourceType: ResourceType;
};

export function run(game: Game, opts: Options) {
	const currentPlayerId = game.turn.getCurrentPlayerId();
	if (currentPlayerId !== opts.playerId) {
		throw new GameError(ErrorCode.NOT_YOUR_TURN);
	}

	if (game.bank.resources[opts.receivedResourceType] <= 0) {
		throw new GameError(ErrorCode.MISSING_CARD_IN_BANK);
	}

	const player = game.players.get(opts.playerId);
	if (!player) {
		throw new GameError(ErrorCode.INVALID_PLAYER_ID, {
			playerId: opts.playerId,
		});
	}
	const changeRate = getChangeRate(player.tradeCenters, opts.givenResourceType);

	if (player.resources[opts.givenResourceType] < changeRate) {
		throw new GameError(ErrorCode.NOT_ENOUGH_RESOURCES);
	}

	if (!opts.dryRun) {
		moveResources({
			from: player.resources,
			to: game.bank.resources,
			amount: {
				[opts.givenResourceType]: changeRate,
			},
		});

		moveResources({
			from: game.bank.resources,
			to: player.resources,
			amount: {
				[opts.receivedResourceType]: 1,
			},
		});
	}
}
