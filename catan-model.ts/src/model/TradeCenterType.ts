import type ResourceType from "./ResourceType";

export const WILDCARD = "wildcard" as const;

type TradeCenterType = ResourceType | typeof WILDCARD;

export type { TradeCenterType as default };
