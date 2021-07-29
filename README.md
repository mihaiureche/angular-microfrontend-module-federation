# Prerequisite

- git
- NodeJs 14.x
- npm 6.x

# Clone code

In order to start the application you will need to clone first the code using HTTP or SSH. 

# Start application
## Shell

In order to start the shell app you will need to go to the shell folder and run the following commands.

- `npm install`
- `npm run start`

Once you run this commands you will be able to access the Shell app using the following url `http://localhost:5000`

Because you didn't start also the movies micro frontend you will receive an error in the console that the remote entry can't be loaded

## Movies MFE

In order to start the movies mfe you will need to go to the movies folder and run the following commands.

- `npm install`
- `npm run start`

Once you run this commands you will be able to access either directly the movies mfe using the following url `http://localhost:3000` or to access the shell app using the url provided above.

# Connect to the Movies API

In order to get results from the `themoviedb.org` you will need to get an API key which you should use it into the application. Follow the steps from the website https://developers.themoviedb.org/3/getting-started/introduction in order to get an API key.

Once you have the API key you will need to open the service file from the following location `/src/app/movies/services/movies.services.ts` and put the API key into the `movieApiKey` property.