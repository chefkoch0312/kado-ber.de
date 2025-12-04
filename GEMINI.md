# Project: kado-ber.de

## Project Overview

This project is the personal portfolio website of Kai Dombrowski. It is a single-page application built with React, TypeScript, and Vite. The styling is done using Tailwind CSS, and icons are provided by Lucide. The website showcases Kai's projects, provides information about him, and offers contact options. The structure is component-based, with different sections for "About Me", "Projects", "Gallery", etc.

## Building and Running

To work with this project, you need to have Node.js and npm installed.

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```
    This will start a local server, and you can view the website in your browser, usually at `http://localhost:5173`.

3.  **Build for production:**
    ```bash
    npm run build
    ```
    This command compiles the TypeScript code and bundles the application for production. The output is placed in the `dist` directory.

4.  **Preview the production build:**
    ```bash
    npm run preview
    ```
    This command starts a local server to serve the production build from the `dist` directory.

## Development Conventions

*   **Component-Based Architecture:** The application is structured into reusable React components, located in the `src/components` directory.
*   **Styling:** Tailwind CSS is used for styling. Utility classes are applied directly in the JSX of the components.
*   **Data Management:** Project data is kept separate from the UI components in the `src/data/projects.ts` file. This makes it easy to update the project information without touching the component logic.
*   **Linting:** The project uses ESLint for code quality and consistency. You can run the linter with `npm run lint`.
*   **TypeScript:** The entire codebase is written in TypeScript, ensuring type safety.
