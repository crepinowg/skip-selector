

### SkipCard Component – Technical Documentation

# Description

The SkipCard component is an interactive user interface built in React, designed to allow users to view and select waste container options (skips) based on various sizes and features (public road permit, price, weight, volume, etc.).

This interface offers a responsive and smooth user experience, broken down into reusable components to enhance readability and maintainability.

⸻

# Responsive Design

Particular attention was given to mobile and tablet compatibility:
	•	use of Flexbox and TailwindCSS to adapt the layout across screen sizes;
	•	vertical layout on smaller screens, grid layout on larger ones (SkipCardGrid);
	•	size, spacing, and font adjustments for optimal readability.

⸻

# Project Architecture

The folder includes the following components:

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


⸻

# Component Descriptions

Component	Purpose
SkipCard.jsx	The main visual component representing a skip: image, pricing, options, volume, rental period, etc.
SkipCardGrid.jsx	Handles the responsive grid layout to display all SkipCard components.
SkipData.jsx	Stores static data about the different skip options (sizes, prices, features).
LoadingSpinner.jsx	Displays an animated loading spinner while data is being fetched.
ToastWithButton.jsx	A custom toast notification component with a button for confirming or cancelling an action.


⸻

# Internal Functionality
	•	Data is imported from SkipData.jsx (JavaScript object or simulated JSON database).
	•	Uses useState and useEffect to manage the selected skip dynamically.
	•	Dynamically maps images using an imageMap depending on the skip size.
	•	Checkmarks highlight available options (heavy waste, public road access, etc.).

⸻

# Key Features
	•	Dynamic selection of a skip with immediate UI updates;
	•	Organized display of all skip specifications;
	•	Fully responsive grid view with SkipCardGrid;
	•	Custom toast system with optional action;
	•	Loading animation while fetching data.

⸻

# Technologies Used
	•	React – for component logic and state management;
	•	TailwindCSS – for fast and responsive styling using utility classes;
	•	Flowbite React – for additional UI components;
	•	React Icons – for modern and accessible icons.

