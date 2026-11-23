# Phase 11A.2 motion audit

The editable master was reopened on **01 — Alongio Motion System**. It contains nine labeled sections, 17 named flows and 66 isolated interaction bindings. Every fixed motion destination resolves within the motion page. The original ten pages, global style and variable records, and approved prototype bindings match the pre-repair native snapshot. All 308 approved application frames remain locked and their PNG exports match the approved baseline byte for byte.

## Functional replays

| Pilot | Expected playback |
| --- | --- |
| A · Button | Press Continue, release inside to activate, then Try again. Leaving the button before release cancels. The button stays 56 px high. |
| B · Date | Open over the Edit Task draft. Close or choose Use November 19. The same Edit Task frame and trigger position return. |
| B · Time | Open over the same draft. Close or choose Use 7:00 PM. The same Edit Task context returns. |
| C · Task completion | Check Dinner together and select Undo. Both approved states appear in one persistent nested viewport. At compact height, scroll to reach the row and the success banner. |
| D · Celebration | Open Us starts the lean and settle. The settled Back arrow replays the sequence, and Open Us continues to the shared overview. Reduced motion starts on the approved still pose. |
| E · Navigation | The Home launcher opens Tiny Planner. Home in the Planner dock triggers native Back. |

All 36 functional cases passed after reopening the saved master. Each viewport had six standard and six reduced-motion cases, with Date and Time tested separately. The compact Date body scrolled while Close and Confirm held their exact presenter hit rectangles. Check and Undo repeated twice in every Planner case. The checkbox center moved 0.000 logical pixels between open, completed and restored states at the same scroll offset.

The 320 × 568 captures contain intermediate renders for both completion and Undo. At 390 × 844 and 440 × 956, the corresponding samples reached the final states before capture. Intermediate Planner motion at those two sizes is **NOT VERIFIED**. The returned Home capture matched the opening Home capture at all three sizes. At compact height the presenter returned Home at the top after scrolling to the launcher.

## Remaining verification limits

- Frame-exact transition timing, spring convergence and flicker between rendered checkpoints are **NOT VERIFIED**.
- iOS and Android safe areas, OS Reduce Motion, accessibility focus, device Back, native picker drag and snap points are **NOT VERIFIED**.
- The Date and Time pilots use approved sample values. Implementation needs actual input state and an accessible calendar.

[Visual regression report](visual-regression.md) · [Pilot review board](../screens/motion/00-pilot-review.png) · [Implementation handoff](react-native-handoff.md)
