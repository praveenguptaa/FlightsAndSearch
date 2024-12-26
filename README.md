# Welcome to Flight service

## Project Setup
- Clone the Project on your local
- Execute `npm install` on the same path as of root directory of the downloaded project
- Create a `.env` file in the root directory and the following environment variable
    - `PORT=3000`
- Inside the `src/config` folder create a new file `config.json` and then add the foolowing piece of json
```
{
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flight_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
- Once you've added your db config as listed above, go to src folder in terminal and execute `npx sequelize db:create` to create database
- Generate model using `npx sequelize model:generate` command
- Execute `npx sequelize db:migrate`


## DB Design
- airplane 
- flight
- airport
- city

- A flight belong to an airplane but one airplane can have multiple flights
- a city has many airports but an airport belong to one city
- An airport can have multiple flights but a flight belongs to one airport