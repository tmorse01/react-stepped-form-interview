# React Stepped Form - 30-Minute Interview Challenge

Welcome! This is a timed interview project to assess your React and TypeScript fundamentals.

## Challenge: Build a 3-Step Form

Your task is to implement a **simple 3-step form** with the following:

1. **Step 1 - Personal Info**

   - Name (required, min 2 chars)
   - Email (required, valid format)

2. **Step 2 - Address**

   - Street (required)
   - City (required)
   - State (required)
   - Zip Code (required, valid 5-digit format)

3. **Step 3 - Review & Submit**
   - Display the data from Steps 1 & 2
   - Submit button to show a success message

## Core Requirements (Focus on These)

- [ ] **Form Fields**: Implement input fields in PersonalInfo and Address components
- [ ] **Data Persistence**: Form data must survive navigation between steps
- [ ] **Validation**: Show error messages if fields are empty or invalid
- [ ] **Step Navigation**: Next/Back buttons work correctly
- [ ] **Review Display**: Show collected data on final step
- [ ] **Submit Handler**: Log submission to console

## Technical Requirements

- [ ] Use TypeScript (define types in `src/types.ts`)
- [ ] Implement state management in `src/hooks/useSteppedForm.ts`
- [ ] Wire up form components to hook
- [ ] No runtime errors when building (`npm run build`)

## Getting Started

### Installation & Run

```bash
npm install
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## What We're Evaluating

- **React Fundamentals**: Can you manage component state and props effectively?
- **TypeScript**: Do you define and use types correctly?
- **Problem-Solving**: How do you approach form state and validation?
- **Code Organization**: Is your code readable and maintainable?
- **Attention to Detail**: Does it work without errors?

## File Structure

Key files to modify:

```
src/
├── types.ts                  # Define your form data interface
├── hooks/useSteppedForm.ts   # Manage form state and validation
├── components/
│   ├── PersonalInfo.tsx      # Form fields for step 1
│   ├── Address.tsx           # Form fields for step 2
│   ├── Review.tsx            # Display data and submit
│   └── StepIndicator.tsx     # Already implemented
└── App.tsx                   # Already wired up
```

## Tips

- Start with `types.ts` - define what your form data looks like
- Then implement `useSteppedForm.ts` - manage state and validation
- Finally fill in the component fields
- Test as you go - use the browser console to debug
- The UI scaffold is already in place - focus on the logic

## Bonus (If Time Allows)

- Add phone field to PersonalInfo
- Add apartment/unit number to Address
- Persist data to localStorage
- Better validation messages
- Edit functionality on the Review step

## Time Limit

You have **30 minutes** to implement the core requirements above. Quality over completeness - working code is better than unfinished code.

Good luck!
