import ConstructionType from "../model/ConstructionType";
import type PlayerConstructions from "../model/PlayerConstructions";

export default function createPlayerOwnedConstructions(): PlayerConstructions {
	return {
		[ConstructionType.Settlement]: 0,
		[ConstructionType.City]: 0,
	};
}
