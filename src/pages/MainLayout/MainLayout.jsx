import Header from "./components/Header/Header.jsx";
import {Outlet} from "react-router-dom";


const MainLayout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet  />
            </main>
        </>
    )
}
export default MainLayout

