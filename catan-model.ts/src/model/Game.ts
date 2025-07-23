import type { Board } from "./Board";
import type CardsBank from "./CardsBank";
import type Player from "./Player";
import type PlayerTurn from "./PlayerTurn";

export default class Game {
	players: Map<string, Player>;
	board: Board;
	turn: PlayerTurn;
	bank: CardsBank;

	constructor(opts: {
		players: Map<string, Player>;
		board: Board;
		turn: PlayerTurn;
		bank: CardsBank;
	}) {
		this.players = opts.players;
		this.board = opts.board;
		this.turn = opts.turn;
		this.bank = opts.bank;
	}
}
