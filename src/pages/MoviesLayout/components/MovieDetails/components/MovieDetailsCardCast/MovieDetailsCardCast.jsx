import {useMovieCast} from "../../../../../../api/ApiRequests.js";
import {useParams} from "react-router-dom";
import ActorCard from "./components/ActorCard/ActorCard.jsx";
import styles from "./MovieDetailsCardCast.module.css";
import {ThreeDots} from "react-loader-spinner";
import Loader from "../../../../../../components/Loader/Loader.jsx";
import ErrorMessage from "../../../../../../components/ErrorMessage/ErrorMessage.jsx";

const MovieDetailsCardCast = () =>{
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
export default MovieDetailsCardCast