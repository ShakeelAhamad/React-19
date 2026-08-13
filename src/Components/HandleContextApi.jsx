import { useState } from "react";
import Collage from "./Collage";
import { SubjectContext } from "./ContextData";

const HandleContextApi = () => {
    const [subject,setSubject] = useState("English")
    return (
        <div style={{ backgroundColor: "yellowgreen", padding: 10 }}>
            <SubjectContext.Provider value={subject}>
                <h5>Context API Demo</h5>
                <select value={subject} onChange={(event) => setSubject(event.target.value)}>
                    <option value={""}>Select Subject</option>
                    <option value={"Math"}>Math</option>
                    <option value={"English"}>English</option>
                    <option value={"History"}>History</option>
                </select>
                <button onClick={() => setSubject("")}>Clear Subject</button>
                <Collage />
            </SubjectContext.Provider>

        </div>
    )
}
export default HandleContextApi;