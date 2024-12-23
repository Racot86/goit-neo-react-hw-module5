import styles from './MovieList.module.css'
import MovieListItem from "../MovieListItem/MovieListItem.jsx";
import PropTypes from "prop-types";

const MovieList = ({movies}) => {
    return (
        <ul className={styles.trendingList}>
            {movies.map(movie => <MovieListItem key={movie.id} movie={movie}/>)}
        </ul>
    )
}
export default MovieList

MovieList.propTypes = {
    movies: PropTypes.array.isRequired,
}