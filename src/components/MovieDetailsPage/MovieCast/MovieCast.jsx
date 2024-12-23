import {useMovieCast} from "../../../api/ApiRequests.js";
import {useParams} from "react-router-dom";
import ActorCard from "../ActorCard/ActorCard.jsx";
import styles from "./MovieCast.module.css";
import {ThreeDots} from "react-loader-spinner";
import Loader from "../../UI/Loader/Loader.jsx";
import ErrorMessage from "../../UI/ErrorMessage/ErrorMessage.jsx";

const MovieCast = () =>{
    const {id} = useParams();
    const {data, isLoading, error} = useMovieCast(id)

    return (
        <div >
            <h2 style={{margin:"8px"}}>Cast</h2>
            {error && <ErrorMessage error={error.message}/>}
            {isLoading && <Loader />}
            {data &&
            <ul className={styles.actors}>
                {
                    data.cast.map(actor => (
                        <ActorCard key={actor.id} actor={actor} />
                    ))
                }
            </ul>
            }
        </div>
    )
}
export default MovieCast