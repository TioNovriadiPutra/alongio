# React Native Expo mapping

The owner implements application code. The examples here describe a manual design-system interface.

## Token resolution

Read the typed values in `tokens.json`. Resolve color aliases from semantic path to a primitive once in the theme. Resolve dimensional aliases to logical React Native layout values. Preserve native font weight, measure and line-height behavior from the text roles. For composite typography, convert the line-height multiplier to an absolute logical line height. For a role marked Auto, use the loaded font’s metrics. Keep proposed roles outside production theme resolution until approved.

Use a shared theme surface for colors, typography, spacing, sizing, radius, borders and shadows. Keep visual families grouped into text, actions, inputs, surfaces, navigation, feedback and module components. Route trees, draft IDs, access checks and notification state stay in separate product-layer contracts.

## Suggested usage

```tsx
<AppText variant="heading.md" color="text.primary">
  Little Updates
</AppText>

<AppButton variant="primary" size="md" onPress={onContinue}>
  Continue
</AppButton>

<AppSurface background="surface.card" radius="lg">
  {children}
</AppSurface>
```

Example props express intent. Keep visual variant, size and interaction state as separate fields. A module tone should resolve through the module alias in a shared layout contract. Preserve focus, loading, disabled and selected semantics in the runtime component. Consult [component specifications](components.md) for family-level props.

## Layout and platforms

Build a screen shell around system insets, available viewport and a flexible body. Keep the dock or footer outside the content scroll where the approved frame does. Let inset ownership occur once. Keep direct children in reading order, make modal focus deliberate, avoid absolute page coordinates, and use native platform navigation and keyboard behavior. The approved keyboard illustrations are test fixtures.

The design only establishes visually approved token use. Resolve [implementation conditions](../handoff/implementation-readiness.md) before wiring the affected Personal Home, access, draft, notification and meal flows. Confirm [physical-device tests](../handoff/device-test-checklist.md) before release.
