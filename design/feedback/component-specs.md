# Feedback component specifications

The editable component sets are on **00 — Alongio Design System → 18 — Feedback & System States**. Board 12 remains the reference for approved module-specific patterns. The new sheet follows the established confirmation presentation, and button loading uses the existing Primary / Loading master.

| Family | Variants | Anatomy and sizes | Placement and behavior |
| --- | --- | --- | --- |
| Toast | Success, Error, Warning, Information | 32 px status chip, title and wrapping message, 48 px optional dismiss, 12 px internal spacing, 16 px radius | Use for brief acknowledgement or low-impact outcome with no required action. Hold 4 s for routine messages and 6 s for low-impact warnings/errors. Manual dismiss is always available in interactive surfaces. Prefer persistent feedback when the user must act. |
| Snackbar | Message only, Retry, Undo | 32 px chip, wrapping message, optional single action at least 48 px, 12 px spacing, 16 px radius | Use message-only for 4 s. Retry remains visible until actionable context changes or the user resolves it. Show Undo only during the actual reversible window, with an 8 s proposed minimum for new contracts. If the backend cannot accommodate the extended window, provide another accessible recovery path or omit Undo. |
| Inline validation | Required field, Invalid format, Authentication error, Incorrect OTP, Expired OTP, Server field error | 16 px status icon, 8 px gap, message using body/md, automatic height | Put beside the affected field or immediately after the credential/code group. Retain input. Clear when that problem is resolved. Keep credential mismatch at form level because the faulty field is unknown. |
| Confirmation dialog | Standard, Destructive, Discard unsaved changes | Bottom-sheet panel, 32 px chip, 18 px heading, body/md, vertically stacked 48 px actions, 16 px internal padding, 24 px radius | Give the consequence and verb-based action. Background is inert. Cancel first in logical accessibility focus for destructive/discard variants and restore focus on dismiss. Suspend dismissal while a noncancelable submission is pending. |
| Async states | Button loading, Content loading, Request failure, Offline, Empty, Retry | Existing Primary / Loading at 56 px. Content variants use the 32 px chip, body/md, optional single full-width 48 px action, 16 px padding and radius. | Loading starts when a request starts and ends on a definitive result or a recoverable uncertainty state. Read failure can expose Retry. Empty requires a successful read. Offline explains whether the displayed data is last known. |

### Shared construction

Use approved **Alongio / Palette** variable names directly (`cream`, `ink`, `pink`, `indigo`, `yellow`, `green`, `lavender`, `muted`). Consistent with Board 12 (`12 — Feedback Components`) and approved Auth/Planner/Diary/Kitchen banners, **Toast**, **Snackbar**, and **Async states** use **solid flat color-block surfaces** (`radius.lg` 16 px, no muted outline): `green` for confirmed success and Undo, `pink` for errors and Retry, `yellow` for warnings and Offline, and `lavender` for information, loading, and empty cards. Each surface pairs a `32 × 32` `cream` rounded-square icon well (`r = 10 px`) with `ink` glyphs, `ink` copy, and borderless `cream` pill actions (`h = 48 px`, `r = 24 px`). **Inline validation** pairs an `18 × 18` `pink` circular alert badge (`ink` `!`) with `ink` copy on `cream`. **Confirmation dialogs** use `cream` sheets (`r = 24 px`, `1 px ink` border) with `r = 10 px` colored icon wells and borderless `pink` destructive CTAs. Shape, symbol, and message communicate the state together. Use approved feature artwork for meaningful, roomy empty states. Routine validation uses a compact symbol.

Reference widths use a 20 px inset and 350 px content at 390 px. Text wraps and grows vertically. Keep matching controls aligned within the same component family, with 48 px minimum touch bounds and room for localized or enlarged text. At compact widths, stack actions below a message if inline placement would make copy or the action hard to read.

### Hosts and queue

| Context | Host and collision rule |
| --- | --- |
| Authentication with keyboard | Inline below the field or a persistent notice in the scrollable form. Keep the focused field and primary action reachable above the real IME. Defer quiet outcomes if no usable region remains. |
| Form or scrollable content | Put field errors by their target. Put request errors near the submit or affected block. Preserve prior content and recover scroll position when retrying. |
| Navigation screen | Use one transient host above the dock or inside the top safe region if bottom space is occupied. Reserve clearance from active controls and keep the route stable. |
| Bottom sheet / full-screen modal | Use the topmost active surface's feedback host. Place a request failure and recovery inside that surface and below its heading or above its fixed action. Defer unrelated underlying notifications. |

Display one transient message at a time. Coalesce repeats by operation and scope, replace stale outcomes from the same operation, and process other informational outcomes in arrival order. Persistent errors take priority. Preserve an active Undo until it expires or is resolved. Pause auto-dismiss while focus is inside the notification, while a screen reader needs the message, or while the app is inactive. Drop stale information on route or account change. Accessibility announces concise status politely and announces blocking errors once. Keep modal focus contained and preserve an obvious dismissal path.

### Motion

Follow [Soft Playful Motion](../MOTION.md). Proposed Toast entry uses state-change (180 ms) and an 8 px offset, leaving with release (140 ms). Error feedback can appear with a small fade and zero shake. Use sheet-enter (240 ms) and sheet-exit (180 ms) for confirmation presentation. A subtle loading loop may accompany explicit status text. Under Reduce Motion, apply the same state immediately with a static indicator or status text. Duration and easing never determine the success of a request.
