# Alongio — Visual Design Guidelines

## 1. Design Identity

**Romantic Playful Geometric Abstract**

Alongio combines soft Bauhaus influences, geometric abstraction, playful editorial composition, and romantic visual storytelling.

The application should feel like a charming lifestyle companion rather than a productivity dashboard.

## 2. Emotional Direction

The design must feel:

- Playful
- Warm
- Romantic
- Cheerful
- Approachable
- Artistic
- Modern
- Gender-neutral

Playful, not childish.

Romantic, not overly feminine.

Modern, not corporate.

Simple, not generic.

## 3. Geometric Visual Language

Use geometric primitives as the foundation of the brand:

- Circles
- Semicircles
- Rounded rectangles
- Triangles
- Arches
- Geometric sparkles
- Overlapping shapes
- Repeating geometric patterns

Use flat colors, deliberate asymmetry, and expressive compositions.

Geometry must be part of the visual identity, not merely background decoration.

## 4. Brand Characters

Alongio uses anthropomorphic geometric characters as its primary mascots.

Characters should consist of simple geometric bodies, minimal facial features, and expressive poses.

Personal mode represents an individual character.

Couple mode represents two characters interacting and complementing each other.

Avoid realistic human illustrations, generic 3D avatars, and overly complicated cartoon characters.

## 5. Color Direction

Use a warm cream canvas, supported by romantic pink, soft indigo, butter yellow, matcha green, and dark ink.

Colors should be expressive but harmonious.

Prefer solid color blocks over gradients.

Use dark ink for typography and important interactive elements.

Use the exact names from the **Alongio / Palette** collection for component colors. In the [token registry](system/tokens.json), those same names are keys under `palette`. Inspect the component’s Fill or Stroke reference in FigCraft and look up its HEX value on **02 — Color Palette**. [Palette mapping](system/color-palette-mapping.md)

## 6. Typography

Primary display font: Space Grotesk.

Body font: DM Sans.

Use bold, expressive headings and readable body text.

Typography should feel editorial, geometric, friendly, and confident.

Avoid corporate typography and excessively decorative fonts.

Use the documented `typography.*` roles for new work. Preserve approved local text styles when their font metrics differ from the nearest registry role. [Typography reference](system/typography.md)

## 7. Layout Direction

Use generous whitespace, clear visual hierarchy, and intentional geometric compositions.

The home screen should act as a lifestyle feature launcher, not a data-heavy dashboard.

Use colorful feature tiles with custom geometric illustrations.

Use expressive hero sections and meaningful visual storytelling.

Avoid unnecessarily placing every element inside a floating card.

## 8. Component Direction

Buttons must be bold, friendly, rounded, and visually clear.

Cards should use flat color backgrounds and minimal shadows.

Icons should have consistent visual weight.

Navigation should remain simple and recognizable.

Illustrations must use the same geometric language as the brand mascots.

## 9. Screen-Specific Expression

- Onboarding: Highly expressive and illustrative.
- Home: Playful, colorful, and welcoming.
- Couple space: Romantic and character-driven.
- Task management: Balanced and functional.
- Finance: Clear, structured, and visually restrained.
- Settings: Minimal and functional.

## 10. Anti-Patterns

Never introduce:

- Generic SaaS dashboard layouts.
- Default shadcn visual styling.
- Corporate enterprise aesthetics.
- Glassmorphism.
- Excessive gradients.
- Excessive shadows.
- Generic AI-generated illustrations.
- Excessive pill-shaped badges.
- Unnecessary decorative hearts.
- Monotonous cards without visual personality.

## 11. Reference Fidelity

The approved home screen reference defines the initial visual language.

Reproduce the reference before exploring alternative layouts.

Any future screen must feel as if it belongs to the same application as the approved home screen.

## 12. Module-Specific Visual Identity

All Alongio modules share the same Romantic Playful Geometric Abstract design system, but each module must have its own emotional personality, visual composition, and storytelling approach.

### Tiny Planner

- **Primary accent:** Butter Yellow (#F3D36B).
- **Personality:** Optimistic, energetic, organized, collaborative.
- **Visual inspiration:** Playful productivity and geometric habit tracking.
- **Layout direction:** Structured cards, calendar compositions, progress indicators, and organized content groups.
- **Geometric motifs:** Squares, grids, calendars, checkmarks, stars.
- **Emotional focus:** Building consistency and growing together.
- **Tagline:** Little plans, big days.

### Heart Diary

- **Primary accent:** Romantic Pink (#E88C9F).
- **Personality:** Intimate, romantic, nostalgic, reflective, expressive.
- **Visual inspiration:** Playful digital scrapbook and personal memory journal.
- **Layout direction:** Editorial compositions, memory cards, expressive mood selectors, photo arrangements, and comfortable writing spaces.
- **Geometric motifs:** Hearts, overlapping circles, abstract flowers, geometric stickers, and picture frames.
- **Emotional focus:** Sharing feelings, preserving memories, and strengthening emotional connection.
- **Tagline:** Dear little heart.

Heart Diary must not resemble a conventional notes application or a recolored version of Tiny Planner.

### Little Kitchen

- **Primary accent:** Matcha Green (#A1C5A1).
- **Personality:** Cozy, cheerful, creative, comforting.
- **Visual inspiration:** Playful illustrated cookbooks and modern food editorial design.
- **Layout direction:** Expressive recipe cards, ingredient compositions, visual cooking instructions, and playful meal planning.
- **Geometric motifs:** Bowls, arches, semicircles, abstract ingredients, and geometric utensils.
- **Emotional focus:** Creating enjoyable everyday experiences through food and cooking together.
- **Tagline:** Made with love.

Little Kitchen must not resemble a generic recipe database or food delivery application.

### Shared Visual Foundations

All modules must preserve the approved:

- Global color palette.
- Typography system.
- Spacing and sizing tokens.
- Component construction standards.
- Navigation patterns.
- Iconography.
- Mascot and illustration language.
- Accessibility requirements.
- Layout engineering standards.

Module-specific accent colors are visual foundations, not restrictions. Other approved brand colors may be used to enrich each module.

Consistency does not mean identical layouts.

Every module must have a recognizable personality while remaining unmistakably part of Alongio.

### Shared Design Rules

- All features use the same typography, spacing, navigation, and component foundations.
- Feature colors serve as visual accents, not mandatory backgrounds.
- Preserve geometric illustration consistency across all modules.
- Do not create three separate design systems.
- Avoid generic dashboard and corporate application layouts.

## 13. Cross-Screen Visual Consistency

The approved master home screen defines Alongio's visual identity.

Every new screen must look as if it was designed by the same designer, using the same design system.

### Mandatory Visual Consistency

Preserve the approved:

- Color palette.
- Typography and font weights.
- Geometric illustration style.
- Mascot characteristics.
- Border radius.
- Spacing system.
- Iconography.
- Button styles.
- Navigation patterns.
- Visual hierarchy.

Do not introduce a different design theme for individual modules.

### Authentication Visual Direction

Authentication screens represent the user's first emotional experience with Alongio.

Use playful geometric compositions, warm colors, expressive typography, and friendly geometric mascots.

Avoid conventional corporate authentication layouts.

Keep forms simple, accessible, and easy to complete.

### Feature Screen Visual Direction

Tiny Planner, Heart Diary, and Little Kitchen must have recognizable feature identities while sharing the same global design system.

Use each module's designated accent color.

Create custom geometric illustrations when needed.

Use illustrations intentionally in hero sections, empty states, onboarding, and success states.

Do not sacrifice usability for decoration.

### Component Reuse

Before creating a new component, inspect existing components.

Reuse approved components whenever possible.

If a component requires variations, create variants instead of disconnected duplicates.

### Interaction States

Design relevant component and screen states:

- Default
- Pressed
- Focused
- Selected
- Disabled
- Loading
- Empty
- Error
- Success

Apply [Soft Playful Motion](MOTION.md) to make these states easier to understand. Preserve approved resting geometry, typography, artwork, and touch targets. Functional motion follows the native UI architecture. Expressive effects are optional and have a readable reduced-motion alternative.

### Layout Requirements

Respect mobile safe areas, keyboard interactions, touch target sizes, and content scrolling.

Maintain consistent screen widths and navigation behavior.

Use responsive layout properties and auto layout where supported.

Avoid relying entirely on absolute positioning, except for intentional decorative illustrations.

## 14. Visual Richness & Expressive Design

Alongio must embrace Expressive Playful Geometric Abstract design.

Minimalism alone is not the design objective. The application must have a strong, recognizable, expressive visual personality across all screens.

A screen must still feel unmistakably like Alongio even when its hero banner is removed.

### Visual Expression Principles

- Use intentional color blocking throughout the interface.
- Incorporate geometric shapes into UI components, not only illustrations.
- Use playful visual layering and asymmetrical compositions where appropriate.
- Introduce expressive typography and distinctive section headings.
- Use contrasting shapes, colors, outlines, and patterns to create visual rhythm.
- Transform empty spaces into intentional visual breathing room or meaningful decoration.
- Create moments of visual delight throughout the user journey.

### Component Personality

Do not rely exclusively on conventional mobile UI components.

Explore expressive variations of:

- List items
- Task cards
- Input fields
- Selection controls
- Calendar cells
- Segmented controls
- Bottom sheets
- Buttons
- Empty states
- Status indicators
- Progress indicators

Components must feel designed specifically for Alongio rather than borrowed from a generic UI library.

### Geometric Decorations

Use decorative elements such as:

- Circles and semicircles
- Arches
- Geometric stars
- Abstract flowers
- Overlapping shapes
- Small repetitive patterns
- Playful geometric stickers
- Anthropomorphic geometric mascots

Decorations should support visual hierarchy, emotion, or storytelling.

Never let decorations interfere with readability or interactions.

### Color Distribution

Do not restrict accent colors to hero banners.

Distribute existing brand colors intentionally across cards, controls, illustrations, selected states, and meaningful content sections.

Use the warm cream background as a visual foundation, not as the only surface throughout a screen.

### Visual Density

Use different levels of visual expression depending on screen purpose:

- Home and onboarding: highly expressive.
- Feature overviews: rich and playful.
- Empty and success states: highly illustrative.
- Content detail screens: balanced and expressive.
- Calendars and lists: playful but structured.
- Forms and bottom sheets: moderately expressive.
- Settings: restrained and functional.

### Anti-Patterns

Avoid:

- Excessively minimalist interfaces.
- Large areas of passive empty space.
- Plain text and divider-only layouts across entire screens.
- Repeating identical layouts for every module.
- Using geometric illustrations only inside hero banners.
- Generic outlined form components without brand personality.
- Excessive reliance on black buttons for every interaction.
- Corporate productivity dashboard aesthetics.
- Adding random decorations without purpose.

The desired result is visually rich but not cluttered, playful but not childish, artistic but functional.

## 15. Couple-Centric Experience

Alongio is not a conventional productivity application with shared functionality added on top.

The couple experience must be visible in the application's visual language, interactions, content, and emotional storytelling.

### Shared Experience Principles

- Make shared responsibilities feel collaborative.
- Visually represent both partners where meaningful.
- Celebrate collective progress and shared achievements.
- Use warm and encouraging microcopy.
- Make personal and shared activities visually distinguishable.
- Maintain a comfortable experience for users in Personal Mode.

### Couple Visual Language

Use the approved geometric mascots to represent individuals and their partners.

Explore:

- Paired geometric characters.
- Complementary shapes.
- Interconnected progress indicators.
- Shared achievement illustrations.
- Paired avatars and completion indicators.
- Illustrations showing characters collaborating.
- Playful visual celebrations.

Avoid relying exclusively on heart icons, pink colors, or Personal and Shared labels to communicate the couple experience.

### Routine and Achievement Design

Routine components should visually communicate:

- Recurrence frequency.
- Monthly consistency.
- Completed and scheduled occurrences.
- Individual or shared ownership.
- Each partner's completion status when applicable.

Together Growth should feel like growing something meaningful together.

Use expressive geometric progress bars, collectible achievement illustrations, paired mascots, and celebratory compositions.

Keep progress indicators accurate and easy to understand.

Do not turn Alongio into a competitive game or a data-heavy gamification dashboard.

### Emotional Microcopy

Prefer warm, human, encouraging language.

Examples:

- Little steps, big love.
- Look how far you've grown together.
- Better together, one day at a time.
- Another little win for both of you.
- Every little effort counts.

Avoid guilt-inducing language and negative comparisons between partners.

## 16. Layout Engineering & Component Construction

Alongio requires precise, production-quality component construction. Visual attractiveness alone is insufficient.

### Text Layer Sizing

- Single-line text layers must use auto width and auto height, or hug content sizing where supported.
- Multiline text must use a constrained width and automatic height.
- Text layer bounds must closely match the natural text layout bounds, including appropriate font line height.
- Do not create unnecessarily oversized text boxes.
- Do not use fixed-height text layers unless explicitly required.
- Do not use empty text lines, trailing spaces, or invisible characters to simulate spacing.
- Apply spacing through parent containers instead of oversized text layers.
- Separate text sizing from container sizing.
- Preserve appropriate line height and text wrapping.

### Layout Construction

- Prefer native auto layout or equivalent content-based layout mechanisms.
- Use nested horizontal and vertical layout containers.
- Use explicit padding, gap, and alignment properties.
- Use absolute positioning only for intentional decorative elements.
- Avoid manually positioning standard interface elements independently.
- Use fill-container sizing for elements that must occupy available width.
- Use hug-content sizing for content-driven elements.
- Use fixed dimensions only where appropriate.

### Alignment

- Center icons horizontally and vertically within their icon containers.
- Center button content groups horizontally and vertically.
- Group icons and labels before centering them inside buttons.
- Align text using appropriate baselines and line heights.
- Maintain consistent alignment across equivalent components.
- Account for optical alignment without introducing arbitrary offsets.

### Component Dimensions

Equivalent components must use the same sizing rules.

Standardize:

- Button heights.
- Input heights.
- Icon dimensions.
- Icon container dimensions.
- Selection card heights.
- Task and routine card padding.
- Calendar cell dimensions.
- Navigation item widths.
- Segmented control dimensions.
- Bottom sheet margins.

Components containing variable-length text should use consistent minimum heights and content-driven expansion instead of arbitrary fixed heights.

### Whitespace & Content Distribution

Spacing must communicate hierarchy, grouping, and visual rhythm.

- Avoid unnecessary gaps between

## Supporting Module Visual Identity

### Couple Space

- Primary accents: Romantic Pink and Soft Indigo.
- Personality: intimate, collaborative, warm, and romantic.
- Visual direction: a private little world shared by two people.
- Geometric motifs: paired mascots, complementary shapes, overlapping forms, and shared achievements.
- Emotional focus: connection and growing together.

### Profile & Settings

- Primary accents: Soft Indigo and Lavender.
- Personality: personal, calm, approachable, and expressive.
- Visual direction: Playful Personal Space.
- Geometric motifs: individual mascots, geometric avatars, rounded shapes, and colorful icon wells.
- Emotional focus: personal identity, comfort, privacy, and control.

Settings interfaces should be visually restrained but must retain Alongio's recognizable personality.

### Notification Center

- Primary foundation: Warm Canvas and Lavender.
- Personality: helpful, friendly, encouraging, and unobtrusive.
- Visual direction: Little Updates.
- Geometric motifs: small expressive icons, geometric indicators, and contextual illustrations.
- Use existing module accent colors to distinguish notification categories.
- Emotional focus: keeping users informed without overwhelming them.

All supporting modules must inherit the approved global design system, component construction standards, and Mandatory Design Precision Gate.

## Responsive & Adaptive Mobile Design

Alongio must support a wide range of modern Android and iPhone screen sizes.

The design system must use responsive and adaptive layout principles rather than relying on fixed coordinates optimized for a single device.

### Core Principles

- Design mobile-first.
- Preserve visual hierarchy across different screen sizes.
- Use native FigCraft Auto

## Responsive & Adaptive Mobile Design

Alongio must support a wide range of modern Android and iPhone screen sizes.

The design system must use responsive and adaptive layout principles rather than relying on fixed coordinates optimized for a single device.

### Core Principles

- Design mobile-first.
- Preserve visual hierarchy across different screen sizes.
- Use native FigCraft Auto Layout and responsive constraints.
- Prefer flexible container widths over fixed screen-specific widths.
- Use content-driven sizing where appropriate.
- Avoid absolute positioning for functional UI elements.
- Allow intentional absolute positioning for decorative illustrations.
- Support vertical scrolling when content exceeds available height.
- Avoid scaling the entire interface uniformly to fit the screen.

### Responsive Layout Structure

Use a clear hierarchy:

Screen

- Safe area
- Flexible content container
- Scrollable content when necessary
- Fixed or bottom-anchored navigation and actions where appropriate

### Horizontal Responsiveness

- Use consistent screen padding.
- Allow content containers to fill available width.
- Apply sensible maximum widths on larger devices.
- Preserve text wrapping and readability.
- Prevent horizontal overflow.
- Avoid fixed-width cards that exceed narrow screens.
- Use responsive sizing for hero illustrations.

### Vertical Responsiveness

- Avoid excessive passive whitespace.
- Do not use arbitrary vertical offsets to position content.
- Use flexible layout distribution where appropriate.
- Keep related content grouped.
- Preserve comfortable spacing on short devices.
- Allow scroll when content cannot fit.
- Keep primary actions accessible.

For welcome and onboarding screens, distribute content intentionally across the available vertical space.

Do not force the same vertical positions on devices with substantially different screen heights.

### Safe Area Requirements

Respect:

- iPhone Dynamic Island and notch.
- iPhone home indicator.
- Android status bar.
- Android gesture navigation.
- Android system navigation bar.
- Keyboard appearance.
- Bottom navigation positioning.

### Text Responsiveness

- Single-line text should use content-based sizing.
- Multiline text should use constrained widths and automatic heights.
- Avoid clipping and truncation of essential information.
- Support reasonable system font scaling.
- Do not shrink text excessively to make layouts fit.

### Responsive Components

All reusable components must be tested for:

- Narrow screens.
- Standard screens.
- Wide screens.
- Short screens.
- Tall screens.

Equivalent component families must retain consistent padding, dimensions, and alignment while allowing content-driven expansion.

### Responsive Validation

Test representative mobile viewport dimensions including:

- 320 × 568
- 360 × 640
- 375 × 667
- 390 × 844
- 402 × 874
- 430 × 932
- 440 × 956

These are logical viewport test sizes, not physical device pixel resolutions.

Additional sizes may be tested when required.

### Quality Requirements

No screen may have:

- Horizontal content overflow.
- Unintended clipping.
- Overlapping functional elements.
- Primary actions hidden behind system UI.
- Incorrectly anchored navigation.
- Broken text wrapping.
- Excessive passive whitespace caused by layout constraints.

Preserve the approved Romantic Playful Geometric Abstract visual identity across all viewport sizes.
