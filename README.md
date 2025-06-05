
# SkipCard Component – Technical Documentation

## Description

The SkipCard component is an interactive user interface built in React, designed to allow users to view and select waste container options (skips) based on various sizes and features (public road permit, price, weight, volume, etc.).

This interface offers a responsive and smooth user experience, broken down into reusable components to enhance readability and maintainability.

---

## Responsive Design

Particular attention was given to mobile, tablett and desktop compatibility:

- Use of Flexbox and TailwindCSS to adapt the layout across screen sizes
- Vertical layout on smaller screens, grid layout on larger ones (SkipCardGrid)
- Size, spacing, and font adjustments for optimal readability

---

## Project Architecture

The folder includes the following structure:

SkipModule/
│
├── SkipCard.jsx          # Individual card displaying a skip container
├── SkipCardGrid.jsx      # Responsive grid to display multiple skip cards
├── SkipData.jsx          # Local data source (skipData JSON)
├── LoadingSpinner.jsx    # Animated loading indicator
├── ToastWithButton.jsx   # Custom toast notification with action button
├── assets/
│   ├── Skip-Sizes-3D_4-Yard.webp
│   ├── Skip-Sizes-3D_6-Yard.webp
│   ├── Skip-Sizes-3D_8-Yard.webp
│   └── Skip-Sizes-3D_12-Yard.webp

---

## Component Descriptions

| Component             | Purpose                                                                                      |
|-----------------------|----------------------------------------------------------------------------------------------|
| `SkipCard.jsx`        | Main visual component displaying a skip: image, pricing, options, volume, rental period.    |
| `SkipCardGrid.jsx`    | Responsive grid layout handling the display of multiple skip cards.                         |
| `SkipData.jsx`        | Contains fetch api data about skip options (sizes, prices, features).                          |
| `LoadingSpinner.jsx`  | Animated spinner shown while loading data.                                                  |
| `ToastWithButton.jsx` | Custom toast with button for confirmation/cancellation.                        |

---

## Internal Functionality

- Data is imported from `SkipData.jsx` (JavaScript object or simulated JSON).
- Uses `useState` and `useEffect` for state management and dynamic rendering.
- Dynamically maps images using `imageMap` based on skip size.
- Displays checkmarks for available options (heavy waste, public road access, etc.).

---

## Key Features

- Dynamic skip selection with real-time UI updates
- Clear and structured display of skip information
- Fully responsive layout with SkipCardGrid
- Custom toast system with user actions
- Smooth loading experience with spinner animation

---

## Technologies Used

- React – For component logic and state management
- TailwindCSS – Utility-first CSS framework for responsive design
- Flowbite React – UI component library for React + Tailwind
- React Icons – Icon library for modern and accessible icons

---

## Author Notes

This module was carefully built to support both desktop and mobile displays. It provides a clean, functional base for skip container management and can be easily integrated into booking or logistics systems.
