import {useTrendingToday} from "../../../api/ApiRequests.js";
import MovieListItem from "../../UI/MovieListItem/MovieListItem.jsx";
import styles from './TrendingToday.module.css'
import {ThreeDots} from "react-loader-spinner";
import Loader from "../../UI/Loader/Loader.jsx";
import MovieList from "../../UI/MovieList/MovieList.jsx";
import ErrorMessage from "../../UI/ErrorMessage/ErrorMessage.jsx";


const TrendingToday = () => {

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
export default TrendingToday