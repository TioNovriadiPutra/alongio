# Phase 10F verification

The tests below cover the proposed library and the isolated Authentication pilot. The 308-frame application baseline is the source for comparisons. Results describe FigCraft and the written contract.

## Feedback gates

| Gate | Result | Evidence |
| --- | --- | --- |
| F1 Coverage | PASS | Coverage matrix traces approved action families, outcomes, gaps, and recovery across all eight application areas. |
| F2 Success and failure semantics | PASS | The verification and resend pilots enter separate pending states and require distinct outcome triggers. Invalid and expired code have different recovery. |
| F3 Surface choice | PASS | Field validation sits by the code or email. Blocked operations have persistent recovery. Resend confirmation uses a dismissible Toast. Existing Undo and confirmation patterns remain visible as library references. |
| F4 Variable bindings | PASS | Inspected 131 native fill/stroke bindings across 20 new variants and the existing loading-button specimen. All new colors resolve from the canonical palette names. |
| F5 Message contrast | PASS | Ink/cream 13.18:1, muted/cream 4.82:1, and the five ink/accent pairings range from 6.12:1 to 10.49:1. Checked the authored feedback text and symbols. |
| F6 Placement and safe areas | PASS | Authored keyboard and sheet fixtures were inspected at all three logical sizes. The scroll region and keyboard boundary meet without overlap. The long notice and both sheet actions stay inside the authored compact bounds. Real system inset and IME behavior remain pending. |
| F7 Loading and dismissal | NOT VERIFIED | Verify and Resend remained pending until a simulated result. The Toast was dismissed manually and by its 4 s timer. The notification queue, OS/background timers, and assistive pause behavior are specified and awaiting runtime verification. |
| F8 Retry and Undo | NOT VERIFIED | Repeated Verify Retry and Resend Retry replayed in the pilot. The reusable Undo specimen and compensating-action contract were inspected. No new live Undo pilot or backend operation was exercised. |
| F9 No unintended layout changes | PASS | Native comparison found exact equality for all 308 approved application trees and their saved interactions. |
| F10 Navigation destinations | PASS | Stored pilot actions resolve to pilot states or the existing Set up profile destination FC-1036. Presenter replay reached that destination after the verified state. |
| F11 Responsive integrity | PASS | 39 native fixture renders and 66 component width cases. Presentable narrow pilot actions remained reachable through scrolling. |
| F12 Presenter interaction | PASS | FigCraft desktop presenter was exercised with actual pointer presses, simulated service-result keys, and elapsed dismissal. The three sizes and the reduced fixture were replayed independently. |
| F13 No false success | PASS | Pending authoring has no automatic success route. Success is gated by a positive simulated service outcome. Backend truth and idempotency still require implementation validation. |
| F14 Reduced-motion alternative | PASS | The named 390 × 844 reduced fixture renders the same code, pending, failure and Retry outcomes with instant transitions. OS preference changes, intermediate motion smoothness and platform gestures are not verified. |
| F15 Approved baseline | PASS | 42,180 existing native nodes are byte-equivalent as parsed JSON. The one existing node change is the new section membership on the Design System page. Original styles, variables, prototype data, and version-history entries are preserved. |

The source master opened for this task already had zero direct locks on the 308 application frame roots. Its existing autosave has 308 direct locks. Phase 10F preserved both current and historical states. Lock restoration on the application roots requires separate authorization. Phase 10F's 39 new frames and designated component instances were locked and checked after saving. The board header accents and copied decorative layers have native locks.

## Design precision

Counts refer to the relevant new-family nodes or pilot fixtures. A finding shared by repeated frames is recorded by its underlying layout issue.

| Gate | Result | Inspected | Found | Corrected | Unresolved | Evidence |
| --- | --- | ---: | ---: | ---: | ---: | --- |
| A1 Spacing | PASS | 50 native layout containers | 1 | 1 | 0 | Added a 12 px gap between code and feedback cards in affected OTP states. Checked padding and gap scale. |
| A2 Icon centering | PASS | 25 status symbols | 0 | 0 | 0 | Maximum measured center deviation 0.005 px. |
| A3 Button content | PASS | 14 action/dismiss controls | 0 | 0 | 0 | Combined content centered, with 48 px minimum bounds. |
| A4 Text sizing | PASS | 43 component text layers | 0 | 0 | 0 | Single-line content uses width-and-height auto sizing. Wrapping content uses automatic height. |
| A5 Component consistency | PASS | 21 specimens, 66 width cases | 0 | 0 | 0 | Same slot, target, and padding rules across each family. Content determines height. |
| A6 Screen alignment | PASS | 39 pilot and placement frames | 1 | 1 | 0 | Compact OTP variants share corrected header and field spacing. Expanded sizes inherit approved structures. |
| A7 Whitespace | PASS | 39 fixtures and 5 board families | 1 | 1 | 0 | Adjusted compact OTP passive spacing and kept the existing standard/tall safe-area structure. |
| A8 Visual integrity | PASS | 39 renders and 375 width-case bounds | 3 | 3 | 0 | Fixed component-set outline crossings, clipped compact sheet notice, and keyboard validation placement. |
| A9 State consistency | PASS | 30 standard-size-class OTP states plus 3 reduced states | 1 | 1 | 0 | Normalized compact intro alignment across ready, pending, failed, and expired cases. |
| A10 Editability | PASS | 143 measured library layers and 39 fixtures | 0 | 0 | 0 | Editable text and vectors, native instances and layout. Locks verified from saved data. |

## Responsive results

| Viewport | OTP states | Placement fixtures | Result |
| --- | ---: | ---: | --- |
| 320 × 568 | 10 | 2 | Compact pilot routes replayed. Retry and Setup Profile can require scrolling. The compact keyboard fixture keeps the email field and inline error together above the keyboard. |
| 390 × 844 | 10 plus 3 reduced | 2 | Normal and reduced journeys replayed. Manual and timed Toast dismiss were verified. |
| 440 × 956 | 10 | 2 | Full pilot journeys replayed, with larger text containers and the same fixed action hierarchy. |

| Gate | Result | Evidence |
| --- | --- | --- |
| R1 Width adaptation | PASS | Measured 21 specimens at each of 280, 350 and 400 px content widths. |
| R2 Height adaptation | PASS | Replayed the exact compact, standard, and tall viewports. Panel heights adapted to wrapping and compact actions were reached. |
| R3 Safe areas | NOT VERIFIED | Authored clearance measured. OS-safe-area behavior remains a physical device test. |
| R4 Text layout | PASS | Measured automatic sizing and stress-copy wrapping. Runtime font scale and all localized strings remain open. |
| R5 Component stability | PASS | 375 descendant bounds checks across 66 cases. |
| R6 Scroll behavior | PASS | FigCraft scrolled to compact OTP actions and hit their saved targets. Native scroll physics require implementation. |
| R7 Keyboard adaptation | NOT VERIFIED | Inspected and rendered the authored keyboard fixture. Native IME focus, accessory height and resize remain open. |
| R8 Visual fidelity | PASS | Approved OTP and Login geometry formed the pilot source. Review previews were checked against approved references. |
| R9 Presenter responsiveness | PASS | Presenter reported each target responsive viewport and replayed its scoped flow. |
| R10 Cross-device verification | NOT VERIFIED | Three logical sizes verified. Physical iOS/Android, touch gestures, and assistive technology remain open. |

**Responsive defect totals.** Two placement fixtures showed compact defects during review and were corrected. Shared compact OTP spacing was corrected at its source pattern. Zero targeted OTP actions were unreachable after scrolling. The static compact preview shows the initial fold, so actions below it require presenter scrolling.

## Handoff conditions

Verify the queue, focus trap and restoration, priority and pause behavior, cancellation of operations, intermediate animation timing, actual authentication/service outcomes, transaction reconciliation, OS keyboard and accessibility settings before rollout. Visual approval of the pilot remains with the owner.
