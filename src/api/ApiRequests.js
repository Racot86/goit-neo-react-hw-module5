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

const fetchMovieCast = async (id) => {
    try {
        const response = await ApiClient.get(`/movie/${id}/credits`);
        return response.data;
    } catch (error) {
        console.error('Error fetching cast:', error);
        throw error;
    }
};

export const useMovieCast = (id) => {
    return useQuery({
        queryKey: ['movieCast', id],
        queryFn: () => fetchMovieCast(id),
        staleTime: 60 * 1000,
        retry: 1,
    });
};

const fetchMovieReviews = async (id) => {
    try {
        const response = await ApiClient.get(`/movie/${id}/reviews`);
        return response.data;
    } catch (error) {
        console.error('Error fetching reviews:', error);
        throw error;
    }
};

export const useMovieReviews = (id) => {
    return useQuery({
        queryKey: ['movieReviews', id],
        queryFn: () => fetchMovieReviews(id),
        staleTime: 60 * 1000,
        retry: 1,
    });
};

const searchMovies = async (query, page = 1) => {
    const response = await ApiClient.get('/search/movie', {
        params: {
            query, // Search term
            page,  // Page number for pagination
        },
    });
    return response.data;
};

export const useSearchMovies = (query,page) => {
    return useQuery({
        queryKey: ['searchMovies', query,page],
        queryFn: () => searchMovies(query,page),
        staleTime: 60 * 1000,
        retry: 1,
    });
};