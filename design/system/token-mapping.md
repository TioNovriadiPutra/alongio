# Phase 10S token mapping

> This records the earlier semantic pass. For current color names and binding evidence, use the [palette audit](color-palette-audit.md) and [palette mapping](color-palette-mapping.md).

Canonical paths keep the existing JSON namespaces. FigCraft names use dotted paths. The rows below map the installed variable IDs and the registry leaves. Color aliases retain role identity even where they share a primitive.

| Existing design label | Existing FigCraft variable | Canonical token / JSON path | Resolved value or alias | Components using it before migration | Migration status |
| --- | --- | --- | --- | --- | --- |
| `action.destructive.background` | `action/destructive/background` | `action.destructive.background` | `palette.pink` → #E88C9F | 1 fields · action.destructive.background | Renamed in place · `VariableID:34` · 7 app/library, 5 Design System direct refs |
| `action.destructive.foreground` | `action/destructive/foreground` | `action.destructive.foreground` | `palette.ink` → #29272B | 1 fields · action.destructive.foreground | Renamed in place · `VariableID:35` · 7 app/library, 5 Design System direct refs |
| `action.disabled.background` | `action/disabled/background` | `action.disabled.background` | `palette.lavender` → #DDD5F3 | 1 fields · action.disabled.background | Renamed in place · `VariableID:32` · 8 app/library, 4 Design System direct refs |
| `action.disabled.foreground` | `action/disabled/foreground` | `action.disabled.foreground` | `palette.muted` → #70686A | 1 fields · action.disabled.foreground | Renamed in place · `VariableID:33` · 8 app/library, 4 Design System direct refs |
| `action.primary.background` | `action/primary/background` | `action.primary.background` | `palette.ink` → #29272B | 1 fields · action.primary.background | Renamed in place · `VariableID:27` · 49 app/library, 15 Design System direct refs |
| `action.primary.foreground` | `action/primary/foreground` | `action.primary.foreground` | `palette.cream` → #F8F1E5 | 1 fields · action.primary.foreground | Renamed in place · `VariableID:28` · 49 app/library, 15 Design System direct refs |
| `action.primary.pressed` | `action/primary/pressed` | `action.primary.pressed` | `palette.indigo` → #A6A3E3 | 1 fields · action.primary.pressed | Renamed in place · `VariableID:29` · 1 app/library, 4 Design System direct refs |
| `No direct label` | `None` | `action.primary.pressed-foreground` | `palette.ink` → #29272B | 0 fields | New semantic alias · `VariableID:67` · 1 app/library, 3 Design System direct refs |
| `action.secondary.background` | `action/secondary/background` | `action.secondary.background` | `palette.cream` → #F8F1E5 | 1 fields · action.secondary.background | Renamed in place · `VariableID:30` · 0 app/library, 2 Design System direct refs |
| `action.secondary.foreground` | `action/secondary/foreground` | `action.secondary.foreground` | `palette.ink` → #29272B | 1 fields · action.secondary.foreground | Renamed in place · `VariableID:31` · 30 app/library, 17 Design System direct refs |
| `background.default` | `background/default` | `background.default` | `palette.cream` → #F8F1E5 | 1 fields · background.default | Renamed in place · `VariableID:9` · 308 app/library, 2 Design System direct refs |
| `background.inverse` | `background/inverse` | `background.inverse` | `palette.ink` → #29272B | 1 fields · background.inverse | Renamed in place · `VariableID:11` · 0 app/library, 2 Design System direct refs |
| `background.subtle` | `background/subtle` | `background.subtle` | `palette.lavender` → #DDD5F3 | 1 fields · background.subtle | Renamed in place · `VariableID:10` · 48 app/library, 28 Design System direct refs |
| `border.default` | `border/default` | `border.default` | `palette.ink` → #29272B | 1 fields · border.default | Renamed in place · `VariableID:20` · 45 app/library, 18 Design System direct refs |
| `border.error` | `border/error` | `border.error` | `palette.pink` → #E88C9F | 1 fields · border.error | Renamed in place · `VariableID:23` · 3 app/library, 3 Design System direct refs |
| `border.focus` | `border/focus` | `border.focus` | `palette.indigo` → #A6A3E3 | 1 fields · border.focus | Renamed in place · `VariableID:22` · 0 app/library, 2 Design System direct refs |
| `border.strong` | `border/strong` | `border.strong` | `palette.ink` → #29272B | 1 fields · border.strong | Renamed in place · `VariableID:21` · 0 app/library, 2 Design System direct refs |
| `No direct label` | `None` | `border.style` | solid | 0 fields | Registry only |
| `No direct label` | `None` | `border.subtle` | `palette.muted` → #70686A | 0 fields | New semantic alias · `VariableID:66` · 25 app/library, 3 Design System direct refs |
| `No direct label` | `None` | `border.width.default` | 1 px | 0 fields | Native mirror · `VariableID:64` · 0 app/library, 0 Design System direct refs |
| `No direct label` | `None` | `border.width.illustration` | 2 px | 0 fields | Native mirror · `VariableID:65` · 0 app/library, 0 Design System direct refs |
| `feedback.error` | `feedback/error` | `feedback.error` | `palette.pink` → #E88C9F | 1 fields · feedback.error | Renamed in place · `VariableID:38` · 0 app/library, 2 Design System direct refs |
| `feedback.info` | `feedback/info` | `feedback.info` | `palette.lavender` → #DDD5F3 | 1 fields · feedback.info | Renamed in place · `VariableID:39` · 0 app/library, 2 Design System direct refs |
| `feedback.success` | `feedback/success` | `feedback.success` | `palette.green` → #A1C5A1 | 1 fields · feedback.success | Renamed in place · `VariableID:36` · 21 app/library, 4 Design System direct refs |
| `feedback.warning` | `feedback/warning` | `feedback.warning` | `palette.yellow` → #F3D36B | 1 fields · feedback.warning | Renamed in place · `VariableID:37` · 0 app/library, 2 Design System direct refs |
| `No direct label` | `None` | `font-family.body` | DM Sans | 0 fields | Native mirror · `VariableID:120` · 106 app/library, 40 Design System direct refs |
| `No direct label` | `None` | `font-family.display` | Space Grotesk | 0 fields | Native mirror · `VariableID:119` · 0 app/library, 6 Design System direct refs |
| `No direct label` | `None` | `font-size.step-11` | 11 px | 0 fields | Native mirror · `VariableID:115` · 0 app/library, 0 Design System direct refs |
| `No direct label` | `None` | `font-size.step-11-5` | 11.5 px | 0 fields | Native mirror · `VariableID:118` · 0 app/library, 0 Design System direct refs |
| `No direct label` | `None` | `font-size.step-12` | 12 px | 0 fields | Native mirror · `VariableID:114` · 0 app/library, 1 Design System direct refs |
| `No direct label` | `None` | `font-size.step-13` | 13 px | 0 fields | Native mirror · `VariableID:113` · 0 app/library, 1 Design System direct refs |
| `No direct label` | `None` | `font-size.step-13-5` | 13.5 px | 0 fields | Native mirror · `VariableID:117` · 0 app/library, 0 Design System direct refs |
| `No direct label` | `None` | `font-size.step-14` | 14 px | 0 fields | Native mirror · `VariableID:112` · 0 app/library, 1 Design System direct refs |
| `No direct label` | `None` | `font-size.step-15` | 15 px | 0 fields | Native mirror · `VariableID:116` · 0 app/library, 0 Design System direct refs |
| `No direct label` | `None` | `font-size.step-16` | 16 px | 0 fields | Native mirror · `VariableID:111` · 0 app/library, 1 Design System direct refs |
| `No direct label` | `None` | `font-size.step-18` | 18 px | 0 fields | Native mirror · `VariableID:110` · 0 app/library, 1 Design System direct refs |
| `No direct label` | `None` | `font-size.step-20` | 20 px | 0 fields | Native mirror · `VariableID:109` · 0 app/library, 1 Design System direct refs |
| `No direct label` | `None` | `font-size.step-24` | 24 px | 0 fields | Native mirror · `VariableID:108` · 0 app/library, 2 Design System direct refs |
| `No direct label` | `None` | `font-size.step-30` | 30 px | 0 fields | Native mirror · `VariableID:107` · 0 app/library, 1 Design System direct refs |
| `No direct label` | `None` | `font-size.step-36` | 36 px | 0 fields | Native mirror · `VariableID:106` · 0 app/library, 1 Design System direct refs |
| `icon.disabled` | `icon/disabled` | `icon.disabled` | `palette.muted` → #70686A | 1 fields · icon.disabled | Renamed in place · `VariableID:26` · 0 app/library, 2 Design System direct refs |
| `icon.primary` | `icon/primary` | `icon.primary` | `palette.ink` → #29272B | 1 fields · icon.primary | Renamed in place · `VariableID:24` · 257 app/library, 13 Design System direct refs |
| `icon.secondary` | `icon/secondary` | `icon.secondary` | `palette.muted` → #70686A | 1 fields · icon.secondary | Renamed in place · `VariableID:25` · 0 app/library, 2 Design System direct refs |
| `layout.card-padding` | `None` | `layout.card-padding` | `spacing.step-12` → 12 px | 0 fields | Native mirror · `VariableID:80` · 0 app/library, 0 Design System direct refs |
| `layout.component-gap` | `None` | `layout.component-gap` | `spacing.step-12` → 12 px | 0 fields | Native mirror · `VariableID:79` · 0 app/library, 0 Design System direct refs |
| `layout.dock-gap` | `None` | `layout.dock-gap` | `spacing.step-4` → 4 px | 0 fields | Native mirror · `VariableID:82` · 0 app/library, 0 Design System direct refs |
| `layout.screen-inset` | `None` | `layout.screen-inset` | `spacing.step-20` → 20 px | 0 fields | Native mirror · `VariableID:77` · 0 app/library, 0 Design System direct refs |
| `layout.section-gap` | `None` | `layout.section-gap` | `spacing.step-24` → 24 px | 0 fields | Native mirror · `VariableID:78` · 0 app/library, 0 Design System direct refs |
| `layout.sheet-inset` | `None` | `layout.sheet-inset` | `spacing.step-20` → 20 px | 0 fields | Native mirror · `VariableID:81` · 0 app/library, 0 Design System direct refs |
| `module.couple.accent` | `module/couple/accent` | `module.couple.accent` | `palette.pink` → #E88C9F | 1 fields · Couple Space | Renamed in place · `VariableID:53` · 0 app/library, 2 Design System direct refs |
| `module.couple.on-accent` | `module/couple/on-accent` | `module.couple.on-accent` | `palette.ink` → #29272B | 0 fields | Renamed in place · `VariableID:54` · 0 app/library, 1 Design System direct refs |
| `module.couple.support` | `module/couple/support` | `module.couple.support` | `palette.indigo` → #A6A3E3 | 1 fields · Couple Space | Renamed in place · `VariableID:55` · 0 app/library, 2 Design System direct refs |
| `module.diary.accent` | `module/diary/accent` | `module.diary.accent` | `palette.pink` → #E88C9F | 1 fields · Heart Diary | Renamed in place · `VariableID:47` · 0 app/library, 2 Design System direct refs |
| `module.diary.on-accent` | `module/diary/on-accent` | `module.diary.on-accent` | `palette.ink` → #29272B | 0 fields | Renamed in place · `VariableID:48` · 0 app/library, 1 Design System direct refs |
| `module.diary.support` | `module/diary/support` | `module.diary.support` | `palette.lavender` → #DDD5F3 | 1 fields · Heart Diary | Renamed in place · `VariableID:49` · 16 app/library, 3 Design System direct refs |
| `module.kitchen.accent` | `module/kitchen/accent` | `module.kitchen.accent` | `palette.green` → #A1C5A1 | 1 fields · Little Kitchen | Renamed in place · `VariableID:50` · 0 app/library, 2 Design System direct refs |
| `module.kitchen.on-accent` | `module/kitchen/on-accent` | `module.kitchen.on-accent` | `palette.ink` → #29272B | 0 fields | Renamed in place · `VariableID:51` · 0 app/library, 1 Design System direct refs |
| `module.kitchen.support` | `module/kitchen/support` | `module.kitchen.support` | `palette.yellow` → #F3D36B | 1 fields · Little Kitchen | Renamed in place · `VariableID:52` · 0 app/library, 2 Design System direct refs |
| `module.planner.accent` | `module/planner/accent` | `module.planner.accent` | `palette.yellow` → #F3D36B | 1 fields · Tiny Planner | Renamed in place · `VariableID:44` · 27 app/library, 6 Design System direct refs |
| `module.planner.on-accent` | `module/planner/on-accent` | `module.planner.on-accent` | `palette.ink` → #29272B | 0 fields | Renamed in place · `VariableID:45` · 0 app/library, 1 Design System direct refs |
| `module.planner.support` | `module/planner/support` | `module.planner.support` | `palette.green` → #A1C5A1 | 1 fields · Tiny Planner | Renamed in place · `VariableID:46` · 0 app/library, 2 Design System direct refs |
| `module.profile.accent` | `module/profile/accent` | `module.profile.accent` | `palette.indigo` → #A6A3E3 | 1 fields · Profile & Settings | Renamed in place · `VariableID:56` · 0 app/library, 2 Design System direct refs |
| `module.profile.on-accent` | `module/profile/on-accent` | `module.profile.on-accent` | `palette.ink` → #29272B | 0 fields | Renamed in place · `VariableID:57` · 0 app/library, 1 Design System direct refs |
| `module.profile.support` | `module/profile/support` | `module.profile.support` | `palette.lavender` → #DDD5F3 | 1 fields · Profile & Settings | Renamed in place · `VariableID:58` · 0 app/library, 2 Design System direct refs |
| `module.updates.accent` | `module/updates/accent` | `module.updates.accent` | `palette.lavender` → #DDD5F3 | 1 fields · Little Updates | Renamed in place · `VariableID:59` · 0 app/library, 2 Design System direct refs |
| `module.updates.on-accent` | `module/updates/on-accent` | `module.updates.on-accent` | `palette.ink` → #29272B | 0 fields | Renamed in place · `VariableID:60` · 0 app/library, 1 Design System direct refs |
| `module.updates.support` | `module/updates/support` | `module.updates.support` | `palette.cream` → #F8F1E5 | 1 fields · Little Updates | Renamed in place · `VariableID:61` · 0 app/library, 2 Design System direct refs |
| `motion.duration.celebration` | `None` | `motion.duration.celebration` | 480 ms | 0 fields | Registry only |
| `motion.duration.navigation` | `None` | `motion.duration.navigation` | 220 ms | 0 fields | Registry only |
| `motion.duration.press` | `None` | `motion.duration.press` | 90 ms | 0 fields | Registry only |
| `motion.duration.release` | `None` | `motion.duration.release` | 140 ms | 0 fields | Registry only |
| `motion.duration.sheet-enter` | `None` | `motion.duration.sheet-enter` | 240 ms | 0 fields | Registry only |
| `motion.duration.sheet-exit` | `None` | `motion.duration.sheet-exit` | 180 ms | 0 fields | Registry only |
| `motion.duration.state-change` | `None` | `motion.duration.state-change` | 180 ms | 0 fields | Registry only |
| `motion.easing.enter` | `None` | `motion.easing.enter` | 0.2, 0.8, 0.2, 1 | 0 fields | Registry only |
| `motion.easing.exit` | `None` | `motion.easing.exit` | 0.4, 0, 1, 1 | 0 fields | Registry only |
| `motion.spring.mascot.damping` | `None` | `motion.spring.mascot.damping` | 30 | 0 fields | Registry only |
| `motion.spring.mascot.mass` | `None` | `motion.spring.mascot.mass` | 1 | 0 fields | Registry only |
| `motion.spring.mascot.stiffness` | `None` | `motion.spring.mascot.stiffness` | 260 | 0 fields | Registry only |
| `navigation.active` | `navigation/active` | `navigation.active` | `palette.yellow` → #F3D36B | 1 fields · navigation.active | Renamed in place · `VariableID:41` · 0 app/library, 2 Design System direct refs |
| `navigation.background` | `navigation/background` | `navigation.background` | `palette.ink` → #29272B | 1 fields · navigation.background | Renamed in place · `VariableID:40` · 57 app/library, 11 Design System direct refs |
| `navigation.inactive` | `navigation/inactive` | `navigation.inactive` | `palette.cream` → #F8F1E5 | 1 fields · navigation.inactive | Renamed in place · `VariableID:42` · 0 app/library, 2 Design System direct refs |
| `navigation.indicator` | `navigation/indicator` | `navigation.indicator` | `palette.yellow` → #F3D36B | 1 fields · navigation.indicator | Renamed in place · `VariableID:43` · 0 app/library, 2 Design System direct refs |
| `Canvas` | `Canvas` | `palette.cream` | #F8F1E5 | 3596 fields · Design Principles, Primitive Color Palette, Warm Cream, Semantic Color Tokens, Typography, Spacing & Layout, Radius, Borders & Shadows, Icons & I | Renamed in place · `VariableID:1` · 2029 app/library, 618 Design System direct refs |
| `Matcha Green` | `Matcha Green` | `palette.green` | #A1C5A1 | 1017 fields · Matcha Green, Alex character, Editable food illustration · Orzo, Editable food illustration · Toast, Task · Checked, State=Checked, Checkbox · na | Renamed in place · `VariableID:6` · 851 app/library, 66 Design System direct refs |
| `Soft Indigo` | `Soft Indigo` | `palette.indigo` | #A6A3E3 | 524 fields · Design Principles, Soft Indigo, couple-pair, diary-scrapbook, Editable inbox illustration, Home · Planner launcher, Profile · Identity, Unread ta | Renamed in place · `VariableID:4` · 366 app/library, 40 Design System direct refs |
| `Ink` | `Ink` | `palette.ink` | #29272B | 16716 fields · Design Principles, Warmth and meaning, Playful geometry, Reusable structure, Responsive focus, Primitive Color Palette, Warm Cream, Ink, Romantic | Renamed in place · `VariableID:2` · 11981 app/library, 1603 Design System direct refs |
| `Lavender` | `Lavender` | `palette.lavender` | #DDD5F3 | 3254 fields · 01 — Design Principles, Design Principles, Warmth and meaning, Playful geometry, Reusable structure, Responsive focus, 02 — Primitive Color Palet | Renamed in place · `VariableID:7` · 1783 app/library, 677 Design System direct refs |
| `Muted` | `Muted` | `palette.muted` | #70686A | 977 fields · Design Principles, Primitive Color Palette, Warm Cream, Ink, Romantic Pink, Soft Indigo, Butter Yellow, Matcha Green, Lavender, Muted Ink, Semant | Renamed in place · `VariableID:8` · 396 app/library, 345 Design System direct refs |
| `Romantic Pink` | `Romantic Pink` | `palette.pink` | #E88C9F | 1466 fields · Design Principles, Primitive Color Palette, Romantic Pink, Semantic Color Tokens, Typography, Spacing & Layout, Radius, Borders & Shadows, Icons | Renamed in place · `VariableID:3` · 1198 app/library, 133 Design System direct refs |
| `Butter Yellow` | `Butter Yellow` | `palette.yellow` | #F3D36B | 1487 fields · Design Principles, Primitive Color Palette, Butter Yellow, Semantic Color Tokens, Typography, Spacing & Layout, Radius, Borders & Shadows, Icons | Renamed in place · `VariableID:5` · 1062 app/library, 112 Design System direct refs |
| `radius.2xl` | `None` | `radius.2xl` | `spacing.step-24` → 24 px | 0 fields | Native mirror · `VariableID:104` · 59 app/library, 3 Design System direct refs |
| `radius.lg` | `None` | `radius.lg` | `spacing.step-16` → 16 px | 0 fields | Native mirror · `VariableID:102` · 104 app/library, 38 Design System direct refs |
| `radius.md` | `None` | `radius.md` | `spacing.step-12` → 12 px | 0 fields | Native mirror · `VariableID:101` · 30 app/library, 4 Design System direct refs |
| `radius.pill` | `None` | `radius.pill` | 999 px | 0 fields | Native mirror · `VariableID:105` · 0 app/library, 0 Design System direct refs |
| `radius.sm` | `None` | `radius.sm` | `spacing.step-8` → 8 px | 0 fields | Native mirror · `VariableID:100` · 0 app/library, 0 Design System direct refs |
| `radius.xl` | `None` | `radius.xl` | `spacing.step-20` → 20 px | 0 fields | Native mirror · `VariableID:103` · 17 app/library, 1 Design System direct refs |
| `No direct label` | `None` | `shadow.card` | `shadow.none` → Flat shadow | 0 fields | Registry only |
| `No direct label` | `None` | `shadow.none` | Flat shadow | 0 fields | Registry only |
| `No direct label` | `None` | `shadow.overlay` | `shadow.none` → Flat shadow | 0 fields | Registry only |
| `size.button.md` | `None` | `size.button.md` | 56 px | 0 fields | Native mirror · `VariableID:62` · 0 app/library, 0 Design System direct refs |
| `size.button.utility` | `None` | `size.button.utility` | `spacing.step-48` → 48 px | 0 fields | Native mirror · `VariableID:84` · 0 app/library, 0 Design System direct refs |
| `size.header.control` | `None` | `size.header.control` | `spacing.step-48` → 48 px | 0 fields | Native mirror · `VariableID:93` · 257 app/library, 11 Design System direct refs |
| `size.icon.lg` | `None` | `size.icon.lg` | `spacing.step-24` → 24 px | 0 fields | Native mirror · `VariableID:91` · 0 app/library, 0 Design System direct refs |
| `size.icon.md` | `None` | `size.icon.md` | `spacing.step-20` → 20 px | 0 fields | Native mirror · `VariableID:90` · 0 app/library, 0 Design System direct refs |
| `size.icon.sm` | `None` | `size.icon.sm` | `spacing.step-16` → 16 px | 0 fields | Native mirror · `VariableID:89` · 0 app/library, 0 Design System direct refs |
| `size.icon.well` | `None` | `size.icon.well` | `spacing.step-24` → 24 px | 0 fields | Native mirror · `VariableID:92` · 0 app/library, 0 Design System direct refs |
| `size.indicator.height` | `None` | `size.indicator.height` | 5 px | 0 fields | Native mirror · `VariableID:99` · 0 app/library, 0 Design System direct refs |
| `size.indicator.width` | `None` | `size.indicator.width` | 134 px | 0 fields | Native mirror · `VariableID:98` · 0 app/library, 0 Design System direct refs |
| `size.input.field` | `None` | `size.input.field` | 54 px | 0 fields | Native mirror · `VariableID:85` · 0 app/library, 0 Design System direct refs |
| `size.input.labeled` | `None` | `size.input.labeled` | 80 px | 0 fields | Native mirror · `VariableID:86` · 0 app/library, 0 Design System direct refs |
| `size.input.multiline` | `None` | `size.input.multiline` | 140 px | 0 fields | Native mirror · `VariableID:88` · 0 app/library, 0 Design System direct refs |
| `size.input.search` | `None` | `size.input.search` | 60 px | 0 fields | Native mirror · `VariableID:87` · 7 app/library, 1 Design System direct refs |
| `size.navigation.dock` | `None` | `size.navigation.dock` | 68 px | 0 fields | Native mirror · `VariableID:94` · 2 app/library, 4 Design System direct refs |
| `size.notification.minimum` | `None` | `size.notification.minimum` | 92 px | 0 fields | Native mirror · `VariableID:95` · 68 app/library, 33 Design System direct refs |
| `size.switch.track-height` | `None` | `size.switch.track-height` | `spacing.step-32` → 32 px | 0 fields | Native mirror · `VariableID:97` · 28 app/library, 3 Design System direct refs |
| `size.switch.track-width` | `None` | `size.switch.track-width` | 52 px | 0 fields | Native mirror · `VariableID:96` · 28 app/library, 3 Design System direct refs |
| `size.touch.minimum` | `None` | `size.touch.minimum` | `spacing.step-48` → 48 px | 0 fields | Native mirror · `VariableID:83` · 0 app/library, 0 Design System direct refs |
| `spacing.step-12` | `None` | `spacing.step-12` | 12 px | 0 fields | Native mirror · `VariableID:70` · 0 app/library, 0 Design System direct refs |
| `spacing.step-16` | `None` | `spacing.step-16` | 16 px | 0 fields | Native mirror · `VariableID:71` · 0 app/library, 0 Design System direct refs |
| `spacing.step-20` | `None` | `spacing.step-20` | 20 px | 0 fields | Native mirror · `VariableID:72` · 0 app/library, 0 Design System direct refs |
| `spacing.step-24` | `None` | `spacing.step-24` | 24 px | 0 fields | Native mirror · `VariableID:73` · 0 app/library, 0 Design System direct refs |
| `spacing.step-32` | `None` | `spacing.step-32` | 32 px | 0 fields | Native mirror · `VariableID:74` · 0 app/library, 0 Design System direct refs |
| `spacing.step-4` | `None` | `spacing.step-4` | 4 px | 0 fields | Native mirror · `VariableID:68` · 0 app/library, 0 Design System direct refs |
| `spacing.step-40` | `None` | `spacing.step-40` | 40 px | 0 fields | Native mirror · `VariableID:75` · 0 app/library, 0 Design System direct refs |
| `spacing.step-48` | `None` | `spacing.step-48` | 48 px | 0 fields | Native mirror · `VariableID:76` · 0 app/library, 0 Design System direct refs |
| `spacing.step-8` | `None` | `spacing.step-8` | 8 px | 0 fields | Native mirror · `VariableID:69` · 95 app/library, 35 Design System direct refs |
| `surface.card` | `surface/card` | `surface.card` | `palette.cream` → #F8F1E5 | 1 fields · surface.card | Renamed in place · `VariableID:13` · 68 app/library, 16 Design System direct refs |
| `surface.default` | `surface/default` | `surface.default` | `palette.cream` → #F8F1E5 | 1 fields · surface.default | Renamed in place · `VariableID:12` · 37 app/library, 7 Design System direct refs |
| `surface.elevated` | `surface/elevated` | `surface.elevated` | `palette.cream` → #F8F1E5 | 1 fields · surface.elevated | Renamed in place · `VariableID:14` · 52 app/library, 2 Design System direct refs |
| `text.disabled` | `text/disabled` | `text.disabled` | `palette.muted` → #70686A | 1 fields · text.disabled | Renamed in place · `VariableID:19` · 0 app/library, 2 Design System direct refs |
| `text.inverse` | `text/inverse` | `text.inverse` | `palette.cream` → #F8F1E5 | 1 fields · text.inverse | Renamed in place · `VariableID:18` · 0 app/library, 2 Design System direct refs |
| `text.muted` | `text/muted` | `text.muted` | `palette.muted` → #70686A | 1 fields · text.muted | Renamed in place · `VariableID:17` · 0 app/library, 2 Design System direct refs |
| `text.primary` | `text/primary` | `text.primary` | `palette.ink` → #29272B | 1 fields · text.primary | Renamed in place · `VariableID:15` · 48 app/library, 9 Design System direct refs |
| `text.secondary` | `text/secondary` | `text.secondary` | `palette.muted` → #70686A | 1 fields · text.secondary | Renamed in place · `VariableID:16` · 13 app/library, 3 Design System direct refs |
| `typography.body.lg` | `None` | `typography.body.lg` | Typography composite | 0 fields | Registry only |
| `typography.body.md` | `None` | `typography.body.md` | Typography composite | 0 fields | Registry only |
| `typography.body.sm` | `None` | `typography.body.sm` | Typography composite | 0 fields | Registry only |
| `typography.button.compact.font-family` | `None` | `typography.button.compact.font-family` | `font-family.body` → DM Sans | 0 fields | Native mirror · `VariableID:126` · 0 app/library, 1 Design System direct refs |
| `typography.button.compact.font-size` | `None` | `typography.button.compact.font-size` | `font-size.step-13` → 13 px | 0 fields | Native mirror · `VariableID:127` · 0 app/library, 1 Design System direct refs |
| `typography.button.compact.font-weight` | `None` | `typography.button.compact.font-weight` | 700 | 0 fields | Registry only |
| `typography.button.compact.letter-spacing` | `None` | `typography.button.compact.letter-spacing` | 0 px | 0 fields | Native mirror · `VariableID:128` · 0 app/library, 0 Design System direct refs |
| `typography.button.md.font-family` | `None` | `typography.button.md.font-family` | `font-family.body` → DM Sans | 0 fields | Native mirror · `VariableID:63` · 0 app/library, 1 Design System direct refs |
| `typography.button.md.font-size` | `None` | `typography.button.md.font-size` | `font-size.step-14` → 14 px | 0 fields | Native mirror · `VariableID:124` · 0 app/library, 1 Design System direct refs |
| `typography.button.md.font-weight` | `None` | `typography.button.md.font-weight` | 700 | 0 fields | Registry only |
| `typography.button.md.letter-spacing` | `None` | `typography.button.md.letter-spacing` | 0 px | 0 fields | Native mirror · `VariableID:125` · 0 app/library, 0 Design System direct refs |
| `typography.caption` | `None` | `typography.caption` | Typography composite | 0 fields | Registry only |
| `typography.card.title.font-family` | `None` | `typography.card.title.font-family` | `font-family.body` → DM Sans | 0 fields | Native mirror · `VariableID:132` · 0 app/library, 1 Design System direct refs |
| `typography.card.title.font-size` | `None` | `typography.card.title.font-size` | `font-size.step-13-5` → 13.5 px | 0 fields | Native mirror · `VariableID:133` · 0 app/library, 1 Design System direct refs |
| `typography.card.title.font-weight` | `None` | `typography.card.title.font-weight` | 700 | 0 fields | Registry only |
| `typography.card.title.letter-spacing` | `None` | `typography.card.title.letter-spacing` | 0 px | 0 fields | Native mirror · `VariableID:134` · 0 app/library, 0 Design System direct refs |
| `typography.display.lg` | `None` | `typography.display.lg` | Typography composite | 0 fields | Registry only |
| `typography.display.md` | `None` | `typography.display.md` | Typography composite | 0 fields | Registry only |
| `typography.field.value.font-family` | `None` | `typography.field.value.font-family` | `font-family.body` → DM Sans | 0 fields | Native mirror · `VariableID:129` · 0 app/library, 1 Design System direct refs |
| `typography.field.value.font-size` | `None` | `typography.field.value.font-size` | `font-size.step-15` → 15 px | 0 fields | Native mirror · `VariableID:130` · 0 app/library, 1 Design System direct refs |
| `typography.field.value.font-weight` | `None` | `typography.field.value.font-weight` | 500 | 0 fields | Registry only |
| `typography.field.value.letter-spacing` | `None` | `typography.field.value.letter-spacing` | 0 px | 0 fields | Native mirror · `VariableID:131` · 0 app/library, 0 Design System direct refs |
| `typography.heading.lg` | `None` | `typography.heading.lg` | Typography composite | 0 fields | Registry only |
| `typography.heading.md` | `None` | `typography.heading.md` | Typography composite | 0 fields | Registry only |
| `typography.heading.sm` | `None` | `typography.heading.sm` | Typography composite | 0 fields | Registry only |
| `typography.label.font-family` | `None` | `typography.label.font-family` | `font-family.body` → DM Sans | 0 fields | Native mirror · `VariableID:121` · 0 app/library, 1 Design System direct refs |
| `typography.label.font-size` | `None` | `typography.label.font-size` | `font-size.step-11` → 11 px | 0 fields | Native mirror · `VariableID:122` · 0 app/library, 1 Design System direct refs |
| `typography.label.font-weight` | `None` | `typography.label.font-weight` | 700 | 0 fields | Registry only |
| `typography.label.letter-spacing` | `None` | `typography.label.letter-spacing` | 0.7 px | 0 fields | Native mirror · `VariableID:123` · 0 app/library, 0 Design System direct refs |
| `typography.metadata.font-family` | `None` | `typography.metadata.font-family` | `font-family.body` → DM Sans | 0 fields | Native mirror · `VariableID:135` · 0 app/library, 1 Design System direct refs |
| `typography.metadata.font-size` | `None` | `typography.metadata.font-size` | `font-size.step-11-5` → 11.5 px | 0 fields | Native mirror · `VariableID:136` · 0 app/library, 1 Design System direct refs |
| `typography.metadata.font-weight` | `None` | `typography.metadata.font-weight` | 400 | 0 fields | Registry only |
| `typography.metadata.letter-spacing` | `None` | `typography.metadata.letter-spacing` | 0 px | 0 fields | Native mirror · `VariableID:137` · 0 app/library, 0 Design System direct refs |
| `typography.statistic` | `None` | `typography.statistic` | Typography composite | 0 fields | Registry only |

## Property migration plan

| Layer | Previous binding | Canonical token | Resolved value | Usage | Result |
| --- | --- | --- | --- | --- | --- |
| FC-2 fill | `Literal` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-547 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-595 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-648 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-707 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-757 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-808 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-849 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-892 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-936 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-969 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-997 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-1036 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-1072 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-1119 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-1163 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-1206 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-1315 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-1360 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-1385 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-1410 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-1456 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-1601 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-1712 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-1816 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-2024 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-2073 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-2122 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-2169 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-2221 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-2427 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-2506 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-2583 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-2654 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-2736 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-2843 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-2890 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-2977 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-3054 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-3106 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-4098 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-4208 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-4292 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-4340 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-4396 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-4460 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-4504 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-4561 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-4618 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-4670 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-4748 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-4785 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-4865 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-4947 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-5015 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-5059 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-5128 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-5154 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-5183 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-5290 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-5341 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-5388 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-5435 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-5472 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-5533 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-5593 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-5654 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-5710 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-5856 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-6000 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-6258 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-6396 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-6456 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-6457 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-6458 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-10732 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-10830 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-10952 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-11018 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-11105 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-11160 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-11215 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-11270 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-11325 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-11380 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-11435 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-11495 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-11575 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-11728 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-11838 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-11955 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-12039 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-12127 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-12218 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-12310 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-12351 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-12405 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-12438 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-12479 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-12557 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-12623 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-12697 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-12773 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-12847 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-12964 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-13105 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-13246 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-13363 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-13489 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-13596 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-13693 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-14338 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-14450 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-14578 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-14686 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-14795 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-14875 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-14941 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-15002 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-15055 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-15102 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-15156 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-15204 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-15247 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-15312 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-15374 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-15425 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-15466 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-15507 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-15563 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-15609 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-18950 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-18999 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-19052 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-19112 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-19168 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-19266 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-21167 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-21277 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-21336 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-21405 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-21482 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-21572 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-21632 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-21713 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-21760 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-21807 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-21854 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-21909 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-21948 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-21987 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-22033 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-22079 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-22202 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-22288 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-22375 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-22462 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-22549 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-22625 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-22701 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-22756 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-22795 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-22834 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-22921 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-22968 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-23341 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-23406 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-23471 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-23536 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-23601 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-23633 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-23671 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-23735 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-23798 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-23861 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-15656 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-15739 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-15810 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-15890 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-15956 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-16038 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-16105 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-16167 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-16203 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-16286 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-16366 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-16448 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-16552 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-16653 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-19322 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-19393 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-19459 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-16757 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-16824 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-16900 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-16955 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-17004 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-17057 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-17118 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-17174 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-17230 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-17291 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-17389 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-17487 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-17584 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-17681 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-17742 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-17803 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-17864 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-17925 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-18012 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-18108 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-18163 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-18227 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-18277 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-18341 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-18402 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-18463 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-18550 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-18646 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-18722 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-18807 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-18870 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-19526 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-19587 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-19648 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-19709 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-19770 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-19861 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-19922 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-20013 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-24250 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-24356 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-24396 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-24475 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-24523 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-24576 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-24624 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-24656 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-24688 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-24725 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-24752 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-24808 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-25183 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-24859 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-24911 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-24984 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-25067 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-25136 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-29199 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-29300 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-29401 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-29438 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-29478 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-29519 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-29558 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-29676 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-29777 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-29835 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-29876 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-29996 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-30100 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-30166 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-30218 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-30250 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-30282 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-30316 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-30356 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-30411 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-30466 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-30536 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-30654 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-30755 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-30811 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-30861 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-30902 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-30943 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-30984 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-31030 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-31097 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-31165 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-31230 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-31270 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-31339 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-31408 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-31492 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-31564 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-31589 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-31896 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-31992 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-32088 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-32159 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-32229 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-32340 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-32433 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-32523 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-32615 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-32680 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-32744 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-32781 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-32825 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-32859 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-32970 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-33005 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-33041 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-33075 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-33109 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-33143 fill | `Canvas` | `background.default` | #F8F1E5 | Application screen canvas | BOUND |
| FC-263 fill | `Ink` | `action.primary.background` | #29272B | State=Primary | BOUND |
| FC-264 fill | `Canvas` | `action.primary.foreground` | #F8F1E5 | Label | BOUND |
| FC-267 fill | `Soft Indigo` | `action.primary.pressed` | #A6A3E3 | State=Pressed | BOUND |
| FC-268 fill | `Ink` | `action.primary.pressed-foreground` | #29272B | Label | BOUND |
| FC-269 fill | `Lavender` | `action.disabled.background` | #DDD5F3 | State=Disabled | BOUND |
| FC-270 fill | `Muted` | `action.disabled.foreground` | #70686A | Label | BOUND |
| FC-271 fill | `Ink` | `action.primary.background` | #29272B | State=Loading | BOUND |
| FC-274 fill | `Canvas` | `action.primary.foreground` | #F8F1E5 | Label | BOUND |
| FC-265 stroke | `Ink` | `border.default` | #29272B | State=Secondary | BOUND |
| FC-266 fill | `Ink` | `action.secondary.foreground` | #29272B | Label | BOUND |
| FC-24024 fill | `Romantic Pink` | `action.destructive.background` | #E88C9F | Action=Danger | BOUND |
| FC-24024 cornerRadius | `Literal` | `radius.2xl` | 24.0 | Action=Danger | BOUND |
| FC-24028 fill | `Ink` | `action.destructive.foreground` | #29272B | Disconnect | BOUND |
| FC-264 fontFamily | `Literal` | `font-family.body` | DM Sans | Label | BOUND |
| FC-266 fontFamily | `Literal` | `font-family.body` | DM Sans | Label | BOUND |
| FC-268 fontFamily | `Literal` | `font-family.body` | DM Sans | Label | BOUND |
| FC-270 fontFamily | `Literal` | `font-family.body` | DM Sans | Label | BOUND |
| FC-274 fontFamily | `Literal` | `font-family.body` | DM Sans | Label | BOUND |
| FC-33213 fill | `Canvas` | `surface.default` | #F8F1E5 | Input boundary | BOUND |
| FC-33213 cornerRadius | `Literal` | `radius.md` | 12.0 | Input boundary | BOUND |
| FC-33213 stroke | `Muted` | `border.subtle` | #70686A | Input boundary | BOUND |
| FC-33214 fill | `Ink` | `text.primary` | #29272B | Field label | BOUND |
| FC-33215 fill | `Muted` | `text.secondary` | #70686A | Input value | BOUND |
| FC-33215 fontFamily | `Literal` | `font-family.body` | DM Sans | Input value | BOUND |
| FC-33219 fill | `Canvas` | `surface.default` | #F8F1E5 | Input boundary | BOUND |
| FC-33219 cornerRadius | `Literal` | `radius.md` | 12.0 | Input boundary | BOUND |
| FC-33219 stroke | `Muted` | `border.subtle` | #70686A | Input boundary | BOUND |
| FC-33220 fill | `Ink` | `text.primary` | #29272B | Field label | BOUND |
| FC-33221 fill | `Ink` | `text.primary` | #29272B | Input value | BOUND |
| FC-33221 fontFamily | `Literal` | `font-family.body` | DM Sans | Input value | BOUND |
| FC-33225 fill | `Canvas` | `surface.default` | #F8F1E5 | Input boundary | BOUND |
| FC-33225 cornerRadius | `Literal` | `radius.md` | 12.0 | Input boundary | BOUND |
| FC-33226 fill | `Ink` | `text.primary` | #29272B | Field label | BOUND |
| FC-33227 fill | `Ink` | `text.primary` | #29272B | Input value | BOUND |
| FC-33227 fontFamily | `Literal` | `font-family.body` | DM Sans | Input value | BOUND |
| FC-33232 fill | `Canvas` | `surface.default` | #F8F1E5 | Input boundary | BOUND |
| FC-33232 cornerRadius | `Literal` | `radius.md` | 12.0 | Input boundary | BOUND |
| FC-33232 stroke | `Romantic Pink` | `border.error` | #E88C9F | Input boundary | BOUND |
| FC-33233 fill | `Ink` | `text.primary` | #29272B | Field label | BOUND |
| FC-33234 fill | `Ink` | `text.primary` | #29272B | Input value | BOUND |
| FC-33234 fontFamily | `Literal` | `font-family.body` | DM Sans | Input value | BOUND |
| FC-13938 fill | `Canvas` | `surface.default` | #F8F1E5 | Control=Search | BOUND |
| FC-13938 stroke | `Ink` | `border.default` | #29272B | Control=Search | BOUND |
| FC-13938 cornerRadius | `Literal` | `radius.lg` | 16.0 | Control=Search | BOUND |
| FC-13938 height | `Literal` | `size.input.search` | 60.0 | Control=Search | BOUND |
| FC-37663 fill | `Canvas` | `surface.card` | #F8F1E5 | Toggle=On | BOUND |
| FC-37663 cornerRadius | `Literal` | `radius.lg` | 16.0 | Toggle=On | BOUND |
| FC-37669 width | `Literal` | `size.switch.track-width` | 52.0 | Switch | BOUND |
| FC-37669 height | `Literal` | `size.switch.track-height` | 32.0 | Switch | BOUND |
| FC-37669 fill | `Matcha Green` | `feedback.success` | #A1C5A1 | Switch | BOUND |
| FC-37671 fill | `Canvas` | `surface.card` | #F8F1E5 | Toggle=Off | BOUND |
| FC-37671 cornerRadius | `Literal` | `radius.lg` | 16.0 | Toggle=Off | BOUND |
| FC-37677 width | `Literal` | `size.switch.track-width` | 52.0 | Switch | BOUND |
| FC-37677 height | `Literal` | `size.switch.track-height` | 32.0 | Switch | BOUND |
| FC-37679 fill | `Canvas` | `surface.card` | #F8F1E5 | Toggle=Unavailable | BOUND |
| FC-37679 cornerRadius | `Literal` | `radius.lg` | 16.0 | Toggle=Unavailable | BOUND |
| FC-37685 width | `Literal` | `size.switch.track-width` | 52.0 | Switch | BOUND |
| FC-37685 height | `Literal` | `size.switch.track-height` | 32.0 | Switch | BOUND |
| FC-38130 fill | `Lavender` | `background.subtle` | #DDD5F3 | Category=Planner, State=Unread | BOUND |
| FC-38130 cornerRadius | `Literal` | `radius.lg` | 16.0 | Category=Planner, State=Unread | BOUND |
| FC-38146 fill | `Canvas` | `surface.card` | #F8F1E5 | Category=Planner, State=Read | BOUND |
| FC-38146 cornerRadius | `Literal` | `radius.lg` | 16.0 | Category=Planner, State=Read | BOUND |
| FC-38159 fill | `Lavender` | `background.subtle` | #DDD5F3 | Category=Routine, State=Unread | BOUND |
| FC-38159 cornerRadius | `Literal` | `radius.lg` | 16.0 | Category=Routine, State=Unread | BOUND |
| FC-38171 fill | `Canvas` | `surface.card` | #F8F1E5 | Category=Routine, State=Read | BOUND |
| FC-38171 cornerRadius | `Literal` | `radius.lg` | 16.0 | Category=Routine, State=Read | BOUND |
| FC-38184 fill | `Canvas` | `surface.card` | #F8F1E5 | Category=Growth, State=Read | BOUND |
| FC-38184 cornerRadius | `Literal` | `radius.lg` | 16.0 | Category=Growth, State=Read | BOUND |
| FC-38197 fill | `Lavender` | `background.subtle` | #DDD5F3 | Category=Diary, State=Unread | BOUND |
| FC-38197 cornerRadius | `Literal` | `radius.lg` | 16.0 | Category=Diary, State=Unread | BOUND |
| FC-38209 fill | `Canvas` | `surface.card` | #F8F1E5 | Category=Diary, State=Read | BOUND |
| FC-38209 cornerRadius | `Literal` | `radius.lg` | 16.0 | Category=Diary, State=Read | BOUND |
| FC-38222 fill | `Lavender` | `background.subtle` | #DDD5F3 | Category=Kitchen, State=Unread | BOUND |
| FC-38222 cornerRadius | `Literal` | `radius.lg` | 16.0 | Category=Kitchen, State=Unread | BOUND |
| FC-38234 fill | `Canvas` | `surface.card` | #F8F1E5 | Category=Kitchen, State=Read | BOUND |
| FC-38234 cornerRadius | `Literal` | `radius.lg` | 16.0 | Category=Kitchen, State=Read | BOUND |
| FC-38247 fill | `Lavender` | `background.subtle` | #DDD5F3 | Category=Couple, State=Unread | BOUND |
| FC-38247 cornerRadius | `Literal` | `radius.lg` | 16.0 | Category=Couple, State=Unread | BOUND |
| FC-38260 fill | `Canvas` | `surface.card` | #F8F1E5 | Category=Couple, State=Read | BOUND |
| FC-38260 cornerRadius | `Literal` | `radius.lg` | 16.0 | Category=Couple, State=Read | BOUND |
| FC-38274 fill | `Canvas` | `surface.card` | #F8F1E5 | Category=Account, State=Read | BOUND |
| FC-38274 cornerRadius | `Literal` | `radius.lg` | 16.0 | Category=Account, State=Read | BOUND |
| FC-38287 fill | `Lavender` | `background.subtle` | #DDD5F3 | Placeholder=Skeleton | BOUND |
| FC-38287 cornerRadius | `Literal` | `radius.lg` | 16.0 | Placeholder=Skeleton | BOUND |
| FC-24311 fill | `Matcha Green` | `feedback.success` | #A1C5A1 | Growth summary | BOUND |
| FC-24311 cornerRadius | `Literal` | `radius.xl` | 20.0 | Growth summary | BOUND |
| FC-34871 fill | `Lavender` | `module.diary.support` | #DDD5F3 | Heart Diary / Responsive Memory=Private | BOUND |
| FC-34871 cornerRadius | `Literal` | `radius.xl` | 20.0 | Heart Diary / Responsive Memory=Private | BOUND |
| FC-3246 fill | `Matcha Green` | `feedback.success` | #A1C5A1 | Task card | BOUND |
| FC-3246 cornerRadius | `Literal` | `radius.lg` | 16.0 | Task card | BOUND |
| FC-33405 height | `Literal` | `size.navigation.dock` | 68.0 | Navigation / Bottom Bar · Home responsive | BOUND |
| FC-33439 height | `Literal` | `size.navigation.dock` | 68.0 | Planner responsive / Navigation / Plans active | HELD |
| FC-37242 height | `Literal` | `size.navigation.dock` | 68.0 | Couple Space / Responsive Us active dock | HELD |
| FC-37523 height | `Literal` | `size.navigation.dock` | 68.0 | Profile & Settings / Responsive Me active dock | HELD |
| FC-34850 height | `Literal` | `size.navigation.dock` | 68.0 | Heart Diary / Responsive Navigation / Bottom bar | HELD |
| FC-35516 height | `Literal` | `size.navigation.dock` | 68.0 | Little Kitchen / Responsive Navigation / Bottom bar | HELD |
| FC-33406 fill | `Ink` | `navigation.background` | #29272B | Approved dark navigation | BOUND |
| FC-107 fill | `Ink` | `navigation.background` | #29272B | Approved dark navigation | BOUND |
| FC-1506 fill | `Ink` | `navigation.background` | #29272B | Approved dark navigation | BOUND |
| FC-33440 fill | `Ink` | `navigation.background` | #29272B | Approved dark navigation | BOUND |
| FC-11551 fill | `Canvas` | `surface.elevated` | #F8F1E5 | Bottom sheet | BOUND |
| FC-11551 cornerRadius | `Literal` | `radius.2xl` | 24.0 | Bottom sheet | BOUND |
| FC-11674 fill | `Canvas` | `surface.elevated` | #F8F1E5 | Bottom sheet | BOUND |
| FC-11674 cornerRadius | `Literal` | `radius.2xl` | 24.0 | Bottom sheet | BOUND |
| FC-11784 fill | `Canvas` | `surface.elevated` | #F8F1E5 | Bottom sheet | BOUND |
| FC-11784 cornerRadius | `Literal` | `radius.2xl` | 24.0 | Bottom sheet | BOUND |
| FC-11937 fill | `Canvas` | `surface.elevated` | #F8F1E5 | Bottom sheet | BOUND |
| FC-11937 cornerRadius | `Literal` | `radius.2xl` | 24.0 | Bottom sheet | BOUND |
| FC-12011 fill | `Canvas` | `surface.elevated` | #F8F1E5 | Bottom sheet | BOUND |
| FC-12011 cornerRadius | `Literal` | `radius.2xl` | 24.0 | Bottom sheet | BOUND |
| FC-12095 fill | `Canvas` | `surface.elevated` | #F8F1E5 | Bottom sheet | BOUND |
| FC-12095 cornerRadius | `Literal` | `radius.2xl` | 24.0 | Bottom sheet | BOUND |
| FC-12183 fill | `Canvas` | `surface.elevated` | #F8F1E5 | Bottom sheet | BOUND |
| FC-12183 cornerRadius | `Literal` | `radius.2xl` | 24.0 | Bottom sheet | BOUND |
| FC-12274 fill | `Canvas` | `surface.elevated` | #F8F1E5 | Bottom sheet | BOUND |
| FC-12274 cornerRadius | `Literal` | `radius.2xl` | 24.0 | Bottom sheet | BOUND |
| FC-12534 fill | `Canvas` | `surface.elevated` | #F8F1E5 | Bottom sheet | BOUND |
| FC-12534 cornerRadius | `Literal` | `radius.2xl` | 24.0 | Bottom sheet | BOUND |
| FC-12599 fill | `Canvas` | `surface.elevated` | #F8F1E5 | Bottom sheet | BOUND |
| FC-12599 cornerRadius | `Literal` | `radius.2xl` | 24.0 | Bottom sheet | BOUND |
| FC-12946 fill | `Canvas` | `surface.elevated` | #F8F1E5 | Bottom sheet | BOUND |
| FC-12946 cornerRadius | `Literal` | `radius.2xl` | 24.0 | Bottom sheet | BOUND |
| FC-13087 fill | `Canvas` | `surface.elevated` | #F8F1E5 | Bottom sheet | BOUND |
| FC-13087 cornerRadius | `Literal` | `radius.2xl` | 24.0 | Bottom sheet | BOUND |
| FC-13228 fill | `Canvas` | `surface.elevated` | #F8F1E5 | Bottom sheet | BOUND |
| FC-13228 cornerRadius | `Literal` | `radius.2xl` | 24.0 | Bottom sheet | BOUND |
| FC-13345 fill | `Canvas` | `surface.elevated` | #F8F1E5 | Bottom sheet | BOUND |
| FC-13345 cornerRadius | `Literal` | `radius.2xl` | 24.0 | Bottom sheet | BOUND |
| FC-13471 fill | `Canvas` | `surface.elevated` | #F8F1E5 | Bottom sheet | BOUND |
| FC-13471 cornerRadius | `Literal` | `radius.2xl` | 24.0 | Bottom sheet | BOUND |
| FC-13578 fill | `Canvas` | `surface.elevated` | #F8F1E5 | Bottom sheet | BOUND |
| FC-13578 cornerRadius | `Literal` | `radius.2xl` | 24.0 | Bottom sheet | BOUND |
| FC-34851 fill | `Ink` | `navigation.background` | #29272B | Approved dark navigation | BOUND |
| FC-20505 fill | `Canvas` | `surface.elevated` | #F8F1E5 | Bottom sheet | BOUND |
| FC-20505 cornerRadius | `Literal` | `radius.2xl` | 24.0 | Bottom sheet | BOUND |
| FC-20580 fill | `Canvas` | `surface.elevated` | #F8F1E5 | Bottom sheet | BOUND |
| FC-20580 cornerRadius | `Literal` | `radius.2xl` | 24.0 | Bottom sheet | BOUND |
| FC-21134 fill | `Canvas` | `surface.elevated` | #F8F1E5 | Bottom sheet | BOUND |
| FC-21134 cornerRadius | `Literal` | `radius.2xl` | 24.0 | Bottom sheet | BOUND |
| FC-21244 fill | `Canvas` | `surface.elevated` | #F8F1E5 | Bottom sheet | BOUND |
| FC-21244 cornerRadius | `Literal` | `radius.2xl` | 24.0 | Bottom sheet | BOUND |
| FC-21693 fill | `Canvas` | `surface.elevated` | #F8F1E5 | Bottom sheet | BOUND |
| FC-21693 cornerRadius | `Literal` | `radius.2xl` | 24.0 | Bottom sheet | BOUND |
| FC-23926 fill | `Canvas` | `surface.elevated` | #F8F1E5 | Bottom sheet | BOUND |
| FC-23926 cornerRadius | `Literal` | `radius.2xl` | 24.0 | Bottom sheet | BOUND |
| FC-16532 fill | `Canvas` | `surface.elevated` | #F8F1E5 | Bottom sheet | BOUND |
| FC-16532 cornerRadius | `Literal` | `radius.2xl` | 24.0 | Bottom sheet | BOUND |
| FC-16633 fill | `Canvas` | `surface.elevated` | #F8F1E5 | Bottom sheet | BOUND |
| FC-16633 cornerRadius | `Literal` | `radius.2xl` | 24.0 | Bottom sheet | BOUND |
| FC-16736 fill | `Canvas` | `surface.elevated` | #F8F1E5 | Bottom sheet | BOUND |
| FC-16736 cornerRadius | `Literal` | `radius.2xl` | 24.0 | Bottom sheet | BOUND |
| FC-17353 fill | `Canvas` | `surface.elevated` | #F8F1E5 | Bottom sheet | BOUND |
| FC-17353 cornerRadius | `Literal` | `radius.2xl` | 24.0 | Bottom sheet | BOUND |
| FC-17451 fill | `Canvas` | `surface.elevated` | #F8F1E5 | Bottom sheet | BOUND |
| FC-17451 cornerRadius | `Literal` | `radius.2xl` | 24.0 | Bottom sheet | BOUND |
| FC-17549 fill | `Canvas` | `surface.elevated` | #F8F1E5 | Bottom sheet | BOUND |
| FC-17549 cornerRadius | `Literal` | `radius.2xl` | 24.0 | Bottom sheet | BOUND |
| FC-17646 fill | `Canvas` | `surface.elevated` | #F8F1E5 | Bottom sheet | BOUND |
| FC-17646 cornerRadius | `Literal` | `radius.2xl` | 24.0 | Bottom sheet | BOUND |
| FC-17993 fill | `Canvas` | `surface.elevated` | #F8F1E5 | Bottom sheet | BOUND |
| FC-17993 cornerRadius | `Literal` | `radius.2xl` | 24.0 | Bottom sheet | BOUND |
| FC-18089 fill | `Canvas` | `surface.elevated` | #F8F1E5 | Bottom sheet | BOUND |
| FC-18089 cornerRadius | `Literal` | `radius.2xl` | 24.0 | Bottom sheet | BOUND |
| FC-18531 fill | `Canvas` | `surface.elevated` | #F8F1E5 | Bottom sheet | BOUND |
| FC-18531 cornerRadius | `Literal` | `radius.2xl` | 24.0 | Bottom sheet | BOUND |
| FC-18627 fill | `Canvas` | `surface.elevated` | #F8F1E5 | Bottom sheet | BOUND |
| FC-18627 cornerRadius | `Literal` | `radius.2xl` | 24.0 | Bottom sheet | BOUND |
| FC-18702 fill | `Canvas` | `surface.elevated` | #F8F1E5 | Bottom sheet | BOUND |
| FC-18702 cornerRadius | `Literal` | `radius.2xl` | 24.0 | Bottom sheet | BOUND |
| FC-18787 fill | `Canvas` | `surface.elevated` | #F8F1E5 | Bottom sheet | BOUND |
| FC-18787 cornerRadius | `Literal` | `radius.2xl` | 24.0 | Bottom sheet | BOUND |
| FC-19832 fill | `Canvas` | `surface.elevated` | #F8F1E5 | Bottom sheet | BOUND |
| FC-19832 cornerRadius | `Literal` | `radius.2xl` | 24.0 | Bottom sheet | BOUND |
| FC-19984 fill | `Canvas` | `surface.elevated` | #F8F1E5 | Bottom sheet | BOUND |
| FC-19984 cornerRadius | `Literal` | `radius.2xl` | 24.0 | Bottom sheet | BOUND |
| FC-35517 fill | `Ink` | `navigation.background` | #29272B | Approved dark navigation | BOUND |
| FC-24964 fill | `Canvas` | `surface.elevated` | #F8F1E5 | Bottom sheet | BOUND |
| FC-24964 cornerRadius | `Literal` | `radius.2xl` | 24.0 | Bottom sheet | BOUND |
| FC-25116 fill | `Canvas` | `surface.elevated` | #F8F1E5 | Bottom sheet | BOUND |
| FC-25116 cornerRadius | `Literal` | `radius.2xl` | 24.0 | Bottom sheet | BOUND |
| FC-37244 fill | `Ink` | `navigation.background` | #29272B | Approved dark navigation | BOUND |
| FC-29660 fill | `Canvas` | `surface.elevated` | #F8F1E5 | Bottom sheet | BOUND |
| FC-29660 cornerRadius | `Literal` | `radius.2xl` | 24.0 | Bottom sheet | BOUND |
| FC-29818 fill | `Canvas` | `surface.elevated` | #F8F1E5 | Bottom sheet | BOUND |
| FC-29818 cornerRadius | `Literal` | `radius.2xl` | 24.0 | Bottom sheet | BOUND |
| FC-29980 fill | `Canvas` | `surface.elevated` | #F8F1E5 | Bottom sheet | BOUND |
| FC-29980 cornerRadius | `Literal` | `radius.2xl` | 24.0 | Bottom sheet | BOUND |
| FC-30138 fill | `Canvas` | `surface.elevated` | #F8F1E5 | Bottom sheet | BOUND |
| FC-30138 cornerRadius | `Literal` | `radius.2xl` | 24.0 | Bottom sheet | BOUND |
| FC-30204 fill | `Canvas` | `surface.elevated` | #F8F1E5 | Bottom sheet | BOUND |
| FC-30204 cornerRadius | `Literal` | `radius.2xl` | 24.0 | Bottom sheet | BOUND |
| FC-30522 fill | `Canvas` | `surface.elevated` | #F8F1E5 | Bottom sheet | BOUND |
| FC-30522 cornerRadius | `Literal` | `radius.2xl` | 24.0 | Bottom sheet | BOUND |
| FC-30638 fill | `Canvas` | `surface.elevated` | #F8F1E5 | Bottom sheet | BOUND |
| FC-30638 cornerRadius | `Literal` | `radius.2xl` | 24.0 | Bottom sheet | BOUND |
| FC-31081 fill | `Canvas` | `surface.elevated` | #F8F1E5 | Bottom sheet | BOUND |
| FC-31081 cornerRadius | `Literal` | `radius.2xl` | 24.0 | Bottom sheet | BOUND |
| FC-31148 fill | `Canvas` | `surface.elevated` | #F8F1E5 | Bottom sheet | BOUND |
| FC-31148 cornerRadius | `Literal` | `radius.2xl` | 24.0 | Bottom sheet | BOUND |
| FC-31216 fill | `Canvas` | `surface.elevated` | #F8F1E5 | Bottom sheet | BOUND |
| FC-31216 cornerRadius | `Literal` | `radius.2xl` | 24.0 | Bottom sheet | BOUND |
| FC-31478 fill | `Canvas` | `surface.elevated` | #F8F1E5 | Bottom sheet | BOUND |
| FC-31478 cornerRadius | `Literal` | `radius.2xl` | 24.0 | Bottom sheet | BOUND |
| FC-37525 fill | `Ink` | `navigation.background` | #29272B | Approved dark navigation | BOUND |
| FC-32326 fill | `Canvas` | `surface.elevated` | #F8F1E5 | Bottom sheet | BOUND |
| FC-32326 cornerRadius | `Literal` | `radius.2xl` | 24.0 | Bottom sheet | BOUND |
| FC-32956 fill | `Canvas` | `surface.elevated` | #F8F1E5 | Bottom sheet | BOUND |
| FC-32956 cornerRadius | `Literal` | `radius.2xl` | 24.0 | Bottom sheet | BOUND |
| FC-33475 fill | `Lavender` | `background.subtle` | #DDD5F3 | Planner responsive / Selected=Overview | BOUND |
| FC-33476 fill | `Butter Yellow` | `module.planner.accent` | #F3D36B | Selected Planner view | BOUND |
| FC-33492 fill | `Lavender` | `background.subtle` | #DDD5F3 | Planner responsive / Selected=Agenda | BOUND |
| FC-33497 fill | `Butter Yellow` | `module.planner.accent` | #F3D36B | Selected Planner view | BOUND |
| FC-33509 fill | `Lavender` | `background.subtle` | #DDD5F3 | Planner responsive / Selected=Calendar | BOUND |
| FC-33518 fill | `Butter Yellow` | `module.planner.accent` | #F3D36B | Selected Planner view | BOUND |
| FC-33526 fill | `Lavender` | `background.subtle` | #DDD5F3 | Planner responsive / Selected=Routines | BOUND |
| FC-33539 fill | `Butter Yellow` | `module.planner.accent` | #F3D36B | Selected Planner view | BOUND |
| FC-33466 fill | `Butter Yellow` | `module.planner.accent` | #F3D36B | Planner date or time selection | BOUND |
| FC-2500 fill | `Butter Yellow` | `module.planner.accent` | #F3D36B | Planner date or time selection | BOUND |
| FC-33466 stroke | `Ink` | `border.default` | #29272B | Date highlight | BOUND |
| FC-2501 fill | `Ink` | `text.primary` | #29272B | PM | BOUND |
| FC-2838 fill | `Matcha Green` | `feedback.success` | #A1C5A1 | Status message | BOUND |
| FC-241 width | `Literal` | `size.header.control` | 48.0 | Navigation / Back | BOUND |
| FC-242 stroke | `Ink` | `icon.primary` | #29272B | Arrow | BOUND |
| FC-1689 stroke | `Ink` | `border.default` | #29272B | Checkbox | BOUND |
| FC-2824 stroke | `Ink` | `border.default` | #29272B | Checkbox | BOUND |
| FC-263 gap | `Literal` | `spacing.step-8` | 8.0 | State=Primary | BOUND |
| FC-265 gap | `Literal` | `spacing.step-8` | 8.0 | State=Secondary | BOUND |
| FC-267 gap | `Literal` | `spacing.step-8` | 8.0 | State=Pressed | BOUND |
| FC-269 gap | `Literal` | `spacing.step-8` | 8.0 | State=Disabled | BOUND |
| FC-271 gap | `Literal` | `spacing.step-8` | 8.0 | State=Loading | BOUND |
| FC-24024 gap | `Literal` | `spacing.step-8` | 8.0 | Action=Danger | BOUND |
| FC-38130 minHeight | `Literal` | `size.notification.minimum` | 92.0 | Category=Planner, State=Unread | BOUND |
| FC-38146 minHeight | `Literal` | `size.notification.minimum` | 92.0 | Category=Planner, State=Read | BOUND |
| FC-38159 minHeight | `Literal` | `size.notification.minimum` | 92.0 | Category=Routine, State=Unread | BOUND |
| FC-38171 minHeight | `Literal` | `size.notification.minimum` | 92.0 | Category=Routine, State=Read | BOUND |
| FC-38184 minHeight | `Literal` | `size.notification.minimum` | 92.0 | Category=Growth, State=Read | BOUND |
| FC-38197 minHeight | `Literal` | `size.notification.minimum` | 92.0 | Category=Diary, State=Unread | BOUND |
| FC-38209 minHeight | `Literal` | `size.notification.minimum` | 92.0 | Category=Diary, State=Read | BOUND |
| FC-38222 minHeight | `Literal` | `size.notification.minimum` | 92.0 | Category=Kitchen, State=Unread | BOUND |
| FC-38234 minHeight | `Literal` | `size.notification.minimum` | 92.0 | Category=Kitchen, State=Read | BOUND |
| FC-38247 minHeight | `Literal` | `size.notification.minimum` | 92.0 | Category=Couple, State=Unread | BOUND |
| FC-38260 minHeight | `Literal` | `size.notification.minimum` | 92.0 | Category=Couple, State=Read | BOUND |
| FC-38274 minHeight | `Literal` | `size.notification.minimum` | 92.0 | Category=Account, State=Read | BOUND |
| FC-38287 minHeight | `Literal` | `size.notification.minimum` | 92.0 | Placeholder=Skeleton | BOUND |
| FC-38858 fontFamily | `Literal` | `font-family.display` | Space Grotesk | display.lg | BOUND |
| FC-38858 fontSize | `Literal` | `font-size.step-36` | 36.0 | display.lg | BOUND |
| FC-38862 fontFamily | `Literal` | `font-family.display` | Space Grotesk | display.md | BOUND |
| FC-38862 fontSize | `Literal` | `font-size.step-30` | 30.0 | display.md | BOUND |
| FC-38866 fontFamily | `Literal` | `font-family.display` | Space Grotesk | heading.lg | BOUND |
| FC-38866 fontSize | `Literal` | `font-size.step-24` | 24.0 | heading.lg | BOUND |
| FC-38870 fontFamily | `Literal` | `font-family.display` | Space Grotesk | heading.md | BOUND |
| FC-38870 fontSize | `Literal` | `font-size.step-20` | 20.0 | heading.md | BOUND |
| FC-38874 fontFamily | `Literal` | `font-family.display` | Space Grotesk | heading.sm | BOUND |
| FC-38874 fontSize | `Literal` | `font-size.step-18` | 18.0 | heading.sm | BOUND |
| FC-38878 fontFamily | `Literal` | `font-family.body` | DM Sans | body.lg | BOUND |
| FC-38878 fontSize | `Literal` | `font-size.step-16` | 16.0 | body.lg | BOUND |
| FC-38882 fontFamily | `Literal` | `font-family.body` | DM Sans | body.md | BOUND |
| FC-38882 fontSize | `Literal` | `font-size.step-14` | 14.0 | body.md | BOUND |
| FC-38886 fontFamily | `Literal` | `font-family.body` | DM Sans | body.sm | BOUND |
| FC-38886 fontSize | `Literal` | `font-size.step-13` | 13.0 | body.sm | BOUND |
| FC-38890 fontFamily | `Literal` | `font-family.body` | DM Sans | caption | BOUND |
| FC-38890 fontSize | `Literal` | `font-size.step-12` | 12.0 | caption | BOUND |
| FC-38894 fontFamily | `Literal` | `typography.label.font-family` | DM Sans | label | BOUND |
| FC-38894 fontSize | `Literal` | `typography.label.font-size` | 11.0 | label | BOUND |
| FC-38898 fontFamily | `Literal` | `typography.button.md.font-family` | DM Sans | button.md | BOUND |
| FC-38898 fontSize | `Literal` | `typography.button.md.font-size` | 14.0 | button.md | BOUND |
| FC-38902 fontFamily | `Literal` | `typography.button.compact.font-family` | DM Sans | button.compact | BOUND |
| FC-38902 fontSize | `Literal` | `typography.button.compact.font-size` | 13.0 | button.compact | BOUND |
| FC-38906 fontFamily | `Literal` | `font-family.display` | Space Grotesk | statistic | BOUND |
| FC-38906 fontSize | `Literal` | `font-size.step-24` | 24.0 | statistic | BOUND |
| FC-38910 fontFamily | `Literal` | `typography.field.value.font-family` | DM Sans | field.value | BOUND |
| FC-38910 fontSize | `Literal` | `typography.field.value.font-size` | 15.0 | field.value | BOUND |
| FC-38914 fontFamily | `Literal` | `typography.card.title.font-family` | DM Sans | card.title | BOUND |
| FC-38914 fontSize | `Literal` | `typography.card.title.font-size` | 13.5 | card.title | BOUND |
| FC-38918 fontFamily | `Literal` | `typography.metadata.font-family` | DM Sans | metadata | BOUND |
| FC-38918 fontSize | `Literal` | `typography.metadata.font-size` | 11.5 | metadata | BOUND |

## Value and role conflicts held

| Layer | Proposed role | Native value | Registry value |
| --- | --- | --- | --- |
| FC-264 Label · fontSize | `typography.button.md.font-size` | 15.0 | 14 |
| FC-266 Label · fontSize | `typography.button.md.font-size` | 15.0 | 14 |
| FC-268 Label · fontSize | `typography.button.md.font-size` | 15.0 | 14 |
| FC-270 Label · fontSize | `typography.button.md.font-size` | 15.0 | 14 |
| FC-274 Label · fontSize | `typography.button.md.font-size` | 15.0 | 14 |
| FC-33215 Input value · fontSize | `typography.field.value.font-size` | 16.0 | 15 |
| FC-33221 Input value · fontSize | `typography.field.value.font-size` | 16.0 | 15 |
| FC-33225 Input boundary · stroke | `border.focus` | #29272B | #A6A3E3 |
| FC-33227 Input value · fontSize | `typography.field.value.font-size` | 16.0 | 15 |
| FC-33234 Input value · fontSize | `typography.field.value.font-size` | 16.0 | 15 |

Helper paths such as `typography.button.md.font-family` map to the matching individual property. Composite tokens keep their typed registry representation. See the [binding audit](component-binding-audit.md) for preserved sizing and local type.
