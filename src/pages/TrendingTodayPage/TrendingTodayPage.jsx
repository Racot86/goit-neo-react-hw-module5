import {useTrendingToday} from "../../api/ApiRequests.js";
import MovieListItem from "./components/MovieListItem/MovieListItem.jsx";
import styles from './TrendingTodayPage.module.css'
import {ThreeDots} from "react-loader-spinner";
import Loader from "../../components/Loader/Loader.jsx";
import MovieList from "./components/MovieList/MovieList.jsx";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage.jsx";


const TrendingTodayPage = () => {

    const {data:trendingMovies, isLoading, error} = useTrendingToday('movie')


    return (
        <div className={styles.trendingContainer}>
            <h2 className={styles.heading}>Movies Trending Today</h2>
            {error && <ErrorMessage error={error.message}/>}
            {isLoading && <Loader />}
            {trendingMovies && <MovieList movies={trendingMovies.results}/>}

        </div>
    )
}
export default TrendingTodayPage