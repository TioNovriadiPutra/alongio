# Phase 10S token audit

> This records the earlier semantic pass. For current color names and binding evidence, use the [palette audit](color-palette-audit.md) and [palette mapping](color-palette-mapping.md).

The [canonical registry](tokens.json) is the authority for typed paths and resolved values. See the [mapping](token-mapping.md) for every registered token, the original native name, and current usage.

## Inventory before migration

- The master contained 41,890 inspected layers across 11 pages. The 308 app frames contain 26,531 layer records.
- **Alongio palette** held eight sRGB color primitives. **Alongio / Semantic specification** held 53 color aliases. Each collection used one default mode.
- All existing app and motion bindings pointed to the eight primitives. The Design System contained 47 direct semantic property references, and six semantic roles had no direct reference.
- The registry now contains 169 typed leaves, including two new color aliases for existing appearance. The APP frame and motion baselines were not used to infer unknown semantics from matching values.
- No duplicate native variable names, conflicting duplicate canonical names, broken aliases, or missing native binding IDs were found. The legacy prose had conflicts with the canonical typography ramp.

| Typed token kind | Count |
| --- | ---: |
| color | 63 |
| cubicBezier | 2 |
| dimension | 66 |
| duration | 7 |
| fontFamily | 8 |
| fontWeight | 6 |
| number | 3 |
| shadow | 3 |
| strokeStyle | 1 |
| typography | 10 |

## Native collection and alias integrity

| Current collection | Contents | Native mode |
| --- | --- | --- |
| Alongio / Primitives | 8 approved color primitives | Mode 1 |
| Alongio / Semantic colors | 55 aliases. Includes the approved pressed foreground and subtle field outline. | Mode 1 |
| Alongio / Layout and type | 74 scalar mirrors for pixel dimensions and font-family strings. | Mode 1 |

All 86 native aliases were resolved against the corresponding registry dependency. Examples include `action.primary.pressed-foreground → palette.ink`, `border.subtle → palette.muted`, `layout.screen-inset → spacing.step-20`, and `typography.button.md.font-family → font-family.body`.

Equal values keep their role distinctions. For example, `background.default`, `surface.default`, `surface.card`, and `surface.elevated` all alias `palette.cream`. `navigation.active` and `navigation.indicator` both alias `palette.yellow`. These names describe different uses.

## Unused native definitions

Before migration, the following had neither a layer binding nor a native alias consumer. `module/planner/on-accent`, `module/diary/on-accent`, `module/kitchen/on-accent`, `module/couple/on-accent`, `module/profile/on-accent`, `module/updates/on-accent`.

40 native variables currently have no direct layer binding. Some are dependencies of other variables. The following 29 have neither a direct layer binding nor a registry alias consumer and are retained as specification mirrors.

`border.width.default`, `border.width.illustration`, `spacing.step-40`, `layout.screen-inset`, `layout.section-gap`, `layout.component-gap`, `layout.card-padding`, `layout.sheet-inset`, `layout.dock-gap`, `size.touch.minimum`, `size.button.md`, `size.button.utility`, `size.input.field`, `size.input.labeled`, `size.input.multiline`, `size.icon.sm`, `size.icon.md`, `size.icon.lg`, `size.icon.well`, `size.indicator.width`, `size.indicator.height`, `radius.sm`, `radius.pill`, `typography.label.letter-spacing`, `typography.button.md.letter-spacing`, `typography.button.compact.letter-spacing`, `typography.field.value.letter-spacing`, `typography.card.title.letter-spacing`, `typography.metadata.letter-spacing`.

## Direct hardcoded properties and local values

Counts below describe the approved app at intake. Text counts include authored local styles and native text-style records when a direct variable binding was absent. Layout counts include zero gaps and empty padding in actual containers.

| Field without a direct variable | Count |
| --- | ---: |
| `cornerRadius` | 8,237 |
| `fills` | 119 |
| `fontFamily` | 4,556 |
| `fontSize` | 4,556 |
| `fontStyle` | 4,556 |
| `layout.gap` | 11,080 |
| `layout.padding` | 11,080 |
| `letterSpacing` | 4,556 |
| `lineHeight` | 4,556 |
| `strokes` | 47 |

The 32 registry-only leaves cover composite typography, numeric font weights, border style, shadow composites, and motion configuration. The current FigCraft binding model handles supported type properties separately. Pilot timings and easing remain interaction metadata. A single global `surface.overlay` alpha and replacement focus state remain proposed.

## Deprecated labels and held conflicts

- Variable names such as `Canvas`, `Ink`, and `action/primary/background` were replaced with `palette.cream`, `palette.ink`, and `action.primary.background` using the same native IDs. The slash names are historical lookup entries.
- The legacy quick sheet used different weights for `heading-md` and `heading-sm` and different sizes for `body-sm` and `caption`. The quick sheet now references the registry roles. Approved fonts and text layers retain their exact metrics.
- The approved shared button label is 15 px, compared with 14 px for `typography.button.md`. The approved responsive auth value is 16 px, compared with 15 px for `typography.field.value`. Their font sizes remain local.
- The approved focused auth field uses an Ink stroke. `border.focus` is Indigo. A role for this approved focus state needs an owner decision.
- The secondary action’s transparent face has no fill. The Cream `action.secondary.background` role applies only to components that actually render Cream.
