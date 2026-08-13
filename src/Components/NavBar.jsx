import { NavLink, Outlet } from "react-router";
import "../css/header.css";
const NavBar = () => {

    return (
        <>
            <div>
                <div className="header">
                    <div>
                        <NavLink className="link" to={"/"}><h4>Logo</h4></NavLink>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <NavLink className="link" to={"/"}> Home</NavLink>
                            </li>
                            <li>
                                <NavLink className="link" to={"/in/user/about"}> About</NavLink>
                            </li>
                            <li>
                                <NavLink className="link" to={"/in/user/login"}> Login</NavLink>
                            </li>
                            <li>
                                <NavLink className="link" to={"/college"}> College</NavLink>
                            </li>
                            <li>
                                <NavLink className="link" to={"/users"}> Users</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <Outlet />
            </div>


        </>
    )
}

export default NavBar