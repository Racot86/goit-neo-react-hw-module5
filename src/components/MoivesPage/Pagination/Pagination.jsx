import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import styles from "./Pagination.module.css";
import clsx from "clsx";
import PropTypes from "prop-types";
const Pagination = ({page, setPage, totalPages}) => {

    return (
        <div className={styles.pagination}>
            <IoIosArrowBack className={clsx(styles.arrow,page===1 && styles.disabled)} onClick={() => page>1 && setPage(page - 1)} />
            <IoIosArrowForward className={clsx(styles.arrow,page===totalPages && styles.disabled)} onClick={() => page<totalPages && setPage(page + 1)} />
        </div>
    )
}
export default Pagination;

Pagination.propTypes = {
    page: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    setPage: PropTypes.func.isRequired,
}