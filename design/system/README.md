# Alongio design system

The editable **00 — Alongio Design System** page lives inside the [FigCraft master](../Alongio.figcraft). It consolidates approved visual evidence from 308 frames. Existing application pages and their masters are preserved. Alongio remains in DESIGN_ONLY.

## Use the library

1. Choose a semantic role. Inspect its selected color and state in the collection.
2. Choose an existing component or variant by anatomy, size and state. Use module aliases for accent changes.
3. Review its viewport behavior, text sizing and accessibility contract.
4. Resolve open decisions with the owner before promoting any proposed tokens or states.

| Reference | Contents |
| --- | --- |
| [Colors](colors.md) | Primitive colors, semantic aliases, module roles and contrast |
| [Typography](typography.md) | Approved fonts, role specimens and text behavior |
| [Layout](layout.md) | Spacing, sizing, radius, borders and adaptive layout |
| [Components](components.md) | Anatomy, variants, states, sizes and API suggestions |
| [Assets](assets.md) | Vector source IDs, exports and tinting rules |
| [React Native mapping](react-native-mapping.md) | Manual implementation guidance |
| [Token source](tokens.json) | Typed tokens, alias graph and unresolved roles |
| [Quality audit](design-system-audit.md) | Native and visual verification |
| [Review boards](../screens/design-system/) | Section-by-section PNG exports |

The FigCraft page has 16 sections, from Design Principles through React Native Implementation Mapping. The curated masters in the existing Components page and the approved module-local masters remain available. Specimen cards on the new page identify their source by FC ID. Use the new library to find the right contract before looking up an approved production example in the [screen inventory](../handoff/screen-inventory.md).

The semantic-to-primitive and variant organization follows the general approach in [shadcn/ui theming](https://ui.shadcn.com/docs/theming) and [button documentation](https://ui.shadcn.com/docs/components/button). Alongio owns the visual rules. Token serialization follows the [Design Tokens Format Module](https://www.designtokens.org/TR/2025.10/format/) typed token and alias patterns. The project validates local references and units independently.

## Full-size review boards

[Overview index](../screens/design-system/00-review-index.png)

- [01 — Design Principles](../screens/design-system/01-principles.png)
- [02 — Primitive Color Palette](../screens/design-system/02-primitive-colors.png)
- [03 — Semantic Color Tokens](../screens/design-system/03-semantic-colors.png)
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
