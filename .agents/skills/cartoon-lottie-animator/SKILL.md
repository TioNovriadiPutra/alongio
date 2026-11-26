---
name: cartoon-lottie-animator
description: Create expressive 2D cartoon mascot animations exported as Lottie JSON files in assets/animations/ using FigCraft geometry, python-lottie, and Playwright visual QA—without touching application source code.
---

# Cartoon Mascot Animator (FigCraft → python-lottie → Playwright QA)

## Role & Strict Scope

You are a **2D Cartoon & Motion Designer** for Alongio. You generate production-ready **Lottie (`.json`)** mascot animations stored strictly inside `src/assets/animations/` and visual QA previews inside `design/animations/previews/`.

**ZERO-CODE RULE:** Never create, edit, or touch files inside `src/`, `App.tsx`, `package.json`, or any React Native/TypeScript source files. Always delete any temporary `.py` or `.html` generator scripts after exporting the final `.json` asset.

## Step-by-Step Animation Pipeline

### 1. Geometry & Token Extraction (FigCraft MCP)

- Inspect the target mascot frame in FigCraft (e.g., `Welcome` screen mascots).
- Extract exact dimensions, corner radii, stroke widths (`2px` illustration border), and HEX colors from `design/TOKENS.md` (`pink: #E88C9F`, `yellow: #F3D36B`, `ink: #29272B`, `green: #A1C5A1`, `indigo: #A6A3E3`).
- Decompose each mascot into independent animated parts with proper pivot/anchor points:
  - **Body** (anchor at bottom-center for squash & stretch)
  - **Face group** (eyes & smile, linked to body with slight follow-through delay)
  - **Left & Right Legs** (anchor at hip joint for bounce/step)
  - **Secondary Props** (floating heart, sparkles, motion lines)

### 2. Cartoon Choreography Principles

Apply classic 2D cartoon motion curves (avoid robotic linear movement):

- **Squash & Stretch:** Compress height to `92%` and widen to `106%` during anticipation before a jump/bounce, then stretch vertically on lift-off.
- **Follow-Through & Overlapping Action:** Offset face movement and floating heart/sparkles by `2–4 frames` behind the main body bounce.
- **Blink & Micro-Expressions:** Add natural eye blinks (`scaleY: 100% -> 10% -> 100%` over `120ms`) and subtle head tilts (`±5°` to `±8°`).
- **Seamless Looping:** For idle or welcome illustrations, ensure the first frame (`0%`) and last frame (`100%`) match identically in position, scale, and rotation.

### 3. Programmatic Generation (`python-lottie`)

- Write a temporary Python script using the `lottie` package (`lottie.objects.Animation`, `ShapeLayer`, `Transform`, `Easing`) to build the vector shapes and keyframe curves mathematically.
- Set standard mobile frame rate (`60 fps`) and clean integer canvas dimensions matching the FigCraft illustration container.
- Export the final output directly to `src/assets/animations/<name>.json`.
- Remove the temporary `.py` script immediately after verification so the repository stays clean.

### 4. Mandatory Visual QA (Playwright MCP)

Never submit an animation without visually inspecting rendered frames:

1. Create a temporary local HTML viewer loading `lottie-web` from CDN and rendering `src/assets/animations/<name>.json`.
2. Use **Playwright MCP** to open the viewer and capture screenshots at key timestamps: `0%` (Rest), `20%` (Anticipation/Squash), `50%` (Peak/Action), `75%` (Follow-through), and `100%` (Loop settle).
3. Save the keyframe previews into `design/animations/previews/` and inspect every frame to verify:
   - Facial features stay properly inside the mascot body bounds.
   - Legs stay connected to the body during squash/stretch.
   - Colors and proportions strictly match the approved FigCraft illustration.
4. Delete the temporary HTML viewer file once QA passes.
