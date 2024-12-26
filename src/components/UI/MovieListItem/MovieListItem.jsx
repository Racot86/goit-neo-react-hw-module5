import {POSTER_URL} from "../../../constants/constants.js";
import styles from './MovieListItem.module.css'
import {Link, useLocation, useNavigate} from "react-router-dom";
import PropTypes from "prop-types";
const MovieListItem = ({movie}) => {
    const navigate = useNavigate();
    const location = useLocation();



    return (
        <li  className={styles.movieItem}>
            <Link className={styles.link} to={`/movies/${movie.id}` } state={location}>
            {movie.poster_path && <img src={POSTER_URL + movie.poster_path}/>}
            <p className={styles.title}>{movie.original_title}</p>
            </Link>
        </li>
    )
}
export default MovieListItem;

MovieListItem.propTypes = {
    movie: PropTypes.object.isRequired
}