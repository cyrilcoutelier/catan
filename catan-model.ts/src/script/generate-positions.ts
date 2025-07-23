import type { Position } from "../model/Position";

function generateTerrainPositions(radius: number): Position[] {
	const positions: Position[] = [];
	for (let q = -radius; q <= radius; q++) {
		for (
			let s = Math.max(-radius, -q - radius);
			s <= Math.min(radius, -q + radius);
			s++
		) {
			const r = -q - s;
			positions.push([q, s, r]);
		}
	}
	return positions;
}
