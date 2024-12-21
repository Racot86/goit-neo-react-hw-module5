import {useTrendingToday} from "../../api/ApiRequests.js";
import MovieListItem from "./components/MovieListItem/MovieListItem.jsx";
import styles from './TrendingTodayPage.module.css'


const TrendingTodayPage = () => {

    const {data:trendingMovies, isLoading, error} = useTrendingToday('movie')
    if(trendingMovies){
        console.log(trendingMovies)
    }

    return (
        <div className={styles.trendingContainer}>
            <h2 className={styles.heading}>Movies Trending Today</h2>
                <ul className={styles.trendingList}>
                    {trendingMovies && trendingMovies.results.map(movie => <MovieListItem key={movie.id} movie={movie} />)}
                </ul>
        </div>
    )
}
export default TrendingTodayPage