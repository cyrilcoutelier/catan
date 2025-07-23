import type ErrorCode from "./ErrorCode";

export default class GameError extends Error {
	code: string;
	payload: Record<string, unknown> | null;

	constructor(code: ErrorCode, payload?: Record<string, unknown>) {
		super(`Game error: ${code}`);
		this.name = "GameError";
		this.code = code;
		this.payload = payload || null;
	}
}
