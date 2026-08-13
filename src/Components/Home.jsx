import { useEffect, useState } from "react";

const Home = () => {
    const [userData, setUserData] = useState();
    useEffect(() => {
        getUser();
    }, []);

    async function getUser() {
        const url = "https://dummyjson.com/users";
        let response = await fetch(url);
        response = await response.json();
        setUserData(response.users);
    }
    console.log(userData);
    return (
        <>
            <h4>Home Page</h4>
            <div className="container">

                {
                    userData && userData.map((user, ind) => (
                        <div className="user-card" key={ind}>
                            <div>
                                <img className="img-css" src={user.image} />
                            </div>
                            <div className="text-wrap">
                                <h3>
                                    {user?.firstName + " " + user.maidenName + " " + user.lastName}
                                    , Age : {user?.age}
                                </h3>
                                <p>{user.role}</p>
                                <p>{user.phone}</p>
                                <p>{user.university}</p>
                                <p>{user.email}</p>
                            </div>
                        </div>
                    ))
                }

            </div>
        </>
    )
}

export default Home;