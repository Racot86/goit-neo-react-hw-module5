import styles from './Header.module.css'
import PropTypes from "prop-types";
import clsx from "clsx";
import {useNavigate} from "react-router-dom";
const Header = ({selectedPage, handlePageChange}) => {

    const navigate = useNavigate();


    return (
      <header className={styles.header}>
          <ul className={styles.menu}>
            <li
                className={clsx(selectedPage===1 && styles.selected)}
                onClick={()=>{
                    handlePageChange(1);
                    navigate('/')
                }}
            ><p>Home</p></li>
            <li className={clsx(selectedPage===2 && styles.selected)}
                onClick={()=>{
                    handlePageChange(2);
                    navigate('/movies')
                }}
            ><p>Movies</p></li>
          </ul>
      </header>
  )
}

export default Header

Header.propTypes = {
    selectedPage: PropTypes.number.isRequired,
    handlePageChange: PropTypes.func.isRequired,
}