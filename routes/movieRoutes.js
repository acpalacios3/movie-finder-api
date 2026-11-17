// 1. Create an express.Router.
// 2. Import the controller functions from ../controllers/movieController.js.
// 3. Define two routes and associate them with the controller functions:
    // GET /search: This will handle movie searches.
    // GET /movies/:id: This will fetch details for a specific movie.
// 4. Export the router.


import express from 'express';

//import controller functions
import { searchMovie, detailsMovie } from '../controllers/movieController.js';

// create the router which will take the place of the express app
const router = express.Router();

// localhost:3001/api/search, "searchMovie" is it's the function that will handle the request
// when someone requests /search via GET, we run searchMovies.
router.get("/search", searchMovie);

// localhost:3001/api/movie with id is a dynamic parameter
// when someone requests /search via GET, we run detailsMovie.
router.get("/movies/:id", detailsMovie);

// export the router
export default router;