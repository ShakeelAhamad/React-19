import { useState } from "react";

const ControlledComponent = () => {
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    return(
        <div>
            <h3>Controlled Component</h3>
            <br></br>
            <form id="regForm">
                <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Enter First name"  />
                <br/><br/>
                <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter email" />
                 <br/><br/>
                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter Password" />
                 <br/><br/>
                <button>Submit</button>
                <button onClick={() =>{ setName('');setEmail('');setPassword('');}}>Clear</button>
            </form>
            <div>
                <h2>Use Name : <span>{name}</span></h2>
                <h2>Use Email : <span>{email}</span></h2>
                <h2>Use Passord : <span>{password}</span></h2>
            </div>
        </div>
    )
}
export default ControlledComponent;