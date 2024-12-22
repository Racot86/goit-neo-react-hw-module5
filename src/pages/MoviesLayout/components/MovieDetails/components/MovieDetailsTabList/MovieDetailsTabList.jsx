import styles from './MovieDetailsTabList.module.css'
import PropTypes from "prop-types";
import clsx from "clsx";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {getEndPoint} from "../../../../../../utilites/utilites.js";


const MovieDetailsTabList = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const location = useLocation();


    return (

        <ul className={styles.tabList} >
            <li
                className={clsx(styles.tabItem,getEndPoint(location.pathname)===id && styles.selectedTab)}
                onClick={() => {
                    navigate('/movies/'+id,{state:{from:location.state.from, query:location.state?.query, page:location.state?.page}});
                }}
            >Info</li>
            <li
                className={clsx(styles.tabItem,getEndPoint(location.pathname)==='cast' && styles.selectedTab)}
                onClick={() => {
                    navigate(`cast`,{state:{from:location.state.from, query:location.state?.query, page:location.state?.page}});
                }}
            >Cast</li>
            <li
                className={clsx(styles.tabItem,getEndPoint(location.pathname)==='reviews' && styles.selectedTab)}
                onClick={() => {
                    navigate(`reviews`,{state:{from:location.state.from, query:location.state?.query, page:location.state?.page}});
                }}
            >Reviews</li>
        </ul>
    )
}
export default MovieDetailsTabList
