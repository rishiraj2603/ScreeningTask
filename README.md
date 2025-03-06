# Full Stack Developer Screening Task

## Overview

This project is a simple full-stack application consisting of a backend API built with Node.js and Express, and a frontend implemented using React or plain HTML/JavaScript. The goal is to create an interactive greeting page.

## Features

### Backend

- A single API endpoint: `GET /api/greet?name=YourName`
- Returns a JSON response:
  ```json
  {
    "message": "Hello, YourName! Welcome to Younglabs."
  }
  ```
- If `name` is missing, returns:
  ```json
  {
    "error": "Name is required."
  }
  ```

### Frontend

- A simple webpage containing:
  - An input field for the user to enter their name.
  - A "Get Greeting" button to fetch the greeting message.
  - Displays the response message from the backend.

## Installation & Setup

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Clone-Git Repository

- git clone https://github.com/rishiraj2603/ScreeningTask.git

### Backend Setup

1. Navigate to the backend directory:
   ```sh
   cd server
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   npm run dev
   ```
4. The backend should now be running at `http://localhost:3000`

### Frontend Setup

1. Navigate to the frontend directory:
   ```sh
   cd client
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend application:
   ```sh
   npm run dev
   ```
4. Open `http://localhost:4000` in your browser.

Happy coding!
