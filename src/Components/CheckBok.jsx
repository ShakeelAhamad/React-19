import { useState } from "react";

const CheckBok = () => {
    const [skills,setSkills] = useState([]);
    const handleInput = (event) => {
        let value = event.target.value;
           if(event.target.checked){
               setSkills(prev => [...prev, value]);
           }else{
                setSkills(skills.filter((item) => item !== value));
           }
    }
    return (
        <>
            <div style={{ border: "1px solid black", width: 250, borderRadius: 5 }}>
                <input type="checkbox" onChange={handleInput} name="php" value={"PHP"} id="php" />
                <label htmlFor="php">PHP</label>
                <br>
                </br>
                <input type="checkbox" onChange={handleInput} name="java" value={"JAVA"} id="java" />
                <label htmlFor="java">JAVA</label>
                <br>
                </br>
                <input type="checkbox" onChange={handleInput} name="node" value={"NODE"} id="node" />
                <label htmlFor="node">Node JS</label>
                <br>
                </br>
                <input type="checkbox" onChange={handleInput} name="asp.net" value={"ASP.NET"} id="asp.net" />
                <label htmlFor="asp.net">ASP.NET</label>
            </div>
            <div>
                <h3>Technical Skills</h3>
                <ul>
                    <li>{skills.join(", ")}</li>
                </ul>
            </div>
        </>
    )
}
export default CheckBok;