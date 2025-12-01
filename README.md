# React Stepped Form - Interview Challenge

Welcome! This is a take-home interview project designed to assess your React, TypeScript, and front-end development skills.

## Task Overview

Your task is to complete a **multi-step form wizard** with the following steps:

1. **Personal Info** - Name, Email, Phone
2. **Address** - Street, City, State, Zip Code
3. **Preferences** - Newsletter subscription, Communication preferences
4. **Review & Submit** - Display all entered data for final review

## Requirements

### Core Functionality (Required)

- [ ] **Step Navigation**: Users should be able to move forward/backward through steps
- [ ] **Data Persistence**: Form data must persist when navigating between steps
- [ ] **Form Validation**: Each step should validate its inputs before allowing progression
- [ ] **Step Indicator**: Visual indicator showing current step and progress
- [ ] **Review Step**: Display all collected data in a read-only format
- [ ] **Submit Handler**: Handle form submission (console.log is sufficient)

### Technical Requirements

- [ ] Use TypeScript with proper typing (no `any` types)
- [ ] Define a clear interface for form data in `src/types.ts`
- [ ] Implement form state management in `src/hooks/useSteppedForm.ts`
- [ ] Add validation logic before step transitions
- [ ] Ensure the UI is responsive and works on mobile devices

### Form Fields Specification

**Step 1 - Personal Info**
- First Name (required, min 2 characters)
- Last Name (required, min 2 characters)
- Email (required, valid email format)
- Phone (required, valid format)

**Step 2 - Address**
- Street Address (required)
- City (required)
- State (required, dropdown or text)
- Zip Code (required, 5 digits)

**Step 3 - Preferences**
- Subscribe to newsletter (checkbox)
- Preferred contact method (radio: Email, Phone, SMS)
- Receive promotional offers (checkbox)

**Step 4 - Review & Submit**
- Display all data from previous steps
- Allow editing (navigate back to specific steps)
- Submit button to complete the process

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

## Project Structure

```
src/
├── main.tsx              # App entry point
├── App.tsx               # Main app component (step orchestration)
├── components/
│   ├── StepIndicator.tsx # Step progress indicator
│   ├── PersonalInfo.tsx  # TODO: Implement Step 1
│   ├── Address.tsx       # TODO: Implement Step 2
│   ├── Preferences.tsx   # TODO: Implement Step 3
│   └── Review.tsx        # TODO: Implement Step 4
├── hooks/
│   └── useSteppedForm.ts # TODO: Complete form state management
├── types.ts              # TODO: Define TypeScript interfaces
└── styles.css            # Global styles
```

## What We're Looking For

- **Code Quality**: Clean, readable, maintainable code
- **TypeScript Proficiency**: Proper use of types and interfaces
- **React Best Practices**: Hooks, component composition, state management
- **User Experience**: Smooth interactions, clear error messages, helpful feedback
- **Problem Solving**: How you approach validation, state management, and edge cases

## Bonus Points (Optional)

These are not required but will help you stand out:

- [ ] **Advanced Type Safety**: Generic types, type guards, discriminated unions
- [ ] **URL Synchronization**: Sync current step with URL query params (`?step=2`)
- [ ] **Accessibility**: ARIA labels, keyboard navigation, focus management
- [ ] **Enhanced UX**: Loading states, transitions, better error handling
- [ ] **State Management**: useReducer or Context API for complex state
- [ ] **Form Field Components**: Reusable input components with built-in validation
- [ ] **Local Storage**: Persist form data across page refreshes
- [ ] **Progressive Enhancement**: Save draft functionality, auto-save

## Evaluation Criteria

Your submission will be evaluated on:

1. **Functionality** (40%) - Does it work as specified?
2. **Code Quality** (30%) - Is the code clean, organized, and maintainable?
3. **TypeScript Usage** (15%) - Are types used effectively?
4. **User Experience** (15%) - Is the interface intuitive and polished?

## Time Expectation

This challenge should take approximately **2-3 hours** to complete the core requirements. Feel free to spend additional time on bonus features if you'd like to showcase more skills.

## Submission

When you're done:

1. Ensure the project builds without errors (`npm run build`)
2. Test all functionality thoroughly
3. Add any additional notes or decisions in a `NOTES.md` file (optional)
4. Submit your completed code as instructed

## Questions?

If you have any questions about the requirements, feel free to reach out. We want you to succeed!

Good luck! 🚀
