import { useState } from "react";

const HandleHooks = () => {
    const [user, setUser] = useState();//This is use 
    if (condition) { // It is not use this
        const [data, setData] = useState();
    }
    function FrindList() {//Yes This is prefest 
        const [onlineStatus, setOnlineStatus] = useOnlineStatus();
    }

    function setOnlineStatus() {// x Not a component or custom Hooks
        const [onlineStatus, setOnlineStatus] = useOnlineStatus();
    }
    return (
        <>
            <h4>Hooks Rules in React JS</h4>
        </>
    )
}
export default HandleHooks;