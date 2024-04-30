/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

// in env.d.ts
declare namespace App {
    interface Locals {
        distinctId: string
    }
}