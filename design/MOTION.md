# Alongio Soft Playful Motion

Motion helps people recognize a touch, follow a change of context, or share a small celebration. Keep the approved geometric artwork, flat color, typography, and layout. Motion belongs to a visual surface or ornament. Touch targets, scroll regions, and final state semantics stay stable.

## Personality and hierarchy

Motion feels soft, romantic, warm, playful, and responsive. A short settle can add a little bounce and delight to a meaningful moment. Avoid aggressive shaking, heavy effects, long transitions, repetitive loops, and generic corporate effects.

1. **Functional feedback** acknowledges a press, focus change, or updated state promptly.
2. **Orientation** helps the user follow route changes, tab changes, and overlays.
3. **Expression** adds an optional accent to an existing loading, empty, or success state. Play one accent at a time when practical. Keep content readable and actions available throughout.

## Architecture

| System | Responsibility |
| --- | --- |
| React Native Reanimated | Functional feedback for buttons, cards, checkboxes, toggles and input focus. Also handles list insertion and removal, local modal feedback, and small decorative loops or bursts built from approved artwork and simple native shapes. |
| React Navigation | Screen entry and exit, navigation transitions, tab switching, route history, and navigation-level modal presentation. |
| Gorhom Bottom Sheet | Bottom-sheet presentation, dismissal, gestures, snap points, and interaction with scrollable content. |
| Lottie | Optional decorative fallback for an effect that needs a recorded timeline and is impractical with the existing stack. |

Functional surfaces use the Soft Playful Motion tokens. Lottie playback is independent of navigation, touch handling, loading state, data updates, and confirmation. Use the functional stack for ordinary screen transitions, buttons, and navigation.

## Tokens

The [design token source](system/tokens.json) defines the `motion` namespace.

| Duration role | Value | Purpose |
| --- | ---: | --- |
| `motion.duration.press` | 90 ms | Primary button press |
| `motion.duration.release` | 140 ms | Return to rest |
| `motion.duration.state-change` | 180 ms | Completion and Undo |
| `motion.duration.navigation` | 220 ms | Home to Planner context change |
| `motion.duration.sheet-enter` | 240 ms | Picker enters from bottom |
| `motion.duration.sheet-exit` | 180 ms | Picker leaves |
| `motion.duration.celebration` | 480 ms | One paired gesture and settle |

Use `motion.easing.enter`, cubic-bezier(0.2, 0.8, 0.2, 1), for feedback and entrances. Use `motion.easing.exit`, cubic-bezier(0.4, 0, 1, 1), when a surface leaves. The optional `motion.spring.mascot` starts at mass 1, stiffness 260, and damping 30. The celebration value is a design timing budget. Physical settling can differ from that budget.

Use `size.touch.minimum` and the approved component anatomy to preserve hit targets. Use `spacing.step-4` and `spacing.step-8` for small positional changes. Reuse `action.primary.pressed`, `feedback.success`, and approved module aliases where the existing visual states call for them.

The mascot spring preserves the existing pilot reference. The celebration duration is also the proposed budget for the bounded particle burst. The checkbox settle can begin with the existing spring values as a tuning reference. These design proposals reuse the current token source. New custom mascot animation requires separate approval.

## Navigation patterns

- Let the navigator own route entry, exit, Back, and any screen-level modal. Follow approved route and tab history. When an inner element needs its own motion, avoid stacking competing transitions for the same change.
- Use the navigation duration role for quick context changes such as Home to Tiny Planner. Keep the selected tab and destination understandable throughout the change.
- Let Gorhom handle a picker sheet's gesture and scroll behavior. Apply the sheet entry and exit roles, while preserving the underlying draft, safe areas, visible actions, and return focus.

## Component patterns

- Show an immediate visible press or focus response and keep the touch area, element bounds, and activation rules stable.
- Confirm checkbox and toggle changes in the control itself. Keep Undo available where the approved design provides it and preserve list position.
- Use the state-change role for card and list changes where motion conveys the result. Preserve the reading order and actionable content when motion is interrupted.
- Keep progress, errors, empty states, and success understandable through text or accessible state even when the decorative layer is absent.

## Free hybrid effects

Use the installed Reanimated stack and approved Alongio illustrations for all six initial effect categories. Use a few token-colored native shapes for the loader, sparkle, and confetti. Animate the visual wrapper of existing artwork so its resting geometry, clipping, and touch targets stay stable. The [usage map and storyboards](animations/usage-map.md) specify beats, placement, and fallbacks. The five previously selected LottieFiles assets remain blocked by the download allowance and have no local files.

An optional Lottie asset must have verified open-source rights covering the artwork and its dependencies, a suitable static fallback, and a clear reason the built-in effects cannot meet its purpose. Apply the [asset policy](animations/README.md) and obtain separate approval before acquisition or use.

## Reduced motion

Keep the same text, checked state, route, confirmation, and focus destination. Apply routine state changes immediately. Switch routes and overlay visibility instantly in the pilot. Show the final paired pose for connection success. Read the platform preference during implementation and preserve the final state when a transition is interrupted.

Provide a still illustration, static success mark, or status text for decorative effects. An opacity-only fade may be used when it helps orient the user and respects the platform preference. The fallback must remain readable, operable, and equivalent in meaning for assistive technology. Decorative assets should be excluded from the accessibility tree when adjacent UI already communicates their meaning.

## React Native handoff

Specify the trigger, animation owner, referenced tokens, final state, interruption behavior, reduced-motion path, and focus or scroll outcome. Preserve approved geometry at rest. Before release, verify touch targets, repeated actions, gestures, Back, safe areas, and accessibility on iOS and Android. Treat FigCraft rendering as design evidence and record device behavior separately. The project owner implements application changes after explicit approval to leave DESIGN_ONLY.

## Review

See the [motion library and named flows](motion/README.md), [transition specifications](motion/transitions.md), [component feedback](motion/components.md), and [mascot storyboard](motion/mascots.md).
