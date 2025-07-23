const ErrorCode = {
	NOT_YOUR_TURN: "not-your-turn",
	MISSING_CARD_IN_BANK: "missing-card-in-bank",
	INVALID_PLAYER_ID: "invalid-player-id",
	NOT_ENOUGH_RESOURCES: "not-enough-resources",
	TRADE_SAME_RESOURCE: "trade-same-resource",
} as const;

type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode];

export default ErrorCode;
