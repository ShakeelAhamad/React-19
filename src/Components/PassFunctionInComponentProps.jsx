import ParentComponent from "./ParentComponent";

const PassFunctionInComponentProps = () => {
    const dispalyName = (name)=>{
         alert(name);
    }
    const getUser = () => {
        alert("get user function called");
    }
    return (
        <>
           <h3>Call Parent component function from child component </h3>
           <ParentComponent dispalyName={dispalyName} name="Shakeel Ahamad" getUser={getUser}/>
           <ParentComponent dispalyName={dispalyName} name="Jameel Ahamad" getUser={getUser}/>
           <ParentComponent dispalyName={dispalyName} name="Sonu Ahamad" getUser={getUser} />
        </>
    )
}
export default PassFunctionInComponentProps;