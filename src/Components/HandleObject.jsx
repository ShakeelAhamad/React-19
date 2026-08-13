import { useState } from "react";

const HandleObject = () => {
    const [users, setUsers] = useState({
        name: "Sam",
        age: "20",
        address: {
            city: "Ahamedabad",
            state: "Gujrate"
        }
    });

    const handleInpute = (value, type = "name") => {
        //    
        let tempData = users;
        switch (type) {
            case "name":
                tempData.name = value;
                setUsers({ ...users });
                return;
            case "age":
                tempData.age = value;
                setUsers({ ...users });
                return;
            case "city":
                tempData.address.city = value;
                setUsers({ ...tempData, address: { ...tempData.address, value } })
                return;
            case "state":
                tempData.address.state = value;
                setUsers({ ...tempData, address: { ...tempData.address, value } })
                return;
            default:
                return;
        }
    }

    return (
        <>
            <h3>Updating Objects in State</h3>
            <hr />
            <input type="text" onChange={(event) => handleInpute(event.target.value, "name")} placeholder="Enter user name" />
            <br />
            <br />
            <input type="text" onChange={(event) => handleInpute(event.target.value, "age")} placeholder="Enter user age" />
            <br />
            <br />
            <input type="text" onChange={(event) => handleInpute(event.target.value, "city")} placeholder="Enter city" />
            <br />
            <br />
            <input type="text" onChange={(event) => handleInpute(event.target.value, "state")} placeholder="Enter State" />
            <hr />
            <ul>
                <li>Name : {users.name}</li>
                <li>Age : {users.age}</li>
                <li>Addres :
                    <ul>
                        <li>City : {users.address.city}</li>
                        <li>State : {users.address.state}</li>
                    </ul>
                </li>
            </ul>
        </>
    )
}

export default HandleObject;