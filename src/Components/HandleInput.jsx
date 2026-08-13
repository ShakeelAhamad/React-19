import { forwardRef } from "react";

// const HandleInput = (props,ref) => {
//     return (
//         <>
//            <h3>Use Forward ref in old viesion</h3>
//            <input type="text" ref={ref} />
//         </>
//     )
// }
// export default forwardRef(HandleInput);


const HandleInput = (props) => {
    return (
        <>
           <h3>Use Forward ref in 19 viesion</h3>
           <input type="text" ref={props.ref} />
        </>
    )
}
export default HandleInput;