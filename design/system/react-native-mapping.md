# React Native Expo mapping

The owner implements application code. The examples here describe a manual design-system interface.

## Token resolution

Read the typed values in `tokens.json`. Use the palette key directly for colors, such as `ink`, `cream`, or `muted`. The registry stores these under `palette`. Resolve dimensions such as `layout.screen-inset` and `size.button.md` to logical React Native units. Keep local approved values for documented exceptions. For composite typography, convert the line-height multiplier to an absolute logical line height. For Auto line height, use the loaded font’s metrics. [Palette mapping](color-palette-mapping.md)

Use a shared theme surface for colors, typography, spacing, sizing, radius, borders and shadows. Keep visual families grouped into text, actions, inputs, surfaces, navigation, feedback and module components. Route trees, draft IDs, access checks and notification state stay in separate product-layer contracts.

## Suggested usage

```tsx
<AppText variant="typography.heading.md" color="ink">
  Little Updates
</AppText>

<AppButton variant="primary" size="md" onPress={onContinue}>
  Continue
</AppButton>

<AppSurface background="cream" radius="radius.lg">
  {children}
</AppSurface>
```

Example props express intent. Keep visual variant, size and interaction state as separate fields. Use the approved palette color for each module tone. Preserve focus, loading, disabled and selected semantics in the runtime component. Consult [component specifications](components.md) for family-level props.

## Layout and platforms

Build a screen shell around system insets, available viewport and a flexible body. Keep the dock or footer outside the content scroll where the approved frame does. Let inset ownership occur once. Keep direct children in reading order, make modal focus deliberate, avoid absolute page coordinates, and use native platform navigation and keyboard behavior. The approved keyboard illustrations are test fixtures.

The design only establishes visually approved token use. Resolve [implementation conditions](../handoff/implementation-readiness.md) before wiring the affected Personal Home, access, draft, notification and meal flows. Confirm [physical-device tests](../handoff/device-test-checklist.md) before release.
