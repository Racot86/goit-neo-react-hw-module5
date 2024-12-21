import {POSTER_URL} from "../../../../constants/constants.js";
import styles from './MovieListItem.module.css'
import {useNavigate, useOutletContext} from "react-router-dom";
import PropTypes from "prop-types";
const MovieListItem = ({movie}) => {
    const navigate = useNavigate();
    const {selectedPage, handlePageChange} = useOutletContext();
    const handleClick = ()=>{
        navigate('/movies/'+movie.id,{state:{cardTab:1}});
        handlePageChange(2);
    }

    return (
        <li onClick={handleClick} className={styles.movieItem}>
            <img src={POSTER_URL + movie.poster_path} />
            <p>{movie.original_title}</p>
        </li>
    )
}
export default MovieListItem;

MovieListItem.propTypes = {
    movie: PropTypes.object.isRequired
}