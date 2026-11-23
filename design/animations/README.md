# Alongio Lottie asset policy

Phase 12B proposes a zero-cost hybrid strategy in DESIGN_ONLY. Use the existing Reanimated stack, approved artwork, and simple native shapes for the initial effects. The [discovery shortlist](discovery-shortlist.md) remains an optional research reference. All five Phase 12A.2 LottieFiles selections are **blocked by the free download limit and have not been acquired**. Empty State Lottie acquisition remains deferred. A static illustration with a small Reanimated float is proposed for that category.

## Usage

Use the [Soft Playful Motion architecture](../MOTION.md) for controls, routes, sheets, and the initial decorative effects. Playback must never gate navigation, confirmation, or a state update. Preserve approved layout, brand palette, geometric style, and touch targets. Reserve Lottie for a decorative timeline the existing stack cannot reasonably reproduce. Consider existing MIT-licensed GitHub JSON only if the license clearly covers the animation and its underlying assets. Custom mascot animation requires separate approval.

| Use | Playback | Reduced-motion alternative |
| --- | --- | --- |
| Loading | Use a restrained loop only while loading is active. Stop at the result or when the screen leaves. | Show a static indicator and loading text. |
| Success, confetti, heart burst, or celebration | Play once for the resolved event. Keep the confirmation and action immediately available. | Keep the success text or mark and use a still illustration when needed. |
| Empty-state illustration | Prefer a static ending. If motion adds context, play once. | Show the static illustration and the same empty-state text and action. |

## Required checks before acceptance

| Record | Evidence to capture |
| --- | --- |
| Source URL and author | Record the original listing, author or rights holder, and authorized download location. |
| License and commercial use | Record the license name and version, its source, the date checked, and evidence it permits commercial use and distribution inside a mobile app. Check whether edits are permitted if the asset needs changes. Free access alone does not establish reuse rights. |
| Attribution | Record whether attribution is required and preserve the required wording, links, credit placement, and any notices. |
| JSON availability | Confirm downloadable Lottie JSON is available through the authorized source. Record required images, fonts, or other files. Review terms for any such dependencies. |
| React Native compatibility | Record compatibility status, target platforms, renderer or project version tested, and observed limitations. Mark untested compatibility as **NOT VERIFIED**. Verify both iOS and Android before runtime use. |
| Asset size | Record JSON size in bytes and total size including dependencies. Prefer the smaller asset when two candidates meet the same need. |
| Loop behavior | Record one-shot or loop, duration, restart behavior, and when playback stops. |
| Transparent background | Verify transparency when compositing over approved screens. Reject an opaque background that changes the approved surface. |
| Reduced-motion fallback | Record the named static illustration, icon, or status text and verify that it communicates the same outcome without playback. |

Reject assets with unknown or incompatible licensing. Respect site access and download rules. Paid resources require explicit owner approval. Keep candidates with compatibility or fallback gaps out of the approved asset register until verified.

## Phase 12A.2 archive

These are historical source records and filename mappings, all marked **blocked, not acquired**. The hybrid rollout has no download prerequisite. LottieFiles documents a lifetime public download limit for Starter workspaces. [Starter plan limits](https://help.lottiefiles.com/hc/en-us/articles/16240626895385-File-Upload-and-Download-Limits-on-Free-Workspace)

| Intended filename | Standard JSON size on listing | Official download page |
| --- | ---: | --- |
| `app-loading.json` | 8.7 KB | [loading - Heart · Anna Jang](https://lottiefiles.com/free-animation/loading-heart-OO64RGPsvu) |
| `task-success.json` | 11.3 KB | [Success · Rafly Nurfallah](https://lottiefiles.com/free-animation/success-animation-tkSmff4Qcn) |
| `celebration-confetti.json` | 63.1 KB | [Party Pastel Confetti · Kawaiicolors](https://lottiefiles.com/free-animation/party-pastel-confetti-FPl4hTEDBO) |
| `save-success.json` | 3.8 KB | [Heart burst animation · Nick Hart](https://lottiefiles.com/free-animation/heart-burst-animation-elVuZR5fvz) |
| `kitchen-loading.json` | 15.6 KB | [Boiling Pot · Joshua Trimmer](https://lottiefiles.com/free-animation/boiling-pot-tLTsKQiX1e) |

## Validation after download

1. Verify the file came from the approved listing. Record its byte count and SHA-256. Parse the JSON and inspect the composition, layer list, positive dimensions `w` and `h`, positive frame rate `fr`, and ordered in/out points `ip` and `op`. Record the authored frame span as `op - ip` and duration as that span divided by `fr`.
2. Inspect images, precompositions, fonts, audio, and asset paths. Resolve internal precomposition references and account for dependencies and their licenses. Flag expressions, text layers, masks, mattes, merge paths, effects, or other renderer-sensitive features for platform checks.
3. Preview the first, middle, and last states in a compatible renderer. Check colors, easing, clipping, and alpha over a checkerboard and the intended Alongio surfaces. Replay loaders across the loop seam. Verify each one-shot’s ending and reset. Use Taste’s fit, restraint, and readability criteria at the intended size. Mark untested visual checks **NOT VERIFIED**.
4. Record iOS and Android React Native playback separately. Structural JSON checks and web playback provide different evidence. Keep untested assets out of the verified asset register.

The listing sizes above are reference metadata. Actual bytes, dimensions, duration, dependencies, feature flags, transparency, visual playback, and native playback are **NOT VERIFIED** for all five files.

- [Asset manifest](asset-manifest.json) records pending and verified assets separately.
- [Licenses and attribution](license-attribution.md) records source terms and optional credits.
- [Usage map](usage-map.md) records proposed triggers, approved surfaces, and fallbacks.
