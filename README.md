# Group Project - BreakTime

## Introduction

BreakTime is an app that helps you take breaks between work. It sends an email reminder when it's time to take a break, allows you to set a timer and provides activity suggestions to help you unwind. 

## Technologies

It is built with Express for the backend server, MySQL for the database, React for the front end.

## Setup

### Dependencies

- Run `npm install` in project directory. This will install server-related dependencies such as `express`.
- `cd client` and run `npm install`. This will install client dependencies (React).

### Database Prep

- Access the MySQL interface in your terminal by running `mysql -u root -p` or use the MySQL CLI.
- Create a new database called TBD: `create database breaktime`
- Add a `.env` file to the project folder of this repository containing the MySQL authentication information for MySQL user. For example:

```bash
  DB_HOST=localhost
  DB_USER=root
  DB_NAME=breaktime
  DB_PASS=YOURPASSWORD
  SUPER_SECRET=shhhhhhhhh
```
- Run `npm run migrate` in the main folder of this repository, in a new terminal window. This will create a table called 'users'

- Notes about users table:
  - `id` -- This column is generated automatically in the database. It serves as the primary key for the table.
  - `email` -- This column holds user's email. This will be used to send reminders.
  - `password` -- This column holds an encrypted password.

### Development

## Code & Functionality Overview

- **Front End**
This project includes Pages, Components, Hooks/ReactContexts and Local Files (i.e. videos, images)

**Pages:**
- Home
- FunBreak
- RelaxBreak
- MoveBreak

**Components:**
- Login
- BreakEnd
- FunContainer
- FunDisplayBox
- ShowCounter
- CountDownTimer
- DateTimeDisplay
- StartButton
 
**Hooks/ReactContexts:** 
- TimerContext
- UserContext
- useCountDown
 
- **Back End**
 - The project uses `users` MySQL table to store user info for user login and sending reminder emails.
 - `api.js` includes all the router function for login.
 - `index.js` includes all of the router functions for scheduling and sending reminders.
 - The project uses **nodemailer** and **node-cron** modules for scheduling and sending email reminders. You can read more about nodemailer [here](https://nodemailer.com/about/) and node-cron [here] (https://www.npmjs.com/package/node-cron)




