import { useRef } from "react";
import HandleInput from "./HandleInput";

const HandleForwardRef = () => {
    const inputRef = useRef(null);
    const updateInput = () => {
        inputRef.current.value = 200;
        inputRef.current.focus();
        inputRef.current.style.color ="red"
    }
    return (
        <>
           <HandleInput ref={inputRef}/>
           <button onClick={updateInput}>Update value</button>
        </>
    )
}
export default HandleForwardRef;