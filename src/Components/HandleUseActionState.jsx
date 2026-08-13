import { useActionState } from "react";

const HandleUseActionState = () => {
    const handleSubmit = async (previousData, formData) => {
        let name = formData.get("name");
        let password = formData.get("password");
        await new Promise(res => setTimeout(res, 2000));
        if (name && password) {
            return { message: "Data submitting", name, password }
        } else {
            return { error: "Please enter name and password", name, password }
        }

    }
    const [data, action, pending] = useActionState(handleSubmit, undefined);
    return (
        <>
            <h4>Example useActionState Hook in React JS.</h4>
            <hr />
            <form action={action}>
                <input type="text" placeholder="Enter user name" name="name" />
                <br />
                <br />
                <input type="password" placeholder="Enter user password" name="password" />
                <br />
                <br />
                <button disabled={pending}>{pending ? "Submitting..." : "Submit Form"} </button>
            </form>

            {
                data?.error && <><hr /><span style={{ color: "red" }}>{data?.error}</span></>
            }
            {
                data?.message && <><hr /><span style={{ color: "green" }}>{data?.message}</span></>
            }
            {
                data?.name && data?.password && <>
                    <hr />
                    <ul>
                        <li><span style={{ color: "greenyellow" }}>User Name : {data?.name}</span> , <span style={{ color: "pink" }}>User Password : {data?.password}</span></li>
                    </ul>
                </>
            }

        </>
    )
}

export default HandleUseActionState;