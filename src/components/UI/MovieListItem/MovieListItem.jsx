import {POSTER_URL} from "../../../constants/constants.js";
import styles from './MovieListItem.module.css'
import {useLocation, useNavigate} from "react-router-dom";
import PropTypes from "prop-types";
const MovieListItem = ({movie}) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = ()=>{
        navigate('/movies/'+movie.id,{state:location});
    }

    return (
        <li onClick={handleClick} className={styles.movieItem}>
            {movie.poster_path && <img src={POSTER_URL + movie.poster_path}/>}
            <p className={styles.title}>{movie.original_title}</p>
        </li>
    )
}
export default MovieListItem;

MovieListItem.propTypes = {
    movie: PropTypes.object.isRequired
}