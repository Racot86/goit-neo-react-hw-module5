import styles from './Navigation.module.css'
import clsx from "clsx";
import {NavLink, useLocation} from "react-router-dom";
import {getEndPoint} from "../../../utilites/utilites.js";
const Navigation = () => {


    const location = useLocation();

    return (
      <header className={styles.header}>
          <ul className={styles.menu}>
            <li>
                <NavLink
                    className={clsx(
                        styles.menuItem,
                        !getEndPoint(location.pathname) && styles.selected
                    )} to='/'>Home</NavLink>
            </li>
            <li >
                <NavLink className={clsx(
                    styles.menuItem,
                    location.pathname.includes('movies') && styles.selected
                )} to='/movies'>Movies</NavLink>
            </li>
          </ul>
      </header>
  )
}

export default Navigation
