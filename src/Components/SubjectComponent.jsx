import { useContext } from "react";
import { SubjectContext } from "./ContextData";

const SubjectComponent = () => {
    const subject = useContext(SubjectContext)
    return (
        <div style={{backgroundColor:"pink",padding:10}}>
            <h4>Subject Component</h4>
            <h4>Subject is : {subject}</h4>
        </div>
    )
}
export default SubjectComponent;