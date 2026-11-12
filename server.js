// In server.js, require and configure dotenv at the very top.
// Set up your Express application instance.
// The server should listen on a port of your choice (e.g., 3001), logging a message on startup.
// Import the routes from ./routes/movieRoutes.js.
// Mount your movie routes. All routes related to movies should be
// prefixed with /api. For example, a /search route in your router file will be accessible at /api/search.


// sets up our environment variables 
import 'dotenv/config'

import express from "express";

const port = 3001;

import movieRoutes from './routes/movieRoutes.js';

const app = express();

// use our post routes like middleware
app.use("/api", movieRoutes);  

app.get("/", (req, res) => {
    res.send("Hello World SBA!")
})


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})


