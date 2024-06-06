import { PostHog } from "posthog-node";

export function posthogClient(distinctId?: string) {
    const posthog = new PostHog('phc_Tk9q9lkT6kBMHna3XlgAHSiHsdLD3oFCTZsxTHZbC3K', {
        host: 'https://us.i.posthog.com',
        bootstrap: {
            distinctId
        }
    });

    return posthog;
}