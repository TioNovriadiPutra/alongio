# Component motion

## Primary button

The underlying button uses the approved Default and Pressed states. Pointer down uses `motion.duration.press`. Release inside the pressed target animates to a matching rest frame using `motion.duration.release` and then displays confirmation. Pointer leave restores Default and cancels activation. The target stays 56 logical pixels high and fills the inset content width. Reduced motion switches instantly.

For runtime, treat activation and pressed feedback separately. Activation should follow the platform’s valid press gesture and cancel when appropriate. Maintain a persistent focus indication and keep disabled controls unavailable.

## Planner task completion

The pilot uses the full approved Planner overview and completed state, including the tabs, hero, progress card, and content scroll. The two approved states switch inside a persistent scroll viewport. Smart Animate handles completion and Undo over `motion.duration.state-change`. Reduced motion switches immediately. The enlarged checkmark remains a separate study.

Use the existing 63 × 48 Undo wrapper as the sole accessible action in future implementation.
