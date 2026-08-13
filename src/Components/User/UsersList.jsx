import { Link } from "react-router";
import { userData } from "../../Data/userData.js";
const UsersList = () => {
    return (
        <div style={{ textAlign: "center" }}>
            <div>
                <h4>User List</h4>
            </div>
            <div>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Profile</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userData.map((user, ind) => (
                                <tr key={ind}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.age}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td>
                                        <img style={{ width: 50, height: 50 }} src={user.profile} />
                                    </td>
                                    <td>
                                        <Link to={"/users/" + user.id}>Edit</Link>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>


        </div>
    )
}

export default UsersList;