// Create an express.Router.
// Import the controller functions from ../controllers/movieController.js.
// Define two routes and associate them with the controller functions:
// GET /search: This will handle movie searches.
// GET /movies/:id: This will fetch details for a specific movie.
// Export the router.


import express from 'express';
import { searchMovie, detailsMovie } from '../controllers/movieController.js';

// create the router which will take the place of the express app
const router = express.Router();

// localhost:3001/api/search
router.get("/search", searchMovie);

// localhost:3001/api/movie with id
router.get("/movies/:id", detailsMovie);

export default router;