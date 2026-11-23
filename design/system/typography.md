# Typography

Use Space Grotesk for display and headings and DM Sans for most interface copy. The licensed fonts and accompanying license files are in `design/fonts/`. The native specimen board applies the exact family, style, size, leading and tracking shown below. FigCraft exposes the verified font family and size as separate field references. The composite role remains in the registry. [Space Grotesk](../fonts/SpaceGrotesk.ttf) · [DM Sans](../fonts/DMSans.ttf)

| Role | Family and weight | Size / line height | Tracking | Role and wrapping | Live evidence |
| --- | --- | --- | --- | --- | --- |
| `typography.display.lg` | Space Grotesk Bold | 36 / 41 | -0.55 px | Welcome and high-emphasis headlines | FC-10732 · layer 10742 |
| `typography.display.md` | Space Grotesk Bold | 30 / 35 | -0.55 px | Module hero headlines | FC-10732 · layer 10788 |
| `typography.heading.lg` | Space Grotesk Bold | 24 / 29 | -0.55 px | Screen headings | FC-10732 · layer 10804 |
| `typography.heading.md` | Space Grotesk Bold | 20 / 25 | -0.55 px | Section headings | FC-10732 · layer 10812 |
| `typography.heading.sm` | Space Grotesk Bold | 18 / 23 | -0.55 px | Compact titles | FC-10732 · layer 10799 |
| `typography.body.lg` | DM Sans Regular | 16 / 22 | 0 px | Introductory or spacious copy | FC-595 · layer 643 |
| `typography.body.md` | DM Sans Regular | 14 / 19 | 0 px | General body copy | FC-849 · layer 887 |
| `typography.body.sm` | DM Sans Regular | 13 / 18 | 0 px | Dense cards and help copy | FC-849 · layer 884 |
| `typography.caption` | DM Sans Regular | 12 / 17 | 0 px | Captions and supporting details | FC-4098 · layer 4184 |
| `typography.label` | DM Sans Bold | 11 / Auto | 0.7 px | Short labels with tracking | FC-10732 · layer 10741 |
| `typography.button.md` | DM Sans Bold | 14 / Auto | 0 px | Standard action labels | FC-648 · layer 663 |
| `typography.button.compact` | DM Sans Bold | 13 / Auto | 0 px | Utility controls | FC-4098 · layer 4170 |
| `typography.statistic` | Space Grotesk Bold | 24 / 29 | -0.55 px | Calendar dates and prominent numeric values | FC-10732 · layer 10804 |
| `typography.field.value` | DM Sans Medium | 15 / Auto | 0 px | Editable field values | FC-1712 · layer 1745 |
| `typography.card.title` | DM Sans Bold | 13.5 / Auto | 0 px | Compact card titles | FC-2 · layer 5 |
| `typography.metadata` | DM Sans Regular | 11.5 / Auto | 0 px | Timestamp / dense metadata | FC-2 · layer 224 |

## Runtime rules

- Use content-hug sizing for short headings and labels. Constrain multiline width, let the text grow and preserve logical reading order. Allow labels to wrap or containers to grow before reducing text.
- Native Auto line height is documented explicitly. Auto typography tokens expose typed subfields and an `alongio.lineHeight` extension. Let the loaded font provide native metrics unless calibrated platform leading is approved.
- The documented typography ramp is a starting summary. The approved master frequently uses 13, 13.5, 15 and 11.5 px. Keep these where component roles require them. Space Grotesk Bold is the observed heading weight in these specimens. Deliberate title and wordmark exceptions stay local until consolidated.
- The Statistic and Heading LG roles share the same geometry. Their names identify where to use a large figure versus a headline. Test scaling, localized strings, multiline type and assistive preferences on devices.
