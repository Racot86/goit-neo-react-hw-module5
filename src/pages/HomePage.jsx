import Navigation from "../components/HomePage/Navigation/Navigation.jsx";
import {Outlet} from "react-router-dom";


const HomePage = () => {
    return (
        <>
            <Navigation />
            <main>
                <Outlet  />
            </main>
        </>
    )
}
export default HomePage

