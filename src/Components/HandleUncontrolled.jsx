import { useRef } from "react";

const HandleUncontrolled = () => {
    const userRef      = useRef();
    const passwordRef  = useRef();
    const handleSubmit = (event) => {
        event.preventDefault();
        const user = document.querySelector("#user").value;
        const password = document.querySelector("#password").value;
        console.log("User Name : "+user+" Pasword : "+password);
        console.log("submit form",event);
    }
    const useRefForm = (event) => {
        event.preventDefault();
        const user = userRef.current.value;
        const password = passwordRef.current.value;
        console.log("User Name : "+user+" Pasword : "+password);
        console.log("submit form",event);
    }
    return (
        <>
           <h3>Uncontrolled Component</h3>
           <form id="LoginForm" method="post" onSubmit={handleSubmit}>
              <input type="text" id="user" placeholder="Enter your name"/>
              <br/><br/>
              <input type="password" id="password" placeholder="Enter your password"/>
              <br/><br/>
              <button>
                Submit
              </button>
           </form>
           <hr/>
           <h3>Uncontrolled Component with useRef</h3>
           <form id="useRefForm" method="post" onSubmit={useRefForm}>
              <input type="text"  ref={userRef} id="userRef" placeholder="Enter your name"/>
              <br/><br/>
              <input type="password" ref={passwordRef} id="passwordRef" placeholder="Enter your password"/>
              <br/><br/>
              <button>
                Submit
              </button>
           </form>
        </>
    )
}
export default HandleUncontrolled; 