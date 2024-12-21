import {Outlet} from "react-router-dom";

const MoviesLayout = () => {
    return (
        <div style={{marginTop: '76px'}}>
            <p>Movies</p>
            <Outlet />
        </div>
    )
}
export default MoviesLayout