import { assert, describe, it } from "vitest";
import ResourceType from "../../../src/model/ResourceType";
import {
	DEFAULT_CHANGE_RATE,
	SPECIFIC_CHANGE_RATE,
	WILDCARD_CHANGE_RATE,
} from "../../../src/model/Rules";
import type TradeCentersSet from "../../../src/model/TradeCentersSet";
import { getChangeRate } from "../../../src/model/TradeCentersSet";
import { WILDCARD } from "../../../src/model/TradeCenterType";

describe("getChangeRate", () => {
	it("With no trade centers", () => {
		// Given
		const tradeCenteresSet = createTradeCentersSet();

		// When
		const changeRate = getChangeRate(tradeCenteresSet, ResourceType.Brick);

		// Then
		assert.strictEqual(changeRate, DEFAULT_CHANGE_RATE);
	});
	it("With wildcard", () => {
		// Given
		const tradeCenteresSet = createTradeCentersSet();
		tradeCenteresSet[WILDCARD] = true;

		// When
		const changeRate = getChangeRate(tradeCenteresSet, ResourceType.Brick);

		// Then
		assert.strictEqual(changeRate, WILDCARD_CHANGE_RATE);
	});
	it("With specific resource", () => {
		// Given
		const tradeCenteresSet = createTradeCentersSet();
		tradeCenteresSet[ResourceType.Brick] = true;

		// When
		const changeRate = getChangeRate(tradeCenteresSet, ResourceType.Brick);

		// Then
		assert.strictEqual(changeRate, SPECIFIC_CHANGE_RATE);
	});
	it("With different resource and no wildcard", () => {
		// Given
		const tradeCenteresSet = createTradeCentersSet();
		tradeCenteresSet[ResourceType.Ore] = true;

		// When
		const changeRate = getChangeRate(tradeCenteresSet, ResourceType.Brick);

		// Then
		assert.strictEqual(changeRate, DEFAULT_CHANGE_RATE);
	});
	it("With different resource and wildcard", () => {
		// Given
		const tradeCenteresSet = createTradeCentersSet();
		tradeCenteresSet[ResourceType.Ore] = true;
		tradeCenteresSet[WILDCARD] = true;

		// When
		const changeRate = getChangeRate(tradeCenteresSet, ResourceType.Brick);

		// Then
		assert.strictEqual(changeRate, WILDCARD_CHANGE_RATE);
	});
});

function createTradeCentersSet(): TradeCentersSet {
	return {
		[ResourceType.Brick]: false,
		[ResourceType.Wood]: false,
		[ResourceType.Sheep]: false,
		[ResourceType.Wheat]: false,
		[ResourceType.Ore]: false,
		[WILDCARD]: false,
	};
}
