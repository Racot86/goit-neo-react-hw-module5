import ApiClient from "./ApiClient.js";
import {useQuery} from "@tanstack/react-query";

export const fetchTrendingToday = async ({ mediaType = 'movie' }) => {
    try {
        const response = await ApiClient.get(`/trending/${mediaType}/day`);
        return response.data; // Return the data from TMDB
    } catch (error) {
        console.error('Error fetching trending today:', error);
        throw error;
    }
};

export const useTrendingToday = (mediaType = 'movie') => {
    return useQuery({
        queryKey: ['trendingToday', mediaType], // Unique key for the query
        queryFn: () => fetchTrendingToday({ mediaType }), // Fetch function
        staleTime: 60 * 1000, // Cache data for 1 minute
        retry: 1, // Retry once if the API call fails
    });
};

const fetchMovieDetails = async (id) => {
    try {
        const response = await ApiClient.get(`/movie/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching movie:', error);
        throw error;
    }
};

export const useMovieDetails = (id) => {
    return useQuery({
        queryKey: ['movieDetails', id],
        queryFn: () => fetchMovieDetails(id),
        staleTime: 60 * 1000,
        retry: 1,
    });
};