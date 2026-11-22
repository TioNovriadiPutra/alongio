# Alongio device test checklist

**Status: NOT VERIFIABLE in FigCraft.** This checklist is for the approved implementation and device-validation phases. Prototype viewport checks use logical dimensions and simulated input. Record the build, device, OS version, logical viewport, system navigation mode, text size, and evidence for each device run.

## Device coverage

| Class | Run on physical hardware | Reproduce in emulator or simulator as needed |
| --- | --- | --- |
| Compact iPhone | Small supported display and a notch or Dynamic Island model | 320 × 568 and 375 × 667 logical stress cases |
| Standard and tall iPhone | One standard model and one tall model with gesture navigation | 390 × 844, 402 × 874, 430 × 932, 440 × 956 |
| Compact Android | A narrow display with three-button navigation | 320 × 568, 360 × 640, 375 × 667 |
| Standard and tall Android | Gesture navigation, then repeat the bottom-control checks with three-button navigation where available | 390 × 844, 402 × 874, 430 × 932, 440 × 956 |

## Acceptance checks

| Area | Exercise | Expected evidence |
| --- | --- | --- |
| iOS safe areas | Cold start through Welcome and Login. Open Home, Personal Me, and the Little Updates permission sheet. | No content sits under the cutout or gesture area. Top and bottom insets are applied once. Dock actions remain accessible after returning from a sheet. |
| Android system navigation | Repeat bottom tabs, short forms and bottom sheets in gesture and three-button modes. Use system Back from the keyboard, sheet and nested route. | System bars leave each target usable. Back first dismisses the active surface in the agreed order. The underlying screen regains focus. |
| Keyboard resize and avoidance | Edit Login, Register, verification and reset fields, Diary body, Kitchen Magic request, invite code and profile/password fields. Switch between keyboards and test a multiline draft. | Focused field, caret and validation remain reachable. Body scrolls as needed. The primary action remains reachable with or after dismissal of the keyboard. Input survives keyboard changes and navigation within a draft. |
| Text size and input | Test default, large and the largest supported accessibility text sizes. Enter long names, notification copy, recipe labels, and a multiline diary. Exercise composition, paste and autofill where relevant. | Action labels and essential text wrap. Cards expand and retain status metadata. The dock and sheets keep accessible names. Date, password and code inputs preserve their intended behavior. |
| Touch and focus | Tap through tab edges, calendar cells, icon controls and the Planner completion Undo. Test with VoiceOver and TalkBack. | All active controls offer at least the Alongio 48 × 48 logical target. Neighboring targets do not compete. Focus order and announcements match the visual hierarchy. Disabled actions remain unavailable and are announced appropriately. |
| Scrolling and sheets | Scroll long Home, Planner, Diary history, recipe detail, Me and Little Updates. Swipe inside a sheet with long content and dismiss it. | All content and essential actions are reachable. The dock stays fixed where specified. Inner scroll, keyboard and sheet gestures can coexist without sending the gesture to the backdrop. |
| Privacy and notification permissions | On a real device, test Allow, Later, Deny, and return from Settings. Exercise signed-out, wrong-account, revoked-share, deleted and expired links after product decisions are signed off. | The app reflects actual OS settings. Only authorized records are displayed. Lock-screen and inbox previews use approved generic copy. Safe fallback preserves orientation. Use synthetic accounts and entries. |
| Draft continuity | Open and dismiss Mood and Visibility with a Diary photo attached. Rotate through Kitchen Magic picker return, failed upload, retry, and request edits. Change both date and meal type, then revisit the record. | The same draft or record ID survives. Visibility, fields, attachment identity and chosen calendar context stay in sync. Cancel and confirm behave as approved. |

Treat OS and accessibility checks as pending until reproduced on physical devices. Record issues by frame ID, device, viewport, OS settings, and reproduction steps. Track the design reference and implementation build separately.
