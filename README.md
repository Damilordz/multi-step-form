# Multi-Step Form

This is a responsive multi-step form built as a challenge from [Frontend Mentor](https://www.frontendmentor.io). The application includes multiple stages to collect user information, select plans, add-ons, and display a summary before confirming the details.

## Features

- **Responsive Design:** The form is fully responsive and adapts to various screen sizes.
- **Validation:** Real-time form validation with error messages.
- **Dynamic Steps:** Updates based on user input, including plan selection and add-ons.
- **Context API:** State management using React's Context API.
- **Material UI:** Utilises Material UI components like Switch and Checkbox for better UI.

## Screens

1. **Personal Info:**
   - Collects user name, email, and phone number with validation.

2. **Select Plan:**
   - Allows users to choose between monthly and yearly billing plans.

3. **Pick Add-Ons:**
   - Lets users add optional features like larger storage, multiplayer access, and customisable profiles.

4. **Summary:**
   - Displays a detailed breakdown of the selected plan and add-ons with the total cost.

5. **Success Page:**
   - Confirmation screen after submission.

## Tech Stack

- **Frontend:** React.js
- **State Management:** Context API
- **Styling:** Tailwind CSS
- **UI Components:** Material UI

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Damilordz/multi-step-form.git
   ```

2. Navigate to the project directory:
   ```bash
   cd multi-step-form
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

## Usage

- Fill out the required personal information in the first step.
- Select a billing plan in the second step.
- Choose optional add-ons in the third step.
- Review the details and confirm in the summary step.
- View the success page upon successful submission.

## Project Structure

- `src/components`: Contains reusable components for each step.
- `src/context`: Manages global state using Context API.
- `public/assets`: Stores images and other static assets.

## Customisation

- **Plan Data:** Modify the `planTypes` array in `PlanContext.js` to add or change plans.
- **Add-Ons:** Update the `addOnsData` array in `App.js` to include or modify add-ons.

## Demo

[Live Demo](https://multi-step-form-three-sandy.vercel.app/)
