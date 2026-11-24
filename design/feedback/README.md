# Phase 10F · Global feedback and error states

This package covers Stage A, Stage B, and the isolated Authentication pilot. Alongio remains in DESIGN_ONLY. Stage C and Phase 11B are paused for owner review.

## Review in FigCraft

- In the [editable master](../Alongio.figcraft), open **00 — Alongio Design System → 18 — Feedback & System States**. The [component board preview](../screens/feedback/18-feedback-system-states.png) shows the new variants and the existing loading button.
- Open **09 — Feedback · Authentication Pilot** and choose a named **10F · OTP** start. Tap **Verify email**. While verifying, press **I** for an incorrect code, **E** for expiry, **R** for request failure, or **S** for confirmed verification. These keys simulate service results for review. At the resend pending state, **S** confirms dispatch and **R** shows resend failure.
- In the reduced-motion fixture, press **R** from the pending state. Try **Try again** from either failure fixture. A confirmed resend can be dismissed or left to expire. The approved Setup Profile destination remains linked from the copied verification success screen.
- Preview [compact](../screens/feedback/auth-otp-320.png), [standard](../screens/feedback/auth-otp-390.png), [large](../screens/feedback/auth-otp-440.png), [reduced motion](../screens/feedback/auth-otp-reduced.png), and [keyboard/sheet placement](../screens/feedback/placement-and-stress.png).

## Design and handoff

| Deliverable | What it covers |
| --- | --- |
| [Coverage matrix](coverage-matrix.md) | Approved actions, current feedback, gaps and recovery in all eight application areas |
| [Component specifications](component-specs.md) | Anatomy, variants, placement, accessibility, timing, queue and reduced motion |
| [Copy guidelines](copy-guidelines.md) | English and Indonesian recovery copy, privacy and confirmed outcomes |
| [Interaction audit](interaction-audit.md) | Native layout, presenter results, acceptance gates and known limitations |
| [React Native handoff](react-native-handoff.md) | Proposed application responsibilities, service response mapping and real-device verification |

The Auth pilot focuses on email verification and resend because they exercise field validation, pending, persistent request failure, recovery, and confirmed status within one approved flow. The coverage matrix defines the remaining Authentication cases for a later integration stage.
