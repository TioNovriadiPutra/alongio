# Alongio MVP 1 implementation readiness

**Recommendation: READY_WITH_CONDITIONS.** The approved master can enter Design System Consolidation and Design Handoff after owner review. Implementation of the full MVP remains gated by the affected routes and data decisions below. Alongio remains in DESIGN_ONLY.

## Design system findings

The saved master has 327 component masters, 51 component sets, 2,231 instances, 16 text styles and eight color variables. The responsive phases added 90 local masters outside the Components page to isolate changes to approved modules. Some encode module-specific visuals and others repeat shared construction.

| Area | Evidence in the master | Handoff requirement |
| --- | --- | --- |
| Navigation and device chrome | The original bottom bar FC-106 coexists with responsive Home FC-33405, Planner FC-33439, Diary FC-34850, Kitchen FC-35516, Us FC-37242 and Me FC-37523 masters. The old status bar FC-246 coexists with responsive status bar FC-33204. | Map each active tab and mode to one navigation contract. Specify equal tab widths, ≥48 px targets, content scroll boundaries, safe areas, and selected, pressed, focus and accessibility semantics. Treat status chrome as system-owned in runtime. |
| Actions and inputs | The base button family includes Primary FC-263, Secondary FC-265, Pressed FC-267 and Disabled FC-269. The Auth input family has empty, filled, focused and error specimens. Module controls also appear as locally authored frames and sets. | Document per-family default, pressed, focused, disabled and loading behavior. A single base pressed specimen does not cover secondary actions, row buttons, destructive actions, cards or tabs. Define secret visibility, autofill, validation and keyboard avoidance for inputs. |
| Cards, sheets and feedback | Diary feedback FC-34896–34906, Kitchen feedback FC-35617–35627, Profile notices, Couple Space status and Little Updates local category/read variants repeat content-driven patterns with distinct accents. | Consolidate the common layout contracts for title, copy, metadata, status, actions, and feedback. Keep each module’s existing visual hierarchy. Define a state mapping for skeleton, error and retry, disabled, accessible selection, and progress. |
| Tokens | The eight palette variables coexist with shared tints and several unlisted solid paints. Native text uses DM Sans and Space Grotesk. Approved text sizes such as 13, 13.5 and 15 are absent from the published typography ramp. | Reconcile the approved values into named roles and exception tokens. Establish font weight and line-height mapping and justify exceptions before changing any values. The current approved appearance is the baseline. |
| Artwork and platform assets | The master contains 4,928 editable vectors and zero embedded bitmap images. The project has licensed DM Sans and Space Grotesk font files under `design/fonts/`. Camera, gallery, status bar and keyboard visuals are design fixtures. | Name canonical mascot, icon, and hero sources. Define view boxes, safe padding, proportional sizing, and export settings. Approve production app icon and splash asset specifications and audit actual photo formats, crop behavior and accessibility descriptions. |

## Responsive contracts to specify during handoff

| Pattern | Expected runtime contract |
| --- | --- |
| Main screens and inbox | Safe-area-aware viewport, content-driven vertical sizing, and a scrollable body. Fix only navigation, actions and headers that the approved fixture anchors. Preserve scroll position on supported returns. |
| Bottom actions and sheets | Anchor the action group above the bottom system inset. Let sheet body and long descriptions scroll independently of close and footer controls. Specify Escape, hardware Back, swipe, outside tap, focus restoration, and destructive confirmation by state. |
| Wide and narrow cards | Preserve token padding, natural copy sizing and expanding height. Give metadata, unread indicators and independent actions space before wrapping text. The approved Little Updates artwork uses a flexible panel around a fixed-size vector scene within the verified range. |
| Text and keyboard | Carry the approved type family, weight and line height into text styles. Specify font scaling, field and caret visibility, IME composition, multiline behavior, and where an action moves when the keyboard opens. |
| State and route identity | Separate a screen's visual state from the runtime route, record or draft ID. Shared content needs independent access checks. The approved FigCraft keys and timed transitions are test fixtures. |

## Open product decisions

The classifications apply to the affected feature slice. Recommendations require owner approval. PD-01–PD-09 refer to the existing decision register. PD-10–PD-12 name the continuity gaps already identified in the flow audit.

| ID | Decision | Classification | Recommended MVP behavior |
| --- | --- | --- | --- |
| PD-01 | Verified email change | CAN_BE_DEFERRED | Keep the verified account email read-only in MVP 1, and preserve email correction before signup verification. |
| PD-02 | Personal Home and Personal/Couple transitions | BLOCKS_UI_IMPLEMENTATION | Give Personal Mode a private Home with the relevant launchers. Restore the last valid mode on sign-in. Switching changes the current view while retaining the partner relationship. Returning to Couple Mode requires an active connection or the existing connection flow. |
| PD-03 | Shared-data access after disconnect | BLOCKS_BACKEND_IMPLEMENTATION | Revoke access to partner-owned shared items promptly, preserve the creator’s private items, and restrict jointly owned records pending an explicit archive rule. Clear protected cached surfaces and keep stale notifications generic. Reconnecting requires fresh sharing. |
| PD-04 | Account deletion and retention | BLOCKS_BACKEND_IMPLEMENTATION | Keep the final action unavailable pending approval of data-treatment rules. For the approved release, require recent re-authentication and a clear consequences summary, remove owner-private content as defined by policy, and explicitly specify shared records, security records and retention by data type. |
| PD-05 | Read-on-open | BLOCKS_BACKEND_IMPLEMENTATION | Mark a notification read after its authorized destination opens successfully. Preserve manual single-item and mark-all controls. Use per-user read state across devices. |
| PD-06 | Notification retention | BLOCKS_BACKEND_IMPLEMENTATION | Use a configurable, disclosed retention window for routine inbox items. Expire notification copies independently of underlying records. Decide and document the window and a separate account-security rule before enabling retention jobs. |
| PD-07 | Notification defaults | BLOCKS_BACKEND_IMPLEMENTATION | Make in-app updates available independently of device notification permission. Enable scheduled reminders after the user opts in, leave optional shared and achievement pushes off until selected, and keep security communication on its own policy. |
| PD-08 | Protected deep links and safe fallback | BLOCKS_UI_IMPLEMENTATION | Check session and item access before displaying protected content. Restore the authorized destination after sign-in when possible. Restore the caller on Back or use the approved generic inbox fallback when access fails. Gate backend enforcement on the same access contract. |
| PD-09 | Explicit recipient decline | CAN_BE_DEFERRED | Keep existing sender cancellation and expiration in MVP 1. Recipients can leave or ignore the invitation while staying in Personal Mode. |
| PD-10 | Diary draft continuity | BLOCKS_UI_IMPLEMENTATION | Keep one draft ID across Mood, Visibility and photo routes. Confirm the returned change on the same draft, preserve the attachment and text on cancellation, and clear only after explicit discard or successful save. |
| PD-11 | Kitchen Magic attachment continuity | BLOCKS_UI_IMPLEMENTATION | Keep one request ID and the chosen attachment IDs across camera, gallery, replace, remove and retry. Preserve request text when attachment actions return, and keep selected attachments until success or explicit removal. |
| PD-12 | Meal planning continuity | BLOCKS_UI_IMPLEMENTATION | Keep selected recipe, date, meal type and visibility in one plan draft. Updating one selection preserves the others. Save atomically, return to the selected calendar date, and preserve the same meal ID through edit and delete confirmation. |

Review PD-02 and PD-08 before wiring the application shell. Confirm PD-03 and PD-04 before enabling destructive or access-changing behavior. Resolve the attention and permission rules before connecting notification services. The [final regression audit](final-regression-audit.md) records the evidence and defects. The [device checklist](device-test-checklist.md) records physical and accessibility tests required for release.
