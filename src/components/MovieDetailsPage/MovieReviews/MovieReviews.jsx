import {useMovieReviews} from "../../../api/ApiRequests.js";
import {useParams} from "react-router-dom";
import Review from "../Review/Review.jsx";
import Loader from "../../UI/Loader/Loader.jsx";
import ErrorMessage from "../../UI/ErrorMessage/ErrorMessage.jsx";

const MovieReviews = ()=>{
    const {id} = useParams();
    const {data,isLoading,error} = useMovieReviews(id)
    return (
        <>
            <h3 style={{marginBottom:'16px'}}>Reviews</h3>
            {error && <ErrorMessage error={error.message}/>}
            {isLoading && <Loader />}
            <ul style={{
                display:"flex",
                justifyContent:'center',
                alignItems:"center",
                flexDirection:'column',
                maxHeight:"60vh",
                overflow:"scroll",
                padding:'10px',
                rowGap:'24px',
            }}>

            {data && (data.results.length ? data.results.map(review => (
                <Review key={review.id} review={review} />
            )):<li style={{minWidth:'40vw'}}>No reviews yet</li>)}
            </ul>
        </>
    )
}

export default MovieReviews;