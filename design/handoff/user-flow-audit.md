# Alongio Global UX Integration Audit

See [Phase 9 cross-module playback](final-regression-audit.md#cross-module-playback) for live replay results on the approved responsive master. The original integration findings and product decisions below describe the simulated states.

## Review result

The saved FigCraft prototype is ready for integration review in **DESIGN_ONLY**. The connected Home, simulated Authentication and basic Tiny Planner workflows are wired through existing frames. Personal Home and product access rules remain open. Use the named FigCraft starts for first run, sign in, password-reset email, Tiny Planner tasks, partner check-in, and alternative invitation outcomes.

| Verification | Result |
| --- | --- |
| FigCraft saved and reopened | Native editable master, clean after reload |
| Approved current frames | 308 of 308 present, 390 × 844, individually locked |
| Native visual comparison | 24,259 nodes retain inspected properties, hierarchy, child order, and lock states |
| Raster comparison | 308 of 308 new 2× renders are byte-for-byte identical to the approved previews |
| Shared component switches, design styles, variables | Existing switches, visual layer properties, styles and variables match baseline |
| Prototype actions | 266 planned node edits verified, including removal of 12 selected recipe-tab reloads and two Personal Me jumps into Couple Home |
| Graph checks | 36 audit gaps rechecked, 25 route sequences checked, 0 invalid fixed destinations |
| Live presenter checks | Splash reached Welcome. Login loading reached connected Home across pages, and the presenter registered all 63 expected hotspots across 31 frames, including nine on Home. |
| Input limitation | The desktop automation pipe was unavailable. Other actions, scenario keys and history returns were verified from their saved bindings. Tap and keyboard playback remain for manual review. |

Authentication, email, task mutation, partner events and generated recipe results use sample screens. Flow verification does not establish data persistence, credentials, permissions, keyboard behavior or device delivery. The [navigation map](navigation-map.md) contains the original and updated action counts, individual gap dispositions, route checks and simulation keys.

## Findings and disposition

| Finding | Result | Verified correction and remaining risk |
| --- | --- | --- |
| B-01 Home disconnected | RESOLVED for the approved connected Home | [FC-2](screen-inventory.md#fc-2) opens Planner, Diary, Kitchen, Us, Me and Little Updates, plus the matching Dinner together task. Home remains selected. The Personal Home destination is BLOCKED_BY_DECISION under PD-02. |
| B-02 Auth disconnected | RESOLVED for authored simulated flows | All 21 Auth frames now have an active exit. Sign-in reaches the connected Home. Registration can continue through partner connection to Home. Personal registration uses [FC-29199](screen-inventory.md#fc-29199) as a review landing, with its product Home blocked under PD-02. Password-reset email and sign-in failures are simulated. |
| B-03 Tasks disconnected | RESOLVED for the approved task sample | [FC-2024](screen-inventory.md#fc-2024) fills the Dinner together sample, then saves to matching details, completes, shows feedback and returns to Planner. Edit, delete confirmation, date, time, reminder and visibility have routes. Deletion plays the last-task empty example. Other tasks and calendar dates require corresponding state examples or real data. |
| H-01 Mode and access | PARTIAL / BLOCKED_BY_DECISION | Personal Me and unconnected or disconnected Us open [FC-5710](screen-inventory.md#fc-5710). Connected tabs use their connected frames. PD-02 and PD-08 govern the Personal Home, retained link while viewing Personal content, and guarded cross-module and deep-link access. PD-03 governs shared-content treatment after disconnection. |
| H-02 Diary draft and sharing context | PARTIAL | Closing Mood or Visibility now returns to the caller via native history. The generic Set mood example can still replace attached-draft state. Sharing across exemplar entries holds no real identity, attachment persistence or permissions. The connected-access rule remains BLOCKED_BY_DECISION (PD-08). |
| H-03 Independent check-in and Growth | RESOLVED for the approved sample | P on [FC-4785](screen-inventory.md#fc-4785) opens [FC-4865](screen-inventory.md#fc-4865) as a modeled event from Alex. The route connects to monthly history and Together Growth. Back from monthly history restores its caller. Fixture totals do not update from a data model. |
| H-04 Notification return | PARTIAL / BLOCKED_BY_DECISION | Task, shared-memory, meal and Preferences Back use native history. The fallback sample routes for deleted, inaccessible and unshared records still return to the inbox. Signed-out and wrong-account access require PD-08. |
| H-05 Kitchen request and scheduling continuity | PARTIAL | Attachment-sheet Close uses native history. The two attachment actions still share one approved request fixture. Existing specimens cannot demonstrate every attachment identity or the combined changed date and type outcome. Request and meal persistence remain unverified. |
| M-01 Back and selected controls | PARTIAL | Recipe details and saved details use presenter history; 12 selected Ingredients or Method links no longer reload their current state. Editable request fields still use static fixtures with no runtime focus or text editing. |
| M-02 Invite code validation | RESOLVED for approved examples | I and E on [FC-24656](screen-inventory.md#fc-24656) expose unknown and expired outcomes. Find partner preserves the success sample. Pending Check invitation is simulated acceptance. Recipient decline remains BLOCKED_BY_DECISION (PD-09). |
| M-03 Inbox read state and delivery | BLOCKED_BY_DECISION | The existing Mark all as read, read history, retry and notification preference examples remain available. Earlier updates can reset the single-read fixture. Applying a policy for read-on-open, retention, and permission defaults requires PD-05 through PD-07. |
| M-04 Modal dismissal | PARTIAL | Task sheets use X with native history and explicit confirm routes. Destructive task cancellation and X share history behavior. Existing authored backdrop actions remain recorded under scrims. Native system Back, outside taps, gestures, and focus restoration need playback or device verification. |
| M-05 Recovery examples | RESOLVED for review coverage | Required workflows and representative Planner/Auth recoveries have routes. Dormant samples have named starts and exits. |
| M-06 Keyboard and long content | NOT VERIFIED | The approved keyboard and input examples remain static. Dynamic text, keyboard safe areas, long content and touch accessibility require device testing. |

Account email changes and account deletion are **BLOCKED_BY_DECISION**. Unverified signup email can return to registration. The existing account deletion confirmation retains its disabled final action. No real task data or user accounts are affected. [Open product decisions](open-product-decisions.md)

## The original 45 unreachable frames

**33 REQUIRED_REACHABLE** frames now have an app-root path, including simulated review keys. **12 REVIEW_ONLY** frames have named entry points. No frame was classified as obsolete or removed. The personal connection gates are reviewable while automatic routing remains blocked by PD-02 and PD-08. No frame is unreachable once named starts are included.

| Frame | Classification | Verified entry or review rationale |
| --- | --- | --- |
| [FC-595](screen-inventory.md#fc-595) Welcome | REQUIRED_REACHABLE | [FC-547](screen-inventory.md#fc-547) · Timer 1000 ms (547). |
| [FC-648](screen-inventory.md#fc-648) Onboarding · Tiny Planner | REQUIRED_REACHABLE | [FC-595](screen-inventory.md#fc-595) · Get started (644). |
| [FC-707](screen-inventory.md#fc-707) Onboarding · Heart Diary | REQUIRED_REACHABLE | [FC-648](screen-inventory.md#fc-648) · Continue (705). |
| [FC-757](screen-inventory.md#fc-757) Onboarding · Little Kitchen | REQUIRED_REACHABLE | [FC-707](screen-inventory.md#fc-707) · Continue (755). |
| [FC-849](screen-inventory.md#fc-849) Create account | REQUIRED_REACHABLE | [FC-648](screen-inventory.md#fc-648) · Skip (662). |
| [FC-892](screen-inventory.md#fc-892) Verify email | REQUIRED_REACHABLE | [FC-849](screen-inventory.md#fc-849) · Create account (888). |
| [FC-936](screen-inventory.md#fc-936) Forgot password | REQUIRED_REACHABLE | [FC-808](screen-inventory.md#fc-808) · Forgot password? (843). |
| [FC-969](screen-inventory.md#fc-969) Check your inbox | REQUIRED_REACHABLE | [FC-936](screen-inventory.md#fc-936) · Send reset link (965). |
| [FC-997](screen-inventory.md#fc-997) Reset password | REQUIRED_REACHABLE | [FC-969](screen-inventory.md#fc-969) · Review key R (969). |
| [FC-1036](screen-inventory.md#fc-1036) Set up profile | REQUIRED_REACHABLE | [FC-1072](screen-inventory.md#fc-1072) · Back (1081). |
| [FC-1072](screen-inventory.md#fc-1072) Mode selection · Personal | REQUIRED_REACHABLE | [FC-1036](screen-inventory.md#fc-1036) · Continue (1070). |
| [FC-1119](screen-inventory.md#fc-1119) Log in · Invalid credentials | REQUIRED_REACHABLE | [FC-808](screen-inventory.md#fc-808) · Review key E (808). |
| [FC-1163](screen-inventory.md#fc-1163) Log in · Loading | REQUIRED_REACHABLE | [FC-808](screen-inventory.md#fc-808) · Log in (845). |
| [FC-1206](screen-inventory.md#fc-1206) Log in · Email focused | REQUIRED_REACHABLE | [FC-808](screen-inventory.md#fc-808) · Email address (831). |
| [FC-1315](screen-inventory.md#fc-1315) Verify email · Code expired | REQUIRED_REACHABLE | [FC-1456](screen-inventory.md#fc-1456) · Review key E (1456). |
| [FC-1360](screen-inventory.md#fc-1360) Email verified | REQUIRED_REACHABLE | [FC-1036](screen-inventory.md#fc-1036) · Back (1045). |
| [FC-1385](screen-inventory.md#fc-1385) Password reset · Success | REQUIRED_REACHABLE | [FC-997](screen-inventory.md#fc-997) · Reset password (1033). |
| [FC-1410](screen-inventory.md#fc-1410) Mode selection · Couple | REQUIRED_REACHABLE | [FC-1072](screen-inventory.md#fc-1072) · Couple mode (1101). |
| [FC-1456](screen-inventory.md#fc-1456) Verify email · Code entered | REQUIRED_REACHABLE | [FC-892](screen-inventory.md#fc-892) · Six-digit code input (915). |
| [FC-2024](screen-inventory.md#fc-2024) Create task · Empty | REQUIRED_REACHABLE | [FC-1601](screen-inventory.md#fc-1601) · Add task (1612). |
| [FC-2073](screen-inventory.md#fc-2073) Create task · Ready | REQUIRED_REACHABLE | [FC-2024](screen-inventory.md#fc-2024) · Field body (7155). |
| [FC-2169](screen-inventory.md#fc-2169) Edit task | REQUIRED_REACHABLE | [FC-2122](screen-inventory.md#fc-2122) · Edit (2134). |
| [FC-2221](screen-inventory.md#fc-2221) Choose a date | REQUIRED_REACHABLE | [FC-2169](screen-inventory.md#fc-2169) · Date (2188). |
| [FC-2427](screen-inventory.md#fc-2427) Choose a time | REQUIRED_REACHABLE | [FC-2169](screen-inventory.md#fc-2169) · Time (2194). |
| [FC-2506](screen-inventory.md#fc-2506) Set a reminder | REQUIRED_REACHABLE | [FC-2169](screen-inventory.md#fc-2169) · Reminder (2200). |
| [FC-2583](screen-inventory.md#fc-2583) Task visibility | REQUIRED_REACHABLE | [FC-2169](screen-inventory.md#fc-2169) · Visibility (2206). |
| [FC-2654](screen-inventory.md#fc-2654) Planner · Empty | REQUIRED_REACHABLE | [FC-3106](screen-inventory.md#fc-3106) · Delete task (3762). |
| [FC-2736](screen-inventory.md#fc-2736) Planner · Task completed | REQUIRED_REACHABLE | [FC-1601](screen-inventory.md#fc-1601) · Completion target (1688). |
| [FC-2843](screen-inventory.md#fc-2843) Task details · Completed | REQUIRED_REACHABLE | [FC-2122](screen-inventory.md#fc-2122) · Mark complete (3439). |
| [FC-2890](screen-inventory.md#fc-2890) Planner · Loading | REQUIRED_REACHABLE | [FC-1601](screen-inventory.md#fc-1601) · Review key L (1601). |
| [FC-2977](screen-inventory.md#fc-2977) Planner · Load error | REQUIRED_REACHABLE | [FC-1601](screen-inventory.md#fc-1601) · Review key E (1601). |
| [FC-3054](screen-inventory.md#fc-3054) Create task · Save error | REQUIRED_REACHABLE | [FC-2073](screen-inventory.md#fc-2073) · Review key E (2073). |
| [FC-3106](screen-inventory.md#fc-3106) Delete task · Confirmation | REQUIRED_REACHABLE | [FC-2169](screen-inventory.md#fc-2169) · Delete task (2215). |
| [FC-5435](screen-inventory.md#fc-5435) Together Growth · Empty month | REVIEW_ONLY | Named start “Review \| Together Growth empty”. Empty Growth data specimen; Back to routines. |
| [FC-5472](screen-inventory.md#fc-5472) Routines · Empty | REVIEW_ONLY | Named start “Review \| Routines empty”. Personal routines without data; Create a routine remains available. |
| [FC-5533](screen-inventory.md#fc-5533) Routines · Loading | REVIEW_ONLY | Named start “Review \| Routines loading”. Personal routines loading specimen with timed return. |
| [FC-5593](screen-inventory.md#fc-5593) Routines · Error | REVIEW_ONLY | Named start “Review \| Routines load error”. Personal routines loading failure with retry. |
| [FC-12623](screen-inventory.md#fc-12623) 22 · Empty diary | REVIEW_ONLY | Named start “Review \| Diary empty”. No diary entries yet; opens the editor. |
| [FC-12697](screen-inventory.md#fc-12697) 23 · Diary loading | REVIEW_ONLY | Named start “Review \| Diary loading”. Diary loading specimen with timed return. |
| [FC-12773](screen-inventory.md#fc-12773) 24 · Diary error and retry | REVIEW_ONLY | Named start “Review \| Diary unavailable”. Diary load failure with retry. |
| [FC-13596](screen-inventory.md#fc-13596) 27 · Shared diary · connection required | REVIEW_ONLY | Named start “Review \| Diary with no partner”. Unconnected Diary sharing gate. Us opens the connection flow; automatic gating depends on PD-02 and PD-08. |
| [FC-13693](screen-inventory.md#fc-13693) 28 · Shared diary · invitation pending | REVIEW_ONLY | Named start “Review \| Diary invite pending”. Pending Diary sharing gate. Us opens the pending invitation sample; automatic gating depends on PD-02 and PD-08. |
| [FC-14578](screen-inventory.md#fc-14578) 03 · Kitchen with no planned meals | REVIEW_ONLY | Named start “Review \| Kitchen empty”. Empty Kitchen overview; discovery, Magic and meal planning remain available. |
| [FC-14686](screen-inventory.md#fc-14686) 04 · Kitchen loading | REVIEW_ONLY | Named start “Review \| Kitchen loading”. Kitchen loading specimen with timed return. |
| [FC-16900](screen-inventory.md#fc-16900) 26 · Empty meal plan | REVIEW_ONLY | Named start “Review \| Meal plan empty”. Empty personal meal plan; Find a recipe opens Discover. |

## The original 33 dead ends

All 33 now have a recorded foreground exit. Zero frames remain terminal in the saved graph. A native history action requires an originating frame in the same presenter session. Disabled submission controls and intentionally inert selected tabs retain their intended behavior.

| Frame | Original problem | Verified exit examples |
| --- | --- | --- |
| [FC-2](screen-inventory.md#fc-2) Home – Couple Mode | Missing primary action or destination | Notifications (234) → [FC-31896](screen-inventory.md#fc-31896); Our space · 108 × 48 (173) → [FC-24250](screen-inventory.md#fc-24250); Reminder (204) → [FC-2122](screen-inventory.md#fc-2122); Plans (219) → [FC-1601](screen-inventory.md#fc-1601) · 8 more in the inventory |
| [FC-547](screen-inventory.md#fc-547) Splash | Missing timed outcome | Timer 1000 ms (547) → [FC-595](screen-inventory.md#fc-595) |
| [FC-595](screen-inventory.md#fc-595) Welcome | Missing primary action or destination | Get started (644) → [FC-648](screen-inventory.md#fc-648); Log in (646) → [FC-808](screen-inventory.md#fc-808) |
| [FC-648](screen-inventory.md#fc-648) Onboarding · Tiny Planner | Missing primary action or destination | Back (657) → [FC-595](screen-inventory.md#fc-595); Skip (662) → [FC-849](screen-inventory.md#fc-849); Continue (705) → [FC-707](screen-inventory.md#fc-707) |
| [FC-707](screen-inventory.md#fc-707) Onboarding · Heart Diary | Missing primary action or destination | Back (716) → [FC-648](screen-inventory.md#fc-648); Skip (721) → [FC-849](screen-inventory.md#fc-849); Continue (755) → [FC-757](screen-inventory.md#fc-757) |
| [FC-757](screen-inventory.md#fc-757) Onboarding · Little Kitchen | Missing primary action or destination | Back (766) → [FC-707](screen-inventory.md#fc-707); Skip (771) → [FC-849](screen-inventory.md#fc-849); Create an account (805) → [FC-849](screen-inventory.md#fc-849) |
| [FC-808](screen-inventory.md#fc-808) Log in | Missing primary action or destination | Review key E (808) → [FC-1119](screen-inventory.md#fc-1119); Back (817) → [FC-595](screen-inventory.md#fc-595); Email address (831) → [FC-1206](screen-inventory.md#fc-1206); Forgot password? (843) → [FC-936](screen-inventory.md#fc-936) · 2 more in the inventory |
| [FC-849](screen-inventory.md#fc-849) Create account | Missing primary action or destination | Back (858) → presenter history; Create account (888) → [FC-892](screen-inventory.md#fc-892); Already have an account? Log in (890) → [FC-808](screen-inventory.md#fc-808) |
| [FC-892](screen-inventory.md#fc-892) Verify email | Missing primary action or destination | Back (901) → [FC-849](screen-inventory.md#fc-849); Six-digit code input (915) → [FC-1456](screen-inventory.md#fc-1456); Change email address (933) → [FC-849](screen-inventory.md#fc-849) |
| [FC-936](screen-inventory.md#fc-936) Forgot password | Missing primary action or destination | Back (945) → [FC-808](screen-inventory.md#fc-808); Send reset link (965) → [FC-969](screen-inventory.md#fc-969); Back to log in (967) → [FC-808](screen-inventory.md#fc-808) |
| [FC-969](screen-inventory.md#fc-969) Check your inbox | Missing outcome or continuation | Review key R (969) → [FC-997](screen-inventory.md#fc-997); Try a different email (993) → [FC-936](screen-inventory.md#fc-936); Back to log in (995) → [FC-808](screen-inventory.md#fc-808) |
| [FC-997](screen-inventory.md#fc-997) Reset password | Missing primary action or destination | Back (1006) → [FC-969](screen-inventory.md#fc-969); Reset password (1033) → [FC-1385](screen-inventory.md#fc-1385) |
| [FC-1036](screen-inventory.md#fc-1036) Set up profile | Missing primary action or destination | Back (1045) → [FC-1360](screen-inventory.md#fc-1360); Continue (1070) → [FC-1072](screen-inventory.md#fc-1072) |
| [FC-1072](screen-inventory.md#fc-1072) Mode selection · Personal | Missing primary action or destination | Back (1081) → [FC-1036](screen-inventory.md#fc-1036); Couple mode (1101) → [FC-1410](screen-inventory.md#fc-1410); Continue in Personal mode (1116) → [FC-29199](screen-inventory.md#fc-29199) |
| [FC-1119](screen-inventory.md#fc-1119) Log in · Invalid credentials | Missing recovery action | Back (1128) → [FC-808](screen-inventory.md#fc-808); Forgot password? (1157) → [FC-936](screen-inventory.md#fc-936); Log in (1159) → [FC-1163](screen-inventory.md#fc-1163); New here? Create an account (1161) → [FC-849](screen-inventory.md#fc-849) |
| [FC-1163](screen-inventory.md#fc-1163) Log in · Loading | Missing timed outcome | Timer 850 ms (1163) → [FC-2](screen-inventory.md#fc-2); Back (1172) → [FC-808](screen-inventory.md#fc-808); Forgot password? (1198) → [FC-936](screen-inventory.md#fc-936); New here? Create an account (1204) → [FC-849](screen-inventory.md#fc-849) |
| [FC-1206](screen-inventory.md#fc-1206) Log in · Email focused | Missing primary action or destination | Review key E (1206) → [FC-1119](screen-inventory.md#fc-1119); Back (1215) → [FC-808](screen-inventory.md#fc-808); Log in (1242) → [FC-1163](screen-inventory.md#fc-1163); Forgot password? (1244) → [FC-936](screen-inventory.md#fc-936) |
| [FC-1315](screen-inventory.md#fc-1315) Verify email · Code expired | Missing recovery action | Back (1324) → [FC-892](screen-inventory.md#fc-892); Resend code (1354) → [FC-892](screen-inventory.md#fc-892); Change email address (1358) → [FC-849](screen-inventory.md#fc-849) |
| [FC-1360](screen-inventory.md#fc-1360) Email verified | Missing outcome or continuation | Set up profile (1383) → [FC-1036](screen-inventory.md#fc-1036) |
| [FC-1385](screen-inventory.md#fc-1385) Password reset · Success | Missing outcome or continuation | Log in (1408) → [FC-808](screen-inventory.md#fc-808) |
| [FC-1410](screen-inventory.md#fc-1410) Mode selection · Couple | Missing primary action or destination | Back (1419) → [FC-1036](screen-inventory.md#fc-1036); Personal mode (1428) → [FC-1072](screen-inventory.md#fc-1072); Continue in Couple mode (1454) → [FC-24396](screen-inventory.md#fc-24396) |
| [FC-1456](screen-inventory.md#fc-1456) Verify email · Code entered | Missing primary action or destination | Review key E (1456) → [FC-1315](screen-inventory.md#fc-1315); Back (1465) → [FC-892](screen-inventory.md#fc-892); Resend code (1492) → [FC-892](screen-inventory.md#fc-892); Verify email (1494) → [FC-1360](screen-inventory.md#fc-1360) · 1 more in the inventory |
| [FC-2024](screen-inventory.md#fc-2024) Create task · Empty | Missing primary action or destination | Field body (7155) → [FC-2073](screen-inventory.md#fc-2073); Back (2033) → presenter history |
| [FC-2073](screen-inventory.md#fc-2073) Create task · Ready | Missing primary action or destination | Review key E (2073) → [FC-3054](screen-inventory.md#fc-3054); Create task (3416) → [FC-2122](screen-inventory.md#fc-2122); Back (2082) → presenter history |
| [FC-2122](screen-inventory.md#fc-2122) Task details | Missing task action and return | Mark complete (3439) → [FC-2843](screen-inventory.md#fc-2843); Back (2131) → presenter history; Edit (2134) → [FC-2169](screen-inventory.md#fc-2169) |
| [FC-2169](screen-inventory.md#fc-2169) Edit task | Missing primary action or destination | Date (2188) → [FC-2221](screen-inventory.md#fc-2221); Time (2194) → [FC-2427](screen-inventory.md#fc-2427); Reminder (2200) → [FC-2506](screen-inventory.md#fc-2506); Visibility (2206) → [FC-2583](screen-inventory.md#fc-2583) · 3 more in the inventory |
| [FC-2221](screen-inventory.md#fc-2221) Choose a date | Missing sheet dismissal and confirmation | Use November 19 (3498) → [FC-2169](screen-inventory.md#fc-2169); Close sheet (2276) → presenter history |
| [FC-2427](screen-inventory.md#fc-2427) Choose a time | Missing sheet dismissal and confirmation | Use 7:00 PM (3529) → [FC-2169](screen-inventory.md#fc-2169); Close sheet (2482) → presenter history |
| [FC-2506](screen-inventory.md#fc-2506) Set a reminder | Missing sheet dismissal and confirmation | Save reminder (3569) → [FC-2169](screen-inventory.md#fc-2169); Close sheet (2561) → presenter history |
| [FC-2583](screen-inventory.md#fc-2583) Task visibility | Missing sheet dismissal and confirmation | Save visibility (3603) → [FC-2169](screen-inventory.md#fc-2169); Close sheet (2638) → presenter history |
| [FC-2843](screen-inventory.md#fc-2843) Task details · Completed | Missing task action and return | Mark incomplete (3766) → [FC-2122](screen-inventory.md#fc-2122); Back (2852) → [FC-2736](screen-inventory.md#fc-2736); Edit (2855) → [FC-2169](screen-inventory.md#fc-2169) |
| [FC-3054](screen-inventory.md#fc-3054) Create task · Save error | Missing recovery action | Try again (3731) → [FC-2122](screen-inventory.md#fc-2122); Back (3063) → [FC-2073](screen-inventory.md#fc-2073) |
| [FC-3106](screen-inventory.md#fc-3106) Delete task · Confirmation | Missing sheet dismissal and confirmation | Keep task (3163) → presenter history; Delete task (3762) → [FC-2654](screen-inventory.md#fc-2654); Close sheet (3157) → presenter history |

## Review notes

For cursor or touch review, start from the named first-run or sign-in flow and use the Home launchers and tabs. The prototype binds native history to context-sensitive Back actions. Open a frame through its caller to review that return. Review-only cases, locked frame details and original PNGs are listed in the [screen inventory](screen-inventory.md).

Original saved master SHA-256 `baeb8020dfaaa7ae69f0b8038e0262e3f009b9a2504da7fc4ff8180775e151a6`. Saved integration master SHA-256 `17242a9dc97d126c2768025072540599eee6d22c48bcc5875c100de1c384d16e`. [Editable FigCraft master](../Alongio.figcraft)
