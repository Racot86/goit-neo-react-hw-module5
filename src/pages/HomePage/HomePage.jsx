import {useTrendingToday} from "../../api/ApiRequests.js";
import styles from "./HomePage.module.css";
import ErrorMessage from "../../components/UI/ErrorMessage/ErrorMessage.jsx";
import Loader from "../../components/UI/Loader/Loader.jsx";
import MovieList from "../../components/UI/MovieList/MovieList.jsx";


const HomePage = () => {

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
export default HomePage

