# Colors

The eight primitives come from the existing Alongio palette collection. “Ink” and “Cream” columns express contrast against each named foreground at full opacity. Use Ink on the pink, indigo, yellow, green and lavender surfaces. Inverse Cream belongs on Ink. Confirm exact composited contrast for scrims and disabled UI.

| Primitive | Name / HEX | Usage | Ink ratio | Cream ratio | Example frames |
| --- | --- | --- | --- | --- | --- |
| `palette.cream` | Warm Cream #F8F1E5 | Backgrounds, raised sheets and inverse labels | 13.18:1 | 1.00:1 | FC-2, FC-547, FC-595, FC-648, FC-707, FC-757 |
| `palette.ink` | Ink #29272B | Text, icons, primary actions and the bottom dock | 1.00:1 | 13.18:1 | FC-2, FC-547, FC-595, FC-648, FC-707, FC-757 |
| `palette.pink` | Romantic Pink #E88C9F | Diary, connection motifs and destructive emphasis | 6.12:1 | 2.15:1 | FC-2, FC-547, FC-595, FC-648, FC-707, FC-757 |
| `palette.indigo` | Soft Indigo #A6A3E3 | Illustration and profile accents | 6.32:1 | 2.09:1 | FC-2, FC-547, FC-595, FC-648, FC-707, FC-757 |
| `palette.yellow` | Butter Yellow #F3D36B | Planner, selection and warning | 10.10:1 | 1.30:1 | FC-2, FC-547, FC-595, FC-648, FC-707, FC-757 |
| `palette.green` | Matcha Green #A1C5A1 | Kitchen, success and shared progress | 7.76:1 | 1.70:1 | FC-2, FC-547, FC-595, FC-648, FC-757, FC-1072 |
| `palette.lavender` | Lavender #DDD5F3 | Quiet controls, notification surfaces and info | 10.49:1 | 1.26:1 | FC-2, FC-547, FC-648, FC-707, FC-757, FC-808 |
| `palette.muted` | Muted Ink #70686A | Supporting copy on cream | 2.73:1 | 4.82:1 | FC-2, FC-547, FC-595, FC-648, FC-707, FC-757 |

## Semantic roles

Semantic role aliases resolve directly to an approved primitive. A new design should use the semantic role. Module-specific controls reuse common anatomy with a role override. Native FigCraft aliases appear in the Alongio / Semantic specification collection.

| Semantic role | Primitive |
| --- | --- |
| `background.default` | `palette.cream` |
| `background.subtle` | `palette.lavender` |
| `background.inverse` | `palette.ink` |
| `surface.default` | `palette.cream` |
| `surface.card` | `palette.cream` |
| `surface.elevated` | `palette.cream` |
| `text.primary` | `palette.ink` |
| `text.secondary` | `palette.muted` |
| `text.muted` | `palette.muted` |
| `text.inverse` | `palette.cream` |
| `text.disabled` | `palette.muted` |
| `border.default` | `palette.ink` |
| `border.strong` | `palette.ink` |
| `border.focus` | `palette.indigo` |
| `border.error` | `palette.pink` |
| `icon.primary` | `palette.ink` |
| `icon.secondary` | `palette.muted` |
| `icon.disabled` | `palette.muted` |
| `action.primary.background` | `palette.ink` |
| `action.primary.foreground` | `palette.cream` |
| `action.primary.pressed` | `palette.indigo` |
| `action.secondary.background` | `palette.cream` |
| `action.secondary.foreground` | `palette.ink` |
| `action.disabled.background` | `palette.lavender` |
| `action.disabled.foreground` | `palette.muted` |
| `action.destructive.background` | `palette.pink` |
| `action.destructive.foreground` | `palette.ink` |
| `feedback.success` | `palette.green` |
| `feedback.warning` | `palette.yellow` |
| `feedback.error` | `palette.pink` |
| `feedback.info` | `palette.lavender` |
| `navigation.background` | `palette.ink` |
| `navigation.active` | `palette.yellow` |
| `navigation.inactive` | `palette.cream` |
| `navigation.indicator` | `palette.yellow` |

Border color is one part of the contract. Apply the stroke position, geometry and approved opacity with the relevant component. Consequential or error cues also use a clear label or icon.

## Module accents

| Namespace | Module | Accent | On accent | Support |
| --- | --- | --- | --- | --- |
| `module.planner` | Tiny Planner | `palette.yellow` | `palette.ink` | `palette.green` |
| `module.diary` | Heart Diary | `palette.pink` | `palette.ink` | `palette.lavender` |
| `module.kitchen` | Little Kitchen | `palette.green` | `palette.ink` | `palette.yellow` |
| `module.couple` | Couple Space | `palette.pink` | `palette.ink` | `palette.indigo` |
| `module.profile` | Profile & Settings | `palette.indigo` | `palette.ink` | `palette.lavender` |
| `module.updates` | Little Updates | `palette.lavender` | `palette.ink` | `palette.cream` |

## Exceptions and proposals

- **PROPOSED `surface.overlay`**. Existing sheets use an ink scrim with state-specific opacity. Preserve the observed alpha until one common value is approved.
- Native status, exported sample artwork and interaction fades can include local non-palette details. These are captured below as observed paints, with no shared UI token assigned.
- `background.default`, `surface.default`, `surface.card` and `surface.elevated` currently alias the same Cream value. Their role names preserve component intent. `text.secondary` and `text.muted` both point to Muted Ink.

| Observed non-palette solid fill or stroke | Node count | Example frames |
| --- | --- | --- |
| #55462C | 1 | FC-2 |
| #52343B | 1 | FC-2 |
| #3E5241 | 1 | FC-2 |
| #40353A | 1 | FC-2 |
