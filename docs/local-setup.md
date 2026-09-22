# Local Setup Guide

Follow these steps to set up the Malebo Store locally on your machine.

## Prerequisites

- **Node.js** (v18 or higher recommended) - Required only for the development tooling (linting and formatting).
- **A local web server** - such as VS Code's "Live Server" extension, or any simple HTTP server (e.g., `npx serve .`).

## Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd malebo
   ```

2. **Install development dependencies:**
   This project uses `npm` to manage code formatting tools.
   ```bash
   npm install
   ```
   _Note: This will also automatically prepare `husky` for git hooks._

## Running the Project

Because the project relies on vanilla HTML/CSS/JS, no build step is required to run the site.

- **Option A (VS Code):** Open the project in VS Code, right-click `index.html`, and select "Open with Live Server".
- **Option B (Terminal):** Run a local static server from the root directory:
  ```bash
  npx serve .
  ```

## Development Commands

- `npm run format`: Runs Prettier and ESLint to automatically format your code and fix linting errors.

The project is protected by `lint-staged` and `husky`, meaning any code you commit will automatically be formatted.
