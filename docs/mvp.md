# Alongio — MVP 1

## Product Objective

Create a playful personal and couple lifestyle companion that makes everyday life more organized, meaningful, and enjoyable.

## Current Phase

DESIGN_ONLY

All MVP screens must be designed and approved before application implementation begins.

## User Modes

### Personal Mode

A private space where users can organize their daily activities, write personal diaries, and plan meals independently.

### Couple Mode

A shared space where two connected users can plan activities, share selected memories, and organize meals together.

Personal content must remain private unless explicitly shared.

## Core Features

### 1. Tiny Planner

A playful daily planning and task management module.

**Tagline:** Little plans, big days.

**Primary color:** Butter Yellow (#F3D36B)

#### Capabilities

- View daily and upcoming activities.
- Create, edit, and delete tasks.
- Set dates, times, and reminders.
- Mark tasks as completed.
- Create personal or shared tasks.
- View activities in a calendar.

#### Required Screens

- Planner overview
- Calendar view
- Create task
- Task details and edit
- Empty state

### Recurring Routines

Tiny Planner supports recurring activities that help individuals and couples build consistent daily habits.

#### Capabilities

- Create personal or shared routines.
- Configure daily, weekly, or selected-day recurrence.
- View scheduled routine occurrences.
- Complete individual routine occurrences.
- View monthly completion progress for each routine.
- View historical routine completion.
- Pause or modify future routine schedules without modifying historical completion records.

#### Shared Routine Completion

Shared routines support two completion modes:

- Either partner: The routine is completed when either partner marks it complete.
- Both partners: Each partner must independently check in before the routine is considered completed.

Personal routines remain private unless explicitly shared.

### Together Growth

Together Growth is a lightweight relationship gamification experience based on shared routine consistency.

#### Capabilities

- Display the current couple level.
- Display monthly shared routine progress.
- Display completed and scheduled routine counts.
- Display each partner's completion status where applicable.
- Celebrate successfully completed routines.
- Celebrate monthly achievements.

#### Level Rules

- Monthly progress is calculated from completed eligible shared routine occurrences divided by scheduled eligible shared routine occurrences.
- A perfect month requires 100% completion and at least one eligible scheduled occurrence.
- A perfect month awards one level increase after the month ends.
- Only one level increase can be awarded per month.
- Missed routines do not decrease the couple level.
- Future schedule modifications must not erase historical occurrences.

#### Emotional Design

Together Growth must encourage collaboration rather than competition.

Avoid punishment, partner rankings, negative comparisons, or guilt-inducing messages.

### Additional Required Screens and States

- Routine overview
- Create routine
- Edit routine
- Routine details
- Recurrence configuration
- Shared completion mode selection
- Individual partner check-in
- Monthly routine progress
- Together Growth overview
- Monthly achievement celebration
- Level-up celebration
- Relevant empty, loading, error, and completion states

Reuse existing planner components and integrate routines into the existing planner navigation where appropriate.

Do not introduce a separate gamification module outside Tiny Planner.

### 2. Heart Diary

A personal and shared journaling space for feelings, memories, and everyday stories.

**Tagline:** Dear little heart.

**Primary color:** Romantic Pink (#E88C9F)

#### Capabilities

- Create and edit diary entries.
- Record daily moods.
- Add photos to diary entries.
- Browse previous entries.
- Keep entries private or explicitly share them with a connected partner.

#### Required Screens

- Diary overview
- Create diary entry
- Mood selection
- Diary entry details and edit
- Empty state

### 3. Little Kitchen

An AI-powered cooking companion that helps individuals and couples discover recipes, turn available ingredients into meal ideas, and plan everyday meals together.

**Tagline:** Made with love.

**Primary color:** Matcha Green (#A1C5A1)

#### Capabilities

- Discover meal ideas and recipes.
- Generate personalized recipe suggestions using natural language and images.
- View recipe ingredients and cooking instructions.
- Save favorite recipes.
- Plan personal or shared meals.
- Browse and manage upcoming meal plans.

#### Recipe Discovery

- Browse available recipe suggestions.
- Search for recipes.
- View recipe details.
- Save recipes to a personal collection.
- Add recipes to a meal plan.

#### Kitchen Magic — Multimodal AI Recipe Assistant

Kitchen Magic allows users to generate personalized recipe suggestions by describing or photographing available ingredients.

The feature must reduce manual input and make discovering what to cook feel effortless.

##### Supported Input Methods

- Free-form natural language text.
- Photos captured using the device camera.
- Images selected from the device gallery.
- Multiple image attachments.
- Combined text and image inputs.

Users can describe their needs naturally, including:

- Available ingredients.
- Cooking preferences.
- Desired preparation time.
- Serving sizes.
- Dietary restrictions.
- Available cooking equipment.
- Desired meals or cuisines.

Users can also photograph refrigerators, kitchen cabinets, food packages, or available ingredients.

##### AI Recipe Generation

The AI must interpret user-provided text and images to understand available ingredients and cooking preferences.

The system must:

- Understand unstructured natural language.
- Identify likely ingredients from images.
- Combine text and image context.
- Generate relevant recipe suggestions.
- Identify missing or optional ingredients.
- Respect explicitly stated dietary restrictions and preferences.
- Ask for clarification only when meaningful uncertainty exists.
- Allow users to refine or regenerate suggestions.

Ingredient recognition must not be presented as perfectly accurate.

The system must not determine food freshness, food safety, or the absence of allergens solely from images.

##### Input Experience

Use a unified multimodal input composer.

The composer must support:

- Multiline natural language input.
- Camera access.
- Gallery access.
- Image attachment previews.
- Adding, removing, and replacing attachments.
- Text-only requests.
- Image-only requests.
- Combined text and image requests.
- Optional contextual prompt suggestions.

Example requests:

- "I have eggs, sliced beef, and soy sauce. What can I cook?"
- "Make something easy for dinner for two."
- "Suggest something using these ingredients that takes less than 30 minutes."

Do not require users to:

- Enter ingredients individually.
- Select ingredients from a predefined database.
- Maintain ingredient inventories.
- Manually categorize ingredients.
- Confirm every recognized ingredient before generating recipes.

Kitchen Magic is a focused recipe generation experience, not a general-purpose AI chatbot.

#### Recipe Details

Each recipe should provide:

- Recipe name.
- Food illustration or representative visual.
- Estimated preparation and cooking time.
- Serving size.
- Required ingredients and quantities.
- Optional or missing ingredients where applicable.
- Step-by-step cooking instructions.
- Save recipe action.
- Add to meal plan action.

#### Saved Recipes

- Save recipes to a personal collection.
- Browse previously saved recipes.
- View saved recipe details.
- Remove saved recipes.
- Add saved recipes to a meal plan.

#### Meal Planning

- Create personal or shared meal plans.
- Select a planned meal date.
- Select a meal type.
- Add recipes to a meal plan.
- View upcoming meals.
- Edit or remove planned meals.

Shared meal plans must be accessible to both connected partners.

Personal meal plans must remain private unless explicitly shared.

#### Couple Experience

Little Kitchen must encourage enjoyable everyday experiences through food and cooking together.

The experience should support:

- Planning meals together.
- Discovering recipes for two.
- Generating meal ideas based on shared preferences.
- Viewing shared upcoming meals.
- Warm, couple-centric illustrations and microcopy.

Personal Mode must remain fully usable without a connected partner.

#### Required Screens and States

##### Kitchen Overview

- Personal kitchen overview
- Couple kitchen overview
- Relevant empty and loading states

##### Recipe Discovery

- Recipe discovery
- Search results
- No-results state
- Loading and error states

##### Kitchen Magic

- Empty multimodal input composer
- Text input state
- Camera permission state
- Photo capture and preview
- Gallery attachment state
- Multiple image attachment state
- Combined text and image input
- Image attachment error
- Recipe generation loading
- Ingredient clarification when necessary
- Generated recipe suggestions
- No suitable recipe state
- Generation failure and retry
- Refine or regenerate request

##### Recipe Details and Saved Recipes

- Recipe details
- Saved recipe collection
- Saved and unsaved states
- Empty saved recipe collection

##### Meal Planning

- Meal planner overview
- Add recipe to meal plan
- Date and meal type selection
- Personal or shared visibility
- Meal plan details
- Edit meal plan
- Remove meal plan confirmation
- Relevant empty, loading, and error states

Use reusable components, variants, bottom sheets, and dialogs where appropriate.

Do not create unnecessary full-screen duplicates for minor interaction states.

#### Design Direction

Follow Little Kitchen's Playful Illustrated Cookbook identity within the shared Romantic Playful Geometric Abstract design system.

The experience must feel cozy, cheerful, creative, and comforting.

Preserve the approved Alongio component construction and structural precision standards.

Actual AI integration, API requests, image processing, and backend implementation are outside the current DESIGN_ONLY phase.

## Supporting Features

- Splash screen
- Onboarding
- Authentication
- Personal profile
- Partner connection
- Personal and couple mode switching
- Home feature launcher
- Notifications
- Basic settings

## Home Screen

The home screen must function as a lightweight feature launcher.

It must provide direct access to Tiny Planner, Heart Diary, and Little Kitchen.

Avoid displaying excessive charts, statistics, and productivity metrics.

Follow the approved Romantic Playful Geometric Abstract visual identity.

## Out of Scope

- Financial management
- Expense splitting
- Household inventory
- Kitchen inventory and pantry management
- Master ingredient database and manual ingredient catalog management
- Grocery shopping management
- Food delivery and ordering
- Advanced nutrition and calorie tracking
- General-purpose AI chatbot
- Social networking
- In-app messaging
- Advanced gamification beyond Together Growth
- Subscription and monetization
- Additional lifestyle modules

## Design Requirements

All screens must follow design/DESIGN.md and design/TOKENS.md.

Create editable designs using FigCraft.

Include relevant empty, loading, error, and completed states.

Do not implement React Native features, backend services, or business logic during the design phase.
