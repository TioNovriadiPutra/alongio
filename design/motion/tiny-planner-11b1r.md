# Tiny Planner expressive motion

Phase 11B.1R · DESIGN_ONLY

Start on the Home application page and tap **Tiny Planner**. Open a task card and go Back to see the reverse push. For local effects and real sheet overlays, open **01 — Alongio Motion System** → **11 — Tiny Planner expressive motion** in the [editable master](../Alongio.figcraft). In the presenter, choose **11B.1R · Press, check, date and tabs**, **11B.1R · Create task accent**, or the **11B.1R · Date picker** and **11B.1R · Time picker** flows for the desired viewport. The [review board](../screens/motion/tiny-planner-11b1r-review.png) compares live before-and-after captures at 390 × 844.

## Interaction changes

The [binding-by-binding matrix](tiny-planner-11b1r-map.md) identifies the source, destination, old and new transition parameters, and per-binding evidence. The original interaction actions and destinations remain intact.

| Area | Revised behavior |
| --- | --- |
| Home launcher and Planner | Planner enters upward in 260 ms. The Home dock reveals Home as Planner moves down in 200 ms. The Plans dock takes the existing route immediately. |
| Task Details | The list goes left as Details pushes in from the right in 240 ms. Back reverses the direction in 200 ms. |
| Date and Time Picker | The named overlays use 280 ms upward entry and 200 ms downward dismissal with the approved backdrop. The application’s full-screen picker fixtures now switch immediately. Both paths keep the approved sample value and return to the existing Edit Task context. |
| Button, check and day | The button surface contracts while held and returns smoothly. The isolated checkbox shows a bounded glyph peak, then settles into the existing checked treatment. Tapping again reverses it. The calendar highlight grows within the unchanged day bounds. |
| Planner segments and Home/Plans | The named study moves a single active marker across the approved tab anatomy and changes selection emphasis. The application route switches immediately, keeping unrelated layout static. |
| Task created | The application reveals the approved Details screen with a directional slide. The local check accent is demonstrated in its named study. Routine completion and creation use no confetti. |

## Verification

| Check | Result | Evidence |
| --- | --- | --- |
| Functional actions | PASS | Tested at 320 × 568, 390 × 844, and 440 × 956. The main journeys exercised Home, task card and Back, repeat completion and Undo, Calendar to Agenda, Personal and Couple segments, creation, and both picker exit paths. The overlay flows exercised open, dismiss, reopen, and confirm. |
| Component controls | PASS | The primary press cancels on pointer leave. Both button targets remained 56 px high across three widths. The checkbox remained 48 × 48 px and the calendar fixture 50 × 48 px. The isolated tab and segment selectors switched to the other state and returned. |
| Resting visual fidelity | PASS | All 308 baseline exports matched the approved PNGs byte for byte. Home and the 53 Planner frames also matched across the three viewports for 162 exact comparisons. All six overlay starts and six overlay surfaces matched their approved Phase 11A counterpart renders. |
| Native preservation | PASS | The master was saved and reopened. All 308 original frames remain locked. All original layout properties, shared component masters, triggers, destinations, styles, and variables retain their previous values. Eight named starts live in a new isolated section. |
| Navigation and picker motion | PASS for sampled paths | Intermediate presenter captures show directional route motion. The Date and Time headers were lower in entry and exit samples than in the settled frame at all three sizes. The app fixture changes use no animation. |
| Local feedback | PASS for sampled studies | Presenter captures show the button surface change, the checked treatment, the calendar highlight expansion, and the moved segment and dock indicators. The isolated control geometry was reviewed for clipping and overlap. |
| Runtime and exact timing | NOT VERIFIED | The settings store the intended durations, curves, and spring values. Frame pacing, physical spring convergence, native scroll retention, keyboard, drag and interrupted gestures, and OS Reduce Motion require runtime testing. |

To reproduce the application journeys on a compact or tall viewport, set both the Home and Tiny Planner pages to the same custom size. FigCraft uses page-scoped prototype settings. QA set those values on disposable copies and kept the existing defaults in the saved master. Reduced-motion behavior is represented by the existing named Phase 11A reduced flows and documented in the [React Native handoff](react-native-handoff.md).

## Sampled movement

These are physical screenshot pixels. Positive vertical offsets mean lower than the settled position. Positive horizontal offsets mean farther right. Primary button measurements use a horizontal scan through the dark surface in the resting, held, and released captures. The touch surface held its original dimensions.

| Viewport | Planner entry Y | Details entry X | Planner Back X | Date sheet entry / exit Y | Time sheet entry / exit Y | Primary resting → held → released |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| 320 × 568 | +36 | +37 | −52 | +91 / +49 | +70 / +38 | 348 → 332 → 348 |
| 390 × 844 | +57 | +29 | −35 | +87 / +46 | +63 / +34 | 392 → 376 → 392 |
| 440 × 956 | +68 | +25 | −35 | +74 / +41 | +55 / +30 | 395 → 381 → 395 |

The Planner segmented indicator’s measured center at 390 × 844 was 848 → 949 → 950 px on selection and 848 px after returning to Overview. These snapshots establish movement and direction. They do not measure frame pacing or spring convergence.
