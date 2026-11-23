# Phase 11A.2 visual regression

The approved application frames in the FigCraft master provided the reference geometry and renders. For each test size, FigCraft reflowed the approved source in a disposable session. The picker surfaces were compared with the source sheets at their measured positions. The presenter was also played to capture the live backdrop, overlay and final states.

## Source and corrections

| Approved source | Motion states | Viewports | Measured difference and repair |
| --- | --- | --- | --- |
| Primary, Pressed and Secondary controls in the approved library | Continue, pressed, release handoff, and activation in both paths | 320 × 568 · 390 × 844 · 440 × 956 | The button specimen has no full application-screen counterpart. Its local headings used 28 px and 17 px type and the two states differed by 2 px and 4 px in heading and copy placement respectively. Both states now use the 24 px Space Grotesk heading and 16 px DM Sans body roles, with matching positions. The approved 56 px button height and 28 px radius are retained. Measured target widths are 280, 350 and 400 px. |
| FC-2169 Edit task | Six standard Date and Time entries and three shared reduced entries | All three | The entry forms retain the source tree. Open, Close and Confirm return to the same entry frame and trigger position. |
| FC-2221 Choose a date | Standard FC-43602, FC-44028, FC-44454. Reduced FC-48373, FC-46422, FC-48629. | All three | The native overlay had 44% Ink instead of the approved 28%. The old compact and tall reduced copies each had 42 horizontally shifted date labels. For example, the compact first `Date` label had local x 9.83 instead of 15.50 px. Rebuilt those reduced copies from the verified 390 px sheet, reflowing once at each width. The same 28% Ink was applied to every open binding. |
| FC-2427 Choose a time | Standard FC-43858, FC-44284, FC-44710. Reduced FC-47599, FC-46678, FC-48030. | All three | The 44% backdrop was corrected to 28%. Source and pilot measurements of 64 sheet nodes agreed at each width before and after the repair. The wheel, selected values, Clear time, and confirmation use the approved geometry. |
| FC-1601 Planner overview and FC-2736 Task completed | FC-48885 and FC-49314 interactive entries, checked variants, FC-49109 and FC-49538 final specimens, FC-49743 checkmark study | All three | The old pilot hid the tabs, hero and progress and moved the task list from y 467 to y 167 px. The replacement uses editable duplicates of the approved screens. The open and checked variants change inside a single scroll viewport. FC-49743 preserves the enlarged checkmark as a separate study, 22 × 15.5 px versus the approved 17 × 12 px. |
| FC-24808 Connection confirmed and FC-24250 Connected Couple Space | Rest FC-45216, lean FC-45276, settle FC-45336, reduced FC-48098, continuation FC-45396 | All three | The old pilot reduced identity-card bottom padding from 71 to 8 px and narrowed the standard Open Us control from 350 to 184 px by adding Reset. Restored the 71 px padding and full-width approved action. The existing Open Us starts the demonstration and the existing Back arrow replays it after the settle. Only two mascot vectors move during the lean. |
| FC-2 Home and FC-1601 Planner overview | Home FC-43098, Planner FC-43238, reduced FC-45521 and FC-45661, and returned Home | All three | The saved resting geometry already matched. Native dissolve and return bindings were retained. |

## Picker measurements

All values are in logical pixels, with x and y relative to the viewport. Standard and reduced sheets use the same measurements.

| Measurement | 320 × 568 | 390 × 844 | 440 × 956 |
| --- | --- | --- | --- |
| Date panel y / height | 12 / 556 | 251 / 593 | 363 / 593 |
| Date body height | 376 | 413 | 413 |
| Month grid x / y / width / height | 20 / 180 / 280 / 288 | 20 / 419 / 350 / 288 | 20 / 531 / 400 / 288 |
| Time panel y / height | 141 / 427 | 417 / 427 | 529 / 427 |
| Hour and minute groups, width × height | 85.33 × 144 | 108.67 × 144 | 125.33 × 144 |
| Hour and minute group x | 20 / 117.33 | 20 / 140.67 | 20 / 157.33 |
| Clear time x / y / width / height | 20 / 405 / 128 / 48 | 20 / 681 / 128 / 48 | 20 / 793 / 128 / 48 |
| Confirm x / y / width / height | 20 / 468 / 280 / 56 | 20 / 744 / 350 / 56 | 20 / 856 / 400 / 56 |
| Bottom indicator y | 547 | 823 | 935 |

The header is 80 px and the fixed confirmation region is 100 px. Both sheets have 24 px top corners, a centered 42 × 4 px handle 10 px below their top edge, and a 48 × 48 px Close control inset 20 px from the right. Wheel columns have 12 px gaps. The native calendar grid uses six 48 px rows. Its compact grid inherits the approved narrower day cells. The wired actions in these fixtures are Close and Confirm.

## Render evidence

The opaque portion of all 12 picker surface exports matched the corresponding approved source pixels exactly across 2,211,920 compared pixels. The comparison starts 24 px below each sheet's top to exclude rounded corners where the viewport backdrop is composited. Headers, corners, decoration, calendar, wheels, and footer were also compared using their native node properties. A compact Date scroll changed the body while the Close and Confirm hit rectangles stayed fixed.

Live overlay screenshots have sampling differences between the presenter’s full-screen and overlay textures. Some crops differ by one physical row. The native exports and live captures provide separate evidence. In the matched viewport captures for Planner completion, Couple confirmation, Home and the Planner navigation destination, all 12 resting pairs had zero RGB differences. The compact Planner and Couple comparisons use the same scrolled position on each side so the controls and confirmation are visible.

The native pass inspected 10,539 layer pairs across 69 source-to-state comparisons, with the button checked separately against the approved component specimens. An editor-only probe that forcibly changed the Planner component property between width changes reported six stale status-icon coordinates. In the live presenter, all 18 approved-to-pilot status-bar crops matched exactly across open, completed and restored states in standard and reduced motion.

## Visual quality gate

Results apply to the measured FigCraft viewports and captured states.

| Gate | A · Button | B · Pickers | C · Planner | D · Celebration | E · Navigation | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| V1 Approved geometry match | PASS | PASS | PASS | PASS | PASS | Native source comparisons and resting renders. A uses the approved component specimen. |
| V2 Spacing and padding | PASS | PASS | PASS | PASS | PASS | Measured local and viewport-relative bounds. The Planner offset and Couple padding are restored. |
| V3 Alignment | PASS | PASS | PASS | PASS | PASS | Button centering, picker columns and labels, Planner status icons, and fixed navigation were inspected. |
| V4 Typography | PASS | PASS | PASS | PASS | PASS | Font family, size, style, line height and wrapping were checked. |
| V5 Colors and decoration | PASS | PASS | PASS | PASS | PASS | Source paints and illustrations retained. Live picker dimming uses the approved 28% Ink. |
| V6 Clipping and overflow | PASS | PASS | PASS | PASS | PASS | Board has zero sibling overlaps or boundary violations. Compact scroll exposes the Date body, Planner Undo and Couple confirmation. |
| V7 Responsive consistency | PASS | PASS | PASS | PASS | PASS | Actual 320 × 568, 390 × 844 and 440 × 956 presentations, with approved reflow as the reference. |
| V8 Initial state | PASS | PASS | PASS | PASS | PASS | Default, Edit Task, unchecked, resting and Home captures were reviewed. The button copy is pilot-specific. |
| V9 Final state | PASS | PASS | PASS | PASS | PASS | Activation, settled overlays, checked row, settled mascots and navigation destination were reviewed. |
| V10 Layout drift | PASS | PASS | NOT VERIFIED | PASS | PASS | Planner measured 0.000 px drift through the resting states at all sizes. Intermediate Planner renders were captured at 320 × 568 only. The mascot movement is confined to the intended lean. |
| V11 Working interactions | PASS | PASS | PASS | PASS | PASS | 36 successful functional presenter cases after reopening the saved master. |
| V12 Presenter render inspected | PASS | PASS | PASS | PASS | PASS | Visual review of actual presenter captures, including sampled transitions and settled states. |

Frame-exact timing, spring convergence, transient flicker between samples, and physical device behavior are **NOT VERIFIED**. Independent mascot accent timing and the enlarged checkmark remain studies.

[Button comparison](../screens/motion/visual-compare-button.png) · [Compact comparison](../screens/motion/visual-compare-320.png) · [Standard comparison](../screens/motion/visual-compare-390.png) · [Tall comparison](../screens/motion/visual-compare-440.png)
