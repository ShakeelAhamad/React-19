import { userData } from "../Data/userData.js";
const HandleLoopMap = () => {
    console.log(userData)
    return (
        <div>
            <h3>Loop in JSX with Map Function.</h3>
            <table border={2}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData.map((user,ind) => (
                            <tr key={ind}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default HandleLoopMap;