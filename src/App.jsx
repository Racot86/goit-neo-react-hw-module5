import 'modern-normalize'
import './App.css'
import {Route, Routes} from 'react-router-dom';
import {lazy, Suspense} from "react";
import Loader from "./components/UI/Loader/Loader.jsx";
import Navigation from "./components/UI/Navigation/Navigation.jsx";

function App() {


    const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
    const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage.jsx"));
    const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage/MovieDetailsPage.jsx"));
    const MovieInfo = lazy(() => import("./components/MovieDetailsPage/MovieInfo/MovieInfo.jsx"));
    const MovieCast = lazy(() => import("./components/MovieDetailsPage/MovieCast/MovieCast.jsx"));
    const MovieReviews = lazy(() => import("./components/MovieDetailsPage/MovieReviews/MovieReviews.jsx"));
    const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage.jsx"));

    return (
        <>
            <Navigation/>
            <Suspense fallback={<Loader/>}>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/movies" element={<MoviesPage/>}/>
                    <Route path='/movies/:id' element={<MovieDetailsPage/>}>
                        <Route index element={<MovieInfo/>}/>
                        <Route path="cast" element={<MovieCast/>}/>
                        <Route path="reviews" element={<MovieReviews/>}/>
                    </Route>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            </Suspense>
        </>
    )
}

export default App
