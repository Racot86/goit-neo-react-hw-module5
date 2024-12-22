import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://api.themoviedb.org/3', // TMDB API Base URL

        headers:{
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`
        }

});

export default apiClient;