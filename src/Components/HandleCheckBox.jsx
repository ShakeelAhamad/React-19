import { useState } from "react";

const HandleCheckBox = () => {
    const [skills,setSkills] = useState([]);
    const handleSkills = (event) => {
        var selected_value = event.target.value;
        if(event.target.checked){
            setSkills([...skills,selected_value]);
        }else{
            setSkills([...skills.filter((item) => item!=selected_value)])
        }
    }
    return (
        <div>
            <h4>Handle Check Bok value</h4>
            <h5>Select Your Checkbox</h5>
            <input onChange={handleSkills} type="checkbox" id="php" value={"PHP"} />
            <label htmlFor="php">PHP</label>
            <br /><br />
            <input onChange={handleSkills} type="checkbox" id="java" value={"JAVA"} />
            <label htmlFor="java">JAVA</label>
            <br /><br />
            <input onChange={handleSkills} type="checkbox" id="js" value={"JS"} />
            <label htmlFor="js">JS</label>
            <br /><br />
            <input onChange={handleSkills} type="checkbox" id="node" value={"Node"} />
            <label htmlFor="node">Node</label>
            <br /><br />
            <div>
                <h4>
                  {skills.toString()}
                </h4>
            </div>
        </div>
    )
}

export default HandleCheckBox;