# Alongio color palette audit

Phase 10S · DESIGN_ONLY

Open **00 — Alongio Design System** → **02 — Color Palette** in the [editable FigCraft master](../Alongio.figcraft). Select any swatch and inspect its Fill variable. The card shows that same name, its resolved HEX, and its native variable ID. [Palette preview](../screens/design-system/02-primitive-colors.png)

## Inventory and binding migration

- Intake contained eight approved color definitions and 55 semantic aliases from the earlier pass. The eight existing registry keys supplied the flat names. The native ID and value identified each color throughout the migration. [Full palette and deprecated alias mapping](color-palette-mapping.md)
- All 24,044 references outside the Design System that already pointed to an approved palette ID kept that ID. The migration replaced 1,254 obsolete alias references outside that page with their exact, pre-existing target IDs, including 1,185 on application and shared component pages and 69 inherited by motion specimens.
- The 55 deprecated aliases had zero dependents in the staged master before removal. The historical lookup uses text so the palette has one swatch per variable.
- The 308 approved screens already included 118 solid fill entries and 47 solid stroke entries without a direct color variable. The migration preserved these local paints, including authored artwork and state-specific colors.

| Palette variable | Representative property after reopen |
| --- | --- |
| `cream` | FC-264 Primary button label Fill |
| `ink` | FC-263 Primary button Fill |
| `pink` | FC-33232 Error input outline Stroke |
| `indigo` | FC-267 Pressed button Fill |
| `yellow` | FC-33466 Selected calendar highlight Fill |
| `green` | FC-37669 Enabled switch track Fill |
| `lavender` | FC-269 Disabled button Fill |
| `muted` | FC-33213 Empty input outline Stroke |

## P1–P10 validation

| Gate | Result | Evidence |
| --- | --- | --- |
| P1 Actual FigCraft palette inventoried | PASS | Inspected the eight current color IDs, collection, values, and native field use after reopening. |
| P2 Labels match native variable names | PASS | The eight palette-card labels exactly match `cream`, `ink`, `pink`, `indigo`, `yellow`, `green`, `lavender`, and `muted`. |
| P3 Swatch value | PASS | All eight editable swatches retain their actual native Fill references. Their resolved HEX values match the cards and exported swatches. |
| P4 JSON names | PASS | The `palette` wrapper holds the same eight keys and original color values. All 106 non-color typed leaves are identical to intake. |
| P5 Duplicate or conflicting entries | PASS | Eight unique canonical names and stable IDs. Deprecated color aliases resolve to documented historical mappings only. |
| P6 Existing component bindings | PASS | Native fields retain the original palette ID or the exact palette ID targeted by the former alias. All 2,725 existing instance master IDs match. |
| P7 Hardcoded replacements | PASS | The binding comparison found only alias-to-palette ID substitutions. Existing local fills and strokes retain their original values. |
| P8 Approved appearance | PASS | All 308 frames remain locked. All 924 PNG comparisons matched byte for byte across 320 × 568, 390 × 844, and 440 × 956. |
| P9 Prototype connections | PASS | The 1,762 native interaction records outside the Design System retain their triggers, actions, and destinations. Existing flow starts matched and the Home, Planner, and Task Details journey replayed at 390 × 844. |
| P10 Motion configurations | PASS | Existing timings, easing, transitions, and pilot starts matched the prior master. The existing Date and Time overlays replayed at 390 × 844. The motion integration phase remains paused. |

React Native source, dependencies, and build configuration were outside this migration.
