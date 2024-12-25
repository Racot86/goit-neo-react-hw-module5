import { MdDirectionsOff } from "react-icons/md";
import styles from './NotFoundPage.module.css';
import {Link} from "react-router-dom";
const NotFoundPage = () => {
    return (
        <div className={styles.notFoundPage}>
            <MdDirectionsOff />
            <p>Looks like it is turn to nowhere</p>
            <Link to="/">Go Home</Link>
        </div>
    )
}
export default NotFoundPage;

