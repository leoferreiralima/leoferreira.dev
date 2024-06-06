import { sequence } from "astro/middleware";

import { distinctIdMiddleware } from "./distinct-id";
import { posthogMiddleware } from "./posthog";

export const onRequest = sequence(distinctIdMiddleware, posthogMiddleware);