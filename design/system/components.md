# Component specifications

Dimensions are verified specimen sizes at 390 × 844, unless labeled as glyphs. Use 48 × 48 px minimum for interactive regions. The foreground content on the library page is editable. Most specimens are live instances and source IDs are listed below. Composite templates use responsive copies of the approved screen construction.

## Button

Commit, navigate or dismiss. Surface, centered label, optional icon or activity indicator.

| Approved variant or content | State/condition | Baseline size | Source | Radius / spacing evidence |
| --- | --- | --- | --- | --- |
| Primary | Default | 350 × 56 | FC-263 | r 28.0 / 8.0 |
| Primary | Pressed | 350 × 56 | FC-267 | r 28.0 / 8.0 |
| Prominent | Disabled | 350 × 56 | FC-269 | r 28.0 / 8.0 |
| Primary | Loading | 350 × 56 | FC-271 | r 28.0 / 8.0 |
| Secondary | Default | 350 × 56 | FC-265 | r 28.0 / 8.0 |
| Destructive | Default | 350 × 56 | FC-24024 | r 24.0 / 8.0 |
| Quiet | Default | 350 × 56 | FC-7707 | r 24.0 / 8.0 |
| Utility | Default | 156 × 48 | FC-31826 | r 16.0 / 8.0 |

**Semantic color.** `action.primary.*, action.secondary.*, action.disabled.*, action.destructive.*`. **Typography.** typography.button.md, typography.body.md, typography.metadata.

**Spacing and shape.** Use the specimen’s inspected values above. Use `layout.component-gap`, `layout.card-padding` or `layout.sheet-inset` where the corresponding anatomy applies.

**Adaptation and accessibility.** 56 px standard or 48 px utility. Fill parent up to its content width, center group, and wrap or grow for large text. Mark disabled and loading appropriately.

**Suggested props.** `variant, size, disabled, loading, iconLeft, iconRight, onPress, children`.

**Usage example.** Primary · Default follows the approved specimen at FC-263. Board 10 contains the editable reference.

## Icon Button

Expose a single compact action. 48 px target, 24 px well, vector glyph.

| Approved variant or content | State/condition | Baseline size | Source | Radius / spacing evidence |
| --- | --- | --- | --- | --- |
| Preferences | Default | 48 × 48 | FC-31910 | r 24.0 / 0.0 |
| Notifications | Default | 48 × 48 | FC-143 | r inherited / by anatomy |
| Options | Default | 48 × 48 | FC-31834 | r 16.0 / 0.0 |

**Semantic color.** `icon.primary, background.subtle`. **Typography.** No glyph text. Where a row label is present use typography.body.md..

**Spacing and shape.** Use the specimen’s inspected values above. Use `layout.component-gap`, `layout.card-padding` or `layout.sheet-inset` where the corresponding anatomy applies.

**Adaptation and accessibility.** Maintain a 48 × 48 hit target. Allow the glyph and well to stay fixed as the parent grows.

**Suggested props.** `icon, tone, selected, disabled, accessibilityLabel, onPress`.

**Usage example.** Preferences · Default follows the approved specimen at FC-31910. Board 08 contains the editable reference.

## Floating Action Button

Start a new task or entry. Floating or inset circular target and plus glyph.

| Approved variant or content | State/condition | Baseline size | Source | Radius / spacing evidence |
| --- | --- | --- | --- | --- |
| Add task | Default | 48 × 48 | FC-1612 | r 24.0 / 0.0 |

**Semantic color.** `module.planner.accent, icon.primary`. **Typography.** No glyph text. Where a row label is present use typography.body.md..

**Spacing and shape.** Use the specimen’s inspected values above. Use `layout.component-gap`, `layout.card-padding` or `layout.sheet-inset` where the corresponding anatomy applies.

**Adaptation and accessibility.** Use the approved 48 px control with fixed icon geometry. Position relative to viewport or header and keep it clear of the inset.

**Suggested props.** `icon, tone, accessibilityLabel, onPress`.

**Usage example.** Add task · Default follows the approved specimen at FC-1612. Board 08 contains the editable reference.

## Text Input

Enter a single-line value. Label, field boundary, value or placeholder, optional visibility or help.

| Approved variant or content | State/condition | Baseline size | Source | Radius / spacing evidence |
| --- | --- | --- | --- | --- |
| Labeled | Empty | 350 × 80 | FC-33212 | r inherited / by anatomy |
| Labeled | Filled | 350 × 80 | FC-33218 | r inherited / by anatomy |
| Labeled | Focused | 350 × 80 | FC-33224 | r inherited / by anatomy |
| Labeled | Error | 350 × 80 | FC-33231 | r inherited / by anatomy |

**Semantic color.** `surface.default, border.default, border.focus, border.error, text.primary`. **Typography.** typography.button.md, typography.body.md, typography.metadata.

**Spacing and shape.** Use the specimen’s inspected values above. Use `layout.component-gap`, `layout.card-padding` or `layout.sheet-inset` where the corresponding anatomy applies.

**Adaptation and accessibility.** 54 px field and 80 px labeled baseline. Keep native focus and error announcement. Long text and helper copy grow the surrounding form.

**Suggested props.** `label, value, placeholder, secureTextEntry, error, helperText, disabled, onChangeText`.

**Usage example.** Labeled · Empty follows the approved specimen at FC-33212. Board 10 contains the editable reference.

## Multiline Input

Compose diary or Kitchen Magic text. Label, wrapping text body and field boundary.

| Approved variant or content | State/condition | Baseline size | Source | Radius / spacing evidence |
| --- | --- | --- | --- | --- |
| Diary | Filled | 350 × 140 | FC-11181 | r 16.0 / 8.0 |
| Kitchen | Empty | 350 × 88 | FC-20088 | r 16.0 / 4.0 |
| Kitchen | Focused | 350 × 88 | FC-20090 | r 16.0 / 4.0 |
| Kitchen | Filled | 350 × 88 | FC-20092 | r 16.0 / 4.0 |

**Semantic color.** `surface.default, border.default, text.primary`. **Typography.** typography.button.md, typography.body.md, typography.metadata.

**Spacing and shape.** Use the specimen’s inspected values above. Use `layout.component-gap`, `layout.card-padding` or `layout.sheet-inset` where the corresponding anatomy applies.

**Adaptation and accessibility.** Diary editor is 140 px at baseline, Kitchen request is 88 px. Support multiline wrapping, caret visibility and input focus scrolling.

**Suggested props.** `label, value, placeholder, minLines, error, onChangeText, onBlur`.

**Usage example.** Diary · Filled follows the approved specimen at FC-11181. Board 09 contains the editable reference.

## Search Input

Find a recipe by query. Field boundary, leading search icon, query text.

| Approved variant or content | State/condition | Baseline size | Source | Radius / spacing evidence |
| --- | --- | --- | --- | --- |
| Recipe search | Default | 350 × 60 | FC-13938 | r 16.0 / 12.0 |

**Semantic color.** `surface.default, icon.primary, text.secondary`. **Typography.** typography.button.md, typography.body.md, typography.metadata.

**Spacing and shape.** Use the specimen’s inspected values above. Use `layout.component-gap`, `layout.card-padding` or `layout.sheet-inset` where the corresponding anatomy applies.

**Adaptation and accessibility.** 60 px field at baseline. Provide the clear control only where approved. Use an accessible label and announce results separately.

**Suggested props.** `value, placeholder, onChangeText, onSubmit, accessibilityLabel`.

**Usage example.** Recipe search · Default follows the approved specimen at FC-13938. Board 09 contains the editable reference.

## Checkbox

Toggle Planner task completion. Outer hit target, state well and check indicator.

| Approved variant or content | State/condition | Baseline size | Source | Radius / spacing evidence |
| --- | --- | --- | --- | --- |
| Task | Unchecked | 48 × 48 | FC-1688 | r inherited / by anatomy |
| Task | Checked | 48 × 48 | FC-2823 | r inherited / by anatomy |

**Semantic color.** `module.planner.accent, border.default, icon.primary`. **Typography.** No glyph text. Where a row label is present use typography.body.md..

**Spacing and shape.** Use the specimen’s inspected values above. Use `layout.component-gap`, `layout.card-padding` or `layout.sheet-inset` where the corresponding anatomy applies.

**Adaptation and accessibility.** 48 × 48 target surrounds the 28 px visual checkbox. Expose one accessible checked state.

**Suggested props.** `checked, disabled, accessibilityLabel, onCheckedChange`.

**Usage example.** Task · Unchecked follows the approved specimen at FC-1688. Board 08 contains the editable reference.

## Radio Control

Make one choice in a related set. State ring, filled center and associated row label.

| Approved variant or content | State/condition | Baseline size | Source | Radius / spacing evidence |
| --- | --- | --- | --- | --- |
| Visibility | Selected glyph | 20 × 20 | FC-12201 | r 16.0 / by anatomy |
| Visibility | Unselected glyph | 20 × 20 | FC-12212 | r 16.0 / by anatomy |
| Unselected | Full row | 350 × 76 | FC-34919 | r 16.0 / 12.0 |
| Selected | Full row | 350 × 76 | FC-34929 | r 16.0 / 12.0 |

**Semantic color.** `border.default, module.diary.accent, icon.primary`. **Typography.** No glyph text. Where a row label is present use typography.body.md..

**Spacing and shape.** Use the specimen’s inspected values above. Use `layout.component-gap`, `layout.card-padding` or `layout.sheet-inset` where the corresponding anatomy applies.

**Adaptation and accessibility.** 20 px glyph is decorative within a row of at least 48 px. Announce selected and preserve explicit consent.

**Suggested props.** `name, value, selectedValue, label, onValueChange`.

**Usage example.** Visibility · Selected glyph follows the approved specimen at FC-12201. Board 08 contains the editable reference.

## Switch

Change a notification preference. Label, icon well, track and thumb.

| Approved variant or content | State/condition | Baseline size | Source | Radius / spacing evidence |
| --- | --- | --- | --- | --- |
| Preferences | On | 350 × 60 | FC-37663 | r 16.0 / 12.0 |
| Preferences | Off | 350 × 60 | FC-37671 | r 16.0 / 12.0 |
| Preferences | Unavailable | 350 × 60 | FC-37679 | r 16.0 / 12.0 |

**Semantic color.** `feedback.success, action.disabled.background, icon.primary`. **Typography.** typography.button.md, typography.body.md, typography.metadata.

**Spacing and shape.** Use the specimen’s inspected values above. Use `layout.component-gap`, `layout.card-padding` or `layout.sheet-inset` where the corresponding anatomy applies.

**Adaptation and accessibility.** 52 × 32 track sits inside the 60 px row. Give the row one switch role and a readable state. Use disabled semantics when unavailable.

**Suggested props.** `value, disabled, label, onValueChange`.

**Usage example.** Preferences · On follows the approved specimen at FC-37663. Board 10 contains the editable reference.

## Select

Open a bounded choice. Value, purpose label or icon, direction affordance.

| Approved variant or content | State/condition | Baseline size | Source | Radius / spacing evidence |
| --- | --- | --- | --- | --- |
| Date | Default | 350 × 60 | FC-13923 | r 16.0 / 12.0 |
| Meal type | Default | 350 × 60 | FC-13928 | r 16.0 / 12.0 |
| Access | Default | 350 × 60 | FC-13933 | r 16.0 / 12.0 |

**Semantic color.** `surface.card, icon.primary, text.primary`. **Typography.** typography.button.md, typography.body.md, typography.metadata.

**Spacing and shape.** Use the specimen’s inspected values above. Use `layout.component-gap`, `layout.card-padding` or `layout.sheet-inset` where the corresponding anatomy applies.

**Adaptation and accessibility.** 60 px row baseline. Wrap the label and expose expanded state or modal context. Return focus on dismissal.

**Suggested props.** `label, value, options, expanded, disabled, onSelect, onOpen`.

**Usage example.** Date · Default follows the approved specimen at FC-13923. Board 09 contains the editable reference.

## Selection Chip

Choose an ingredient or a day. Label, optional category glyph and compact selection shape.

| Approved variant or content | State/condition | Baseline size | Source | Radius / spacing evidence |
| --- | --- | --- | --- | --- |
| Ingredient | Example | 162 × 48 | FC-13949 | r 16.0 / 8.0 |
| Weekday | Unselected | 48 × 48 | FC-7471 | r 16.0 / 0.0 |
| Weekday | Selected | 48 × 48 | FC-7473 | r 16.0 / 0.0 |
| Day | Today | 50 × 48 | FC-1529 | r inherited / by anatomy |

**Semantic color.** `module.kitchen.accent, module.planner.accent, text.primary`. **Typography.** typography.button.md, typography.body.md, typography.metadata.

**Spacing and shape.** Use the specimen’s inspected values above. Use `layout.component-gap`, `layout.card-padding` or `layout.sheet-inset` where the corresponding anatomy applies.

**Adaptation and accessibility.** 48 px high. Allow flex or wrap before shrinking touch targets. Use selected state in accessible output.

**Suggested props.** `label, variant, selected, icon, disabled, onPress`.

**Usage example.** Ingredient · Example follows the approved specimen at FC-13949. Board 09 contains the editable reference.

## Card

Group content or open a feature. Rounded surface, content slot, optional artwork and action.

| Approved variant or content | State/condition | Baseline size | Source | Radius / spacing evidence |
| --- | --- | --- | --- | --- |
| Home | Planner launcher | 354 × 116 | FC-53 | r inherited / by anatomy |
| Home | Diary launcher | 173 × 149 | FC-71 | r inherited / by anatomy |
| Home | Kitchen launcher | 173 × 149 | FC-84 | r inherited / by anatomy |
| Profile | Identity | 350 × 180 | FC-29231 | r 24.0 / 0.0 |

**Semantic color.** `surface.card, module.*.accent, text.primary`. **Typography.** typography.button.md, typography.body.md, typography.metadata.

**Spacing and shape.** Use the specimen’s inspected values above. Use `layout.component-gap`, `layout.card-padding` or `layout.sheet-inset` where the corresponding anatomy applies.

**Adaptation and accessibility.** Use content-driven height and approved module fills. Bind the card role only when the whole surface acts.

**Suggested props.** `variant, tone, title, children, leading, onPress`.

**Usage example.** Home · Planner launcher follows the approved specimen at FC-53. Board 09 contains the editable reference.

## Modal

Display a blocking foreground layer. Screen-sized dimmed underlay and a focus-trapped sheet or dialog.

| Approved variant or content | State/condition | Baseline size | Source | Radius / spacing evidence |
| --- | --- | --- | --- | --- |
| Permission | Visible | 390 × 844 | FC-32859 | r inherited / 0.0 |

**Semantic color.** `surface.elevated, text.primary; scrim treatment by fixture`. **Typography.** typography.heading.lg, typography.body.md.

**Spacing and shape.** Use the specimen’s inspected values above. Use `layout.component-gap`, `layout.card-padding` or `layout.sheet-inset` where the corresponding anatomy applies.

**Adaptation and accessibility.** The full 390 × 844 example is a visual reference only. The runtime overlay fills the viewport. Return focus to the triggering action.

**Suggested props.** `visible, dismissible, onDismiss, children`.

**Usage example.** Permission · Visible follows the approved specimen at FC-32859. Board 09 contains the editable reference.

## Bottom Sheet

Present choices with a reachable footer. Handle, header, close target, scrolling body and fixed actions.

| Approved variant or content | State/condition | Baseline size | Source | Radius / spacing evidence |
| --- | --- | --- | --- | --- |
| Photo options | Visible | 390 × 380 | FC-12011 | r 24.0 / 0.0 |
| Permission | Visible | 390 × 352 | FC-32956 | r 24.0 / 0.0 |

**Semantic color.** `surface.elevated, text.primary`. **Typography.** typography.heading.lg, typography.body.md.

**Spacing and shape.** Use the specimen’s inspected values above. Use `layout.component-gap`, `layout.card-padding` or `layout.sheet-inset` where the corresponding anatomy applies.

**Adaptation and accessibility.** 390 px is the reference width. Use viewport width, cap height, keep Close and actions reachable and let long copy scroll.

**Suggested props.** `title, visible, footer, children, onClose`.

**Usage example.** Photo options · Visible follows the approved specimen at FC-12011. Board 09 contains the editable reference.

## Dialog

Confirm a consequential decision. Title, consequences, primary and cancel actions.

| Approved variant or content | State/condition | Baseline size | Source | Radius / spacing evidence |
| --- | --- | --- | --- | --- |
| Disconnect | Visible | 390 × 352 | FC-24964 | r 24.0 / 0.0 |

**Semantic color.** `surface.elevated, action.destructive.*, action.secondary.*`. **Typography.** typography.heading.lg, typography.body.md.

**Spacing and shape.** Use the specimen’s inspected values above. Use `layout.component-gap`, `layout.card-padding` or `layout.sheet-inset` where the corresponding anatomy applies.

**Adaptation and accessibility.** Approved confirmations use bottom-sheet presentation. Preserve safe cancel and accessible dialog focus. Centered modal variant is proposed only.

**Suggested props.** `title, message, confirmLabel, cancelLabel, destructive, onConfirm, onCancel`.

**Usage example.** Disconnect · Visible follows the approved specimen at FC-24964. Board 09 contains the editable reference.

## Bottom Navigation

Switch root destinations. Ink dock, equal tabs, vector icons, labels and selected treatment.

| Approved variant or content | State/condition | Baseline size | Source | Radius / spacing evidence |
| --- | --- | --- | --- | --- |
| Home active | Default | 370 × 68 | FC-33405 | r inherited / 0.0 |
| Plans active | Default | 370 × 68 | FC-33439 | r inherited / 4.0 |
| Us active | Default | 370 × 68 | FC-37242 | r inherited / 0.0 |
| Me active | Default | 370 × 68 | FC-37523 | r inherited / 0.0 |
| Diary destination | Shared dock | 370 × 68 | FC-34850 | r inherited / 0.5 |
| Kitchen destination | Shared dock | 370 × 68 | FC-35516 | r inherited / 0.5 |

**Semantic color.** `navigation.*`. **Typography.** typography.button.md, typography.body.md, typography.metadata.

**Spacing and shape.** Use the specimen’s inspected values above. Use `layout.component-gap`, `layout.card-padding` or `layout.sheet-inset` where the corresponding anatomy applies.

**Adaptation and accessibility.** 68 px dock without OS inset. Distribute four tabs equally, use ≥48 px targets and keep dock outside content scroll.

**Suggested props.** `activeRoute, mode, tabs, onSelect, accessibilityLabel`.

**Usage example.** Home active follows the approved specimen at FC-33405. Board 11 contains the editable reference.

## Header

Orient the current route. Back or leading icon, screen title, optional action.

| Approved variant or content | State/condition | Baseline size | Source | Radius / spacing evidence |
| --- | --- | --- | --- | --- |
| Little Updates | Default | 350 × 48 | FC-31905 | r 16.0 / 16.0 |
| Kitchen | Default | 350 × 48 | FC-20199 | r 16.0 / 16.0 |

**Semantic color.** `surface.default, text.primary, icon.primary`. **Typography.** typography.heading.lg, typography.body.md.

**Spacing and shape.** Use the specimen’s inspected values above. Use `layout.component-gap`, `layout.card-padding` or `layout.sheet-inset` where the corresponding anatomy applies.

**Adaptation and accessibility.** 48 px control row plus separate authored inset. Let the title use available space and preserve Back/action targets.

**Suggested props.** `title, leading, trailing, onBack`.

**Usage example.** Little Updates · Default follows the approved specimen at FC-31905. Board 11 contains the editable reference.

## Back Button

Return to the approved caller. 48 px target and centered arrow.

| Approved variant or content | State/condition | Baseline size | Source | Radius / spacing evidence |
| --- | --- | --- | --- | --- |
| Back | Default | 48 × 48 | FC-241 | r 24.0 / by anatomy |

**Semantic color.** `background.subtle, icon.primary`. **Typography.** No glyph text. Where a row label is present use typography.body.md..

**Spacing and shape.** Use the specimen’s inspected values above. Use `layout.component-gap`, `layout.card-padding` or `layout.sheet-inset` where the corresponding anatomy applies.

**Adaptation and accessibility.** Keep one accessible action and restore focus or scroll when applicable.

**Suggested props.** `onPress, accessibilityLabel`.

**Usage example.** Back · Default follows the approved specimen at FC-241. Board 11 contains the editable reference.

## Tabs

Switch peer views in a module. Equal targets, selection visual and labels.

| Approved variant or content | State/condition | Baseline size | Source | Radius / spacing evidence |
| --- | --- | --- | --- | --- |
| Planner | Overview active | 350 × 56 | FC-33475 | r 18.0 / 0.0 |
| Planner | Agenda active | 350 × 56 | FC-33492 | r 18.0 / 0.0 |
| Planner | Calendar active | 350 × 56 | FC-33509 | r 18.0 / 0.0 |
| Planner | Routines active | 350 × 56 | FC-33526 | r 18.0 / 0.0 |

**Semantic color.** `module.planner.accent, text.primary`. **Typography.** typography.button.md, typography.body.md, typography.metadata.

**Spacing and shape.** Use the specimen’s inspected values above. Use `layout.component-gap`, `layout.card-padding` or `layout.sheet-inset` where the corresponding anatomy applies.

**Adaptation and accessibility.** 56 px shell. Fill available width. Keep selected announcement and use approved narrow labels.

**Suggested props.** `items, value, onChange, accessibilityLabel`.

**Usage example.** Planner · Overview active follows the approved specimen at FC-33475. Board 11 contains the editable reference.

## Segmented Control

Switch ownership or scope. Container, segment buttons and selected surface.

| Approved variant or content | State/condition | Baseline size | Source | Radius / spacing evidence |
| --- | --- | --- | --- | --- |
| Diary | Personal | 350 × 56 | FC-7716 | r 20.0 / 4.0 |
| Diary | Shared | 350 × 56 | FC-7725 | r 20.0 / 4.0 |
| Kitchen | Personal | 350 × 56 | FC-13805 | r 20.0 / 4.0 |
| Kitchen | Shared | 350 × 56 | FC-13814 | r 20.0 / 4.0 |

**Semantic color.** `module.diary.accent, module.kitchen.accent, text.primary`. **Typography.** typography.button.md, typography.body.md, typography.metadata.

**Spacing and shape.** Use the specimen’s inspected values above. Use `layout.component-gap`, `layout.card-padding` or `layout.sheet-inset` where the corresponding anatomy applies.

**Adaptation and accessibility.** 56 px shell and ≥48 px segment targets. Selected role and product access checks are distinct.

**Suggested props.** `options, selectedValue, onChange, disabled`.

**Usage example.** Diary · Personal follows the approved specimen at FC-7716. Board 11 contains the editable reference.

## Badge

Show count or status at a glance. Compact surface and single text or symbol.

| Approved variant or content | State/condition | Baseline size | Source | Radius / spacing evidence |
| --- | --- | --- | --- | --- |
| Unread count | Active | 32 × 32 | FC-31915 | r 12.0 / 0.0 |
| Category | Planner | 42 × 42 | FC-38132 | r 12.0 / 0.0 |

**Semantic color.** `module.*.accent, text.primary`. **Typography.** typography.button.md, typography.body.md, typography.metadata.

**Spacing and shape.** Use the specimen’s inspected values above. Use `layout.component-gap`, `layout.card-padding` or `layout.sheet-inset` where the corresponding anatomy applies.

**Adaptation and accessibility.** 32 px count plate or 42 px category badge. Decorative badges are not independent controls.

**Suggested props.** `value, tone, accessibilityLabel`.

**Usage example.** Unread count · Active follows the approved specimen at FC-31915. Board 12 contains the editable reference.

## Toast

Confirm completion with an optional Undo. Status surface, text and optional action.

| Approved variant or content | State/condition | Baseline size | Source | Radius / spacing evidence |
| --- | --- | --- | --- | --- |
| Planner status banner | Success | 350 × 64 | FC-2838 | r 16.0 / 8.0 |
| Profile notice | Good | 350 × 64 | FC-25394 | r 16.0 / 12.0 |

**Semantic color.** `feedback.success, text.primary`. **Typography.** typography.button.md, typography.body.md, typography.metadata.

**Spacing and shape.** Use the specimen’s inspected values above. Use `layout.component-gap`, `layout.card-padding` or `layout.sheet-inset` where the corresponding anatomy applies.

**Adaptation and accessibility.** Current examples are inline banners. A timed floating toast is PROPOSED. Keep Undo ≥48 px and issue feedback politely.

**Suggested props.** `message, tone, actionLabel, onAction`.

**Usage example.** Planner status banner · Success follows the approved specimen at FC-2838. Board 12 contains the editable reference.

## Loading Indicator

Communicate pending work. Activity indicator, loading action or skeleton card.

| Approved variant or content | State/condition | Baseline size | Source | Radius / spacing evidence |
| --- | --- | --- | --- | --- |
| Button | Loading | 350 × 56 | FC-271 | r 28.0 / 8.0 |
| Notification | Skeleton | 350 × 92 | FC-38287 | r 16.0 / 12.0 |
| Kitchen | Loading | 350 × 60 | FC-35622 | r 16.0 / 12.0 |

**Semantic color.** `feedback.info, action.primary.*`. **Typography.** typography.button.md, typography.body.md, typography.metadata.

**Spacing and shape.** Use the specimen’s inspected values above. Use `layout.component-gap`, `layout.card-padding` or `layout.sheet-inset` where the corresponding anatomy applies.

**Adaptation and accessibility.** Maintain existing geometry while pending. Announce busy state and respect platform reduced motion.

**Suggested props.** `variant, label, active`.

**Usage example.** Button · Loading follows the approved specimen at FC-271. Board 12 contains the editable reference.

## Empty State

Explain an empty view and offer an action. Editable art, title, supporting copy and surrounding action slot.

| Approved variant or content | State/condition | Baseline size | Source | Radius / spacing evidence |
| --- | --- | --- | --- | --- |
| Little Updates | Empty | 350 × 275 | FC-32764 | r 16.0 / 16.0 |
| Little Updates | Back action | 350 × 56 | FC-265 | r 28.0 / 8.0 |

**Semantic color.** `surface.default, feedback.info, text.primary`. **Typography.** typography.heading.lg, typography.body.md.

**Spacing and shape.** Use the specimen’s inspected values above. Use `layout.component-gap`, `layout.card-padding` or `layout.sheet-inset` where the corresponding anatomy applies.

**Adaptation and accessibility.** Illustration uses a flexible clipped panel and a proportional inner scene. Actions remain reachable outside scrolling copy.

**Suggested props.** `hero, title, description, action`.

**Usage example.** Little Updates · Empty follows the approved specimen at FC-32764. Board 12 contains the editable reference.

## Error State

Explain a problem and expose recovery. Tone, icon, message and optional retry.

| Approved variant or content | State/condition | Baseline size | Source | Radius / spacing evidence |
| --- | --- | --- | --- | --- |
| Diary | Error | 350 × 60 | FC-34901 | r 16.0 / 12.0 |
| Kitchen | Error | 350 × 60 | FC-35627 | r 16.0 / 12.0 |
| Little Updates | Retry state art and copy | 350 × 256 | FC-32842 | r 16.0 / 16.0 |

**Semantic color.** `feedback.error, text.primary`. **Typography.** typography.heading.lg, typography.body.md.

**Spacing and shape.** Use the specimen’s inspected values above. Use `layout.component-gap`, `layout.card-padding` or `layout.sheet-inset` where the corresponding anatomy applies.

**Adaptation and accessibility.** Constrain text width and grow vertically. Announce actionable errors and preserve draft context through retry.

**Suggested props.** `message, title, retryLabel, onRetry`.

**Usage example.** Diary · Error follows the approved specimen at FC-34901. Board 12 contains the editable reference.

## Success State

Confirm progress or an action. Status surface, short copy and optional continuation.

| Approved variant or content | State/condition | Baseline size | Source | Radius / spacing evidence |
| --- | --- | --- | --- | --- |
| Diary | Success | 350 × 60 | FC-34906 | r 16.0 / 12.0 |
| Kitchen | Success | 350 × 60 | FC-35632 | r 16.0 / 12.0 |
| Profile | Success | 350 × 64 | FC-25394 | r 16.0 / 12.0 |

**Semantic color.** `feedback.success, text.primary`. **Typography.** typography.heading.lg, typography.body.md.

**Spacing and shape.** Use the specimen’s inspected values above. Use `layout.component-gap`, `layout.card-padding` or `layout.sheet-inset` where the corresponding anatomy applies.

**Adaptation and accessibility.** Preserve layout and avoid forced focus shifts for quiet confirmations; give explicit next action in a confirmation sheet.

**Suggested props.** `message, title, onContinue`.

**Usage example.** Diary · Success follows the approved specimen at FC-34906. Board 12 contains the editable reference.

## Task Card

Read or complete a plan. Task text, category, status and separate completion target.

| Approved variant or content | State/condition | Baseline size | Source | Radius / spacing evidence |
| --- | --- | --- | --- | --- |
| Personal | Open | 350 × 68 | FC-1541 | r inherited / by anatomy |
| Personal | Complete | 350 × 68 | FC-1549 | r inherited / by anatomy |

**Semantic color.** `module.planner.*, text.primary`. **Typography.** typography.button.md, typography.body.md, typography.metadata.

**Spacing and shape.** Use the specimen’s inspected values above. Use `layout.component-gap`, `layout.card-padding` or `layout.sheet-inset` where the corresponding anatomy applies.

**Adaptation and accessibility.** 68 px base row, supporting text grows in larger text settings. Independent details and completion target need distinct names.

**Suggested props.** `title, detail, completed, visibility, onOpen, onToggle`.

**Usage example.** Personal · Open follows the approved specimen at FC-1541. Board 13 contains the editable reference.

## Routine Card

Review recurring work and ownership. Title, schedule, ownership and progress or check-in cues.

| Approved variant or content | State/condition | Baseline size | Source | Radius / spacing evidence |
| --- | --- | --- | --- | --- |
| Shared | Scheduled | 350 × 116 | FC-4017 | r 20.0 / by anatomy |
| Personal | Scheduled | 350 × 116 | FC-4033 | r 20.0 / by anatomy |
| Shared | Due | 350 × 64 | FC-4043 | r 16.0 / by anatomy |
| Shared | Checked in | 350 × 64 | FC-4054 | r 16.0 / by anatomy |

**Semantic color.** `module.planner.*, feedback.success, text.primary`. **Typography.** typography.button.md, typography.body.md, typography.metadata.

**Spacing and shape.** Use the specimen’s inspected values above. Use `layout.component-gap`, `layout.card-padding` or `layout.sheet-inset` where the corresponding anatomy applies.

**Adaptation and accessibility.** 116 px cards and 64 px check-in rows are reference dimensions. Let content grow and identify whose check-in changed.

**Suggested props.** `title, cadence, scope, participants, progress, onPress, onCheckIn`.

**Usage example.** Shared · Scheduled follows the approved specimen at FC-4017. Board 13 contains the editable reference.

## Diary Card

Preview an eligible journal memory. Date component, title and metadata, optional artwork.

| Approved variant or content | State/condition | Baseline size | Source | Radius / spacing evidence |
| --- | --- | --- | --- | --- |
| Private memory | Default | 350 × 96 | FC-34871 | r 20.0 / 12.0 |
| Shared memory | Default | 350 × 96 | FC-34881 | r 20.0 / 12.0 |

**Semantic color.** `module.diary.*, text.primary`. **Typography.** typography.button.md, typography.body.md, typography.metadata.

**Spacing and shape.** Use the specimen’s inspected values above. Use `layout.component-gap`, `layout.card-padding` or `layout.sheet-inset` where the corresponding anatomy applies.

**Adaptation and accessibility.** 96 px baseline. Wrap titles in the text area. Render shared preview content only once access is confirmed.

**Suggested props.** `title, date, scope, mood, preview, onPress`.

**Usage example.** Private memory follows the approved specimen at FC-34871. Board 13 contains the editable reference.

## Mood Selector

Choose a diary mood. Illustrated glyph, visible state and label.

| Approved variant or content | State/condition | Baseline size | Source | Radius / spacing evidence |
| --- | --- | --- | --- | --- |
| Soft | Unselected | 62 × 84 | FC-7858 | r 16.0 / 4.0 |
| Soft | Selected | 62 × 84 | FC-7865 | r 16.0 / 4.0 |
| Bright | Unselected | 62 × 84 | FC-7872 | r 16.0 / 4.0 |
| Bright | Selected | 62 × 84 | FC-7883 | r 16.0 / 4.0 |
| Tender | Unselected | 62 × 84 | FC-7894 | r 16.0 / 4.0 |
| Tender | Selected | 62 × 84 | FC-7901 | r 16.0 / 4.0 |
| Heavy | Unselected | 62 × 84 | FC-7908 | r 16.0 / 4.0 |
| Heavy | Selected | 62 × 84 | FC-7915 | r 16.0 / 4.0 |
| Restless | Unselected | 62 × 84 | FC-7922 | r 16.0 / 4.0 |
| Restless | Selected | 62 × 84 | FC-7929 | r 16.0 / 4.0 |

**Semantic color.** `module.diary.*, text.primary`. **Typography.** typography.button.md, typography.body.md, typography.metadata.

**Spacing and shape.** Use the specimen’s inspected values above. Use `layout.component-gap`, `layout.card-padding` or `layout.sheet-inset` where the corresponding anatomy applies.

**Adaptation and accessibility.** 62 × 84 reference tile. Flow or wrap with ≥48 px targets. Preserve selected semantics and text labels.

**Suggested props.** `moods, value, onChange, accessibilityLabel`.

**Usage example.** Soft · Unselected follows the approved specimen at FC-7858. Board 13 contains the editable reference.

## Recipe Card

Preview and open a recipe. Vector plate, title and recipe metadata.

| Approved variant or content | State/condition | Baseline size | Source | Radius / spacing evidence |
| --- | --- | --- | --- | --- |
| Orzo | Default | 169 × 184 | FC-35537 | r 20.0 / 4.0 |
| Toast | Default | 169 × 184 | FC-35555 | r 20.0 / 4.0 |
| Peach | Default | 169 × 184 | FC-35568 | r 20.0 / 4.0 |

**Semantic color.** `module.kitchen.*, text.primary`. **Typography.** typography.button.md, typography.body.md, typography.metadata.

**Spacing and shape.** Use the specimen’s inspected values above. Use `layout.component-gap`, `layout.card-padding` or `layout.sheet-inset` where the corresponding anatomy applies.

**Adaptation and accessibility.** 169 × 184 baseline tile. Flex within the grid, preserve artwork proportions and allow natural title wrap.

**Suggested props.** `title, illustration, time, metadata, saved, onPress`.

**Usage example.** Orzo follows the approved specimen at FC-35537. Board 13 contains the editable reference.

## Kitchen Magic Composer

Capture a recipe request. Multiline prompt, attachment actions and optional prompt starters.

| Approved variant or content | State/condition | Baseline size | Source | Radius / spacing evidence |
| --- | --- | --- | --- | --- |
| Composer | Empty | 350 × 268 | FC-20219 | r 16.0 / 12.0 |
| Request | Filled | 350 × 88 | FC-20092 | r 16.0 / 4.0 |
| Attachment | Preview | 108 × 104 | FC-20095 | r 12.0 / 0.0 |
| Attachment | Retry | 169 × 48 | FC-20083 | r 16.0 / 8.0 |

**Semantic color.** `module.kitchen.*, surface.default, text.primary`. **Typography.** typography.button.md, typography.body.md, typography.metadata.

**Spacing and shape.** Use the specimen’s inspected values above. Use `layout.component-gap`, `layout.card-padding` or `layout.sheet-inset` where the corresponding anatomy applies.

**Adaptation and accessibility.** Form scrolls with long text or attachments. Keep the final action reachable and preserve request and attachment identity across routes.

**Suggested props.** `value, attachments, promptOptions, status, onChangeText, onAttach, onRemove, onSubmit`.

**Usage example.** Composer · Empty follows the approved specimen at FC-20219. Board 13 contains the editable reference.

## Notification Card

Open or manage an update. Category badge, copy column, timestamp and state rail.

| Approved variant or content | State/condition | Baseline size | Source | Radius / spacing evidence |
| --- | --- | --- | --- | --- |
| Planner | Unread | 350 × 92 | FC-38130 | r 16.0 / 4.0 |
| Planner | Read | 350 × 92 | FC-38146 | r 16.0 / 4.0 |
| Diary | Unread | 350 × 92 | FC-38197 | r 16.0 / 4.0 |
| Diary | Read | 350 × 92 | FC-38209 | r 16.0 / 4.0 |
| Kitchen | Unread | 350 × 92 | FC-38222 | r 16.0 / 4.0 |
| Kitchen | Read | 350 × 92 | FC-38234 | r 16.0 / 4.0 |
| Couple | Unread | 350 × 92 | FC-38247 | r 16.0 / 4.0 |
| Couple | Read | 350 × 92 | FC-38260 | r 16.0 / 4.0 |
| Routine | Unread | 350 × 92 | FC-38159 | r 16.0 / 4.0 |
| Routine | Read | 350 × 92 | FC-38171 | r 16.0 / 4.0 |
| Growth | Read | 350 × 92 | FC-38184 | r 16.0 / 4.0 |
| Account | Read | 350 × 92 | FC-38274 | r 16.0 / 4.0 |

**Semantic color.** `module.updates.*, module.*.accent, text.primary`. **Typography.** typography.button.md, typography.body.md, typography.metadata.

**Spacing and shape.** Use the specimen’s inspected values above. Use `layout.component-gap`, `layout.card-padding` or `layout.sheet-inset` where the corresponding anatomy applies.

**Adaptation and accessibility.** 92 px minimum and 56 px metadata rail. Wrap title and description independently and keep notification preview privacy-safe.

**Suggested props.** `category, isRead, title, description, timestamp, onOpen, onOptions`.

**Usage example.** Planner · Unread follows the approved specimen at FC-38130. Board 13 contains the editable reference.

## Couple Connection Card

Indicate connection status and next action. Status icon, title, explanation and relevant affordance.

| Approved variant or content | State/condition | Baseline size | Source | Radius / spacing evidence |
| --- | --- | --- | --- | --- |
| Connect | Available | 350 × 64 | FC-37284 | r 16.0 / 12.0 |
| Invite | Available | 350 × 64 | FC-37293 | r 16.0 / 12.0 |
| Status | Waiting | 350 × 64 | FC-37269 | r 16.0 / 12.0 |
| Status | Error | 350 × 64 | FC-37274 | r 16.0 / 12.0 |

**Semantic color.** `module.couple.*, feedback.error, text.primary`. **Typography.** typography.button.md, typography.body.md, typography.metadata.

**Spacing and shape.** Use the specimen’s inspected values above. Use `layout.component-gap`, `layout.card-padding` or `layout.sheet-inset` where the corresponding anatomy applies.

**Adaptation and accessibility.** 64 px status and row baseline. Pair labels with state indicators and respect access changes.

**Suggested props.** `status, partnerName, message, actionLabel, onPress`.

**Usage example.** Connect · Available follows the approved specimen at FC-37284. Board 13 contains the editable reference.

## Together Growth Progress

Show monthly shared progress. Level, current and goal copy, decorative progress rail.

| Approved variant or content | State/condition | Baseline size | Source | Radius / spacing evidence |
| --- | --- | --- | --- | --- |
| Couple Space | Summary | 350 × 118 | FC-24311 | r 20.0 / 8.0 |
| Shared | Monthly progress | 350 × 116 | FC-7476 | r 20.0 / 8.0 |
| Personal | Monthly progress | 350 × 116 | FC-7483 | r 20.0 / 8.0 |

**Semantic color.** `feedback.success, text.primary`. **Typography.** typography.button.md, typography.body.md, typography.metadata.

**Spacing and shape.** Use the specimen’s inspected values above. Use `layout.component-gap`, `layout.card-padding` or `layout.sheet-inset` where the corresponding anatomy applies.

**Adaptation and accessibility.** 118 px summary or 116 px progress card at baseline. Expose current and total values; fill width without scaling type.

**Suggested props.** `level, current, goal, period, scope, onPress`.

**Usage example.** Couple Space · Summary follows the approved specimen at FC-24311. Board 13 contains the editable reference.

## Proposed gaps

- Pressed and focus-visible treatments for families that lack an approved specimen.
- Floating toast and centered confirmation dialog. Current approved equivalents are inline banners and bottom-sheet confirmations.
- Arbitrary cross-products of tone, loading and disabled states. Use only the meaningful approved combinations.
