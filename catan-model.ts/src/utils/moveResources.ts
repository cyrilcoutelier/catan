import type ResourcesSet from "../model/ResourcesSet";

export default function moveResources(opts: {
	from: ResourcesSet;
	to: ResourcesSet;
	amount: Partial<ResourcesSet>;
}) {
	for (const rawResourceType in opts.amount) {
		const resourceType = rawResourceType as keyof ResourcesSet;
		const resourceAmount = opts.amount[resourceType] as number;
		opts.from[resourceType] -= resourceAmount;
		opts.to[resourceType] += resourceAmount;
	}
}
