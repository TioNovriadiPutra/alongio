# Alongio design system

The editable **00 — Alongio Design System** page lives inside the [FigCraft master](../Alongio.figcraft). It consolidates approved visual evidence from 308 frames. Existing application pages and their masters are preserved. Alongio remains in DESIGN_ONLY.

## Use the library

1. Inspect the component’s Fill or Stroke variable. **02 — Color Palette** shows the same name, resolved HEX, and native ID. **17 — Token inspector** covers sizing, typography, spacing, radius, and motion.
2. Choose an existing component or variant by anatomy, size and state. Use the module’s approved palette colors for accents.
3. Review its viewport behavior, text sizing and accessibility contract.
4. Resolve open decisions with the owner before promoting any proposed tokens or states.

| Reference | Contents |
| --- | --- |
| [Colors](colors.md) | Palette names, approved uses, and contrast |
| [Palette mapping](color-palette-mapping.md) | Exact names, native IDs, HEX values, and deprecated aliases |
| [Palette audit](color-palette-audit.md) | Binding validation and visual regression |
| [Typography](typography.md) | Approved fonts, role specimens and text behavior |
| [Layout](layout.md) | Spacing, sizing, radius, borders and adaptive layout |
| [Components](components.md) | Anatomy, variants, states, sizes and API suggestions |
| [Assets](assets.md) | Vector source IDs, exports and tinting rules |
| [React Native mapping](react-native-mapping.md) | Manual implementation guidance |
| [Token source](tokens.json) | Typed palette, typography, geometry, and motion tokens |
| [Earlier token audit](token-audit.md) | Historical native collections, hardcoded properties, aliases, and exceptions |
| [Earlier token mapping](token-mapping.md) | Historical names and non-color migration details |
| [Earlier component binding audit](component-binding-audit.md) | Historical properties and instance inheritance by family |
| [Earlier migration report](migration-report.md) | Historical T1–T12 validation results |
| [Quality audit](design-system-audit.md) | Native and visual verification |
| [Feedback and system states](../feedback/README.md) | Phase 10F variants, coverage, isolated Authentication pilot, and handoff |
| [Review boards](../screens/design-system/) | Section-by-section PNG exports |

The FigCraft page has 18 sections. The Token inspector follows React Native Implementation Mapping. **18 — Feedback & System States** adds proposed feedback variants for Phase 10F. Existing specimen cards identify their source by FC ID. Use the library to find the component contract, then look up an approved production example in the [screen inventory](../handoff/screen-inventory.md).

The color registry follows the names and values in Alongio’s approved FigCraft palette. The registry uses typed values and aliases for supported non-color tokens. [Design Tokens Format Module](https://www.designtokens.org/TR/2025.10/format/)

## Full-size review boards

[Overview index](../screens/design-system/00-review-index.png)

- [01 — Design Principles](../screens/design-system/01-principles.png)
- [02 — Color Palette](../screens/design-system/02-primitive-colors.png)
- [03 — Deprecated Color Aliases](../screens/design-system/03-semantic-colors.png)
- [04 — Typography](../screens/design-system/04-typography.png)
- [05 — Spacing & Layout](../screens/design-system/05-spacing-layout.png)
- [06 — Radius, Borders & Shadows](../screens/design-system/06-radius-borders-shadows.png)
- [07 — Icons & Illustrations](../screens/design-system/07-icons-illustrations.png)
- [08 — Component Primitives](../screens/design-system/08-component-primitives.png)
- [09 — Core Components](../screens/design-system/09-core-components.png)
- [10 — Component Variants & States](../screens/design-system/10-variants-states.png)
- [11 — Navigation Components](../screens/design-system/11-navigation.png)
- [12 — Feedback Components](../screens/design-system/12-feedback.png)
- [13 — Feature Components](../screens/design-system/13-feature-components.png)
- [14 — Responsive Layout Patterns](../screens/design-system/14-responsive-patterns.png)
- [15 — Accessibility & Interaction](../screens/design-system/15-accessibility.png)
- [16 — React Native Implementation Mapping](../screens/design-system/16-react-native-mapping.png)
- [17 — Token inspector](../screens/design-system/17-token-inspector.png)
- [18 — Feedback & System States](../screens/feedback/18-feedback-system-states.png)
