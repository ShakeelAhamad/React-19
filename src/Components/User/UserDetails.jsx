import { Link, useParams } from "react-router";
import "../../css/style.css"
import { userData } from "../../Data/userData.js";
const UserDetails = () => {
    const ParamsData = useParams();
    const id =  ParamsData.id;
    const user = userData.find(x => x.id === Number(id));
    return (
        <div style={{display:"flex",justifyContent:"center"}}>
            <Link to={"/users"}>Back To</Link>
            <div className="container">
                <div className="user-card">
                    <div>
                        <img className="img-css" src={user?.profile} />
                    </div>
                    <div className="text-wrap">
                        <h3>{user?.name} , Age : {user?.age} </h3>
                        <p>{user?.email}</p>
                        <p>{user?.role}</p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UserDetails;