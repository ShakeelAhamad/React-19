import { useState } from "react";

const HandleUpdateArray = () => {
    const [users,setUsers] = useState(["Anil","Sam","Peter"]);
    const [usersDetails,setUsersDetails] = useState([
        {name:"Anil",age:"20"},
        {name:"Sam",age:"24"},
        {name:"Peter",age:"28"},
    ])
    const handleInput = (name) => {
        users[users.length - 1] = name;
        setUsers([...users]);
    }

    const handleAge = (value,type) => {
        switch (type) {
            case "name":
                usersDetails[usersDetails.length - 1].name = value;
                setUsersDetails([...usersDetails]);
                return;
            case "age":
                usersDetails[usersDetails.length - 1].age = value;
                setUsersDetails([...usersDetails]);
                return;
            default:
                return;
        }
       
        console.log(value);
    }
    return (
        <>
          <h3>Updating Array in State.</h3>
          <hr/>
          <input type="text" onChange={(event) => handleInput(event.target.value)} placeholder="Enter last value" />
          <hr/>
          <ul>
            {
                users.map((user,ind) => (
                    <li key={ind}>{user}</li>
                ))
            }
          </ul>
          <hr/>
          <h3>Update Multiple Array in State</h3>
          <hr/>
          <input onChange={(event) => handleAge(event.target.value,'name')} type="text" placeholder="Enter last user  name" />
          <input onChange={(event) => handleAge(event.target.value,'age')} type="text" placeholder="Enter last user  age" />
          <hr/>
          <ul>
            {
                usersDetails.map((user,index) => (
                    <li key={index}>
                        <h4><span style={{color:"orange"}}>User Name : {user.name} </span>, <span style={{color:"brown"}}>User Age : {user.age}</span></h4>
                    </li>
                ))
            }
            
          </ul>
        </>
    )
}
export default HandleUpdateArray;