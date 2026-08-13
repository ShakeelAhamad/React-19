import { Link } from "react-router";

const PageNotFound = () => {
    return(
        <div style={{textAlign:"center"}}>
          <h3>Page Not Found</h3>
          <div>
            <Link to={"/"}>Go To Home</Link>
          </div>
          <img style={{width:"60%"}} src="https://admiral.digital/wp-content/uploads/2023/08/404_page-not-found.png" />
        </div>
    )
}

export default PageNotFound;