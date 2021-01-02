# Flight booking App

## Backend

### How to run

- Run `npm install` to install dependencies
- create `.env` in the source folder with your values as shown in the .env.sample
- Run `docker-compose up` to pull postgres db and adminer. Adminer will run at http://localhost:8080
- Run `npm run migrate` to migrate the database
- Run `npm run seed` to seed the database
- Navigate to the src folder by running `cd src`
- Run `node index.js` to start the server or `nodemon` to start the server in watch mode. This starts the server at http://localhost:3000
- Open a browser and navigate to http:localhost:3000/graphql. This will start the GraphQL playground
