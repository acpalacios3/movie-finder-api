// import { apiClient } from '../api/apiClient.js'

import axios from "axios";

// function that searches for movies by title.
// test: http://localhost:3001/api/search?title=superman at Postman
export const searchMovie = async (req, res) => {

    //get the movie title from query parameters
    const { title } = req.query;

    // if the title query parameter is missing, it should respond with a 400 Bad Request status

    if (!title) {
        return res.status(400).json({
            error: 'Title query parameter is required'
        });
    }

    //   Implement try...catch for error handling
    try {

        // make a GET request to the OMDb API using axios
        // OMDb returns movie information in JSON format
        const response = await axios.get('http://www.omdbapi.com/', {
            params: {
                s: title,
                apikey: process.env.OMDB_API_KEY
            }
        });

        //response.data contains the JSON data returned by OMDb and send the movie list to the client as JSON(res.json)
        console.log(response);
        return res.json(response.data);
       

    } catch(error) {
        // console.error('OMDb ERROR:', error);
        res.status(500).json({
            error: 'Error fetching movies'

        });

    }

};


// function that gets movie details by IMDb ID
// test: http://localhost:3001/api/movies/tt2975590 at Postman
export const detailsMovie = async (req, res) => {

    // get the movie IMDb ID from route parameters
    const { id } = req.params;

    try {

        // make a GET request to the OMDb API
        const response = await axios.get('https://www.omdbapi.com/', {
            params: {
                i: id,
                apikey: process.env.OMDB_API_KEY
            }
        });

        // send the movie details to the client
        return res.json(response.data);

    } catch (error) {

        console.error('Error:', error.message);

        return res.status(500).json({
            error: 'Error fetching movie details'
        });
    }
};