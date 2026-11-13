import { apiClient } from '../api/apiClient.js'

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
        const response = await axios.get('http://www.omdbapi.com/', {
            params: {
                s: title,
                apikey: process.env.OMDB_API_KEY
            }
        });

        res.json(response.data);

    } catch {
        res.status(500).json({
            error: 'Error fetching movies'

        });

    }

}