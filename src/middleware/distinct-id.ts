import type { APIContext, MiddlewareNext } from "astro";
import { defineMiddleware } from "astro/middleware";
import { v4 as uuidv4 } from 'uuid';

export const distinctIdMiddleware = defineMiddleware((context: APIContext, next: MiddlewareNext) => {
    let distinctId = context.cookies.get('distinct_id')?.value;

    if (!distinctId) {
        distinctId = uuidv4();
    }

    context.locals.distinctId = distinctId;

    context.cookies.set('distinct_id', distinctId, {
        maxAge: 60 * 60 * 24 * 365,
        path: '/'
    });

    next();
});