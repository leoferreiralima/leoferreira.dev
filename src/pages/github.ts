import type { APIRoute } from 'astro';
import { posthogClient } from "../services/post-hog";

export const GET: APIRoute = async ({ request, locals, redirect }) => {
    const distinctId = locals.distinctId;
    const posthog = posthogClient(distinctId);

    const url = new URL(request.url);
    const searchParams = url.searchParams;

    const eventProperties = {
        social: 'github',
        $current_url: request.url,
        utm_campaign: searchParams.get("utm_campaign"),
        utm_content: searchParams.get("utm_content"),
        utm_medium: searchParams.get("utm_medium"),
        utm_source: searchParams.get("utm_source"),
        utm_term: searchParams.get("utm_term")
    }

    console.log("Processed social-redirect", eventProperties);

    posthog.capture({
        event: 'social-redirect',
        distinctId,
        properties: eventProperties
    });

    return redirect("https://github.com/leoferreiralima", 308);
}