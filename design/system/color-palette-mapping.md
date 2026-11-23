# Alongio color palette mapping

The approved palette names are the eight existing registry keys. FigCraft variable IDs and exact color values identify the same approved pigments before and after the Phase 10S correction. The registry retains its existing `palette` wrapper.

| Actual variable name | Resolved HEX | Design System label | JSON token | Binding status |
| --- | --- | --- | --- | --- |
| `cream` · `VariableID:1` | #F8F1E5 | `cream` | `palette.cream` | Original ID verified after reopen ? 2,948 refs outside the Design System. |
| `ink` · `VariableID:2` | #29272B | `ink` | `palette.ink` | Original ID verified after reopen ? 15,038 refs outside the Design System. |
| `pink` · `VariableID:3` | #E88C9F | `pink` | `palette.pink` | Original ID verified after reopen ? 1,330 refs outside the Design System. |
| `indigo` · `VariableID:4` | #A6A3E3 | `indigo` | `palette.indigo` | Original ID verified after reopen ? 483 refs outside the Design System. |
| `yellow` · `VariableID:5` | #F3D36B | `yellow` | `palette.yellow` | Original ID verified after reopen ? 1,372 refs outside the Design System. |
| `green` · `VariableID:6` | #A1C5A1 | `green` | `palette.green` | Original ID verified after reopen ? 950 refs outside the Design System. |
| `lavender` · `VariableID:7` | #DDD5F3 | `lavender` | `palette.lavender` | Original ID verified after reopen ? 2,549 refs outside the Design System. |
| `muted` · `VariableID:8` | #70686A | `muted` | `palette.muted` | Original ID verified after reopen ? 628 refs outside the Design System. |

## Names at intake

| Native ID | FigCraft name at intake | Previous palette-card label | Stored value |
| --- | --- | --- | --- |
| `VariableID:1` | `palette.cream` | Warm Cream | #F8F1E5 |
| `VariableID:2` | `palette.ink` | Ink | #29272B |
| `VariableID:3` | `palette.pink` | Romantic Pink | #E88C9F |
| `VariableID:4` | `palette.indigo` | Soft Indigo | #A6A3E3 |
| `VariableID:5` | `palette.yellow` | Butter Yellow | #F3D36B |
| `VariableID:6` | `palette.green` | Matcha Green | #A1C5A1 |
| `VariableID:7` | `palette.lavender` | Lavender | #DDD5F3 |
| `VariableID:8` | `palette.muted` | Muted Ink | #70686A |

## Deprecated aliases

These names appeared in the earlier semantic pass. They map to palette colors by native alias target ID. They are a historical lookup and are not canonical palette entries.

| Retired alias | Former variable ID | Exact target | Resolved HEX | Native field references at intake |
| --- | --- | --- | --- | ---: |
| `background.default` | `VariableID:9` | `cream` | #F8F1E5 | 310 |
| `background.subtle` | `VariableID:10` | `lavender` | #DDD5F3 | 87 |
| `background.inverse` | `VariableID:11` | `ink` | #29272B | 2 |
| `surface.default` | `VariableID:12` | `cream` | #F8F1E5 | 44 |
| `surface.card` | `VariableID:13` | `cream` | #F8F1E5 | 84 |
| `surface.elevated` | `VariableID:14` | `cream` | #F8F1E5 | 54 |
| `text.primary` | `VariableID:15` | `ink` | #29272B | 57 |
| `text.secondary` | `VariableID:16` | `muted` | #70686A | 16 |
| `text.muted` | `VariableID:17` | `muted` | #70686A | 2 |
| `text.inverse` | `VariableID:18` | `cream` | #F8F1E5 | 2 |
| `text.disabled` | `VariableID:19` | `muted` | #70686A | 2 |
| `border.default` | `VariableID:20` | `ink` | #29272B | 72 |
| `border.strong` | `VariableID:21` | `ink` | #29272B | 2 |
| `border.focus` | `VariableID:22` | `indigo` | #A6A3E3 | 2 |
| `border.error` | `VariableID:23` | `pink` | #E88C9F | 6 |
| `icon.primary` | `VariableID:24` | `ink` | #29272B | 289 |
| `icon.secondary` | `VariableID:25` | `muted` | #70686A | 2 |
| `icon.disabled` | `VariableID:26` | `muted` | #70686A | 2 |
| `action.primary.background` | `VariableID:27` | `ink` | #29272B | 64 |
| `action.primary.foreground` | `VariableID:28` | `cream` | #F8F1E5 | 64 |
| `action.primary.pressed` | `VariableID:29` | `indigo` | #A6A3E3 | 5 |
| `action.secondary.background` | `VariableID:30` | `cream` | #F8F1E5 | 2 |
| `action.secondary.foreground` | `VariableID:31` | `ink` | #29272B | 49 |
| `action.disabled.background` | `VariableID:32` | `lavender` | #DDD5F3 | 12 |
| `action.disabled.foreground` | `VariableID:33` | `muted` | #70686A | 12 |
| `action.destructive.background` | `VariableID:34` | `pink` | #E88C9F | 12 |
| `action.destructive.foreground` | `VariableID:35` | `ink` | #29272B | 12 |
| `feedback.success` | `VariableID:36` | `green` | #A1C5A1 | 25 |
| `feedback.warning` | `VariableID:37` | `yellow` | #F3D36B | 2 |
| `feedback.error` | `VariableID:38` | `pink` | #E88C9F | 2 |
| `feedback.info` | `VariableID:39` | `lavender` | #DDD5F3 | 2 |
| `navigation.background` | `VariableID:40` | `ink` | #29272B | 78 |
| `navigation.active` | `VariableID:41` | `yellow` | #F3D36B | 2 |
| `navigation.inactive` | `VariableID:42` | `cream` | #F8F1E5 | 2 |
| `navigation.indicator` | `VariableID:43` | `yellow` | #F3D36B | 2 |
| `module.planner.accent` | `VariableID:44` | `yellow` | #F3D36B | 51 |
| `module.planner.on-accent` | `VariableID:45` | `ink` | #29272B | 1 |
| `module.planner.support` | `VariableID:46` | `green` | #A1C5A1 | 2 |
| `module.diary.accent` | `VariableID:47` | `pink` | #E88C9F | 2 |
| `module.diary.on-accent` | `VariableID:48` | `ink` | #29272B | 1 |
| `module.diary.support` | `VariableID:49` | `lavender` | #DDD5F3 | 19 |
| `module.kitchen.accent` | `VariableID:50` | `green` | #A1C5A1 | 2 |
| `module.kitchen.on-accent` | `VariableID:51` | `ink` | #29272B | 1 |
| `module.kitchen.support` | `VariableID:52` | `yellow` | #F3D36B | 2 |
| `module.couple.accent` | `VariableID:53` | `pink` | #E88C9F | 2 |
| `module.couple.on-accent` | `VariableID:54` | `ink` | #29272B | 1 |
| `module.couple.support` | `VariableID:55` | `indigo` | #A6A3E3 | 2 |
| `module.profile.accent` | `VariableID:56` | `indigo` | #A6A3E3 | 2 |
| `module.profile.on-accent` | `VariableID:57` | `ink` | #29272B | 1 |
| `module.profile.support` | `VariableID:58` | `lavender` | #DDD5F3 | 2 |
| `module.updates.accent` | `VariableID:59` | `lavender` | #DDD5F3 | 2 |
| `module.updates.on-accent` | `VariableID:60` | `ink` | #29272B | 1 |
| `module.updates.support` | `VariableID:61` | `cream` | #F8F1E5 | 2 |
| `border.subtle` | `VariableID:66` | `muted` | #70686A | 28 |
| `action.primary.pressed-foreground` | `VariableID:67` | `ink` | #29272B | 4 |
