import styles from './Header.module.css'
import clsx from "clsx";
import {useLocation, useNavigate} from "react-router-dom";
import {getEndPoint} from "../../../../utilites/utilites.js";
const Header = () => {

    const navigate = useNavigate();
    const location = useLocation();

    return (
      <header className={styles.header}>
          <ul className={styles.menu}>
            <li
                className={clsx(!getEndPoint(location.pathname) && styles.selected)}
                onClick={()=>{
                    navigate('/')
                }}
            ><p>Home</p></li>
            <li className={clsx(location.pathname.includes('movies') && styles.selected)}
                onClick={()=>{
                    navigate('/movies')
                }}
            ><p>Movies</p></li>
          </ul>
      </header>
  )
}

export default Header
