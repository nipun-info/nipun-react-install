import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div className="flex flex-col items-center">
            <h2>Not Found Pages</h2>
            <img className="w-[600px] h-auto" src="https://i.ibb.co/Phm2hth/6342464-1.jpg" alt="" />

            <Link className="btn" to='/' >Go to Home</Link>

        </div>
    )
}

export default NotFound