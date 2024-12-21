import styles from "./MovieDetailsCardInfo.module.css"
import {useOutletContext} from "react-router-dom";

const MovieDetailsCardInfo = () => {
    const {movie} = useOutletContext();
    return (
        <div className={styles.movieInfo}>
            <div className={styles.score}>
                <p>Score: {movie.vote_average}</p>
                <p>(based on {movie.vote_count} votes)</p>
            </div>
            <h3>Overview</h3>
            <p className={styles.overview}>{movie.overview}</p>
            <h3>Genres</h3>
            <div className={styles.genresWrapper}>
                {movie.genres.map((genre) => (
                    <p key={genre.id}>{genre.name}</p>
                ))}
            </div>
        </div>
    )
}
export default MovieDetailsCardInfo