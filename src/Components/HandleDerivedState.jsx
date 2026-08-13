import { useState } from "react";

const HandleDerivedState = () => {
    const[users,setUsers] = useState([]);
    const[user,setUser] = useState('');
    const handleUser = () => {
        setUsers([...users,user])
    }
    const totalUser = users.length;
    const lastUser = users[users.length-1];
    const uniqueUser = [... new Set(users)].length;
    return(
        <>
           <h3>Derived State in React js</h3>
           <div>
              <h3>Total User : {totalUser}</h3>
              <h3>Last User : {lastUser}</h3>
              <h3>Uniqe User : {uniqueUser}</h3>
           </div>
           <input type="text" placeholder="Enter user" onChange={(event)=>setUser(event.target.value)} />
           <button onClick={handleUser}>Add User</button>
           <hr/>
           <ul>
            {
                users.map((name,index) => (
                      <li key={index}>{name}</li>
                ))
            }
           </ul>
        </>
    )
}
export default HandleDerivedState;