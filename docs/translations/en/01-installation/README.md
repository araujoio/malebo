# Installation

How to clone the repository, install development dependencies, and run Malebo locally.

> [!NOTE]
> Because Malebo is built with static web standards (vanilla HTML, CSS, and JavaScript), no compilation or build step is required to run the site. Node.js is only used for code formatting and linting tooling.

### Prerequisites

Before you begin, ensure you have installed on your machine:

- **Node.js** (v18 or higher)
- **Git**
- **npm** (or your preferred package manager: `pnpm`, `yarn`, `bun`)
- **A local static web server** (such as VS Code's "Live Server" extension or `npx serve .`)

---

### 1. Clone the repository

```bash
git clone https://github.com/araujoio/malebo.git
cd malebo
```

### 2. Install development dependencies

Run the following command at the root of the project to install the code quality tooling (Biome, ESLint, and Husky):

```bash
npm install
```

### 3. Start the development server

You can launch a local static web server via terminal:

```bash
npx serve .
```

Alternatively, if using VS Code, right-click `index.html` and choose **"Open with Live Server"**.

Once started, navigate to the local address displayed in your browser (typically [http://localhost:3000](http://localhost:3000) or [http://localhost:5500](http://localhost:5500)) to view Malebo.

<br />

<div align="left">
  <a href="../00-quickstart/README.md"
    ><strong>← Previous: Quickstart</strong></a
  >
</div>
