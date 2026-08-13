import { useId } from "react";

const HandleUseIdHook = () => {
    const uniqId = useId();
    return (
        <>
            <h4> Exmple useId Hook</h4>
            <form>
                <label htmlFor={uniqId+"name"}>Enter Name</label>
                <input type="text" id={uniqId+"name"} placeholder="Enter user name"/>
                <br/>
                <br/>
                <label htmlFor={uniqId+"password"}>Enter Password</label>
                <input type="password" id={uniqId+"password"} placeholder="Enter user password"/>
                <br/>
                <br/>
                <label htmlFor={uniqId+"skils"}>Enter Skils</label>
                <input type="text" id={uniqId+"skils"} placeholder="Enter user skils"/>
                <br/>
                <br/>
                <input type="checkbox" id={uniqId+"terms"}/>
                <label htmlFor={uniqId+"terms"}>Terms and Condition</label>
            </form>
        </>
    )
}

export default HandleUseIdHook;