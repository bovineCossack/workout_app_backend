# Workout Tracking App Backend

## How to use:

- npm i
- enter your host and database info to .env
- npm run dev or npm start

## Current Functionality:

- POST register
- POST login
- GET exercise list
- DELETE exercise
- password hashing and validation
- login tokens

## Current Issues:

- database and host info is not properly exported, using workaround to enter environment info in function

## Planned Functionality:

- proper category management with own routes
- workout plan routes

#

## Created using:

- AWS RDS database for MYSQL DB storage
- NodeJS, Express, Morgan, MySQL2, CORS
- bcryptjs, joi, jsonwebtoken for password cryptography, user validation, tokens
- Postman for route and CRUD testing
- AirBnB style linting
Link to project front-end: https://github.com/bovineCossack/workout_app
