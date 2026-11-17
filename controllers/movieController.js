// import { apiClient } from '../api/apiClient.js'

import axios from "axios";

// function that searches for movies by title.
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


export const detailsMovie = (req, res) => {
    res.send("Movie details route");
};