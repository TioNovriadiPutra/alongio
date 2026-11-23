# Phase 10S component binding audit

> This records the earlier semantic pass. For current color names and binding evidence, use the [palette audit](color-palette-audit.md) and [palette mapping](color-palette-mapping.md).

The migration verified 579 explicit native field bindings. This includes 32 bindings on Design System specimens. The application, shared Components page, and motion pages recorded 2,080 changed direct or inherited references. 1,986 of those changes were outside Motion and Design System. All retained original instance master identities.

| Family | Actual layer and property | Before | Reopened master |
| --- | --- | --- | --- |
| Home canvas | FC-2 · fill | Local value | `background.default` |
| Primary button | FC-263 · fill | `Ink` | `action.primary.background` |
| Primary button spacing | FC-263 · gap | Local value | `spacing.step-8` |
| Primary action label | FC-264 · fill | `Canvas` | `action.primary.foreground` |
| Primary label font family | FC-264 · fontFamily | Local value | `font-family.body` |
| Secondary action outline | FC-265 · stroke | `Ink` | `border.default` |
| Secondary action label | FC-266 · fill | `Ink` | `action.secondary.foreground` |
| Pressed action | FC-267 · fill | `Soft Indigo` | `action.primary.pressed` |
| Pressed label | FC-268 · fill | `Ink` | `action.primary.pressed-foreground` |
| Disabled action | FC-269 · fill | `Lavender` | `action.disabled.background` |
| Loading action | FC-271 · fill | `Ink` | `action.primary.background` |
| Quiet input outline | FC-33213 · stroke | `Muted` | `border.subtle` |
| Error input outline | FC-33232 · stroke | `Romantic Pink` | `border.error` |
| Focused input outline held | FC-33225 · stroke | `Ink` | `palette.ink` |
| Input radius | FC-33213 · cornerRadius | Local value | `radius.md` |
| Unread notification card | FC-38130 · fill | `Lavender` | `background.subtle` |
| Read notification card | FC-38146 · fill | `Canvas` | `surface.card` |
| Navigation dock | FC-33406 · fill | `Ink` | `navigation.background` |
| Selected Planner segment | FC-33476 · fill | `Butter Yellow` | `module.planner.accent` |
| Bottom sheet | FC-32956 · fill | `Canvas` | `surface.elevated` |
| Sheet radius | FC-32956 · cornerRadius | Local value | `radius.2xl` |
| Calendar selected day | FC-33466 · fill | `Butter Yellow` | `module.planner.accent` |
| Time Picker PM | FC-2500 · fill | `Butter Yellow` | `module.planner.accent` |
| Switch enabled | FC-37669 · fill | `Matcha Green` | `feedback.success` |
| Task complete surface | FC-3246 · fill | `Matcha Green` | `feedback.success` |
| Heading specimen | FC-38866 · fontSize | Local value | `font-size.step-24` |

## Inheritance and variants

The original 2,725 instance master IDs were inspected after reopen. Rendered state variants and the original component property definitions were preserved. The rows below identify actual native field changes beyond the explicit binding commands. The parent instance retained its original master ID.

| Instance layer | Property | Inherited canonical token | Master |
| --- | --- | --- | --- |
| FC-213 Bottom bar | height | `size.navigation.dock` | FC-33405 |
| FC-214 Navigation-surface | fill | `navigation.background` | FC-33405 |
| FC-644 Get started | gap | `spacing.step-8` | FC-263 |
| FC-644 Get started | fill | `action.primary.background` | FC-263 |
| FC-645 Label | fontFamily | `font-family.body` | FC-263 |
| FC-645 Label | fill | `action.primary.foreground` | FC-263 |
| FC-646 Log in | stroke | `border.default` | FC-265 |
| FC-647 Label | fill | `action.secondary.foreground` | FC-265 |
| FC-657 Back | width | `size.header.control` | FC-241 |
| FC-658 Arrow | stroke | `icon.primary` | FC-241 |
| FC-832 Input boundary | cornerRadius | `radius.md` | FC-33212 |
| FC-832 Input boundary | fill | `surface.default` | FC-33212 |
| FC-832 Input boundary | stroke | `border.subtle` | FC-33212 |
| FC-833 Field label | fill | `text.primary` | FC-33212 |
| FC-834 Input value | fill | `text.secondary` | FC-33212 |
| FC-931 Verify email | fill | `action.disabled.background` | FC-269 |
| FC-932 Label | fill | `action.disabled.foreground` | FC-269 |
| FC-1149 Input boundary | stroke | `border.error` | FC-33231 |
| FC-3841 Planner views | fill | `background.subtle` | FC-33475 |
| FC-3842 Overview | fill | `module.planner.accent` | FC-33475 |
| FC-10810 Rain on the window | cornerRadius | `radius.xl` | FC-34871 |
| FC-10810 Rain on the window | fill | `module.diary.support` | FC-34871 |
| FC-14810 Search by dish or ingredient | cornerRadius | `radius.lg` | FC-13938 |
| FC-14810 Search by dish or ingredient | height | `size.input.search` | FC-13938 |

## Held migrations

- Shared button master heights and affected responsive dock heights retain their original fixed and fill settings. A native height binding changed the sizing mode of some fixed-height instances in the candidate. The affected bindings were removed and the original modes restored before publication.
- Incomplete role coverage includes some local strokes, font sizes, authored styles, transparent layers, illustration tones, and responsive layout measurements. Equal color or size is insufficient evidence for their semantic intent.
- The documented `motion.*` values are prototype specifications. No rollout or motion metadata change was applied.
