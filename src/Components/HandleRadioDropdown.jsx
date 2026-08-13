import { useState } from "react";

const HandleRadioDropdown = () => {
    const [gender,setGender] = useState("Femail");
    const [city,setCity] = useState("Noida");
    return (
        <div>
            <h3>Handle Radio Dropdown</h3>
            <h4>Selected Gender : {gender}</h4>
            <input type="radio" onChange={(event) => setGender(event.target.value)} checked={gender == "Mail"} name="gender" id="mail" value={"Mail"} />
            <label htmlFor="mail">Mail</label>
            <input type="radio" onChange={(event) => setGender(event.target.value)} checked={gender == "Femail"} name="gender" id="femail" value={"Femail"} />
            <label htmlFor="femail">Femail</label>
            <div>
                <h4>Selected City : {city}</h4>
                <select onChange={(event) => setCity(event.target.value)} defaultValue={"Nodia"}>gender
                    <option value={"Ahamedabad"}>Ahamedabad</option>
                    <option value={"Gorakhpur"}>Gorakhpur</option>
                    <option value={"Nodia"}>Noida</option>
                    <option value={"Delhi"}>Delhi</option>
                </select>
            </div>
        </div>
    )
}

export default HandleRadioDropdown;