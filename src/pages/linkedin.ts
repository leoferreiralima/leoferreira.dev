import type { APIRoute } from 'astro';
import { postHogClient } from "../services/post-hog";

export const GET: APIRoute = async ({ request, locals, redirect }) => {
    const distinctId = locals.distinctId;
    const posthog = postHogClient(distinctId)

    const url = new URL(request.url);
    const searchParams = url.searchParams;

    posthog.capture({
        event: 'social-redirect',
        distinctId,
        properties: {
            social: 'linkedin',
            utm_campaign: searchParams.get("utm_campaign"),
            utm_content: searchParams.get("utm_content"),
            utm_medium: searchParams.get("utm_medium"),
            utm_source: searchParams.get("utm_source"),
            utm_term: searchParams.get("utm_term")
        }
    });

    return redirect("https://www.linkedin.com/in/leonardo-ferreira-lima/", 308);
}