import { useEffect } from "react";

const Counter = ({counter,data}) => {
    // const handlerCounter = () => {
    //     console.log("handle Counter call");
    // }
    // useEffect(() => {
    //     handlerCounter();
    // },[]);

    // const handleData = () => {
    //     console.log("handle data call");
    // }

    // useEffect(() => {
    //    handleData();
    // },[data]);
    useEffect(() => {
           console.log("Mount phase only");
    },[]);

    useEffect(() => {
        console.log("Update phase only");
    },[data])

    useEffect(() => {
        return () => {
            console.log("unmount phase only");
        }
    },[])
    return (
        <div>
            <h3>Counter Component</h3>
            <span>Counter Value {counter}</span>
            <h4>Data Value {data}</h4>
        </div>
    )
}

export default Counter;