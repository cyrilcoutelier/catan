export type OneDieValue = 1 | 2 | 3 | 4 | 5 | 6;
export type TwoDiceValue = 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export function rollDie(): OneDieValue {
	return (Math.floor(Math.random() * 6) + 1) as OneDieValue;
}

export function rollDice(): TwoDiceValue {
	const die1 = rollDie();
	const die2 = rollDie();
	return (die1 + die2) as TwoDiceValue;
}
