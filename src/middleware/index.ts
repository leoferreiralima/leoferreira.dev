import { sequence } from "astro/middleware";

import { distinctIdMiddleware } from "./distinct-id";

export const onRequest = sequence(distinctIdMiddleware);