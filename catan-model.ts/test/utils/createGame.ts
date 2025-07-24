import Game from "../../src/model/Game";
import type Player from "../../src/model/Player";
import PlayerTurn from "../../src/model/PlayerTurn";
import createCardsBank from "../../src/setup/createCardsBank";
import createBoard from "./createBoard";
import createPlayer from "./createPlayer";

const NB_PLAYERS = 4;

export default function createGame(): Game {
	const players = createPlayers(NB_PLAYERS);
	const board = createBoard();
	const bank = createCardsBank();
	const turns = new PlayerTurn(players.map((player) => player.id));

	const game = new Game({
		players: new Map(players.map((player) => [player.id, player])),
		board,
		turn: turns,
		bank,
	});
	return game;
}

function createPlayers(nbPlayers: number): Player[] {
	const players = [];
	for (let playerIdx = 0; playerIdx < nbPlayers; playerIdx++) {
		players.push(createPlayer());
	}
	return players;
}
