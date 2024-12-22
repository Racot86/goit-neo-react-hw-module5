import {Outlet} from "react-router-dom";

const MoviesLayout = () => {
    return (
        <div style={{marginTop: '76px'}}>
            <Outlet />
        </div>
    )
}
export default MoviesLayout