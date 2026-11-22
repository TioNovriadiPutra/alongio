# Alongio final responsive regression audit

**Recommendation: READY_WITH_CONDITIONS.** The approved FigCraft master is ready for Design System Consolidation and handoff preparation after owner review. The Personal Mode and protected-route decisions, continuity contracts and device checks still gate implementation of the affected features. Alongio remains in DESIGN_ONLY.

## Scope and preservation

| Module | Approved frames checked | Locked |
| --- | ---: | ---: |
| Home | 1 | 1 |
| Authentication & Onboarding | 21 | 21 |
| Tiny Planner | 53 | 53 |
| Heart Diary | 36 | 36 |
| Little Kitchen, including Kitchen Magic | 120 | 120 |
| Couple Space | 18 | 18 |
| Profile & Settings | 39 | 39 |
| Little Updates | 20 | 20 |
| **Total** | **308** | **308** |

The live MCP snapshot equals the approved Phase 8 snapshot across the native page trees, styles, variables, typography, paints, vector geometry, locks and named flows. All 308 authored frames still measure 390 × 844. The master was clean before and after the audit and its SHA-256 remained `6a141f94fe5b8b572ba86fa9c7f01a64682d1752ab2fc751e6b9d3731dcd03bb`. The audit used a disposable presenter copy and a separate unsaved native geometry session.

### Responsive viewport sweep

Each size includes 308 native frame resizes for geometry and 308 FigCraft presenter inspections. The presenter applied device settings per page, verified the reported responsive viewport, and scrolled when a target was outside the current viewport or partly clipped. Target visibility required a usable rectangle, with smaller authored bounds measured independently. Routes were then exercised with actual taps, simulated keys or timers. The table counts the two original Undo bindings separately. The scroll column records frames that received a wheel probe during this sweep.

| Logical viewport | Frames | Foreground target bindings reached | Frames with a scroll probe | Frames with unreachable actions |
| --- | ---: | ---: | ---: | ---: |
| 320 × 568 | 308 | 1,326 | 142 | 0 |
| 360 × 640 | 308 | 1,326 | 91 | 0 |
| 375 × 667 | 308 | 1,326 | 76 | 0 |
| 390 × 844 | 308 | 1,326 | 0 | 0 |
| 402 × 874 | 308 | 1,326 | 0 | 0 |
| 430 × 932 | 308 | 1,326 | 0 | 0 |
| 440 × 956 | 308 | 1,326 | 0 | 0 |

**2,156 native geometry cases and 2,156 presenter cases.** The native inspection captured **35,000** horizontal bounds checks, **2,009** checks on text inside clipped parents, **12,859** sibling-overlap checks and **14,427** centering checks. It found no out-of-bounds functional content, unintended overlap, or centering drift on the covered elements. Fixed controls maintained position during the sampled scrolls. Authored artwork crops and masked geometry are intentional. Native safe areas, OS keyboard behavior, physical scrolling and accessibility font scaling remain **NOT VERIFIABLE** here.

### Visual baseline

The saved native snapshot is identical to the approved responsive master. The audit also generated 308 temporary 390 × 844 renders and visually reviewed representative surfaces from all eight modules at the baseline and at short and tall sizes. For 233 screens with individual responsive PNGs, the largest material-pixel difference was **0.106%**, sampled at 98 × 212 with a summed RGB threshold of 60. The other 75 inventory PNGs come from the earlier design archive and include known differences from the approved responsive phases. Home, Auth and Planner use their current responsive boards and saved native geometry for baseline evidence. The audit retained the cream canvas, branded type, module accents and vector mascots in the unchanged master.

### Responsive gate

| Gate | Result | Evidence |
| --- | --- | --- |
| R1 Horizontal adaptation | PASS | All 308 frames resized at seven widths. No functional horizontal overflow in native bounds. |
| R2 Vertical adaptation | PASS | Every foreground action reachable across 2,156 presenter cases. Modal actions and fixed bottom controls remained reachable at the smallest size. |
| R3 Safe areas | NOT VERIFIABLE | Authored status and bottom-inset patterns were inspected. Physical OS insets remain pending. |
| R4 Text layout | PASS for designed fixtures | Native bounds and text inside clipped parents checked. Dynamic font scaling and locale stress remain device tests. |
| R5 Component stability | PASS for effective controls | Repeated layout and centering checks passed. The Undo wrapper is 63 × 48; its redundant child binding is listed below. |
| R6 Scroll behavior | PASS in FigCraft | Scrolling restored access at short viewport sizes. App scroll physics and system gestures still require device validation. |
| R7 Keyboard adaptation | NOT VERIFIABLE | The Auth and Kitchen Magic keyboards are authored fixtures. OS resize, IME and avoidance require the device matrix. |
| R8 Visual fidelity | PASS | Approved native snapshot preserved. Representative raster checks covered all module identities and responsive exports. |
| R9 Prototype responsiveness | PASS | The presenter reported all seven distinct responsive viewports. Tap replays verified representative reachable journeys. |
| R10 Cross-device coverage | PASS for logical viewports | All requested logical sizes completed. See the [physical device checklist](device-test-checklist.md). |

## Cross-module playback

**32 distinct journeys passed at 320 × 568, 390 × 844 and 440 × 956**, for **96 successful replays**. Initial automation misses from tapping before a scroll settled were rerun after settling the viewport. The Planner date-sheet script was corrected to start that sheet from the existing Edit Task route. Separate checks opened Planner Undo by tapping outside its label at all seven sizes.

| Path | Live evidence |
| --- | --- |
| First run, sign-in and reset | [FC-547](screen-inventory.md#fc-547) → [FC-595](screen-inventory.md#fc-595) → [FC-648](screen-inventory.md#fc-648) → [FC-707](screen-inventory.md#fc-707) → [FC-757](screen-inventory.md#fc-757) → [FC-849](screen-inventory.md#fc-849) → [FC-892](screen-inventory.md#fc-892) → [FC-1456](screen-inventory.md#fc-1456) → [FC-1360](screen-inventory.md#fc-1360) → [FC-1036](screen-inventory.md#fc-1036) → [FC-1072](screen-inventory.md#fc-1072) → [FC-1410](screen-inventory.md#fc-1410) → [FC-24396](screen-inventory.md#fc-24396) → [FC-24624](screen-inventory.md#fc-24624) → [FC-24656](screen-inventory.md#fc-24656) → [FC-24752](screen-inventory.md#fc-24752) → [FC-24808](screen-inventory.md#fc-24808) → [FC-24250](screen-inventory.md#fc-24250) → [FC-2](screen-inventory.md#fc-2). Sign-in timer reached Home. The reset review key led to password reset and Login. Personal setup reached Me and Us. |
| Home, Planner and Growth | Home opened Planner, Diary, Kitchen, Us, Me and the inbox. Planner task creation, completion and agenda return worked. The date sheet closed to Edit Task by native history. The independent partner routine review key led to Together Growth. |
| Heart Diary | Home opened the private flow. Mood dismissal used native history. Photo preview and explicit sharing completed through the approved examples. A partner memory returned to its shared overview without exposing private preview content. |
| Little Kitchen and Kitchen Magic | Text request to suggestions, combined camera request to recipe details, failed-upload recovery, and recipe scheduling to the shared meal plan all played. |
| Couple Space and Profile | Home reached Us and its shared Planner route. Disconnect cancellation kept the connected fixture. Profile edit and save reached the updated state, logout returned to Login, and the final deletion action stayed disabled. Personal Me reached Plans and Us. |
| Little Updates | The Home bell reached the inbox. Task, shared Diary and Kitchen notification routes returned via native history. Account and expired invitation routes opened their saved destinations. Manual read actions, older read history, retry, and deleted, inaccessible and revoked-content fallback routes played. |

The saved graph contains **1,633 screen actions**, including **26 native Back actions**, and **four component-only transitions**. All previously inventoried screen actions are still present. The responsive Undo wrapper added the existing-to-current route count difference of one. There are **53 named starts and zero invalid fixed destinations**. Graph checks enumerate saved actions including underlays and keys; the playable matrix counts unique foreground tap nodes. Shared Diary notifications use the approved generic copy. The privacy checks cover authored scope, copy and routes. Live authentication, protected data access, push delivery and policy enforcement require implementation and device or service validation.

## Remaining defects and limitations

**Severity totals:** zero critical or high responsive defects, four medium prototype continuity limitations and one low duplicate binding. The decisions below can still block the affected implementation work.

| Severity | Finding and exact evidence | Disposition |
| --- | --- | --- |
| Medium | **Diary draft attachment.** [FC-11270](screen-inventory.md#fc-11270) → [FC-11728](screen-inventory.md#fc-11728) → [FC-11160](screen-inventory.md#fc-11160). Set mood returns from the attached draft to the generic no-photo draft. Reproduced at 320 × 568, 390 × 844 and 440 × 956. | PD-10. Carry one draft identity through Mood, Visibility and photos. |
| Medium | **Kitchen Magic photo selection.** Shelf and counter attachment taps at [FC-19168](screen-inventory.md#fc-19168) (layers 21028 and 21041) open the same [FC-19266](screen-inventory.md#fc-19266) sheet and both remove into [FC-21336](screen-inventory.md#fc-21336). Reproduced at 320 × 568, 390 × 844 and 440 × 956. | PD-11. Specify a per-attachment identity and preserve the request across actions and retries. |
| Medium | **Meal date and type.** [FC-17057](screen-inventory.md#fc-17057) → [FC-17291](screen-inventory.md#fc-17291) → [FC-17681](screen-inventory.md#fc-17681) → [FC-17487](screen-inventory.md#fc-17487) → [FC-17803](screen-inventory.md#fc-17803). Selecting Lunch after Saturday returns to the Friday Lunch specimen. Reproduced at 320 × 568, 390 × 844 and 440 × 956. | PD-12. Keep both selections in the same plan draft. |
| Medium | **Inbox read history.** [FC-31896](screen-inventory.md#fc-31896) → [FC-32229](screen-inventory.md#fc-32229) → [FC-32340](screen-inventory.md#fc-32340) → [FC-31992](screen-inventory.md#fc-31992) → [FC-31896](screen-inventory.md#fc-31896). Earlier updates and Back reload the original unread example after marking one notification read. Reproduced at 320 × 568, 390 × 844 and 440 × 956. | PD-05. Preserve per-user state across history, Back and refresh. |
| Low | **Duplicate Undo binding.** [FC-2736](screen-inventory.md#fc-2736) at all seven listed viewports. Text layer 2842 has a 36 × 20 binding nested in active wrapper 2841. The wrapper measures 63 × 48 and successfully opens [FC-1601](screen-inventory.md#fc-1601) from outside the label at all seven sizes. | Use one target and one accessible control when consolidating the pattern. |

Each continuity limitation is part of the approved fixture structure and exists at the baseline. They do not change the responsive reachability totals. The [readiness assessment](implementation-readiness.md) classifies the 12 open decisions, identifies duplicate families and missing interaction-state coverage, and defines handoff conditions. The [device checklist](device-test-checklist.md) covers the remaining physical, accessibility, and system tests.

Wait for owner review before starting consolidation, handoff execution or React Native work.
