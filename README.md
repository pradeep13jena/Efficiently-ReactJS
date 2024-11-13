# Efficiently - What's on Your Mind Today?
Welcome to **Efficiently**, a simple and efficient to-do list application built with ReactJS.

## Table of Contents
- [Getting started](#getting-started)
- [Design overview](#design-overview)
- [Features](#features)
- [Links](#links)

## Getting started

To use this project, clone it from GitHub and follow these steps:

1. **Install Dependencies**: Run the following command to install all required dependencies, including React, React-DOM, and Vite:
   ```bash
   npm install
   ```

2. **Start the Development Server**: Use Vite to create a local server for development:
   ```bash
   npx vite
   ```

## Design overview

Efficiently is designed to be minimal and straightforward, with a focus on usability:

- The **header** at the top displays the name and tagline of the application. If you plan to change these, make sure to check the design and alignment for a cohesive look.'
- At the bottom, there is an **input field and button** for adding tasks.

**Important Note**: Tasks have validation rules:

- **Cannot be empty**: Empty tasks are not allowed.
- **No duplicate tasks**: You can’t add a task that already exists (case-insensitive). If either rule is violated, an alert will notify the user.

## Features

Here’s what you can do with Efficiently:

1. **Add a Task**: Create new tasks to keep track of your to-do items.
2. **Complete a Task**: Mark tasks as completed by checking them off.
3. **Delete a Task**: Remove tasks that you no longer need.
4. **Edit a Task**: Modify the content of any existing task.

All tasks are stored in `localStorage`, so they persist even if the page is refreshed or closed. On the first visit, three default tasks will be displayed as a welcome message.

## Links

- **GitHub Repository**: [Efficiently-ReactJS](https://github.com/pradeep13jena/Efficiently-ReactJS)
- **Live Website**: [Efficiently - What's on Your Mind Today?](https://efficiently.vercel.app/)