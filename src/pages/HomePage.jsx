import Header from "../components/HomePage/Header/Header.jsx";
import {Outlet} from "react-router-dom";


const HomePage = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet  />
            </main>
        </>
    )
}
export default HomePage

