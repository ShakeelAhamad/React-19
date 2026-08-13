import { useTransition } from "react";
import { useState } from "react";

const HandleUseTransition = () => {
    // const [pending,setPending] = useState(false);
    const [pending,setTransition] = useTransition();

    const handelButton = () => {
        setTransition(async()=> {
            await new Promise(res => setTimeout(res,2000));
        })

        //    setPending(true);
        //    await new Promise(res => setTimeout(res,2000));
        //    setPending(false);
    }
    return (
        <>
          <h3>useTransition Hook in React js</h3>
          <button disabled={pending} onClick={handelButton}>Click</button>
        </>
    )
}

export default HandleUseTransition;