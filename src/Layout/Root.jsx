import { Outlet } from "react-router-dom"
import Footer from "../pages/Shared/Footer/Footer"
import NavBar from "../pages/Shared/NavBar/NavBar"

const Root = () => {
    return (
        <div className="max-w-7xl mx-auto px-12">
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Root