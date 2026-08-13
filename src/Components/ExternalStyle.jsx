import "../css/style.css";
import { userData } from "../Data/userData";
const ExternalStyle = () => {
    return (
        <>
            <h3 className="heading">External Style</h3>
            <div className="container">
                {
                    userData.map((user, ind) => (
                        <div className="user-card" key={ind}>
                            <div>
                                <img className="img-css" src={user.profile} />
                            </div>
                            <div className="text-wrap">
                                <h3>{user.name}</h3>
                                <p>{user.role}</p>
                            </div>
                        </div>
                    ))
                }

            </div>

        </>
    )
}

export default ExternalStyle;