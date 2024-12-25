import {Outlet, useLocation, useNavigate, useParams} from "react-router-dom";
import {useMovieDetails} from "../../api/ApiRequests.js";
import {BACKDROP_URL, DETAIL_URL} from "../../constants/constants.js";
import MovieTabList from "../../components/MovieDetailsPage/MovieTabList/MovieTabList.jsx";
import styles from "./MovieDetailsPage.module.css";
import { IoMdClose } from "react-icons/io";
import Loader from "../../components/UI/Loader/Loader.jsx";
import ErrorMessage from "../../components/UI/ErrorMessage/ErrorMessage.jsx";
import {getEndPoint} from "../../utilites/utilites.js";

const MovieDetailsPage = () => {
    const { id} = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const {data:movie,isLoading, error} = useMovieDetails(id);

    const onClose = () =>{
        console.log('location', location.state);
        navigate(location.state);

    }
    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            {error && <ErrorMessage error={error.message}/>}
            {isLoading && <Loader />}
            {movie &&
                <>
                    {movie.backdrop_path &&
                        <img
                            style={{
                                width: "100%",
                                height: "100%",
                                position: "absolute",
                                top: 0,
                                left: 0,
                                objectFit: "cover",
                                opacity: 0.2,
                                zIndex: -1
                            }}
                            src={BACKDROP_URL + movie.backdrop_path}
                        />
                    }
                <div className={styles.movieCard}>
                    <IoMdClose className={styles.closeBtn} onClick={onClose} />
                    {movie.poster_path && <img src={DETAIL_URL + movie.poster_path}/>}
                    <div style={{display:"flex", flexDirection:"column"}}>
                        <h2 style={{maxWidth:"95%"}}>{movie.title + "(" + movie.release_date.slice(0, 4) + ")"}</h2>
                        {movie.title !== movie.original_title && <p>{movie.original_title}</p>}
                        <Outlet context={{movie}} />
                        <MovieTabList  />
                    </div>
                </div>

                </>
                }
                </div>

                )
            }

            export default MovieDetailsPage;