import { Link, NavLink, Outlet } from "react-router";

const CollegeNavBar = () => {
    return(
        <div className="college" style={{textAlign:"center"}}>
           <h4>College Details</h4>
           <h2>
            <Link to={"/"}>Go Back To Home</Link>
           </h2>
           <NavLink className={"nav-link"} to={""}>Students</NavLink>
           <NavLink className={"nav-link"} to={"department"}>Departments</NavLink>
           <NavLink className={"nav-link"} to={"details"}>Details</NavLink>
           <Outlet/>
        </div>
    )
}

export default CollegeNavBar;