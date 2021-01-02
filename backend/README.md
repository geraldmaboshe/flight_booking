# Flight booking App

## Backend

### To get started

- Ensure you have Node.js, Docker and Git installed on your computer
- Clone the project
- Run `npm install` to install dependencies
- create `env` in the source folder with your values as shown in the .env.sample
- Run `docker-compose up` to run postgres db and adminer. Adminer will be running at http://localhost:8080
- Run `npm run migrate` to migrate the database
- Run `npm run seed` to seed the database
- cd into src
- Run `node index.js` start the server or `nodemon` to start the server in watch mode. This starts the server at http://localhost:3000
- Open a browser and navigate to http:localhost:3000/graphql. This will start the GraphQL playground
