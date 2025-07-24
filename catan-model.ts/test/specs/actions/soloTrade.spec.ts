import assert from "assert";
import { describe, it } from "vitest";
import { run } from "../../../src/actions/soloTrade";
import ErrorCode from "../../../src/error/ErrorCode";
import GameError from "../../../src/error/GameError";
import ResourceType from "../../../src/model/ResourceType";
import { getChangeRate } from "../../../src/model/TradeCentersSet";
import { WILDCARD } from "../../../src/model/TradeCenterType";
import createGame from "../../utils/createGame";

describe("soloTrade", () => {
	describe("Failing", () => {
		it("Invalid player id", () => {
			// Given
			const game = createGame();
			const playerId = "invalid player id";

			assert.throws(
				() => {
					// When
					run(game, {
						dryRun: false,
						playerId,
						givenResourceType: ResourceType.Wood,
						receivedResourceType: ResourceType.Brick,
					});
				},
				(err) => {
					// Then
					assert.ok(err instanceof GameError);
					assert.strictEqual(err.code, ErrorCode.INVALID_PLAYER_ID);
					assert.deepStrictEqual(err.payload, { playerId });
					return true;
				},
			);
		});
		it("Not the player turn", () => {
			// Given
			const game = createGame();

			assert.throws(
				() => {
					// When
					run(game, {
						dryRun: false,
						playerId: game.turn.playersIds[1],
						givenResourceType: ResourceType.Wood,
						receivedResourceType: ResourceType.Brick,
					});
				},
				(err) => {
					// Then
					assert.ok(err instanceof GameError);
					assert.strictEqual(err.code, ErrorCode.NOT_YOUR_TURN);
					return true;
				},
			);
		});
		it("Received and given resources are the same", () => {
			// Given
			const game = createGame();

			assert.throws(
				() => {
					// When
					run(game, {
						dryRun: false,
						playerId: game.turn.playersIds[0],
						givenResourceType: ResourceType.Wood,
						receivedResourceType: ResourceType.Wood,
					});
				},
				(err) => {
					// Then
					assert.ok(err instanceof GameError);
					assert.strictEqual(err.code, ErrorCode.TRADE_SAME_RESOURCE);
					return true;
				},
			);
		});
		it("Resources not available in bank", () => {
			// Given
			const game = createGame();
			const player = game.players.get(game.turn.playersIds[0]);
			if (!player) {
				throw new Error("Player not found");
			}
			const givenResourceType = ResourceType.Wood;
			const receivedResourceType = ResourceType.Brick;
			player.resources[givenResourceType] = 4;
			game.bank.resources[receivedResourceType] = 0;

			assert.throws(
				() => {
					// When
					run(game, {
						dryRun: false,
						playerId: game.turn.playersIds[0],
						givenResourceType,
						receivedResourceType,
					});
				},
				(err) => {
					// Then
					assert.ok(err instanceof GameError);
					assert.strictEqual(err.code, ErrorCode.MISSING_CARD_IN_BANK);
					return true;
				},
			);
		});
		it("Insufficient resources", () => {
			// Given
			const game = createGame();
			const player = game.players.get(game.turn.playersIds[0]);
			if (!player) {
				throw new Error("Player not found");
			}
			const givenResourceType = ResourceType.Wood;
			const receivedResourceType = ResourceType.Brick;
			player.resources[givenResourceType] = 3;

			assert.throws(
				() => {
					// When
					run(game, {
						dryRun: false,
						playerId: game.turn.playersIds[0],
						givenResourceType,
						receivedResourceType,
					});
				},
				(err) => {
					// Then
					assert.ok(err instanceof GameError);
					assert.strictEqual(err.code, ErrorCode.NOT_ENOUGH_RESOURCES);
					return true;
				},
			);
		});
	});
	describe("Success", () => {
		it("Dry run (should not make changes)", () => {
			// Given
			const game = createGame();
			const player = game.players.get(game.turn.playersIds[0]);
			if (!player) {
				throw new Error("Player not found");
			}
			const givenResourceType = ResourceType.Wood;
			const receivedResourceType = ResourceType.Brick;
			player.resources[givenResourceType] = 4;

			const expectedPlayerResources = structuredClone(player.resources);
			const expectedBankResources = structuredClone(game.bank.resources);

			// When
			run(game, {
				dryRun: true,
				playerId: game.turn.playersIds[0],
				givenResourceType,
				receivedResourceType,
			});

			// Then
			assert.deepStrictEqual(player.resources, expectedPlayerResources);
			assert.deepStrictEqual(game.bank.resources, expectedBankResources);
		});
		it("Normal trade", () => {
			// Given
			const game = createGame();
			const player = game.players.get(game.turn.playersIds[0]);
			if (!player) {
				throw new Error("Player not found");
			}
			const givenResourceType = ResourceType.Wood;
			const receivedResourceType = ResourceType.Brick;
			player.resources[givenResourceType] = 10;

			const expectedPlayerResources = structuredClone(player.resources);
			const expectedBankResources = structuredClone(game.bank.resources);

			// When
			run(game, {
				dryRun: false,
				playerId: game.turn.playersIds[0],
				givenResourceType,
				receivedResourceType,
			});

			// Then
			const rate = getChangeRate(player.tradeCenters, givenResourceType);
			expectedPlayerResources[givenResourceType] -= rate;
			expectedPlayerResources[receivedResourceType] += 1;
			expectedBankResources[givenResourceType] += rate;
			expectedBankResources[receivedResourceType] -= 1;
			assert.deepStrictEqual(player.resources, expectedPlayerResources);
			assert.deepStrictEqual(game.bank.resources, expectedBankResources);
		});
		it("Normal trade, just right amount", () => {
			// Given
			const game = createGame();
			const player = game.players.get(game.turn.playersIds[0]);
			if (!player) {
				throw new Error("Player not found");
			}
			const givenResourceType = ResourceType.Wood;
			const receivedResourceType = ResourceType.Brick;
			player.resources[givenResourceType] = 4;

			const expectedPlayerResources = structuredClone(player.resources);
			const expectedBankResources = structuredClone(game.bank.resources);

			// When
			run(game, {
				dryRun: false,
				playerId: game.turn.playersIds[0],
				givenResourceType,
				receivedResourceType,
			});

			// Then
			const rate = getChangeRate(player.tradeCenters, givenResourceType);
			expectedPlayerResources[givenResourceType] -= rate;
			expectedPlayerResources[receivedResourceType] += 1;
			expectedBankResources[givenResourceType] += rate;
			expectedBankResources[receivedResourceType] -= 1;
			assert.deepStrictEqual(player.resources, expectedPlayerResources);
			assert.deepStrictEqual(game.bank.resources, expectedBankResources);
		});
		it("Trade with wildcard rate, just right amount", () => {
			// Given
			const game = createGame();
			const player = game.players.get(game.turn.playersIds[0]);
			if (!player) {
				throw new Error("Player not found");
			}
			const givenResourceType = ResourceType.Wood;
			const receivedResourceType = ResourceType.Brick;
			player.resources[givenResourceType] = 3;
			player.tradeCenters[WILDCARD] = true; // Set wildcard trade center

			const expectedPlayerResources = structuredClone(player.resources);
			const expectedBankResources = structuredClone(game.bank.resources);

			// When
			run(game, {
				dryRun: false,
				playerId: game.turn.playersIds[0],
				givenResourceType,
				receivedResourceType,
			});

			// Then
			const rate = getChangeRate(player.tradeCenters, givenResourceType);
			expectedPlayerResources[givenResourceType] -= rate;
			expectedPlayerResources[receivedResourceType] += 1;
			expectedBankResources[givenResourceType] += rate;
			expectedBankResources[receivedResourceType] -= 1;
			assert.deepStrictEqual(player.resources, expectedPlayerResources);
			assert.deepStrictEqual(game.bank.resources, expectedBankResources);
		});
	});
});
