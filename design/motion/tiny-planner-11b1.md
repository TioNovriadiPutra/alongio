# Tiny Planner motion integration

Phase 11B.1 · DESIGN_ONLY

Open the [editable master](../Alongio.figcraft) and start at Home for the application journey. On **01 — Alongio Motion System**, open **10 — Tiny Planner interaction studies** for **11B.1 Planner · Press and selection feedback** and **11B.1 Planner · Reduced feedback**. The board includes native FigCraft presenter captures. [Review board](../screens/motion/tiny-planner-11b1-review.png)

## Application bindings

The 80 updated bindings are on 18 source frames. Each keeps its existing trigger, action, destination, and position in the interaction list. The updates use native FigCraft dissolves with the approved Enter curve `(0.2, 0.8, 0.2, 1)` or Exit curve `(0.4, 0, 1, 1)`. Back actions retain the existing history behavior.

| Binding family | Count | Duration | FigCraft source frame IDs |
| --- | ---: | --- | --- |
| Home tile, Plans tab, Home dock, task card and details Back | 16 | 220 ms | FC-2, FC-1601, FC-1712, FC-1816, FC-2122, FC-2736, FC-2843, FC-4098, FC-5183 |
| Button and field activation | 12 | 220 ms for route changes, 180 ms for state changes | FC-1601, FC-1712, FC-1816, FC-2024, FC-2073, FC-2122, FC-2169, FC-2736, FC-2843 |
| Existing tabs, segments, and agenda shortcuts | 36 | 180 ms | FC-1601, FC-1712, FC-1816, FC-2736, FC-4098, FC-4208, FC-5183, FC-5710, FC-5856, FC-6000 |
| Task creation, completion, and Undo | 9 | 180 ms | FC-1601, FC-1712, FC-1816, FC-2073, FC-2122, FC-2736, FC-2843 |
| Calendar sample selection | 1 | 180 ms | FC-1816 |
| Date and Time Picker open | 2 | 240 ms | FC-2169 |
| Date and Time Picker confirm and dismiss | 4 | 180 ms | FC-2221, FC-2427 |

Creation opens the existing Task Details fixture. Completion and Undo use the existing row and banner states. Routine feedback uses no celebration particles. The isolated studies use the approved secondary button, day 19 cell, and PM control geometry. The standard specimens use 90 ms down and 140 ms return. The reduced-motion specimens apply their state changes immediately. The existing Phase 11A sheet overlays retain their upward entry and downward exit.

## Functional and responsive QA

The reopened master was exercised in the FigCraft presenter at **320 × 568**, **390 × 844**, and **440 × 956**. All 30 representative interaction checks passed, ten at each size. Every modified binding was also verified against the original graph at the node level.

| Presenter check | 320 × 568 | 390 × 844 | 440 × 956 | Evidence |
| --- | --- | --- | --- | --- |
| Application journeys | PASS | PASS | PASS | Home tile and Plans open Tiny Planner. Home dock returns. Task card opens Details, and Back returns to Planner. Repeated checkbox and Undo reach the correct states. Calendar day 19 opens the agenda. Personal and Couple segments switch correctly. Date and Time both confirm and dismiss to the same Edit Task fixture with the same trigger bounds. Create opens approved Details. |
| Reduced navigation | PASS | PASS | PASS | Live round trip in the isolated reduced flow. |
| Primary button, standard and reduced | PASS | PASS | PASS | Hold, release inside, verify destination, then reset and verify the original touch bounds. |
| Secondary, calendar, and PM studies, standard and reduced | PASS | PASS | PASS | Same touch geometry before and after press. Secondary is 280, 350, or 400 × 56 px at the corresponding test size. The sample day cell is 50 × 48 px and PM is 108.67 × 48 px. |
| Isolated task completion and Undo, standard and reduced | PASS | PASS | PASS | The existing specimens toggle in place and restore the original checkbox bounds. The compact studies were scrolled to the target. |
| Isolated Date and Time overlays, standard and reduced | PASS | PASS | PASS | Open, dismiss, reopen, and confirm each sheet. Overlay identity and return to the underlying frame were checked live. |

At the compact viewport, scrolling reached the Home launcher and controls below the fold. Edit Task’s date and time triggers returned to the same position after confirmation and dismissal. The approved calendar’s compact day cell is narrower than the 50 px study specimen. Phase 11B.1 preserves that approved geometry.

FigCraft stores the responsive presentation size per page. If only Home is set to a compact or tall size, Planner can open at the default 390 × 844. For cross-page testing, both pages were set to the same custom viewport in disposable QA copies. The presenter reported the requested logical size after each tested application action. The saved master retains its approved presentation settings.

## Visual regression and motion quality

| Check | Result | Evidence |
| --- | --- | --- |
| Approved baseline at 390 × 844 | PASS | All 308 exported application PNGs matched the approved Phase 9 renders byte for byte. |
| Responsive resting states | PASS | 162 exact pre/post matches from 54 frames at three sizes. The sample covers Home and all 53 Tiny Planner frames. |
| Editable master, protection, and existing connections | PASS | Saved and reopened the master. All 308 approved roots were verified locked. Native comparison found the 80 expected binding changes, one isolated study section, and two new flow starts. All original destinations, page hierarchies, styles, variables, and earlier motion pilots were preserved. |
| Press feedback and continuity | PASS | Sampled control pixels changed on press and matched the resting sample exactly after release in all 18 captures (three controls, two modes, three sizes). Pointer checks verified stable hit geometry. The isolated section export was visually reviewed for clipping, alignment, and overlap. |
| Picker presentation | PASS for the supported FigCraft representations | Application picker links dissolve between approved full-screen states. The isolated standard overlays show the sheet moving up from below and back down. Reduced overlays open and close immediately. |
| Measured playback duration, frame-by-frame intermediate geometry, and performance | NOT VERIFIED | Native metadata confirms the configured duration and easing. The presenter checks and captures do not measure elapsed time or frame pacing. |
| Changing arbitrary picker values, OS reduced motion, and device behavior | NOT VERIFIED | The prototype has the approved November 19 and 7:00 PM fixtures. Keyboard, native gestures, platform motion preference, and runtime list offset require device testing. |

The primary press animation and in-place checkbox effect are represented by the isolated Phase 11A specimens. The approved app graph changes between screen fixtures for those outcomes. A fixture change can restore the destination’s approved scroll position. Runtime focus, draft continuity, and scroll preservation are covered in the [React Native handoff](react-native-handoff.md).

For both standard overlay pilots, the sheet header appeared below its settled position during entry and moved below that position again during dismissal. The measured offsets below use presenter screenshot pixels. Positive values mean that the header was lower on screen. The samples verify direction only.

| Viewport | Date entry / dismissal | Time entry / dismissal |
| --- | ---: | ---: |
| 320 × 568 | +33 px / +82 px | +59 px / +33 px |
| 390 × 844 | +32 px / +40 px | +54 px / +30 px |
| 440 × 956 | +55 px / +36 px | +47 px / +25 px |
