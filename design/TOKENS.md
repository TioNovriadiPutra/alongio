# Alongio design tokens

The [token registry](system/tokens.json) uses the approved FigCraft color names as keys under `palette`. In FigCraft, open **00 — Alongio Design System** → **02 — Color Palette** to see each name, HEX value, swatch, and variable ID. **17 — Token inspector** covers the other token families.

## Color

| Palette name | Value |
| --- | --- |
| `cream` | #F8F1E5 |
| `ink` | #29272B |
| `pink` | #E88C9F |
| `indigo` | #A6A3E3 |
| `yellow` | #F3D36B |
| `green` | #A1C5A1 |
| `lavender` | #DDD5F3 |
| `muted` | #70686A |

Bind approved component colors directly to the named FigCraft variables in **Alongio / Palette**. The deprecated lookup records the old aliases and their exact palette targets. [Color usage and contrast](system/colors.md) · [Palette mapping](system/color-palette-mapping.md)

## Typography

Use `font-family.display` (Space Grotesk) and `font-family.body` (DM Sans). `typography.*` defines the full role, including weight, size, line height, and tracking. Approved local styles retain their exact metrics. [Typography roles and native examples](system/typography.md)

## Geometry

- `spacing.step-*` defines the 4, 8, 12, 16, 20, 24, 32, 40, and 48 logical-pixel spacing steps.
- `layout.screen-inset` resolves to 20 px, `layout.section-gap` to 24 px, and `layout.component-gap` to 12 px.
- `radius.sm`, `radius.md`, `radius.lg`, `radius.xl`, and `radius.2xl` resolve to 8, 12, 16, 20, and 24 px. `radius.pill` expresses a fully rounded end. FigCraft clamps it to the geometry.
- `size.touch.minimum` resolves to 48 px. The approved interaction baseline remains 48 × 48 logical pixels.
- `border.width.default` is 1 px and `border.width.illustration` is 2 px. Approved vector artwork may use local linework. `shadow.none` defines the flat-surface treatment.

The reference viewport is 390 × 844. Respect safe areas and use content-driven sizing where the component contract requires it. [Layout roles and responsive examples](system/layout.md)

## Motion and native coverage

`motion.*` remains in the canonical registry. FigCraft stores prototype timings and easing in the interactions themselves. [Soft Playful Motion](MOTION.md)

Use the [palette audit](system/color-palette-audit.md) for binding and visual evidence. The earlier [token migration report](system/migration-report.md) records the non-color synchronization and historical checks.
