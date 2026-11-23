# Colors

The eight FigCraft variables live in **Alongio / Palette**. The **02 — Color Palette** board displays the exact name, HEX value, and native variable ID. In `tokens.json`, the same eight names are stored under `palette`. The contrast columns compare each color against `ink` and `cream` at full opacity.

| Palette variable | HEX | Usage | Ink ratio | Cream ratio | Example frames |
| --- | --- | --- | --- | --- | --- |
| `cream` | #F8F1E5 | Backgrounds, raised sheets and inverse labels | 13.18:1 | 1.00:1 | FC-2, FC-547, FC-595, FC-648, FC-707, FC-757 |
| `ink` | #29272B | Text, icons, primary actions and the bottom dock | 1.00:1 | 13.18:1 | FC-2, FC-547, FC-595, FC-648, FC-707, FC-757 |
| `pink` | #E88C9F | Diary, connection motifs and destructive emphasis | 6.12:1 | 2.15:1 | FC-2, FC-547, FC-595, FC-648, FC-707, FC-757 |
| `indigo` | #A6A3E3 | Illustration and profile accents | 6.32:1 | 2.09:1 | FC-2, FC-547, FC-595, FC-648, FC-707, FC-757 |
| `yellow` | #F3D36B | Planner, selection and warning | 10.10:1 | 1.30:1 | FC-2, FC-547, FC-595, FC-648, FC-707, FC-757 |
| `green` | #A1C5A1 | Kitchen, success and shared progress | 7.76:1 | 1.70:1 | FC-2, FC-547, FC-595, FC-648, FC-757, FC-1072 |
| `lavender` | #DDD5F3 | Quiet controls, notification surfaces and info | 10.49:1 | 1.26:1 | FC-2, FC-547, FC-648, FC-707, FC-757, FC-808 |
| `muted` | #70686A | Supporting copy on cream | 2.73:1 | 4.82:1 | FC-2, FC-547, FC-595, FC-648, FC-707, FC-757 |

## Approved module usage

| Module | Accent | On accent | Support |
| --- | --- | --- | --- |
| Tiny Planner | `yellow` | `ink` | `green` |
| Heart Diary | `pink` | `ink` | `lavender` |
| Little Kitchen | `green` | `ink` | `yellow` |
| Couple Space | `pink` | `ink` | `indigo` |
| Profile & Settings | `indigo` | `ink` | `lavender` |
| Little Updates | `lavender` | `ink` | `cream` |

Use `ink` on the pink, indigo, yellow, green, and lavender surfaces. Use `cream` on `ink` where the approved inverse treatment calls for it. Check composited contrast for overlays and disabled states. An error or consequential action also needs a visible label or icon.

## Approved local colors

Existing sheet scrim opacity, transparent surfaces, and local artwork fills retain their approved values. The [deprecated lookup](color-palette-mapping.md) lists retired names and their exact targets.

| Observed non-palette solid fill or stroke | Node count | Example frames |
| --- | --- | --- |
| #55462C | 1 | FC-2 |
| #52343B | 1 | FC-2 |
| #3E5241 | 1 | FC-2 |
| #40353A | 1 | FC-2 |
