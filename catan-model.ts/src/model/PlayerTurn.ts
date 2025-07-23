export default class PlayerTurn {
	playersIds: string[];
	currentPlayerIndex: number;

	constructor(playersIds: string[]) {
		this.playersIds = playersIds;
		this.currentPlayerIndex = 0;
	}

	getCurrentPlayerId(): string {
		return this.playersIds[this.currentPlayerIndex];
	}

	finishTurn(): void {
		this.currentPlayerIndex =
			(this.currentPlayerIndex + 1) % this.playersIds.length;
	}
}
