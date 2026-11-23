# Layout, spacing and geometry

Alongio uses a 4 px design rhythm. Reference frame is 390 × 844. Pixel values are logical layout units. Content-driven height, flex width and native constraints take precedence over template coordinates.

| Spacing range | Values |
| --- | --- |
| Spacing scale | 4, 8, 12, 16, 20, 24, 32, 40, 48 |

| Layout role | Logical px |
| --- | --- |
| `layout.screen-inset` | 20 |
| `layout.section-gap` | 24 |
| `layout.component-gap` | 12 |
| `layout.card-padding` | 12 |
| `layout.sheet-inset` | 20 |
| `layout.dock-gap` | 4 |

| Size role | Logical px |
| --- | --- |
| `size.touch.minimum` | 48 |
| `size.button.md` | 56 |
| `size.button.utility` | 48 |
| `size.input.field` | 54 |
| `size.input.labeled` | 80 |
| `size.input.search` | 60 |
| `size.input.multiline` | 140 |
| `size.icon.sm` | 16 |
| `size.icon.md` | 20 |
| `size.icon.lg` | 24 |
| `size.icon.well` | 24 |
| `size.header.control` | 48 |
| `size.navigation.dock` | 68 |
| `size.notification.minimum` | 92 |
| `size.switch.track-width` | 52 |
| `size.switch.track-height` | 32 |
| `size.indicator.width` | 134 |
| `size.indicator.height` | 5 |

| Radius role | Logical px |
| --- | --- |
| `radius.sm` | 8 |
| `radius.md` | 12 |
| `radius.lg` | 16 |
| `radius.xl` | 20 |
| `radius.2xl` | 24 |
| `radius.pill` | 999 |

One-pixel solid UI borders are the default. Illustration linework may use a heavier stroke. Approved flat cards and sheets use no shared cast shadow. Surface stacking and scrims communicate depth. FigCraft clamps the 999 px pill convention to the geometry. In React Native, use platform-specific shadow and elevation only after a corresponding design is approved.

## Responsive matrix

320 × 568 · 360 × 640 · 375 × 667 · 390 × 844 · 402 × 874 · 430 × 932 · 440 × 956

| Pattern | Canonical construction | Examples |
| --- | --- | --- |
| Safe-area screen | System-owned insets surround a content viewport. Keep the approved top rhythm as a logical starting point. | Welcome FC-595 |
| Fixed bottom dock | Put dock outside long content scroll. Four equal interactive cells remain reachable. | Home FC-2 and Me FC-29199 |
| Scrollable form | Let fields and helper copy size to content. Keep caret and validation reachable. | Login FC-808 and Kitchen Magic FC-15204 |
| Bottom-anchored CTA | Anchor the action region and scroll the explanatory body when space is short. | Little Updates FC-33005 |
| Responsive hero | Keep proportion, adapt the surrounding panel and place decorative elements using constraints. | Welcome FC-595 |
| Adaptive cards | Flex width with content wrapping. Keep chronological order, metadata and split targets. | Little Updates FC-31896 |
| Keyboard-aware input | Reserve a tested runtime path for viewport resizing and focused-field scrolling. | Auth FC-1206 and Kitchen Magic FC-15204 fixtures |
| Viewport-constrained sheet | Constrain sheet height to the available viewport, scroll sheet content and fix close and actions. | Little Updates FC-32859 |
| Responsive modal | Dim the full underlay, limit the foreground width and return focus to the caller on dismiss. | Couple Space FC-24911 |

The responsive board contains editable compact, standard and tall specimens. Their starting view mirrors native layout, including content below the initial fold. Real-device safe areas, system gesture and keyboard behavior remain pending. See the [device checklist](../handoff/device-test-checklist.md).
