# Project Architecture

The Malebo Store is built using a clean, vanilla web stack. This ensures maximum performance, SEO compatibility, and ease of maintenance without the overhead of heavy frameworks.

## Tech Stack

- **HTML5**: Semantic markup for accessibility and structure.
- **CSS3**: Custom CSS using native variables for theming, completely avoiding utility-first frameworks.
- **JavaScript (ES6+)**: Minimal native JavaScript for interactivity (such as icons).

## Structure

The project relies on static HTML files. The root `index.html` serves as the landing page, and individual feature pages are separated into the `pages/` directory:

- `index.html` (Landing Page)
- `pages/about.html` (Brand Story)
- `pages/glasses.html` (Eyewear Catalog)
- `pages/tailoring.html` (Suits Catalog)

Each page imports its respective styles from the `assets/css/` directory and utilizes a common layout approach for headers and footers to ensure consistency.

## Tooling

While the code executed in the browser is completely vanilla, the development environment uses modern tooling to ensure code quality:

- **ESLint**: For JavaScript linting.
- **Prettier**: For code formatting across HTML, CSS, JSON, and Markdown.
- **Husky & lint-staged**: Pre-commit hooks that enforce formatting before code can be pushed to the repository.
