# Phase 10S migration report

> This records the earlier semantic pass. For current color names and binding evidence, use the [palette audit](color-palette-audit.md) and [palette mapping](color-palette-mapping.md).

Alongio remains in **DESIGN_ONLY**. The [FigCraft master](../Alongio.figcraft) opens to **00 — Alongio Design System**. Find canonical names, resolved values, native IDs, and component examples in **17 — Token inspector**. [Token inspector preview](../screens/design-system/17-token-inspector.png)

## Migration

- Kept the existing dotted JSON paths. Renamed the 61 original FigCraft variable names in place while preserving their IDs and values.
- Mirrored 74 supported scalar tokens in FigCraft. Added two aliases for existing approved appearances, `action.primary.pressed-foreground` and `border.subtle`.
- Verified 579 explicit property bindings. The application, Components, and Motion pages recorded 2,080 direct or inherited reference changes. Native properties beyond those references matched the baseline.
- Preserved all 308 approved frames and their native locks. Saved and reopened the master and inspected the variable references, aliases, variants, and instances again.

## T1–T12 validation

| Gate | Status | Evidence |
| --- | --- | --- |
| T1 Token identity | PASS | All 137 native variables use unique, exact registry paths. The Token inspector names the remaining 32 leaves as registry-only. |
| T2 Token value | PASS | All original native variable values and alias IDs survived. Each new scalar or alias resolved to its registry value. Existing approved component fields kept their resolved values. |
| T3 Variable binding | FAIL for full coverage | All 579 explicit migrations were verified by native binding ID. Some approved font sizes, focus strokes, heights, and other local or unresolved roles retain their original construction. |
| T4 Alias integrity | PASS | Verified all 86 native alias dependencies and the JSON references. No missing targets, cycles, or broken native field references. |
| T5 Component variants | PASS | Default, pressed, disabled, selected, focused, error, loading, and other existing variants kept their definitions and visual states. |
| T6 Instance inheritance | PASS | All 2,725 original instance master IDs and overrides matched. Reopened inspection confirmed inherited references on approved instances. |
| T7 Typography | PASS | Original font family, style, size, line height, tracking, and shared styles matched. Exact font-family and size references were added to the Design System typography specimens. |
| T8 Responsive fidelity | PASS | All 308 renders at 320 × 568 and all 308 at 440 × 956 matched same-size pre-migration renders byte for byte. |
| T9 Prototype integrity | PASS | Original links, triggers, actions, and flow starts matched. Representative Home, Planner, and Details routes played after reopen at all three widths. |
| T10 Motion integrity | PASS | Original transition metadata and motion pilot starts matched. Existing Date and Time overlay examples played after reopen. This check preserves existing behavior. Frame pacing and real-device execution remain outside FigCraft verification. |
| T11 Documentation | PASS | Canonical paths agree across the registry, the native variables, the Token inspector, and the updated handoff. Held and registry-only roles are identified explicitly. |
| T12 Visual regression | PASS | 924 exact PNG matches across 320 × 568, 390 × 844, and 440 × 956. The 390 × 844 renders were compared with the approved baseline archive. |

## Owner decisions

- **Focus stroke.** Approve a separate semantic Ink role for the existing focused Authentication border, or give separate authorization to align the appearance with the existing Indigo `border.focus` role.
- **Local typography.** The approved shared button labels use 15 px. The approved responsive Authentication values use 16 px. If these should be canonical roles, define a distinct role for each approved metric. The existing 14 px button and 15 px field roles remain valid elsewhere.
- **Height binding.** The candidate demonstrated that a same-value native height binding can turn a fixed-height instance into fill sizing. The affected button and dock bindings were held. The team can revisit them when FigCraft supports a binding path that preserves the sizing mode.

[Token and alias inventory](token-audit.md) · [Full mapping](token-mapping.md) · [Reopened component binding audit](component-binding-audit.md)
