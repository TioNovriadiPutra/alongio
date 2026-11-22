# Alongio navigation map

The [Phase 9 regression audit](final-regression-audit.md#cross-module-playback) rechecks this map against the approved responsive master and distinguishes live replays from saved bindings. This document retains the original integration audit counts.

## Verified connectivity

Counts describe the native action graph after reopening the saved master. Foreground filtering uses named scrim and backdrop layer order. Native Back has no fixed destination. It counts as an exit and preserves the presenter’s caller.

| Measure | Before | After |
| --- | ---: | ---: |
| Approved frame count | 308 | 308 |
| Recorded screen actions | 1,411 | 1,632 |
| Foreground actions | 1,134 | 1,355 |
| Backdrop actions | 277 | 277 |
| Native foreground Back actions | 0 | 26 |
| Named review starts | 35 | 53 |
| Reachable from Splash, Login and Home, including review keys | 3 | 275 |
| Reachable from those roots by tap or timer | 3 | 267 |
| Reachable from roots and named starts | 263 | 308 |
| Unreachable with named starts | 45 | 0 |
| No foreground action | 33 | 0 |
| Invalid fixed destinations | 0 | 0 |

The two component-level notification preference switches were preserved. Fixture reachability measures review coverage. Cross-mode access, app permissions and real data are outside the FigCraft graph.

## Bottom navigation

| Area | Home | Plans | Us | Me |
| --- | --- | --- | --- | --- |
| Connected Home and module surfaces | [FC-2](screen-inventory.md#fc-2) | [FC-1601](screen-inventory.md#fc-1601) | [FC-24250](screen-inventory.md#fc-24250) | [FC-29300](screen-inventory.md#fc-29300) |
| Explicit unconnected Personal review | [FC-29199](screen-inventory.md#fc-29199) review landing from other tabs | [FC-5710](screen-inventory.md#fc-5710) | [FC-24396](screen-inventory.md#fc-24396) | [FC-29199](screen-inventory.md#fc-29199) |
| Post-disconnect review | [FC-29199](screen-inventory.md#fc-29199) review landing | [FC-5710](screen-inventory.md#fc-5710) | [FC-24984](screen-inventory.md#fc-24984) open | [FC-29199](screen-inventory.md#fc-29199) |
| Personal with linked partner | Pending Personal Home | [FC-5710](screen-inventory.md#fc-5710) | Existing connected Us sample [FC-24250](screen-inventory.md#fc-24250) | [FC-30654](screen-inventory.md#fc-30654) |

Selected tabs normally stay in place. Existing Home returns in Diary and Kitchen represent the connected review journey. Personal Me has no Home action while an approved Personal Home is pending. The shared-tab permission model and any mode change from an authorized deep link are **BLOCKED_BY_DECISION**. [Open product decisions](open-product-decisions.md)

## End-to-end route checks

Every adjacent fixed transition in these paths was checked against the saved foreground graph. The Splash and connected Login timers were also exercised in FigCraft’s presenter. The presenter registered all 63 expected hotspots inspected across 31 frames. The connection, reset, error and completion outcomes below are simulations.

| Journey | Verified frame sequence | Behavior or limitation |
| --- | --- | --- |
| Cold start, onboarding and registration | [FC-547](screen-inventory.md#fc-547) → [FC-595](screen-inventory.md#fc-595) → [FC-648](screen-inventory.md#fc-648) → [FC-707](screen-inventory.md#fc-707) → [FC-757](screen-inventory.md#fc-757) → [FC-849](screen-inventory.md#fc-849) → [FC-892](screen-inventory.md#fc-892) → [FC-1456](screen-inventory.md#fc-1456) → [FC-1360](screen-inventory.md#fc-1360) → [FC-1036](screen-inventory.md#fc-1036) → [FC-1072](screen-inventory.md#fc-1072) | Email and profile use approved examples. |
| Registration in Couple mode to connected Home | [FC-1072](screen-inventory.md#fc-1072) → [FC-1410](screen-inventory.md#fc-1410) → [FC-24396](screen-inventory.md#fc-24396) → [FC-24624](screen-inventory.md#fc-24624) → [FC-24656](screen-inventory.md#fc-24656) → [FC-24752](screen-inventory.md#fc-24752) → [FC-24808](screen-inventory.md#fc-24808) → [FC-24250](screen-inventory.md#fc-24250) → [FC-2](screen-inventory.md#fc-2) | The code path requires confirmation. Home appears after the connection example. |
| Personal setup to partner invite and connected Home | [FC-1072](screen-inventory.md#fc-1072) → [FC-29199](screen-inventory.md#fc-29199) → [FC-24396](screen-inventory.md#fc-24396) → [FC-24475](screen-inventory.md#fc-24475) → [FC-24523](screen-inventory.md#fc-24523) → [FC-24576](screen-inventory.md#fc-24576) → [FC-24808](screen-inventory.md#fc-24808) → [FC-24250](screen-inventory.md#fc-24250) → [FC-2](screen-inventory.md#fc-2) | Personal Me serves as the review entry. Checking an invitation simulates partner acceptance. |
| Existing-account login to Home | [FC-595](screen-inventory.md#fc-595) → [FC-808](screen-inventory.md#fc-808) → [FC-1163](screen-inventory.md#fc-1163) → [FC-2](screen-inventory.md#fc-2) | The login example represents a connected account. The login spinner-to-Home timer ran in the presenter. |
| Password reset and return to Login | [FC-808](screen-inventory.md#fc-808) → [FC-936](screen-inventory.md#fc-936) → [FC-969](screen-inventory.md#fc-969) → [FC-997](screen-inventory.md#fc-997) → [FC-1385](screen-inventory.md#fc-1385) → [FC-808](screen-inventory.md#fc-808) | R at Check your inbox simulates opening the email link. |
| Invalid login and expired signup code | [FC-808](screen-inventory.md#fc-808) → [FC-1119](screen-inventory.md#fc-1119) → [FC-1163](screen-inventory.md#fc-1163) → [FC-2](screen-inventory.md#fc-2) | E on Login simulates invalid credentials. Retry plays the connection fixture. |
| Verification expiry and retry | [FC-1456](screen-inventory.md#fc-1456) → [FC-1315](screen-inventory.md#fc-1315) → [FC-892](screen-inventory.md#fc-892) → [FC-1456](screen-inventory.md#fc-1456) → [FC-1360](screen-inventory.md#fc-1360) | E with a populated code simulates expiry; Resend returns to code entry. |
| Home to task, completion feedback and Planner | [FC-2](screen-inventory.md#fc-2) → [FC-1601](screen-inventory.md#fc-1601) → [FC-2024](screen-inventory.md#fc-2024) → [FC-2073](screen-inventory.md#fc-2073) → [FC-2122](screen-inventory.md#fc-2122) → [FC-2843](screen-inventory.md#fc-2843) → [FC-2736](screen-inventory.md#fc-2736) → [FC-1712](screen-inventory.md#fc-1712) | Filling the field loads the Dinner together sample. Back from completed detail shows matching feedback, with an agenda return. |
| Task edit and save | [FC-2122](screen-inventory.md#fc-2122) → [FC-2169](screen-inventory.md#fc-2169) → [FC-2221](screen-inventory.md#fc-2221) → [FC-2169](screen-inventory.md#fc-2169) → [FC-2122](screen-inventory.md#fc-2122) | Date, time, reminder and visibility confirm back to the approved edit sample. X uses presenter history. |
| Task deletion sample | [FC-2122](screen-inventory.md#fc-2122) → [FC-2169](screen-inventory.md#fc-2169) → [FC-3106](screen-inventory.md#fc-3106) → [FC-2654](screen-inventory.md#fc-2654) | Confirming plays the approved empty Planner specimen. It demonstrates a last-task outcome. Existing sample lists do not show Dinner together removed alongside other rows. |
| Agenda and calendar | [FC-1601](screen-inventory.md#fc-1601) → [FC-1712](screen-inventory.md#fc-1712) → [FC-1816](screen-inventory.md#fc-1816) → [FC-1712](screen-inventory.md#fc-1712) | November 19 has matching agenda data. Other days and months have no approved matching fixture. |
| Routine creation and actor check-in | [FC-4098](screen-inventory.md#fc-4098) → [FC-5654](screen-inventory.md#fc-5654) → [FC-6458](screen-inventory.md#fc-6458) → [FC-4340](screen-inventory.md#fc-4340) → [FC-4098](screen-inventory.md#fc-4098) → [FC-4670](screen-inventory.md#fc-4670) → [FC-4748](screen-inventory.md#fc-4748) → [FC-4785](screen-inventory.md#fc-4785) → [FC-4865](screen-inventory.md#fc-4865) → [FC-5059](screen-inventory.md#fc-5059) | P at pending simulates Alex checking in independently. The monthly history is an approved sample. |
| Together Growth | [FC-4865](screen-inventory.md#fc-4865) → [FC-4098](screen-inventory.md#fc-4098) → [FC-5290](screen-inventory.md#fc-5290) → [FC-5341](screen-inventory.md#fc-5341) → [FC-5388](screen-inventory.md#fc-5388) → [FC-5290](screen-inventory.md#fc-5290) | Monthly summary and achievements are existing examples. |
| Personal planner and connection tabs | [FC-29199](screen-inventory.md#fc-29199) → [FC-5710](screen-inventory.md#fc-5710) → [FC-5856](screen-inventory.md#fc-5856) → [FC-6000](screen-inventory.md#fc-6000) → [FC-24396](screen-inventory.md#fc-24396) | Personal roots use Personal Planner and unconnected Us. Personal Home awaits a decision. |
| Diary entry and photo attachment | [FC-2](screen-inventory.md#fc-2) → [FC-10732](screen-inventory.md#fc-10732) → [FC-11105](screen-inventory.md#fc-11105) → [FC-11160](screen-inventory.md#fc-11160) → [FC-11728](screen-inventory.md#fc-11728) → [FC-11160](screen-inventory.md#fc-11160) → [FC-11955](screen-inventory.md#fc-11955) → [FC-12039](screen-inventory.md#fc-12039) → [FC-11270](screen-inventory.md#fc-11270) → [FC-12847](screen-inventory.md#fc-12847) → [FC-10732](screen-inventory.md#fc-10732) | First-time editor taps retain the existing sample path. Cross-sheet draft persistence has limits. |
| Us shared plans, Diary and meals | [FC-2](screen-inventory.md#fc-2) → [FC-24250](screen-inventory.md#fc-24250) → [FC-24356](screen-inventory.md#fc-24356) → [FC-2122](screen-inventory.md#fc-2122) | The connected Us overview separately links Shared Diary, meal planning and Together Growth. |
| Kitchen Magic to saved recipe and meal plan | [FC-2](screen-inventory.md#fc-2) → [FC-14338](screen-inventory.md#fc-14338) → [FC-15156](screen-inventory.md#fc-15156) → [FC-15204](screen-inventory.md#fc-15204) → [FC-15247](screen-inventory.md#fc-15247) → [FC-21909](screen-inventory.md#fc-21909) → [FC-22202](screen-inventory.md#fc-22202) → [FC-15656](screen-inventory.md#fc-15656) → [FC-16203](screen-inventory.md#fc-16203) → [FC-17057](screen-inventory.md#fc-17057) → [FC-17925](screen-inventory.md#fc-17925) → [FC-16757](screen-inventory.md#fc-16757) | Text, camera and combined request routes use existing Kitchen outcomes. |
| Me to profile and security | [FC-2](screen-inventory.md#fc-2) → [FC-29300](screen-inventory.md#fc-29300) → [FC-29401](screen-inventory.md#fc-29401) → [FC-29438](screen-inventory.md#fc-29438) → [FC-29519](screen-inventory.md#fc-29519) → [FC-29558](screen-inventory.md#fc-29558) → [FC-29676](screen-inventory.md#fc-29676) | Profile save uses the existing confirmation. |
| Log out and sign in again | [FC-29300](screen-inventory.md#fc-29300) → [FC-30811](screen-inventory.md#fc-30811) → [FC-31097](screen-inventory.md#fc-31097) → [FC-808](screen-inventory.md#fc-808) → [FC-1163](screen-inventory.md#fc-1163) → [FC-2](screen-inventory.md#fc-2) | Logout returns to the working mock Login. |
| Home bell, matching task and preferences | [FC-2](screen-inventory.md#fc-2) → [FC-31896](screen-inventory.md#fc-31896) → [FC-2122](screen-inventory.md#fc-2122) | Task and Preferences use native Back to restore the actual caller. |
| Deleted task fallback | [FC-33143](screen-inventory.md#fc-33143) → [FC-33041](screen-inventory.md#fc-33041) → [FC-31896](screen-inventory.md#fc-31896) | The stale-item laboratory is a named review start. |
| Inaccessible meal fallback | [FC-33143](screen-inventory.md#fc-33143) → [FC-33075](screen-inventory.md#fc-33075) → [FC-31896](screen-inventory.md#fc-31896) | The stale-item laboratory is a named review start. |
| Unshared diary fallback | [FC-33143](screen-inventory.md#fc-33143) → [FC-33109](screen-inventory.md#fc-33109) → [FC-31896](screen-inventory.md#fc-31896) | The stale-item laboratory is a named review start. |
| Unknown invitation code | [FC-24656](screen-inventory.md#fc-24656) → [FC-24688](screen-inventory.md#fc-24688) | I simulates a code that cannot be found. |
| Expired invitation code | [FC-24656](screen-inventory.md#fc-24656) → [FC-24725](screen-inventory.md#fc-24725) | E simulates an expired code. |

## All 36 traced transition gaps

| Finding | Source | Expected action and destination | MVP relevance | Verified result |
| --- | --- | --- | --- | --- |
| B-02 | [FC-547](screen-inventory.md#fc-547) Splash | Cold start to Welcome. [FC-595](screen-inventory.md#fc-595) | Required | Timer 1000 ms (547) → [FC-595](screen-inventory.md#fc-595) |
| B-02 | [FC-595](screen-inventory.md#fc-595) Welcome | Get started. [FC-648](screen-inventory.md#fc-648) | Required | Get started (644) → [FC-648](screen-inventory.md#fc-648) |
| B-02 | [FC-595](screen-inventory.md#fc-595) Welcome | Welcome to Log in. [FC-808](screen-inventory.md#fc-808) | Required | Log in (646) → [FC-808](screen-inventory.md#fc-808) |
| B-02 | [FC-648](screen-inventory.md#fc-648) Onboarding · Tiny Planner | Planner onboarding to Diary. [FC-707](screen-inventory.md#fc-707) | Required | Continue (705) → [FC-707](screen-inventory.md#fc-707) |
| B-02 | [FC-707](screen-inventory.md#fc-707) Onboarding · Heart Diary | Diary onboarding to Kitchen. [FC-757](screen-inventory.md#fc-757) | Required | Continue (755) → [FC-757](screen-inventory.md#fc-757) |
| B-02 | [FC-757](screen-inventory.md#fc-757) Onboarding · Little Kitchen | Onboarding to registration. [FC-849](screen-inventory.md#fc-849) | Required | Skip (771) → [FC-849](screen-inventory.md#fc-849); Create an account (805) → [FC-849](screen-inventory.md#fc-849) |
| B-02 | [FC-849](screen-inventory.md#fc-849) Create account | Register to verification. [FC-892](screen-inventory.md#fc-892) | Required | Create account (888) → [FC-892](screen-inventory.md#fc-892) |
| B-02 | [FC-892](screen-inventory.md#fc-892) Verify email | Code entry to verification ready. [FC-1456](screen-inventory.md#fc-1456) | Required outcome, simulated for review | Six-digit code input (915) → [FC-1456](screen-inventory.md#fc-1456) |
| B-02 | [FC-1456](screen-inventory.md#fc-1456) Verify email · Code entered | Verify successfully. [FC-1360](screen-inventory.md#fc-1360) | Required | Verify email (1494) → [FC-1360](screen-inventory.md#fc-1360) |
| B-02 | [FC-1360](screen-inventory.md#fc-1360) Email verified | Verified account to profile setup. [FC-1036](screen-inventory.md#fc-1036) | Required | Set up profile (1383) → [FC-1036](screen-inventory.md#fc-1036) |
| B-02 | [FC-1036](screen-inventory.md#fc-1036) Set up profile | Save profile to mode choice. [FC-1072](screen-inventory.md#fc-1072) | Required | Continue (1070) → [FC-1072](screen-inventory.md#fc-1072) |
| B-02 | [FC-808](screen-inventory.md#fc-808) Log in | Submit login. [FC-1163](screen-inventory.md#fc-1163) | Required | Log in (845) → [FC-1163](screen-inventory.md#fc-1163) |
| B-02 | [FC-1163](screen-inventory.md#fc-1163) Log in · Loading | Connected-account sign-in opens Home. [FC-2](screen-inventory.md#fc-2) | Required | Timer 850 ms (1163) → [FC-2](screen-inventory.md#fc-2)<br>Personal landing behavior is BLOCKED_BY_DECISION (PD-02). |
| B-02 | [FC-808](screen-inventory.md#fc-808) Log in | Forgot password entry. [FC-936](screen-inventory.md#fc-936) | Required | Forgot password? (843) → [FC-936](screen-inventory.md#fc-936) |
| B-02 | [FC-936](screen-inventory.md#fc-936) Forgot password | Request reset. [FC-969](screen-inventory.md#fc-969) | Required | Send reset link (965) → [FC-969](screen-inventory.md#fc-969) |
| B-02 | [FC-969](screen-inventory.md#fc-969) Check your inbox | External reset-link handoff. [FC-997](screen-inventory.md#fc-997) | Required outcome, simulated for review | Review key R (969) → [FC-997](screen-inventory.md#fc-997) |
| B-02 | [FC-997](screen-inventory.md#fc-997) Reset password | Reset password successfully. [FC-1385](screen-inventory.md#fc-1385) | Required | Reset password (1033) → [FC-1385](screen-inventory.md#fc-1385) |
| B-02 | [FC-1385](screen-inventory.md#fc-1385) Password reset · Success | Return to login. [FC-808](screen-inventory.md#fc-808) | Required | Log in (1408) → [FC-808](screen-inventory.md#fc-808) |
| B-01 | [FC-2](screen-inventory.md#fc-2) Home – Couple Mode | Planner launcher or Plans. [FC-1601](screen-inventory.md#fc-1601) | Required | Plans (219) → [FC-1601](screen-inventory.md#fc-1601); Plans (219) → [FC-1601](screen-inventory.md#fc-1601); Tiny Planner (124) → [FC-1601](screen-inventory.md#fc-1601) |
| B-01 | [FC-2](screen-inventory.md#fc-2) Home – Couple Mode | Diary launcher to permitted scope. [FC-10732](screen-inventory.md#fc-10732) | Required | Heart Diary (178) → [FC-10732](screen-inventory.md#fc-10732) |
| B-01 | [FC-2](screen-inventory.md#fc-2) Home – Couple Mode | Kitchen launcher to permitted scope. [FC-14338](screen-inventory.md#fc-14338) | Required | Little Kitchen (191) → [FC-14338](screen-inventory.md#fc-14338) |
| B-01 | [FC-2](screen-inventory.md#fc-2) Home – Couple Mode | Us / Our space for connected user. [FC-24250](screen-inventory.md#fc-24250) | Required | Our space · 108 × 48 (173) → [FC-24250](screen-inventory.md#fc-24250); Us (225) → [FC-24250](screen-inventory.md#fc-24250); Us (225) → [FC-24250](screen-inventory.md#fc-24250) |
| B-01 | [FC-2](screen-inventory.md#fc-2) Home – Couple Mode | Me in connected mode. [FC-29300](screen-inventory.md#fc-29300) | Required | Me (229) → [FC-29300](screen-inventory.md#fc-29300); Me (229) → [FC-29300](screen-inventory.md#fc-29300) |
| B-01 | [FC-2](screen-inventory.md#fc-2) Home – Couple Mode | Home bell. [FC-31896](screen-inventory.md#fc-31896) | Required | Notifications (234) → [FC-31896](screen-inventory.md#fc-31896) |
| B-01 | [FC-2](screen-inventory.md#fc-2) Home – Couple Mode | Home reminder to matching task. [FC-2122](screen-inventory.md#fc-2122) | Required | Reminder (204) → [FC-2122](screen-inventory.md#fc-2122) |
| B-03 | [FC-1712](screen-inventory.md#fc-1712) Daily agenda | Add a task from agenda. [FC-2024](screen-inventory.md#fc-2024) | Required | Add task (1723) → [FC-2024](screen-inventory.md#fc-2024); Add a task (3353) → [FC-2024](screen-inventory.md#fc-2024) |
| B-03 | [FC-2024](screen-inventory.md#fc-2024) Create task · Empty | Populate a task and activate save. [FC-2073](screen-inventory.md#fc-2073) | Required | Field body (7155) → [FC-2073](screen-inventory.md#fc-2073) |
| B-03 | [FC-2073](screen-inventory.md#fc-2073) Create task · Ready | Save to matching task details; FC-2122 is the shared reference. [FC-2122](screen-inventory.md#fc-2122) | Required | Create task (3416) → [FC-2122](screen-inventory.md#fc-2122) |
| B-03 | [FC-2122](screen-inventory.md#fc-2122) Task details | Complete matching task. [FC-2843](screen-inventory.md#fc-2843) | Required | Mark complete (3439) → [FC-2843](screen-inventory.md#fc-2843) |
| B-03 | [FC-2843](screen-inventory.md#fc-2843) Task details · Completed | Return from completion. [FC-1712](screen-inventory.md#fc-1712) | Required | Return through the approved completion feedback sample. [FC-2843](screen-inventory.md#fc-2843) → [FC-2736](screen-inventory.md#fc-2736) → [FC-1712](screen-inventory.md#fc-1712) |
| B-03 | [FC-2169](screen-inventory.md#fc-2169) Edit task | Open date picker from edit. [FC-2221](screen-inventory.md#fc-2221) | Required | Date (2188) → [FC-2221](screen-inventory.md#fc-2221) |
| B-03 | [FC-2221](screen-inventory.md#fc-2221) Choose a date | Dismiss or apply date back to same edit. [FC-2169](screen-inventory.md#fc-2169) | Required | Use November 19 (3498) → [FC-2169](screen-inventory.md#fc-2169) |
| H-03 | [FC-4785](screen-inventory.md#fc-4785) Routine details · Partner pending | Simulate partner completion of pending shared occurrence. [FC-4865](screen-inventory.md#fc-4865) | Required outcome, simulated for review | Review key P (4785) → [FC-4865](screen-inventory.md#fc-4865) |
| M-02 | [FC-24656](screen-inventory.md#fc-24656) 08 · Code entered | Unknown code branch. [FC-24688](screen-inventory.md#fc-24688) | Required outcome, simulated for review | Review key I (24656) → [FC-24688](screen-inventory.md#fc-24688) |
| M-02 | [FC-24656](screen-inventory.md#fc-24656) 08 · Code entered | Expired code branch. [FC-24725](screen-inventory.md#fc-24725) | Required outcome, simulated for review | Review key E (24656) → [FC-24725](screen-inventory.md#fc-24725) |
| H-04 | [FC-31270](screen-inventory.md#fc-31270) 25 · Notification preferences | Back to the originating inbox. [FC-31896](screen-inventory.md#fc-31896) | Required | Back (31280) uses presenter history. Caller [FC-31896](screen-inventory.md#fc-31896) opens this frame directly. |

## Reachability by page

| Page | Frames | App roots before | App roots after | Including review starts | Foreground actions after |
| --- | ---: | ---: | ---: | ---: | ---: |
| Home | 1 | 1 | 1 | 1 | 12 |
| 01 — Authentication & Onboarding | 21 | 2 | 21 | 21 | 62 |
| 03 — Tiny Planner | 53 | 0 | 49 | 53 | 248 |
| 04 — Heart Diary | 36 | 0 | 31 | 36 | 152 |
| 05 — Little Kitchen | 120 | 0 | 109 | 120 | 568 |
| 06 — Couple Space | 18 | 0 | 18 | 18 | 64 |
| 07 — Profile & Settings | 39 | 0 | 36 | 39 | 141 |
| 08 — Little Updates | 20 | 0 | 10 | 20 | 108 |

## Frames outside the app-root journey

Each listed frame or its upstream state is reachable from a named start. These frames are **REVIEW_ONLY**. The list excludes fixed app-root paths that require a review key.

- **03 — Tiny Planner · 4** [FC-5435](screen-inventory.md#fc-5435), [FC-5472](screen-inventory.md#fc-5472), [FC-5533](screen-inventory.md#fc-5533), [FC-5593](screen-inventory.md#fc-5593)
- **04 — Heart Diary · 5** [FC-12623](screen-inventory.md#fc-12623), [FC-12697](screen-inventory.md#fc-12697), [FC-12773](screen-inventory.md#fc-12773), [FC-13596](screen-inventory.md#fc-13596), [FC-13693](screen-inventory.md#fc-13693)
- **05 — Little Kitchen · 11** [FC-14578](screen-inventory.md#fc-14578), [FC-14686](screen-inventory.md#fc-14686), [FC-15055](screen-inventory.md#fc-15055), [FC-15102](screen-inventory.md#fc-15102), [FC-21482](screen-inventory.md#fc-21482), [FC-21987](screen-inventory.md#fc-21987), [FC-22033](screen-inventory.md#fc-22033), [FC-16167](screen-inventory.md#fc-16167), [FC-16900](screen-inventory.md#fc-16900), [FC-16955](screen-inventory.md#fc-16955), [FC-17004](screen-inventory.md#fc-17004)
- **07 — Profile & Settings · 3** [FC-31408](screen-inventory.md#fc-31408), [FC-31492](screen-inventory.md#fc-31492), [FC-31564](screen-inventory.md#fc-31564)
- **08 — Little Updates · 10** [FC-32744](screen-inventory.md#fc-32744), [FC-32781](screen-inventory.md#fc-32781), [FC-32825](screen-inventory.md#fc-32825), [FC-32859](screen-inventory.md#fc-32859), [FC-32970](screen-inventory.md#fc-32970), [FC-33005](screen-inventory.md#fc-33005), [FC-33041](screen-inventory.md#fc-33041), [FC-33075](screen-inventory.md#fc-33075), [FC-33109](screen-inventory.md#fc-33109), [FC-33143](screen-inventory.md#fc-33143)

### Review-key outcomes

Focus the presenter before using a key. These events substitute for external or asynchronous outcomes.

| Frame | Key | Simulated outcome |
| --- | --- | --- |
| [FC-808](screen-inventory.md#fc-808) | E | [FC-1119](screen-inventory.md#fc-1119) Log in · Invalid credentials |
| [FC-969](screen-inventory.md#fc-969) | R | [FC-997](screen-inventory.md#fc-997) Reset password |
| [FC-1206](screen-inventory.md#fc-1206) | E | [FC-1119](screen-inventory.md#fc-1119) Log in · Invalid credentials |
| [FC-1456](screen-inventory.md#fc-1456) | E | [FC-1315](screen-inventory.md#fc-1315) Verify email · Code expired |
| [FC-1601](screen-inventory.md#fc-1601) | E | [FC-2977](screen-inventory.md#fc-2977) Planner · Load error |
| [FC-1601](screen-inventory.md#fc-1601) | L | [FC-2890](screen-inventory.md#fc-2890) Planner · Loading |
| [FC-2073](screen-inventory.md#fc-2073) | E | [FC-3054](screen-inventory.md#fc-3054) Create task · Save error |
| [FC-4785](screen-inventory.md#fc-4785) | P | [FC-4865](screen-inventory.md#fc-4865) Routine details · Both checked in |
| [FC-24656](screen-inventory.md#fc-24656) | I | [FC-24688](screen-inventory.md#fc-24688) 15 · Invalid invitation code |
| [FC-24656](screen-inventory.md#fc-24656) | E | [FC-24725](screen-inventory.md#fc-24725) 16 · Expired invitation |

## Duplicate preview pairs

Eleven approved pairs have byte-identical 2× PNGs and different prototype contexts. Review for parameterization after approval. Retain the distinction between preserving typed notes, choosing an alternative result, and entering a Personal view with or without a linked partner.

| Pair | Context represented |
| --- | --- |
| [FC-15466](screen-inventory.md#fc-15466), [FC-23601](screen-inventory.md#fc-23601) | Camera with and without a note. |
| [FC-15563](screen-inventory.md#fc-15563), [FC-23633](screen-inventory.md#fc-23633) | Camera capture preview retains different draft state. |
| [FC-15609](screen-inventory.md#fc-15609), [FC-19052](screen-inventory.md#fc-19052) | Gallery with and without typed note. |
| [FC-18950](screen-inventory.md#fc-18950), [FC-19112](screen-inventory.md#fc-19112) | Two gallery selections from different entry paths. |
| [FC-21854](screen-inventory.md#fc-21854), [FC-22701](screen-inventory.md#fc-22701) | Combined generation and another result pass. |
| [FC-21909](screen-inventory.md#fc-21909), [FC-22756](screen-inventory.md#fc-22756) | Initial text generation and more ideas. |
| [FC-21948](screen-inventory.md#fc-21948), [FC-22795](screen-inventory.md#fc-22795) | Initial photo generation and more ideas. |
| [FC-23341](screen-inventory.md#fc-23341), [FC-23406](screen-inventory.md#fc-23406) | Single fridge photo selection with and without a note. |
| [FC-23471](screen-inventory.md#fc-23471), [FC-23536](screen-inventory.md#fc-23536) | Single counter photo selection with and without a note. |
| [FC-29199](screen-inventory.md#fc-29199), [FC-30654](screen-inventory.md#fc-30654) | Unconnected Personal Me and Personal Me with a linked partner. |
| [FC-30356](screen-inventory.md#fc-30356), [FC-30755](screen-inventory.md#fc-30755) | Personal mode choices with different partner connection contexts. |

See the [user-flow audit](user-flow-audit.md) for the classification of the original 45 unreachable frames and 33 dead ends.
