import type { APIContext, MiddlewareNext } from "astro";
import { defineMiddleware } from "astro/middleware";
import { posthogClient } from "../services/posthog";

export const posthogMiddleware = defineMiddleware(async (context: APIContext, next: MiddlewareNext) => {
    let posthog = posthogClient();

    context.locals.posthog = posthog;

    console.log("posthogMiddleware", "calling next");
    const response = await next();

    console.log("posthogMiddleware", "next finished");

    await posthog.shutdown();

    console.log("post hog sutdown");

    return response;
});