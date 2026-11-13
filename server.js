// 1. In server.js, require and configure dotenv at the very top.
// 2. Set up your Express application instance.
// 3. The server should listen on a port of your choice (e.g., 3001), logging a message on startup.
// 4. Import the routes from ./routes/movieRoutes.js.
// 5. Mount your movie routes. All routes related to movies should be
// prefixed with /api. For example, a /search route in your router file will be accessible at /api/search.


// In server.js, require and configure dotenv at the very top.
import 'dotenv/config'
import express from "express";

// Import the routes from ./routes/movieRoutes.js.
// import movieRoutes from './routes/movieRoutes.js';

// Set up your Express application instance.
const app = express();

// The server should listen on a port of your choice (e.g., 3001), logging a message on startup.
const port = 3001;

// Mount your movie routes with /api
app.use("/api", movieRoutes);  

app.get("/", (req, res) => {
    res.send("Hello World SBA!")
})

// starts the server and makes it listen for requests
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})


