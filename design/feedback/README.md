# Phase 10F · Global feedback and error states

This package covers Stage A, Stage B, and the complete Authentication flow feedback & Toast pilot inside the editable master [Alongio.figcraft](../Alongio.figcraft). Alongio remains in DESIGN_ONLY. Stage C (rollout to remaining modules) and Phase 11B remain paused for owner review.

## Review in FigCraft

- In the [editable master](../Alongio.figcraft), open **00 — Alongio Design System → 18 — Feedback & System States**. The [component board preview](../screens/feedback/18-feedback-system-states.png) shows all 5 feedback component sets aligned with Alongio's approved solid color-block visual language (matching Board 12) and the existing loading button.
- Open **01 — Authentication & Onboarding** (consolidated into 6 labeled **Feedback · …** sections below the approved Auth screens; 57 locked frames, 8 named `10F` review starts alongside the 3 original Auth flows):
  - **OTP verification (`10F · OTP · 320 / 390 / 440 / Reduced motion`)**: Tap **Verify email**. While verifying, press **I** for incorrect code, **E** for expiry, **R** for request failure, or **S** for confirmed verification. Resend code confirms with a non-shifting floating Matcha Green **Code sent** Toast (`S`) or solid Pink retry card (`R`).
  - **Login & Session (`10F · Auth · Login & Session`)**: Covers floating Butter Yellow **Session ended** Toast, inline email validation, solid Pink **Couldn't log in** retry card, and floating Matcha Green **Password updated** Toast.
  - **Create Account (`10F · Auth · Create Account`)**: Covers inline email/password validation, **Creating account...** loading CTA, floating Pink **Email already in use** Toast + inline notice (`E`), and **Couldn't create account** retry card (`R`), or continue to OTP (`S`).
  - **Password Recovery (`10F · Auth · Password Recovery`)**: Covers invalid email validation, **Sending reset link...** loading CTA, floating Matcha Green **Reset link sent** Toast (`S`), floating Pink **Couldn't resend the link** retry Snackbar (`R`), Reset password mismatch validation, **This reset link expired** recovery card (`E`), **Updating password...** loading CTA, and return to **Log in · Password updated** (`S`).
  - **Profile Setup (`10F · Auth · Profile Setup`)**: Covers required display name validation, **Saving profile...** loading CTA, and floating Pink **Couldn't save your profile** retry Snackbar (`R`).
- Preview [complete Auth flow](../screens/feedback/auth-flow-complete.png), [OTP compact](../screens/feedback/auth-otp-320.png), [OTP standard](../screens/feedback/auth-otp-390.png), [OTP large](../screens/feedback/auth-otp-440.png), [reduced motion](../screens/feedback/auth-otp-reduced.png), and [keyboard/sheet placement](../screens/feedback/placement-and-stress.png).

## Design and handoff

| Deliverable | What it covers |
| --- | --- |
| [Coverage matrix](coverage-matrix.md) | Approved actions, current feedback, gaps and recovery in all eight application areas |
| [Component specifications](component-specs.md) | Anatomy, variants, placement, accessibility, timing, queue and reduced motion |
| [Copy guidelines](copy-guidelines.md) | English and Indonesian recovery copy, privacy and confirmed outcomes |
| [Interaction audit](interaction-audit.md) | Native layout, precision gates, brand-consistency repairs and known limitations |
| [React Native handoff](react-native-handoff.md) | Proposed application responsibilities, service response mapping and real-device verification |

All Authentication flow surfaces (Log in, Create account, Verify email & Resend, Forgot password, Check your inbox, Reset password, Set up profile, and Session expired) are now represented with live instances of the Section 18 component sets. Non-Auth module integration remains paused for Stage C approval.
