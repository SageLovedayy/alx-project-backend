# MGFIT Fitness Tracking App - Backend

## Overview

This is the backend service for the **Fitness Tracking App**, built using **Node.js**, **Express**, and **MongoDB**. The app provides users with the ability to track their fitness goals, workouts, and overall progress. The backend exposes a RESTful API that manages users, workout data, and fitness goals. It includes features like user authentication, error handling, data validation, and email notification templates.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Error Handling](#error-handling)
- [Logging](#logging)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)

## Features

- **User Authentication**: Registration, login, and secure JWT-based authentication.
- **Workout and Goal Tracking**: Log workouts, set goals, and track fitness progress.
- **File Uploads**: Handling user profile images and workout data.
- **Error Handling**: Centralized error handling across all routes and controllers.
- **Email Notification**: User receives email notifications for account activities like sign-ups.
- **Data Validation**: Input validation using **Mongoose** and custom middleware.
- **Paginated API**: Support for paginated queries and sorting.

## Tech Stack

- **Node.js**: JavaScript runtime for the backend.
- **Express.js**: Web framework for building the RESTful API.
- **MongoDB**: NoSQL database for storing user data and workout logs.
- **Mongoose**: ODM library for MongoDB.
- **JWT**: Token-based authentication.
- **Bcrypt.js**: For password hashing.
- **Pug**: Template engine used for email templates.

## Project Structure

```
Root directory
├── .eslintrc.json                 # ESLint configuration
├── .gitignore                     # Git ignore file
├── .prettierrc                    # Prettier configuration
├── app.js                         # Express app configuration
├── config.env                     # Environment variables
├── controllers                    # Controllers for handling API logic
│   ├── authController.js          # Handles authentication
│   ├── errorController.js         # Handles application errors
│   ├── handlerFactory.js          # Reusable handler functions
│   ├── programController.js       # Controller for managing programs (workout routines)
│   └── userController.js          # Controller for managing users
├── models                         # Mongoose data models
│   ├── programModel.js               # Workout data schema
│   └── userModel.js               # User data schema
├── routes                         # API routes
│   ├── programRoutes.js           # Routes for workout/tour management
│   └── userRoutes.js              # Routes for user management
├── server.js                      # Starts the Express server
├── utils                          # Utility functions
│   ├── apiFeatures.js             # Helper for pagination, filtering, and sorting
│   ├── appError.js                # Custom error handler
│   ├── catchAsync.js              # Wrapper for handling async errors
│   └── email.js                   # Email sending functionality
└── vercel.json                    # Vercel configuration for deployment
```

## Setup and Installation

### Prerequisites

- **Node.js** (v14.x or higher)
- **MongoDB** (local instance or MongoDB Atlas)

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/fitness-tracking-app-backend.git
   cd fitness-tracking-app-backend
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Set up Environment Variables:**

   Create a `config.env` file in the root directory and add the following environment variables:

   ```bash
   NODE_ENV=development
   PORT=5000
   DATABASE=your_db
   DATABASE_PASSWORD=your_db_password
   JWT_SECRET=your_jwt_secret
   JWT_EXPIRES_IN=90d
   EMAIL_USERNAME=your_email
   EMAIL_PASSWORD=your_email_password
   ```

4. **Run the Server:**

   ```bash
   npm run dev
   ```

   The server will run on `http://localhost:5000`.

## Environment Variables

The app requires the following environment variables:

- `NODE_ENV`: Environment setting (development, production).
- `PORT`: The port the server will run on.
- `DATABASE`: MongoDB connection string.
- `DATABASE_PASSWORD`: Password for the MongoDB database.
- `JWT_SECRET`: Secret key for JWT tokens.
- `JWT_EXPIRES_IN`: JWT expiration time.
- `EMAIL_USERNAME`: Username for sending emails.
- `EMAIL_PASSWORD`: Password for sending emails.

## API Endpoints

### Authentication

| Method | Endpoint               | Description                 |
|--------|------------------------|-----------------------------|
| POST   | `/api/v1/auth/signup`   | Sign up a new user           |
| POST   | `/api/v1/auth/login`    | Log in an existing user      |
| GET    | `/api/v1/auth/logout`   | Log out a user               |
| POST   | `/api/v1/auth/forgotPassword` | Send password reset email |
| PATCH  | `/api/v1/auth/resetPassword/:token` | Reset password |

### User Management

| Method | Endpoint               | Description                        |
|--------|------------------------|------------------------------------|
| GET    | `/api/v1/users/me`      | Get current user's profile         |
| PATCH  | `/api/v1/users/updateMe` | Update user profile                |
| DELETE | `/api/v1/users/deleteMe` | Delete user account (soft delete)  |

### Workout (Tour) Management

| Method | Endpoint               | Description                       |
|--------|------------------------|-----------------------------------|
| GET    | `/api/v1/programs`         | Get all workout routines          |
| GET    | `/api/v1/programs/:id`     | Get workout routine by ID         |
| POST   | `/api/v1/programs`         | Create a new workout routine      |
| PATCH  | `/api/v1/programs/:id`     | Update workout routine by ID      |
| DELETE | `/api/v1/programs/:id`     | Delete workout routine by ID      |

## Error Handling

The application uses centralized error handling through the `errorController.js` to manage various errors such as:

- 404 Not Found errors.
- Validation errors from Mongoose.
- JWT errors related to authentication.

## Logging

- **Morgan**: HTTP request logging in development mode.

## Testing

You can run tests using **Jest** or **Mocha** depending on your configuration.

```bash
npm run test
```

## Deployment

To deploy the application:

1. Make sure your environment variables are set correctly for production.
2. Use a cloud provider like **Heroku**, **Vercel**, or **AWS** to host your application.
3. Ensure your MongoDB connection is properly configured (e.g., **MongoDB Atlas**).

## Contributing

In as much as I would welcome contributions to this project, I would prefer to reach our second milestone first. Follow for updates
---

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.