import { useFormStatus } from "react-dom";
const HandleUseFormStatus = () => {
    const handleSubmit = async () => {
        await new Promise(res => setTimeout(res, 5000));
        console.log("Submit Form");
    }

    function CustomerForm(){
        const {pending} = useFormStatus();
        return (
            <>
                <input type="text" id="name" placeholder="Enter user name" />
                <br />
                <br />
                <input type="text" id="email" placeholder="Enter user email" />
                <br />
                <br />
                <input type="text" id="password" placeholder="Enter user password" />
                <br />
                <br />
                <button disabled={pending} type="submit">{pending?"Submitting...":"Submit"}</button>
            </>
        )
    }
    return (
        <>
            <h3>useFormStatus Hook in React js</h3>
            <form action={handleSubmit}>
                <CustomerForm/>
            </form>
        </>
    )
}

export default HandleUseFormStatus;