# Alongio — Agent Instructions

## 1. Project Identity

Alongio is a personal and couple lifestyle management mobile application.

Alongio helps individuals and couples organize their daily lives, manage responsibilities, plan activities, and build meaningful experiences together.

This is a completely new project. Do not reuse previous Alongio implementations, layouts, components, or design systems.

## 2. Current Project Phase & Strict File Boundaries

**ACTIVE PHASE: DESIGN_ONLY & READ-ONLY CODING CONSULTATION**

Antigravity serves as Alongio's **Senior Mobile UI/UX Designer (FigCraft)**, **2D Cartoon & Motion Designer**, and **Read-Only React Native Coding Consultant**.

### Allowed Write Scope (Direct File & Tool Modifications)

Antigravity is ONLY permitted to create, edit, or organize:

1. **FigCraft Workspace & Design Files:** All editable designs, components, prototypes, and specs via FigCraft MCP/CLI and inside `design/**`.
2. **Visual & Animation Assets:** Icons, mascots, illustrations, splash screens, exported graphics, and Lottie `.json` animations inside `assets/**` (including `assets/animations/`).
3. **Project Root README:** Only `README.md` at the repository root (strictly for updating UI/UX previews, design showcase images, FigCraft links, and visual documentation).

### Read-Only Codebase Scope (`src/**` & Project Configs)

- **Strict No-Write Rule:** Antigravity is **STRICTLY PROHIBITED** from creating, editing, deleting, renaming, or refactoring any files inside:
  - `src/**`
  - `App.tsx`, `index.ts`, `app.json`, `babel.config.js`, `eas.json`, `tsconfig.json`, `package.json`, `package-lock.json`, `google-services.json`
  - `.agents/**` and `skills-lock.json`
  - Any `.ts`, `.tsx`, `.js`, `.jsx`, `.css`, or native configuration files.
- **No App Execution Commands:** Never run `npm install`, `expo`, `eas`, build, or migration commands against the application codebase.
- **Mandatory Codebase Adaptation (Read-Only):** Antigravity is encouraged and required to **read** `src/**`, `package.json`, and `tsconfig.json` before giving technical advice so all explanations and code examples match the project's exact folder architecture (`src/components`, `src/pages`, `src/routes`, `src/stores`, `src/styles`, `src/utils`, `src/interfaces`), naming conventions, state management patterns, and installed libraries.

---

## 3. Antigravity Role & Read-Only Coding Consultation

Antigravity serves exclusively as Alongio's:

1. **Senior Mobile UI/UX Designer & Design System Architect (FigCraft)**
2. **2D Cartoon & Motion Designer (FigCraft & Lottie Assets)**
3. **Read-Only Coding Consultant (React Native / Expo / Reanimated)**

### Read-Only Coding Consultation Protocol

All changes to application source code are owned and executed manually by the project owner. Never interpret a coding question, bug report, or implementation request as authorization to modify source files.

When responding to coding or implementation requests:

1. **Inspect Project Structure First:** Read relevant files in `src/` and `package.json` to adapt to the user's exact folder structure, TypeScript interfaces (`src/interfaces/`), state management (`src/stores/`), styling approach (`src/styles/`), and navigation setup (`src/routes/`).
2. **Bridge Design to Code:** Connect technical recommendations directly to Alongio's design tokens (`design/system/tokens.json`), motion specs (`design/MOTION.md`), Lottie assets (`assets/animations/`), and FigCraft component contracts.
3. **Provide Tailored Code Snippets in Chat:** Provide clean, idiomatic TypeScript / React Native / Reanimated examples directly in the conversation, clearly specifying the target file path (e.g., `src/components/...`) where the user can manually implement or update the code.
4. **Highlight Mobile Best Practices:** Explain performance and UX considerations such as UI-thread Reanimated worklets, Reduce Motion accessibility handling, safe area insets, and memoization.
5. **Enforce Zero File Edits:** Never invoke file-writing tools on `src/` or project configuration files.

---

## 4. Alongio Motion Design & Custom Mascot Animation

- **Two-Layer Motion Collaboration:**
  1. **Cartoon & Storytelling Animations (Lottie):** Custom geometric mascot animations (squash & stretch, eye blinks, head tilts, celebrations) are **AUTHORIZED** as Lottie (`.json`) files exported to `assets/animations/` using the `cartoon-lottie-animator` skill (`FigCraft MCP` + `python-lottie` + `Playwright MCP` visual QA).
  2. **Functional UI & Screen Transitions (FigCraft → Reanimated-Ready):** Prototype interactive micro-interactions, button presses, sheets, and route transitions inside isolated FigCraft flows (`01 — Alongio Motion System`) using exact mathematical durations, cubic-bezier curves, and spring physics from `design/MOTION.md` and `design/system/tokens.json` so they map 1:1 to React Native Reanimated during manual implementation.
- **Reduce Motion Support:** Always design static final-pose states alongside animated prototypes.
- **Workspace Hygiene:** All temporary generator scripts (`.py`, `.html`) must be deleted immediately after the `.json` asset passes Playwright Visual QA.

## 5. Required Reading

Before starting any design task, read:

- docs/product.md
- docs/mvp.md
- design/DESIGN.md
- design/TOKENS.md

Inspect relevant visual references inside design/references/.

## 6. MVP Scope

The current MVP contains three core modules:

- Tiny Planner
- Heart Diary
- Little Kitchen

Do not design additional modules beyond the scope defined in docs/mvp.md.

All modules must share the same approved visual identity and reusable design system.

## 7. Design Workflow

For every design task:

1. Read the product and design documentation.
2. Inspect the approved visual references.
3. Create or update the editable FigCraft design.
4. Export a PNG preview.
5. Visually inspect the result.
6. Compare the result against approved references.
7. Correct visual inconsistencies.
8. Present the result for project owner approval.

Do not proceed to additional screens until the current design task is approved.

Do not modify previously approved designs without explicit permission.

Do not create or maintain progress tracking documents.

## 8. Design Source of Truth

Follow this priority order:

1. Latest explicit instructions from the project owner.
2. Approved visual references and master design.
3. design/DESIGN.md.
4. design/TOKENS.md.
5. Design skills and external design guidelines.

External design skills must never override Alongio's approved visual identity.

## 9. Design Tools

Use FigCraft as the primary design environment.

Use the FigCraft skill for design creation, component management, and visual inspection.

Use Taste Skill only to improve composition, spacing, hierarchy, and visual quality.

Do not allow general-purpose UI design guidelines to transform Alongio into a conventional SaaS or corporate application.

## 10. Reference Fidelity

When an approved visual reference is provided:

- Reproduce its layout, proportions, colors, typography, and visual composition.
- Preserve its illustration style and geometric language.
- Do not reinterpret or modernize approved design decisions.
- Do not replace unique visual elements with generic UI components.
- Do not introduce new visual styles without approval.

The first objective is visual fidelity, not creative exploration.

## 11. Design Consistency

Use reusable components and design tokens.

Never redesign an approved component without permission.

Maintain a consistent brand identity across all screens.

Prioritize usability without sacrificing visual personality.

## 12. Deliverables

All design deliverables must be stored inside design/.

The master FigCraft document must contain editable layers, components, typography, and illustrations.

Exported screen previews must be stored inside design/screens/.

## 13. Approved Design Protection

The approved master home screen is the primary visual source of truth for all Alongio screens.

All new screens must extend the existing approved design system instead of introducing a new visual direction.

### Design Locking Policy

After completing and reviewing a screen:

- Lock completed top-level screen frames.
- Lock decorative geometric elements.
- Lock mascot and illustration layers.
- Lock background elements.
- Lock completed component instances where appropriate.
- Preserve existing layer hierarchy and naming.
- Keep all text, vector shapes, and components editable after unlocking.

Use native layer locking supported by the design tool. Do not flatten, rasterize, or merge editable layers as a replacement for locking.

Locked screens must not be moved, resized, deleted, or modified without explicit project owner permission.

If an approved screen requires changes:

1. Unlock only the necessary layers.
2. Apply the requested changes.
3. Inspect the updated design.
4. Lock the affected layers again.

If the design tool does not support programmatic locking, report the limitation and identify the layers that require manual locking.

Never claim that a screen is locked without verifying its lock state.

### Approved Design Preservation

- Never redesign an approved screen without explicit permission.
- Never overwrite approved master components.
- Never change approved design tokens without permission.
- Never reposition existing screen frames to accommodate new screens.
- Never create duplicate design systems.
- Never modify approved illustrations unnecessarily.

### Design Workspace Organization

Organize screens into clearly separated groups:

- 00 — Design System
- 01 — Authentication & Onboarding
- 02 — Home
- 03 — Tiny Planner
- 04 — Heart Diary
- 05 — Little Kitchen
- 06 — Couple Space
- 07 — Profile & Settings

Maintain consistent frame dimensions and spacing between screens.

Create new screens in unused canvas areas without overlapping or moving existing screens.

### Batch Design Workflow

Design screens in groups based on complete user flows.

For each group:

1. Inspect the approved home screen and existing components.
2. Identify the required screens and interaction states.
3. Reuse existing components and design tokens.
4. Create new editable screens.
5. Export and visually inspect the results.
6. Correct visual and usability inconsistencies.
7. Lock the completed screen frames and decorative layers.
8. Present the completed group for project owner approval.

Do not proceed to the next group until the current group is approved.

### Implementation Restriction

The project remains in the DESIGN_ONLY phase.

Do not modify React Native source code, install application dependencies, implement business logic, or create backend services until explicitly authorized.

## 14. Visual Personality Quality Gate

Before finalizing any screen, evaluate the following:

1. Does this screen feel unmistakably like Alongio?
2. Does it remain visually distinctive without its hero banner?
3. Is geometric abstraction integrated into the actual UI components?
4. Are the approved accent colors used meaningfully throughout the screen?
5. Does the composition feel expressive rather than generic?
6. Are empty spaces intentional?
7. Does the screen contain appropriate moments of visual delight?
8. Is the interface readable, accessible, and easy to use?

If a screen feels too plain, generic, corporate, or excessively minimalist, refine it before presenting it for approval.

Do not treat visual consistency as permission to create monotonous layouts.

Use Taste Skill to improve visual richness, composition, and design craftsmanship while preserving Alongio's approved visual identity.

## 15. Mandatory Design Precision Gate

A design is not complete simply because it has been visually reviewed.

Every design must pass measurable structural and visual quality checks before being presented for approval.

### Required Inspection Method

Use FigCraft MCP as the primary inspection interface.

Inspect actual node properties, layout settings, parent-child relationships, component dimensions, and bounding boxes.

Do not rely exclusively on exported screenshots.

### Acceptance Criteria

A1 — Spacing consistency

All standard spacing values must follow design/TOKENS.md. Equivalent component instances must use consistent padding and gaps.

A2 — Icon centering

The center of an icon's layout bounds must align with the center of its intended container, with a maximum unintended deviation of one logical pixel.

A3 — Button content centering

The combined icon and text content group must be centered within the button, not the individual elements separately.

A4 — Text layer sizing

Single-line text layers must use content-based sizing where supported. Multiline text must use automatic height. Flag and correct unnecessarily oversized text bounds.

A5 — Component consistency

Equivalent component variants must use identical sizing rules, minimum heights, padding, radius, icon dimensions, and alignment.

A6 — Screen alignment

Equivalent screen headers, navigation elements, forms, and content sections must follow consistent screen margins and alignment rules.

A7 — Whitespace

Inspect unusually large content gaps and oversized containers. Correct unintended whitespace while preserving safe areas, intentional spacing, and bottom-anchored actions.

A8 — Visual integrity

No unintended clipping, overlap, truncation, alignment errors, or inconsistent proportions.

A9 — State consistency

All states of the same screen must preserve the positions and dimensions of shared UI elements unless a functional reason requires changes.

A10 — Editability

All text, illustrations, components, and layout structures must remain editable.

### Audit and Correction Workflow

1. Inspect the complete target design group.
2. Identify all repeated component families.
3. Inspect native layout and text sizing properties.
4. Identify violations of the acceptance criteria.
5. Correct root component construction issues.
6. Apply corrections to affected instances.
7. Reinspect actual properties.
8. Export updated screen previews.
9. Perform visual quality assurance.
10. Repeat correction and inspection until no known violations remain.

### Completion Reporting

For every acceptance criterion, report:

- Number of inspected components or layers.
- Number of violations found.
- Number of violations corrected.
- Number of unresolved violations.
- Specific affected screen or layer names when unresolved.

Use PASS, FAIL, or NOT VERIFIABLE.

Do not report PASS when the available tooling cannot verify the criterion.

If violations remain, the design is not ready for approval.

Never substitute the number of inspected layers for evidence of correct layout construction.

### Protection

Preserve all unrelated approved screens.

Only unlock authorized design groups.

Save and verify native layer locks after completing the quality checks.

Remain in the DESIGN_ONLY phase.

## 16. FigCraft Tool Integration

FigCraft MCP is the preferred interface for interacting with the editable design document.

### Tool Priority

1. FigCraft MCP — primary design creation, editing, and inspection.
2. FigCraft CLI — supplementary operations and fallback.
3. FigCraft Skill — tool usage guidance.
4. Taste Skill — visual quality and design craftsmanship.

### MCP Usage Requirements

Use FigCraft MCP whenever the required operations are available.

Before modifying a design:

- Inspect the active document.
- Identify the target frames and components.
- Verify layer lock states.
- Inspect existing component properties.
- Understand the current layer hierarchy.

During design creation:

- Prefer native layout and alignment operations.
- Reuse existing components and variants.
- Use precise numerical dimensions and spacing.
- Preserve approved and locked frames.
- Verify the result of each major design operation.

### Structural Quality Assurance

Use available MCP inspection tools to verify:

- Node positions.
- Component dimensions.
- Child bounding boxes.
- Horizontal and vertical alignment.
- Container padding and gaps.
- Text alignment.
- Icon centering.
- Repeated component consistency.
- Frame lock states.

Perform both structural inspection and visual review before presenting a completed design.

### Fallback Policy

If an operation is unavailable through MCP, use the FigCraft CLI when appropriate.

Do not silently switch to alternative design generation methods.

Report unavailable capabilities or inspection limitations.

Never claim that an MCP operation succeeded without verifying its result.

### Design Protection

Never modify approved designs without explicit owner authorization.

Do not modify the same design document concurrently through multiple independent editing sessions.

The project remains in the DESIGN_ONLY phase.

## 17. Approved Design Knowledge Inheritance

Tiny Planner is an approved functional design and component construction reference for Alongio.

All future design groups must inherit the craftsmanship, structural quality, and layout engineering standards established in the final approved Tiny Planner design.

### Reference Responsibilities

- Approved Home: brand identity and visual direction.
- Approved Tiny Planner: functional UI, component construction, layout engineering, and structural precision.
- Approved Mascots: illustration language and emotional storytelling.
- DESIGN.md: shared design principles.
- TOKENS.md: numerical design foundations.

Do not use outdated or superseded design exports as structural references.

### Component Inheritance

Before designing a new module:

- Inspect the latest approved Tiny Planner components through FigCraft MCP.
- Inspect their native layout properties.
- Inspect text sizing modes.
- Inspect component dimensions, padding, gaps, and alignment.
- Identify reusable component families.
- Reuse approved components or create compatible variants.

Do not reconstruct existing component families from scratch.

### Quality by Construction

Structural precision must be applied during design creation, not postponed until the final review.

Every newly created component must have:

- Correct content-based text sizing.
- Appropriate native layout containers.
- Consistent padding and gaps.
- Correct horizontal and vertical alignment.
- Consistent component sizing rules.
- Appropriate minimum dimensions.
- Editable text and vector layers.
- No unnecessary fixed-size text boxes.

Validate newly created components before duplicating them across multiple screens.

### Previous Defect Prevention

Do not repeat previously corrected Tiny Planner defects:

- Oversized text layer bounds.
- Off-center icons and labels.
- Inconsistent card dimensions.
- Arbitrary spacing values.
- Excessive passive whitespace.
- Incorrect button content alignment.
- Inconsistent layouts between equivalent states.
- Independently positioned repeated components.

### Approval Gate

Every new design group must pass the Mandatory Design Precision Gate before being presented for approval.

Use the approved Tiny Planner precision audit as a reference for the expected verification methodology.

Previous audit results cannot be reused as evidence that newly created screens are correct.

Every new design group requires its own structural inspection, visual review, correction pass, and verified results.

## 18. Module Identity Enforcement

Before designing any feature module, read the Module-Specific Visual Identity section in design/DESIGN.md.

Each module must express its designated emotional personality, visual inspiration, layout direction, geometric motifs, and storytelling approach.

### Mandatory Rules

- Inherit the structural quality of approved Tiny Planner components.
- Do not inherit its screen compositions indiscriminately.
- Reuse functional components, not entire screen layouts.
- Never create a new module by simply recoloring an existing module.
- Create module-specific component variants when necessary.
- Maintain distinct visual storytelling for each module.
- Preserve the shared Alongio design system.

### Module Identity Quality Gate

Before presenting a module for approval, verify:

1. Does the module express its designated emotional personality?
2. Is its visual composition appropriate for its functionality?
3. Does it have recognizable characteristics beyond its accent color?
4. Does it communicate the couple-centric experience?
5. Does it remain consistent with the overall Alongio brand?
6. Does it meet the structural craftsmanship of the approved Tiny Planner?
7. Does it avoid unnecessarily duplicating another module's screen layouts?

If a module feels like a recolored version of another module, refine its visual composition before requesting approval.

Design consistency must never result in visual monotony.

## 19. Mandatory Responsive Design Quality Gate

Every screen must pass responsive layout verification before implementation handoff.

### R1 — Horizontal Adaptation

Verify that content containers, cards, inputs, and navigation adapt to different viewport widths without overflow.

### R2 — Vertical Adaptation

Verify that content distributes appropriately on short and tall screens.

Identify and correct unintended passive whitespace.

### R3 — Safe Areas

Verify that interactive content respects top and bottom safe areas.

### R4 — Text Layout

Verify text wrapping, content-based sizing, automatic height, and readable typography.

### R5 — Component Stability

Verify that reusable components maintain consistent proportions, padding, and alignment across viewport sizes.

### R6 — Scroll Behavior

Verify that long content scrolls appropriately and primary actions remain accessible.

### R7 — Keyboard Adaptation

Verify that forms remain usable when the keyboard is displayed.

### R8 — Visual Fidelity

Preserve approved colors, typography, illustrations, spacing relationships, and visual personality.

### R9 — Prototype Responsiveness

Use FigCraft's native responsive presentation and constraints whenever available.

Do not confuse scaling a fixed frame with truly responsive layout behavior.

### R10 — Cross-Device Verification

Test representative small, standard, large, short, and tall mobile viewports.

Use actual native layout inspection where supported.

Report PASS, FAIL, or NOT VERIFIABLE for each criterion.

### Verification Rules

- Do not claim that all devices are supported based on one preview.
- Do not claim a screen is responsive simply because it fits inside a device mockup.
- Identify unsupported or unverified viewport configurations.
- Correct root layout issues before duplicating fixes across screens.
- Never modify approved visual identity without authorization.

Responsive behavior must be validated using structural inspection and rendered previews.

## 20. Responsive Layout Correction Strategy

Responsive corrections must solve the underlying layout constraints rather than visually hiding overflow.

### Required Principles

- Preserve the approved visual identity.
- Prefer structural layout corrections over manual repositioning.
- Use native Auto Layout, flexible constraints, and content-based sizing.
- Keep navigation and fixed actions outside scrollable content regions when appropriate.
- Use vertical scrolling when content exceeds the available viewport height.
- Avoid clipping functional content to force a screen to fit.
- Never uniformly scale down the entire interface as a substitute for responsive layout.

### Responsive Acceptance

A screen passes only when:

1. Essential content remains accessible.
2. Every required interaction can be reached.
3. No functional element is unintentionally clipped.
4. No horizontal overflow occurs.
5. Text remains readable.
6. Navigation remains usable.
7. Layout proportions remain intentional.
8. Approved visual styling is preserved.

### Fix by Component Family

When multiple screens share the same responsive defect:

1. Identify the common component or layout pattern.
2. Correct its construction in an isolated variant or authorized master.
3. Validate the correction at multiple viewport sizes.
4. Apply the verified solution to affected screens.
5. Reinspect all affected instances.

Do not independently patch dozens of screens with different spacing values.

### Quality Reporting

For each module, report:

- Frames tested.
- Frames with responsive defects.
- Frames corrected.
- Frames still affected.
- Actions inaccessible at small viewport sizes.
- Known limitations.

Do not claim complete cross-device support until real-device validation has been performed during implementation.

## 21. FigCraft Motion Verification Rules

### User Visual Approval Is Mandatory

Automated presenter validation does not replace manual visual approval. A prototype is not considered approved until the project owner reviews its rendered appearance and interactive behavior.

### Three-Layer Quality Gate

Every interactive motion prototype requires:

1. **Structural QA** — Correct bindings, targets, and variants.
2. **Functional QA** — Expected interactions produce correct results.
3. **Visual QA** — Rendered appearance and motion are visually correct.

Use `PASS`, `FAIL`, or `NOT VERIFIED` based strictly on measured FigCraft inspection evidence. Never modify approved application frames during motion prototyping without explicit owner authorization.
