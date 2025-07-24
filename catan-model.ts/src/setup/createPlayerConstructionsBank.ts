import type ConstructionsBank from "../model/ConstructionsBank";
import ConstructionType from "../model/ConstructionType";

export default function createPlayerConstructionsBank(): ConstructionsBank {
	return {
		[ConstructionType.Settlement]: 0,
		[ConstructionType.City]: 0,
		[ConstructionType.Road]: 0,
	};
}
