import 'modern-normalize'
import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {lazy, Suspense, useState} from "react";
import MainLayout from "./pages/MainLayout/MainLayout.jsx";
import TrendingTodayPage from "./pages/TrendingTodayPage/TrendingTodayPage.jsx";
import MoviesLayout from "./pages/MoviesLayout/MoviesLayout.jsx";
import MovieDetails from "./pages/MoviesLayout/components/MovieDetails/MovieDetails.jsx";
import MovieDetailsCardInfo
    from "./pages/MoviesLayout/components/MovieDetails/components/MovieDetailsCardInfo/MovieDetailsCardInfo.jsx";

function App() {

    const [selectedPage, setSelectedPage] = useState(1);
    const TrendingTodayPage = lazy(() => import("./pages/TrendingTodayPage/TrendingTodayPage"));
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/"
                           element={<MainLayout selectedPage={selectedPage} handlePageChange={setSelectedPage}/>}>
                        <Route index element={<TrendingTodayPage/>}/>
                        <Route path="/movies" element={<MoviesLayout/>}>
                            <Route path=':id' element={<MovieDetails/>}>
                                <Route index element={<MovieDetailsCardInfo/>}/>
                                <Route path="cast" element={<p>cast</p>} />
                                <Route path="reviews" element={<p>reviews</p>} />
                            </Route>
                        </Route>
                    </Route>
                </Routes>
            </Suspense>

        </Router>
)
}

export default App
