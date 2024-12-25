import styles from './MovieTabList.module.css'
import clsx from "clsx";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {getEndPoint} from "../../../utilites/utilites.js";


const MovieTabList = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const location = useLocation();


    return (

        <ul className={styles.tabList} >
            <li
                className={clsx(styles.tabItem,getEndPoint(location.pathname)===id && styles.selectedTab)}
                onClick={() => {navigate('/movies/'+id,{state:location.state})}}
            >Info</li>
            <li
                className={clsx(styles.tabItem,getEndPoint(location.pathname)==='cast' && styles.selectedTab)}
                onClick={() => {navigate(`cast`,{state:location.state})}}
            >Cast</li>
            <li
                className={clsx(styles.tabItem,getEndPoint(location.pathname)==='reviews' && styles.selectedTab)}
                onClick={() => {navigate(`reviews`,{state:location.state})}}
            >Reviews</li>
        </ul>
    )
}
export default MovieTabList
