import { assert, describe, it } from "vitest";
import ResourceType from "../../../src/model/ResourceType";
import {
	DEFAULT_CHANGE_RATE,
	SPECIFIC_CHANGE_RATE,
	WILDCARD_CHANGE_RATE,
} from "../../../src/model/Rules";
import { getChangeRate } from "../../../src/model/TradeCentersSet";
import { WILDCARD } from "../../../src/model/TradeCenterType";
import createPlayerTradeCenters from "../../../src/setup/createPlayerTradeCenters";

describe("getChangeRate", () => {
	it("With no trade centers", () => {
		// Given
		const tradeCenteresSet = createPlayerTradeCenters();

		// When
		const changeRate = getChangeRate(tradeCenteresSet, ResourceType.Brick);

		// Then
		assert.strictEqual(changeRate, DEFAULT_CHANGE_RATE);
	});
	it("With wildcard", () => {
		// Given
		const tradeCenteresSet = createPlayerTradeCenters();
		tradeCenteresSet[WILDCARD] = true;

		// When
		const changeRate = getChangeRate(tradeCenteresSet, ResourceType.Brick);

		// Then
		assert.strictEqual(changeRate, WILDCARD_CHANGE_RATE);
	});
	it("With specific resource", () => {
		// Given
		const tradeCenteresSet = createPlayerTradeCenters();
		tradeCenteresSet[ResourceType.Brick] = true;

		// When
		const changeRate = getChangeRate(tradeCenteresSet, ResourceType.Brick);

		// Then
		assert.strictEqual(changeRate, SPECIFIC_CHANGE_RATE);
	});
	it("With different resource and no wildcard", () => {
		// Given
		const tradeCenteresSet = createPlayerTradeCenters();
		tradeCenteresSet[ResourceType.Ore] = true;

		// When
		const changeRate = getChangeRate(tradeCenteresSet, ResourceType.Brick);

		// Then
		assert.strictEqual(changeRate, DEFAULT_CHANGE_RATE);
	});
	it("With different resource and wildcard", () => {
		// Given
		const tradeCenteresSet = createPlayerTradeCenters();
		tradeCenteresSet[ResourceType.Ore] = true;
		tradeCenteresSet[WILDCARD] = true;

		// When
		const changeRate = getChangeRate(tradeCenteresSet, ResourceType.Brick);

		// Then
		assert.strictEqual(changeRate, WILDCARD_CHANGE_RATE);
	});
});
