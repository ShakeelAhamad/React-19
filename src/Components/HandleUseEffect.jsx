import { useEffect, useState } from "react";

const HandleUseEffect = () => {
    const [counter,setCounter] = useState(0);
    const [data,setData] = useState(0);
    function CallOne(){
        console.log("Call One function called");
    }
    
    useEffect(() => {
        CounterFunction();
    },[counter]);

    useEffect(() => {
         CallOne();
    },[])

    function CounterFunction(){
        console.log("Counter Function "+counter);
    }
    return(
        <div>
            <h3>useEffect Hooks</h3>
            <button onClick={() => setCounter(counter+1)}>Counter {counter}</button>
            <button onClick={() => setData(data+1)}>Data {data}</button>
        </div>
    )
}
export default HandleUseEffect;