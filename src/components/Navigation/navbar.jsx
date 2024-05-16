import "./navbar.css"
import { Link } from "react-router-dom"

const NavBar = () => {

    return(
    <div className="navBar">
    <ul>
        <li><Link className="homeNav" to="/">HOME</Link></li>
        <li><Link className="loginNav" to="/connexion">LOGIN</Link></li>
    </ul>
    </div>
    )
}

export default NavBar