import { useRef } from "react";

const HandleUseRefHook = () =>{
    const inputRef = useRef(null);
    const inputHandler = () => {
        inputRef.current.focus();
        inputRef.current.style.color="green";
        inputRef.current.placeholder=""
        console.log("okkk",inputRef);
    }
    const toggelHandler = () => {
        if(inputRef.current.style.display !="none"){
            inputRef.current.style.display ="none";
        }else{
            inputRef.current.style.display ="inline";
        }
    }
    return (
        <>
            <h3>useRef Hook in React</h3>
            <button onClick={toggelHandler}>Toggel</button>
            <input ref={inputRef} type="text" placeholder="Enter user name" />
            <button onClick={inputHandler}>Focus on input</button>
        </>
    )
}
export default HandleUseRefHook;