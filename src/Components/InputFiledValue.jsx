import { useState } from "react";

const InputFiledValue = () => {
    const [name,setName] = useState('');
    return (
        <div>
            <h3>Input Filed Value Demo</h3>
            <br>
            </br>
            <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Enter any value" />
            <br/>
            <h3>{name}</h3>
            <br></br>
            <button onClick={() => setName("")}>Clear value</button>
        </div>
    )
}

export default InputFiledValue;