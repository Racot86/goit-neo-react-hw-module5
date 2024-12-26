import styles from './MovieTabList.module.css'
import clsx from "clsx";
import {NavLink, useLocation, useParams} from "react-router-dom";
import {getEndPoint} from "../../../utilites/utilites.js";


const MovieTabList = () => {
    const {id} = useParams();
    const location = useLocation();


    return (
        <ul className={styles.tabList} >
            <li><NavLink
                to={'/movies/'+id}
                state={location.state}
                className={clsx(styles.tabItem,getEndPoint(location.pathname)===id && styles.selectedTab)}
            >Info</NavLink></li>
            <li><NavLink
                to={'cast'}
                state={location.state}
                className={clsx(styles.tabItem,getEndPoint(location.pathname)==='cast' && styles.selectedTab)}
            >Cast</NavLink></li>
            <li><NavLink
                to={'reviews'}
                state={location.state}
                className={clsx(styles.tabItem,getEndPoint(location.pathname)==='reviews' && styles.selectedTab)}
            >Reviews</NavLink></li>
        </ul>
    )
}
export default MovieTabList
