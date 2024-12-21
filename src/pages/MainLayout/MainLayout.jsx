import Header from "./components/Header/Header.jsx";
import {Outlet} from "react-router-dom";
import PropTypes from "prop-types";

const MainLayout = ({selectedPage,handlePageChange}) => {
    return (
        <>
            <Header selectedPage={selectedPage} handlePageChange={handlePageChange} />
            <main>
                <Outlet context={{selectedPage,handlePageChange}} />
            </main>
        </>
    )
}
export default MainLayout

MainLayout.propTypes = {
    selectedPage: PropTypes.number,
    handlePageChange: PropTypes.func,
}