# React Native feedback handoff

Phase 10F provides design guidance. Application implementation remains with the owner.

## Responsibilities

- Keep validation and operation state next to the form or feature. One scoped presentation coordinator handles transient messages and avoids cross-account, cross-route, or layer leakage.
- React Navigation owns route transitions, history, and protected destinations. Gorhom Bottom Sheet owns sheet gestures and presentation. Reanimated owns functional entry and exit visuals. Lottie is optional for decoration and independent of request state.
- Use the existing palette keys, typography roles, and motion tokens. Use a typed variant and operation state. Hosts control placement and timers. Components display status and explicit actions.
- Use a synchronous in-flight guard as well as a disabled/loading button. Keep the same operation identifier for repeat-safe submission where the server supports it. Ignore stale results after a new operation or account switch.
- Maintain scope and focus on errors. Preserve eligible editable drafts and attachment IDs. Keep credentials and OTP ephemeral. For destructive actions, close only after a confirmed outcome or tell the user how to reconcile.

| Service result | Surface or state | Recovery |
| --- | --- | --- |
| Client format/required, mapped server field error | Inline by field, with a single summary if useful | Focus first invalid field and preserve other values |
| Credential rejection, invalid/expired OTP | Form group or code inline | Correct input or request a new code when appropriate |
| Session invalidation | Persistent explanation at approved Login route | Reauthenticate. Return only to a previously approved, authorized destination |
| Offline / transport / server error | Persistent local failure for blocked work, low-impact toast only where no recovery is required | Retain fields and high-confidence cached data |
| Read timeout / temporary failure | Retry state where safe | Retry the read with the same scope and filters |
| Write timed out / result unknown | Persistent reconciliation message | Query pending result, refresh, or replay with the same idempotency identity when guaranteed |
| Conflict or record gone | State-specific notice | Fetch latest data and explain edits requiring review |
| Rate limit / cooldown | Durable notice near action | Expose retry only after the service allows it |
| Empty or success | Data-backed empty state or confirmed destination | Suppress duplicate toast when the destination explains the result |

Allowlist server codes and field identifiers into localized client copy. Treat unknown codes as a generic recoverable failure where safe. Confirm ownership and original state for Undo. A visual timeout cannot establish a committed transaction or a compensating action.

## On-device verification before implementation approval

Verify stacked overlays, active keyboard resize and insets, Android Back and iOS swipe, repeated submit, timeout reconciliation, draft restoration, screen-reader announcements and focus restoration, large fonts, reduced motion, offline recovery, and scope invalidation on physical iOS and Android. Check actual service behavior independently from the FigCraft fixtures. Follow the [handoff device matrix](../handoff/device-test-checklist.md) and [feedback design contract](component-specs.md).
