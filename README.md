#CodeOp Group Project

## Introduction

The "name App" is an application build with ...

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

- Run `npm run migrate` in the main folder of this repository, in a new terminal window. This will create a table called 'users' and 'messages' in your database.

### Development

## Code & Functionality Overview

- **Front End**

- **Back End**