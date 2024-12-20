import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Suspense} from "react";
import Header from "./components/Header/Header.jsx";
import MainLayout from "./components/MainLayout/MainLayout.jsx";
import TrendingTodayPage from "./components/TrendingTodayPage/TrendingTodayPage.jsx";
import MoviesLayout from "./components/MoviesLayout/MoviesLayout.jsx";

function App() {


  return (
    <Router>
        <Suspense fallback={<p>Loading...</p>}>
            <Routes>
                <Route path="/" element={<MainLayout />} >
                    <Route index element={<TrendingTodayPage />} />
                    <Route path="/movies" element={<MoviesLayout />}>
                        <Route path='cast' element={<h1>cast</h1>} />
                        <Route path='reviews' element={<h1>reviews</h1>} />
                    </Route>
                </Route>

            </Routes>
        </Suspense>
    </Router>
  )
}

export default App
