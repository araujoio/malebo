# Assets System

The Malebo project keeps its assets highly organized inside the `assets/` directory.

## CSS Architecture & Partials

Instead of relying on a single, massive CSS file or a third-party framework, Malebo uses a custom, component-based CSS architecture via `@import` statements.

### `globals.css`

The entry point for global styles is located at `assets/css/index/globals.css`. It serves two primary purposes:

1. **CSS Variables & Theming**: Defines `:root` variables for colors, typography, and spacing.
2. **Imports**: Imports smaller, scoped CSS files (partials).

### The `partials/` Directory

All component-specific styles are stored in `assets/css/index/partials/`. These files are imported directly into `globals.css`:

- `hero.css` (Styles for the hero banner)
- `nav.css` (Navigation bar styles)
- `carousel.css` (Product sliders)
- `features.css` & `tailoring.css` (Specific section styles)
- `manifesto.css` (Brand manifesto section)
- `footer.css` (Footer layout)

By splitting the CSS into logical partials, the codebase remains modular, readable, and easy to scale.

## Image Organization

Images are stored under `assets/imgs/` and further grouped by category:

- `banner/`
- `bento-grid/`
- `highlights/`
- `manifesto/`
- `suits/`

This ensures that assets are easy to locate and directly map to the components they belong to.
