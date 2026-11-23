# Tiny Planner expressive motion map

Phase 11B.1R · DESIGN_ONLY

This map records the original application bindings and verified native transition metadata. A separate review report records measured playback and the isolated controls. Interaction labels and destination IDs remain the same.

Enter uses cubic-bezier(0.2, 0.8, 0.2, 1). Exit uses cubic-bezier(0.4, 0, 1, 1). The new 260, 240, and 200 ms navigation values and the 280 and 200 ms sheet values are scoped to this review.

## Isolated studies

| Affected control | Previous | Proposed FigCraft behavior | Design intent | Support |
| --- | --- | --- | --- | --- |
| Primary and secondary button | Paint feedback at 90/140 ms | Smart Animate, inner geometry 100% to 96% and back at 90/140 ms | Perceptible press with stable hit bounds | Native variant interpolation |
| Checkbox and Undo | In-place 180 ms Smart Animate specimen | Inner check grows through a bounded peak, then anticipates reversal | Clearly acknowledge completion | Native variant interpolation. Configured spring. Exact convergence is NOT VERIFIED. |
| Calendar day 19 | Paint feedback and existing agenda destination | Pop inside fixed day cell | Acknowledge the selected date inside the grid | Native variant interpolation |
| Tab and segment | Full-screen 180 ms dissolve | Independent indicator motion in the isolated specimen | Keep route change clear while content stays anchored | Native variant interpolation. App fixture remains instant. |
| Create task | Dissolve to approved Details | Directional Details reveal and isolated one-shot check accent | Gentle confirmation | Native transition. Local accent isolated. |
| Date and Time | App fixture dissolve at 240/180 ms. Isolated overlays at 240/180 ms. | App fixture instant. Duplicate native bottom overlays, 280 ms Move In and 200 ms Move Out. | Make sheet origin and dismissal obvious | Native in the isolated geometry. |

## Hierarchical navigation

| Source | Binding | Destination | Before | After · duration / easing | Expected movement or response · support | Intermediate |
| --- | --- | --- | --- | --- | --- | --- |
| FC-2 Home – Couple Mode | Tiny Planner · 124:0 | FC-1601 Planner overview | dissolve 220 ms | moveIn top · 260 ms / Enter | Planner rises over Home. Native metadata. | Verified vertical displacement |
| FC-2 Home – Couple Mode | Reminder · 204:0 | FC-2122 Task details | dissolve 220 ms | push left · 240 ms / Enter | Details pushes in from the trailing edge. Native metadata. | NOT VERIFIED for this binding |
| FC-1601 Planner overview | Add task · 1612:0 | FC-2024 Create task · Empty | dissolve 220 ms | push left · 240 ms / Enter | Push the form in from the trailing edge. Native metadata. | NOT VERIFIED for this binding |
| FC-1601 Planner overview | Task details target · 1690:0 | FC-2122 Task details | dissolve 220 ms | push left · 240 ms / Enter | Details pushes in from the trailing edge. Native metadata. | Verified forward horizontal displacement |
| FC-1712 Daily agenda | Add task · 1723:0 | FC-2024 Create task · Empty | dissolve 220 ms | push left · 240 ms / Enter | Push the form in from the trailing edge. Native metadata. | NOT VERIFIED for this binding |
| FC-1712 Daily agenda | Task details target · 1781:0 | FC-2122 Task details | dissolve 220 ms | push left · 240 ms / Enter | Details pushes in from the trailing edge. Native metadata. | NOT VERIFIED for this binding |
| FC-1712 Daily agenda | Add a task · 3353:0 | FC-2024 Create task · Empty | dissolve 220 ms | push left · 240 ms / Enter | Push the form in from the trailing edge. Native metadata. | NOT VERIFIED for this binding |
| FC-1816 Calendar | Add task · 1827:0 | FC-2024 Create task · Empty | dissolve 220 ms | push left · 240 ms / Enter | Push the form in from the trailing edge. Native metadata. | NOT VERIFIED for this binding |
| FC-1816 Calendar | Task details target · 1998:0 | FC-2122 Task details | dissolve 220 ms | push left · 240 ms / Enter | Details pushes in from the trailing edge. Native metadata. | NOT VERIFIED for this binding |
| FC-2024 Create task · Empty | Back · 2033:0 | History | dissolve 220 ms | push right · 200 ms / Exit | Return in the opposite direction. Native metadata. | NOT VERIFIED for this binding |
| FC-2073 Create task · Ready | Back · 2082:0 | History | dissolve 220 ms | push right · 200 ms / Exit | Return in the opposite direction. Native metadata. | NOT VERIFIED for this binding |
| FC-2122 Task details | Back · 2131:0 | History | dissolve 220 ms | push right · 200 ms / Exit | Reverse the detail stack with a horizontal push. Native metadata. | Verified reverse horizontal displacement |
| FC-2122 Task details | Edit · 2134:0 | FC-2169 Edit task | dissolve 220 ms | push left · 240 ms / Enter | Push the form in from the trailing edge. Native metadata. | NOT VERIFIED for this binding |
| FC-2169 Edit task | Back · 2178:0 | History | dissolve 220 ms | push right · 200 ms / Exit | Return in the opposite direction. Native metadata. | NOT VERIFIED for this binding |
| FC-2736 Planner · Task completed | Add task · 2747:0 | FC-2024 Create task · Empty | dissolve 220 ms | push left · 240 ms / Enter | Push the form in from the trailing edge. Native metadata. | NOT VERIFIED for this binding |
| FC-2736 Planner · Task completed | Task details target · 2826:0 | FC-2843 Task details · Completed | dissolve 220 ms | push left · 240 ms / Enter | Details pushes in from the trailing edge. Native metadata. | NOT VERIFIED for this binding |
| FC-2843 Task details · Completed | Back · 2852:0 | FC-2736 Planner · Task completed | dissolve 220 ms | push right · 200 ms / Exit | Reverse the detail stack with a horizontal push. Native metadata. | NOT VERIFIED for this binding |
| FC-2843 Task details · Completed | Edit · 2855:0 | FC-2169 Edit task | dissolve 220 ms | push left · 240 ms / Enter | Push the form in from the trailing edge. Native metadata. | NOT VERIFIED for this binding |

## Top-level navigation

| Source | Binding | Destination | Before | After · duration / easing | Expected movement or response · support | Intermediate |
| --- | --- | --- | --- | --- | --- | --- |
| FC-2 Home – Couple Mode | Plans · 219:0 | FC-1601 Planner overview | dissolve 220 ms | instant · 0 ms | Immediate tab route with indicator motion represented in the isolated study. Native metadata. | N/A. Instant. |
| FC-2 Home – Couple Mode | Plans · 219:1 | FC-1601 Planner overview | dissolve 220 ms | instant · 0 ms | Immediate tab route with indicator motion represented in the isolated study. Native metadata. | N/A. Instant. |
| FC-1601 Planner overview | Home · 1655:0 | FC-2 Home – Couple Mode | dissolve 220 ms | moveOut bottom · 200 ms / Exit | Planner drops away to reveal Home. Native metadata. | Visible exit sampled at all three viewports |
| FC-1712 Daily agenda | Home · 1797:0 | FC-2 Home – Couple Mode | dissolve 220 ms | moveOut bottom · 200 ms / Exit | Planner drops away to reveal Home. Native metadata. | NOT VERIFIED for this binding |
| FC-1816 Calendar | Home · 2004:0 | FC-2 Home – Couple Mode | dissolve 220 ms | moveOut bottom · 200 ms / Exit | Planner drops away to reveal Home. Native metadata. | NOT VERIFIED for this binding |
| FC-2736 Planner · Task completed | Home · 2790:0 | FC-2 Home – Couple Mode | dissolve 220 ms | moveOut bottom · 200 ms / Exit | Planner drops away to reveal Home. Native metadata. | NOT VERIFIED for this binding |
| FC-4098 Routines · Couple Mode | Home · 4128:0 | FC-2 Home – Couple Mode | dissolve 220 ms | moveOut bottom · 200 ms / Exit | Planner drops away to reveal Home. Native metadata. | NOT VERIFIED for this binding |
| FC-5183 Agenda · Scheduled routine | Home · 5270:0 | FC-2 Home – Couple Mode | dissolve 220 ms | moveOut bottom · 200 ms / Exit | Planner drops away to reveal Home. Native metadata. | NOT VERIFIED for this binding |

## State changes

| Source | Binding | Destination | Before | After · duration / easing | Expected movement or response · support | Intermediate |
| --- | --- | --- | --- | --- | --- | --- |
| FC-1601 Planner overview | See agenda · 1675:0 | FC-1712 Daily agenda | dissolve 180 ms | instant · 0 ms | Switch approved content immediately. Isolated indicator animates independently. Native metadata. | N/A. Instant. |
| FC-1601 Planner overview | Agenda · 3846:0 | FC-1712 Daily agenda | dissolve 180 ms | instant · 0 ms | Switch approved content immediately. Isolated indicator animates independently. Native metadata. | N/A. Instant. |
| FC-1601 Planner overview | Calendar · 3850:0 | FC-1816 Calendar | dissolve 180 ms | instant · 0 ms | Switch approved content immediately. Isolated indicator animates independently. Native metadata. | N/A. Instant. |
| FC-1601 Planner overview | Routines · 3854:0 | FC-4098 Routines · Couple Mode | dissolve 180 ms | instant · 0 ms | Switch approved content immediately. Isolated indicator animates independently. Native metadata. | N/A. Instant. |
| FC-1712 Daily agenda | Overview · 3859:0 | FC-1601 Planner overview | dissolve 180 ms | instant · 0 ms | Switch approved content immediately. Isolated indicator animates independently. Native metadata. | N/A. Instant. |
| FC-1712 Daily agenda | Calendar · 3867:0 | FC-1816 Calendar | dissolve 180 ms | instant · 0 ms | Switch approved content immediately. Isolated indicator animates independently. Native metadata. | N/A. Instant. |
| FC-1712 Daily agenda | Routines · 3871:0 | FC-4098 Routines · Couple Mode | dissolve 180 ms | instant · 0 ms | Switch approved content immediately. Isolated indicator animates independently. Native metadata. | N/A. Instant. |
| FC-1816 Calendar | View agenda · 1983:0 | FC-1712 Daily agenda | dissolve 180 ms | instant · 0 ms | Switch approved content immediately. Isolated indicator animates independently. Native metadata. | N/A. Instant. |
| FC-1816 Calendar | Overview · 3876:0 | FC-1601 Planner overview | dissolve 180 ms | instant · 0 ms | Switch approved content immediately. Isolated indicator animates independently. Native metadata. | N/A. Instant. |
| FC-1816 Calendar | Agenda · 3880:0 | FC-1712 Daily agenda | dissolve 180 ms | instant · 0 ms | Switch approved content immediately. Isolated indicator animates independently. Native metadata. | N/A. Instant. |
| FC-1816 Calendar | Routines · 3888:0 | FC-4098 Routines · Couple Mode | dissolve 180 ms | instant · 0 ms | Switch approved content immediately. Isolated indicator animates independently. Native metadata. | N/A. Instant. |
| FC-2736 Planner · Task completed | See agenda · 2810:0 | FC-1712 Daily agenda | dissolve 180 ms | instant · 0 ms | Switch approved content immediately. Isolated indicator animates independently. Native metadata. | N/A. Instant. |
| FC-2736 Planner · Task completed | Overview · 3910:0 | FC-1601 Planner overview | dissolve 180 ms | instant · 0 ms | Switch approved content immediately. Isolated indicator animates independently. Native metadata. | N/A. Instant. |
| FC-2736 Planner · Task completed | Agenda · 3914:0 | FC-1712 Daily agenda | dissolve 180 ms | instant · 0 ms | Switch approved content immediately. Isolated indicator animates independently. Native metadata. | N/A. Instant. |
| FC-2736 Planner · Task completed | Calendar · 3918:0 | FC-1816 Calendar | dissolve 180 ms | instant · 0 ms | Switch approved content immediately. Isolated indicator animates independently. Native metadata. | N/A. Instant. |
| FC-2736 Planner · Task completed | Routines · 3922:0 | FC-4098 Routines · Couple Mode | dissolve 180 ms | instant · 0 ms | Switch approved content immediately. Isolated indicator animates independently. Native metadata. | N/A. Instant. |
| FC-4098 Routines · Couple Mode | Overview · 4110:0 | FC-1601 Planner overview | dissolve 180 ms | instant · 0 ms | Switch approved content immediately. Isolated indicator animates independently. Native metadata. | N/A. Instant. |
| FC-4098 Routines · Couple Mode | Agenda · 4114:0 | FC-1712 Daily agenda | dissolve 180 ms | instant · 0 ms | Switch approved content immediately. Isolated indicator animates independently. Native metadata. | N/A. Instant. |
| FC-4098 Routines · Couple Mode | Calendar · 4118:0 | FC-1816 Calendar | dissolve 180 ms | instant · 0 ms | Switch approved content immediately. Isolated indicator animates independently. Native metadata. | N/A. Instant. |
| FC-4208 Routines · Personal Mode | Overview · 4220:0 | FC-5710 Planner overview · Personal Mode | dissolve 180 ms | instant · 0 ms | Switch approved content immediately. Isolated indicator animates independently. Native metadata. | N/A. Instant. |
| FC-4208 Routines · Personal Mode | Agenda · 4224:0 | FC-5856 Daily agenda · Personal Mode | dissolve 180 ms | instant · 0 ms | Switch approved content immediately. Isolated indicator animates independently. Native metadata. | N/A. Instant. |
| FC-4208 Routines · Personal Mode | Calendar · 4228:0 | FC-6000 Calendar · Personal Mode | dissolve 180 ms | instant · 0 ms | Switch approved content immediately. Isolated indicator animates independently. Native metadata. | N/A. Instant. |
| FC-5183 Agenda · Scheduled routine | Overview · 5196:0 | FC-1601 Planner overview | dissolve 180 ms | instant · 0 ms | Switch approved content immediately. Isolated indicator animates independently. Native metadata. | N/A. Instant. |
| FC-5183 Agenda · Scheduled routine | Agenda · 5200:0 | FC-1712 Daily agenda | dissolve 180 ms | instant · 0 ms | Switch approved content immediately. Isolated indicator animates independently. Native metadata. | N/A. Instant. |
| FC-5183 Agenda · Scheduled routine | Calendar · 5204:0 | FC-1816 Calendar | dissolve 180 ms | instant · 0 ms | Switch approved content immediately. Isolated indicator animates independently. Native metadata. | N/A. Instant. |
| FC-5183 Agenda · Scheduled routine | Routines · 5208:0 | FC-4098 Routines · Couple Mode | dissolve 180 ms | instant · 0 ms | Switch approved content immediately. Isolated indicator animates independently. Native metadata. | N/A. Instant. |
| FC-5710 Planner overview · Personal Mode | Agenda · 5844:0 | FC-5856 Daily agenda · Personal Mode | dissolve 180 ms | instant · 0 ms | Switch approved content immediately. Isolated indicator animates independently. Native metadata. | N/A. Instant. |
| FC-5710 Planner overview · Personal Mode | Calendar · 5848:0 | FC-6000 Calendar · Personal Mode | dissolve 180 ms | instant · 0 ms | Switch approved content immediately. Isolated indicator animates independently. Native metadata. | N/A. Instant. |
| FC-5710 Planner overview · Personal Mode | Routines · 5852:0 | FC-4208 Routines · Personal Mode | dissolve 180 ms | instant · 0 ms | Switch approved content immediately. Isolated indicator animates independently. Native metadata. | N/A. Instant. |
| FC-5856 Daily agenda · Personal Mode | Overview · 5984:0 | FC-5710 Planner overview · Personal Mode | dissolve 180 ms | instant · 0 ms | Switch approved content immediately. Isolated indicator animates independently. Native metadata. | N/A. Instant. |
| FC-5856 Daily agenda · Personal Mode | Calendar · 5992:0 | FC-6000 Calendar · Personal Mode | dissolve 180 ms | instant · 0 ms | Switch approved content immediately. Isolated indicator animates independently. Native metadata. | N/A. Instant. |
| FC-5856 Daily agenda · Personal Mode | Routines · 5996:0 | FC-4208 Routines · Personal Mode | dissolve 180 ms | instant · 0 ms | Switch approved content immediately. Isolated indicator animates independently. Native metadata. | N/A. Instant. |
| FC-6000 Calendar · Personal Mode | View agenda · 6194:0 | FC-5856 Daily agenda · Personal Mode | dissolve 180 ms | instant · 0 ms | Switch approved content immediately. Isolated indicator animates independently. Native metadata. | N/A. Instant. |
| FC-6000 Calendar · Personal Mode | Overview · 6242:0 | FC-5710 Planner overview · Personal Mode | dissolve 180 ms | instant · 0 ms | Switch approved content immediately. Isolated indicator animates independently. Native metadata. | N/A. Instant. |
| FC-6000 Calendar · Personal Mode | Agenda · 6246:0 | FC-5856 Daily agenda · Personal Mode | dissolve 180 ms | instant · 0 ms | Switch approved content immediately. Isolated indicator animates independently. Native metadata. | N/A. Instant. |
| FC-6000 Calendar · Personal Mode | Routines · 6254:0 | FC-4208 Routines · Personal Mode | dissolve 180 ms | instant · 0 ms | Switch approved content immediately. Isolated indicator animates independently. Native metadata. | N/A. Instant. |

## Success feedback

| Source | Binding | Destination | Before | After · duration / easing | Expected movement or response · support | Intermediate |
| --- | --- | --- | --- | --- | --- | --- |
| FC-1601 Planner overview | Completion target · 1688:0 | FC-2736 Planner · Task completed | dissolve 180 ms | smartAnimate · 180 ms / Enter | Interpolate matching geometry for check and reversal. Local spring is isolated. Native metadata. | NOT VERIFIED for this binding |
| FC-1712 Daily agenda | Completion target · 1779:0 | FC-2736 Planner · Task completed | dissolve 180 ms | instant · 0 ms | Switch from the different Agenda or Calendar composition without moving unrelated layers. Native metadata. | N/A. Instant. |
| FC-1816 Calendar | Completion target · 1996:0 | FC-2736 Planner · Task completed | dissolve 180 ms | instant · 0 ms | Switch from the different Agenda or Calendar composition without moving unrelated layers. Native metadata. | N/A. Instant. |
| FC-2073 Create task · Ready | Create task · 3416:0 | FC-2122 Task details | dissolve 180 ms | slideIn left · 240 ms / Enter | Reveal the approved detail confirmation. Local success accent is isolated. Native metadata. | NOT VERIFIED for this binding |
| FC-2122 Task details | Mark complete · 3439:0 | FC-2843 Task details · Completed | dissolve 180 ms | smartAnimate · 180 ms / Enter | Interpolate matching geometry for check and reversal. Local spring is isolated. Native metadata. | NOT VERIFIED for this binding |
| FC-2736 Planner · Task completed | Completion target · 2823:0 | FC-1601 Planner overview | dissolve 180 ms | smartAnimate · 180 ms / Exit | Interpolate matching geometry for check and reversal. Local spring is isolated. Native metadata. | NOT VERIFIED for this binding |
| FC-2736 Planner · Task completed | Undo · 2841:0 | FC-1601 Planner overview | dissolve 180 ms | smartAnimate · 180 ms / Exit | Interpolate matching geometry for check and reversal. Local spring is isolated. Native metadata. | NOT VERIFIED for this binding |
| FC-2736 Planner · Task completed | Undo · 2842:0 | FC-1601 Planner overview | dissolve 180 ms | smartAnimate · 180 ms / Exit | Interpolate matching geometry for check and reversal. Local spring is isolated. Native metadata. | NOT VERIFIED for this binding |
| FC-2843 Task details · Completed | Mark incomplete · 3766:0 | FC-2122 Task details | dissolve 180 ms | smartAnimate · 180 ms / Exit | Interpolate matching geometry for check and reversal. Local spring is isolated. Native metadata. | NOT VERIFIED for this binding |

## Component feedback

| Source | Binding | Destination | Before | After · duration / easing | Expected movement or response · support | Intermediate |
| --- | --- | --- | --- | --- | --- | --- |
| FC-1816 Calendar | 19 · 1925:0 | FC-1712 Daily agenda | dissolve 180 ms | slideIn left · 180 ms / Enter | Slide into the existing agenda. Local day pop is shown separately. Native metadata. | NOT VERIFIED for this binding |
| FC-2024 Create task · Empty | Field body · 7155:0 | FC-2073 Create task · Ready | dissolve 180 ms | instant · 0 ms | Keep form activation immediate. Button press scale is isolated. Native metadata. | N/A. Instant. |
| FC-2169 Edit task | Save changes · 3467:0 | FC-2122 Task details | dissolve 180 ms | instant · 0 ms | Keep form activation immediate. Button press scale is isolated. Native metadata. | N/A. Instant. |

## Overlays and bottom sheets

| Source | Binding | Destination | Before | After · duration / easing | Expected movement or response · support | Intermediate |
| --- | --- | --- | --- | --- | --- | --- |
| FC-2169 Edit task | Date · 2188:0 | FC-2221 Choose a date | dissolve 240 ms | instant · 0 ms | Preserve the application fixture link. The isolated copy delivers a real bottom overlay. Native metadata. | N/A. Instant. |
| FC-2169 Edit task | Time · 2194:0 | FC-2427 Choose a time | dissolve 240 ms | instant · 0 ms | Preserve the application fixture link. The isolated copy delivers a real bottom overlay. Native metadata. | N/A. Instant. |
| FC-2221 Choose a date | Close sheet · 2276:0 | History | dissolve 180 ms | instant · 0 ms | Preserve the application fixture link. The isolated copy delivers a real bottom overlay. Native metadata. | N/A. Instant. |
| FC-2221 Choose a date | Use November 19 · 3498:0 | FC-2169 Edit task | dissolve 180 ms | instant · 0 ms | Preserve the application fixture link. The isolated copy delivers a real bottom overlay. Native metadata. | N/A. Instant. |
| FC-2427 Choose a time | Close sheet · 2482:0 | History | dissolve 180 ms | instant · 0 ms | Preserve the application fixture link. The isolated copy delivers a real bottom overlay. Native metadata. | N/A. Instant. |
| FC-2427 Choose a time | Use 7:00 PM · 3529:0 | FC-2169 Edit task | dissolve 180 ms | instant · 0 ms | Preserve the application fixture link. The isolated copy delivers a real bottom overlay. Native metadata. | N/A. Instant. |

## Isolated picker bindings

Each overlay retains the approved bottom-center alignment and backdrop. The same two exit animations were functionally exercised. Intermediate exit pixels were measured on Close. Confirm shares the same native parameters.

| Flow | Trigger | Destination | Before | After | Intermediate |
| --- | --- | --- | --- | --- | --- |
| 320 Date | Open ? FC-51673 | overlay ? FC-51764 | moveIn top 240 ms | moveIn top 280 ms | Verified |
| 320 Date | Close ? FC-51775 | Edit Task ? FC-51659 | moveOut bottom 180 ms | moveOut bottom 200 ms | Verified |
| 320 Date | Confirm ? FC-52016 | Edit Task ? FC-51659 | moveOut bottom 180 ms | moveOut bottom 200 ms | NOT VERIFIED for Confirm. Action verified. |
| 320 Time | Open ? FC-52045 | overlay ? FC-52125 | moveIn top 240 ms | moveIn top 280 ms | Verified |
| 320 Time | Close ? FC-52136 | Edit Task ? FC-52020 | moveOut bottom 180 ms | moveOut bottom 200 ms | Verified |
| 320 Time | Confirm ? FC-52185 | Edit Task ? FC-52020 | moveOut bottom 180 ms | moveOut bottom 200 ms | NOT VERIFIED for Confirm. Action verified. |
| 390 Date | Open ? FC-52203 | overlay ? FC-52294 | moveIn top 240 ms | moveIn top 280 ms | Verified |
| 390 Date | Close ? FC-52305 | Edit Task ? FC-52189 | moveOut bottom 180 ms | moveOut bottom 200 ms | Verified |
| 390 Date | Confirm ? FC-52546 | Edit Task ? FC-52189 | moveOut bottom 180 ms | moveOut bottom 200 ms | NOT VERIFIED for Confirm. Action verified. |
| 390 Time | Open ? FC-52575 | overlay ? FC-52655 | moveIn top 240 ms | moveIn top 280 ms | Verified |
| 390 Time | Close ? FC-52666 | Edit Task ? FC-52550 | moveOut bottom 180 ms | moveOut bottom 200 ms | Verified |
| 390 Time | Confirm ? FC-52715 | Edit Task ? FC-52550 | moveOut bottom 180 ms | moveOut bottom 200 ms | NOT VERIFIED for Confirm. Action verified. |
| 440 Date | Open ? FC-52733 | overlay ? FC-52824 | moveIn top 240 ms | moveIn top 280 ms | Verified |
| 440 Date | Close ? FC-52835 | Edit Task ? FC-52719 | moveOut bottom 180 ms | moveOut bottom 200 ms | Verified |
| 440 Date | Confirm ? FC-53076 | Edit Task ? FC-52719 | moveOut bottom 180 ms | moveOut bottom 200 ms | NOT VERIFIED for Confirm. Action verified. |
| 440 Time | Open ? FC-53105 | overlay ? FC-53185 | moveIn top 240 ms | moveIn top 280 ms | Verified |
| 440 Time | Close ? FC-53196 | Edit Task ? FC-53080 | moveOut bottom 180 ms | moveOut bottom 200 ms | Verified |
| 440 Time | Confirm ? FC-53245 | Edit Task ? FC-53080 | moveOut bottom 180 ms | moveOut bottom 200 ms | NOT VERIFIED for Confirm. Action verified. |

[Motion QA and review board](tiny-planner-11b1r.md)
