# Odin Calculator

A calculator built with [![My Skills](https://skillicons.dev/icons?i=html,css,js)](https://skillicons.dev), for **The Odin Project** JavaScript assignment.
This project was created to practice JavaScript fundamentals by building a fully interactive calculator from scratch. 
<img width="650" height="384" alt="Calculator" src="https://github.com/user-attachments/assets/70cc7173-5b37-48fa-9ce1-a55d207f5d83" />

In addition to implementing the calculation logic, I also focused on recreating a familiar visual style: the calculator’s design was inspired by the **iPhone calculator**, with a dark interface, rounded buttons, and orange operator keys.

## Overview

The calculator supports the four basic arithmetic operations and provides a smooth user experience through both button clicks and keyboard input. The project was designed to reinforce essential programming concepts such as DOM manipulation, event handling, application state, and input validation.

Although the calculator has a simple interface, the underlying logic requires managing multiple states correctly, including the first value, selected operator, second value, and completed calculations.

## Features

- Perform basic arithmetic operations:
  - Addition
  - Subtraction
  - Multiplication
  - Division
- Support for decimal input
- Delete the last typed digit
- Clear the full expression
- Chained calculations
- Keyboard support
- Division-by-zero protection with an `Error` message
- Rounded decimal results for cleaner output
- Interface inspired by the **iPhone calculator**

## Design Inspiration

The visual design of this project was based on the **iPhone calculator**. I used a dark layout, circular buttons, light utility keys, and orange operator buttons to recreate that familiar look while still keeping the project simple and fully custom-built with plain CSS.

This design choice helped make the project more visually appealing while also serving as good practice in recreating a real-world interface.

## Keyboard Support

The calculator can also be used with the keyboard.

Supported keys:

- `0-9` for numbers
- `+` and `-` for operators
- `*` for multiplication
- `/` for division
- `.` for decimal input
- `Enter` or `=` to calculate
- `Backspace` to delete
- `Escape` to clear

## Technologies Used

- HTML
- CSS
- JavaScript

## Project Structure

- `index.html` - Defines the structure of the calculator
- `style.css` - Contains all styles and layout rules
- `script.js` - Implements the calculator logic and keyboard controls
- `favicon/` - Stores the favicon assets used by the project

## What I Learned

This project helped me strengthen my understanding of:

- JavaScript functions
- DOM manipulation
- Event listeners
- Conditional logic
- State management
- Keyboard interaction
- Handling user input and edge cases
- Translating a visual reference into a working interface

## How to Run

1. Clone the repository
2. Open `index.html` in your browser

No dependencies or build tools are required.

## Final Thoughts

This project was a valuable way to practice JavaScript by building something interactive and familiar. Recreating a calculator required more logic than it first appears, especially when handling chained operations, decimals, and keyboard controls.

Using the iPhone calculator as design inspiration also made the project more engaging, since it combined both programming logic and interface styling in a single assignment.
