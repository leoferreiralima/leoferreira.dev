/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

type PostHog = import('posthog-node').PostHog
// in env.d.ts
declare namespace App {
    interface Locals {
        distinctId: string
        posthog: PostHog
    }
}