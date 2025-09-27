# Interactive Animated Calculator with DOM Manipulation

This task demonstrates various JavaScript concepts through an Interactive Animated Calculator.

## Features Implemented

1. **Display Properties**: Use various display types to organize layout and hide/show elements.
2. **Keyframes**: Add subtle animations to buttons or output area using @keyframes.
3. **JS Runtime Environment**: Understand call stack via console logs.
4. **Hoisting & TDZ**: Showcased hoisting behavior via functions/variables.
5. **Operators & Conditionals**: Performed arithmetic operations using if/switch statements.
6. **Functions**: Implement calculator logic using various function types (arrow, normal, IIFE).
7. **DOM**: Use DOM methods to capture input, display output, and update UI dynamically.
8. **BOM**: Used 'alert', 'confirm', or 'prompt' for user interactions
9. **Function Currying**: Apply currying for advanced calculation or greeting messages.

## Concepts Demonstrated

- **Hoisting**: Functions can be called before declaration.
- **Temporal Dead Zone (TDZ)**: let/const variables cannot be accessed before declaration.
- **Call Stack**: Function calls are demonstrated in the console.
- **Function Types**: Regular functions, arrow functions, and IIFE.
- **DOM Manipulation**: Dynamic updates to calculator display.
- **BOM Methods**: alert(), confirm(), and prompt() for user interaction.
- **Function Currying**: Creating specialized functions from general ones.

## Topics

- Display Properties (block, inline, inline-block, none)
- CSS Keyframes for animations
- JavaScript Runtime Environment (JRE)
- Hoisting
- Temporal Dead Zone (TDZ)
- JavaScript Operators (Arithmetic, Logical, Comparison, etc.)
- Conditional Statements (if, else if, switch)
- Functions & Its Types (Normal, Anonymous, Arrow, IIFE, etc.)
- DOM & its Methods (getElementById, querySelector, etc.)
- BOM & its Methods (alert, confirm, prompt, location, navigator)
- Function Currying

## Suggested Folder Structure

```
/day-2-interactive-calculator/
	│
	├── index.html        # HTML layout for calculator UI
	├── styles/
	│   └── animation.css # CSS animations using keyframes and layout using display
	├── scripts/
	│   └── main.js       # Logic for DOM/BOM interactions, functions, currying, etc.
	└── README.md         # Project explanation and learning points
```

## How to Use

1. Open index.html in a browser.
2. Use the calculator buttons to perform calculations.
3. Check the browser console for JavaScript concept demonstrations.
4. Use the demo buttons to see specific features in action.

## Sample Output in Console:

- [User Input] Number 1: 5, Number 2: 10
- [Operation] 5 + 10 = 15
- [Animation Triggered] Keyframe effect on result box
- [DOM Updated] Display: 15
- [BOM Alert] Confirm to clear result?
- [Hoisting Demo] Function executed before declaration
- [Currying Demo] Hello John! Welcome Back!
