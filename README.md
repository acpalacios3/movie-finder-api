## MOVIE FINDER API

## Description

Movie Finder API is a RESTful backend application built with Node.js and Express.js.
"We're looking for someone to develop for a new startup that's creating a movie review website. You'll be building the core of the backend: a 'Movie Finder' API. This API won't store data itself; instead, it'll act as a middleman, getting movie information from an external, public movie database. Then, your API will provide clean and relevant data to the future front-end app.

Your ability to set up a server, handle routes, interact with an external service, and manage configuration securely will be tested—these are all key skills for a backend developer."

The API acts as an intermediary between the client and the OMDb API (Open Movie Database). It receives movie search requests, retrieves movie information from OMDb using Axios, and returns the data to the client in JSON format.


## Technology / Library:


* Node.js: JavaScript runtime environment used to execute JavaScript outside the browser.
* Express.js: Framework used to create the web server, define routes, and handle HTTP requests and responses.
* Axios: HTTP client used to send GET requests to the external OMDb API and retrieve movie information.
* dotenv: Loads environment variables from the .env file, allowing us to protect the OMDb API key.
* OMDb API: External movie database that provides movie information such as titles, release years, IMDb IDs, directors, and actors.
* Postman: Tool used to test API endpoints by sending HTTP requests.

## Setup and Installation

1. Install Node.js
2. Initialize the Node.js project : 

**npm init -y**  :This command creates the package.json file, which stores project information, dependencies, and configuration.

3. Install Express: npm install express (Express: Creates the server and handles HTTP routes and requests.)

4. Axios: **npm install axios** (Axios: Makes HTTP requests to the OMDb API and retrieves movie data.)

5. Install dotenv: **npm install dotenv** (dotenv: Loads environment variables from the .env file so the API key does not need to be written directly in the source code.)

5. Configure ES Modules, In package.json, add or update by "type": "module"

This allows the project to use ES Module syntax:

import express from 'express';
export default router;

6. Configure the environment variables

Create a .env file in the root directory:

OMDB_API_KEY=your_api_key_here

Replace your_api_key_here with your personal OMDb API key.

Get an API key from:

https://www.omdbapi.com/apikey.aspx

In server.js, load the environment variables:

import 'dotenv/config';

7. Configure .gitignore

Create a .gitignore file:

node_modules/
.env

This prevents sensitive environment variables and installed dependencies from being uploaded to GitHub.


## Notes:

1. Search Movies by Title

GET /api/search?title=superman

Searches for movies by title using the OMDb API.

**Example:**

http://localhost:3001/api/search?title=batman
http://localhost:3001/api/search?title=superman
Query parameter:

title: The movie title to search for.

2. Get Movie Details by IMDb ID

GET /api/movies/:id
Retrieves detailed information about a specific movie using its IMDb ID.

**Example:**
http://localhost:3001/api/movies/tt0372784
http://localhost:3001/api/movies/tt3896198

3. API Key Security

The OMDb API key is stored in an environment variable using the .env file.
The .env file should never be committed to GitHub.