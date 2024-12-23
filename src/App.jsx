import 'modern-normalize'
import './App.css'
import {Route, Routes} from 'react-router-dom';
import {lazy, Suspense, useState} from "react";
import HomePage from "./pages/HomePage.jsx";
import TrendingToday from "./components/HomePage/TrendingToday/TrendingToday.jsx";
import MoviesPage from "./pages/MoviesPage.jsx";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage.jsx";
import MovieInfo
    from "./components/MovieDetailsPage/MovieInfo/MovieInfo.jsx";
import MovieCast
    from "./components/MovieDetailsPage/MovieCast/MovieCast.jsx";
import MovieReviews
    from "./components/MovieDetailsPage/MovieReviews/MovieReviews.jsx";
import SearchPage from "./components/MoivesPage/SearchPage/SearchPage.jsx";

function App() {


    const TrendingTodayPage = lazy(() => import("./components/HomePage/TrendingToday/TrendingToday.jsx"));
    return (
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<HomePage />}>
                        <Route index element={<TrendingTodayPage/>}/>
                        <Route path="/movies" element={<MoviesPage/>}>
                            <Route index element={<SearchPage />}/>
                            <Route path=':id' element={<MovieDetailsPage/>}>
                                <Route index element={<MovieInfo/>}/>
                                <Route path="cast" element={<MovieCast />} />
                                <Route path="reviews" element={<MovieReviews />} />
                            </Route>
                        </Route>
                    </Route>
                </Routes>
            </Suspense>
)
}

export default App
