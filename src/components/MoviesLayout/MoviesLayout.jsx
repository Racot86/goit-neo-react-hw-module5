import {Outlet} from "react-router-dom";

const MoviesLayout = () => {
    return (
        <div>
            <p>Movies</p>
            <Outlet />
        </div>
    )
}
export default MoviesLayout