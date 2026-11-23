# Navigation and sheet transitions

## Date and Time Picker

Use the approved Edit Task row to trigger a bottom-positioned overlay. The approved picker content, footer, and Close control remain reachable. The entrance uses `motion.duration.sheet-enter` with the Enter curve. Close and Confirm use `motion.duration.sheet-exit` with the Exit curve. They dismiss the overlay and reveal the same Edit Task context.

The separate Date and Time entries confirm the existing sample values. They demonstrate the modal lifecycle and preserved form context. Runtime selection, native drag, interaction with a scrollable body, and snap points require a separate device implementation. Reduced-motion pickers open and close immediately at all three tested sizes.

## Home to Tiny Planner

Tap the Tiny Planner module tile to dissolve in the existing Planner overview over `motion.duration.navigation`. The Home control in the isolated Planner dock uses the presenter’s history to return to its caller. Use an instant route change for reduced motion. Keep focus clear and preserve the existing route contract.
