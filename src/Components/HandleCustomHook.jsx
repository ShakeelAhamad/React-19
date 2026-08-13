import useToggle from "./useToggle";

const HandleCustomHook = () => {
    const [condection, setCondection] = useToggle(true);
    const [data, setData] = useToggle(true);
    return (
        <>
            <button
                style={
                    {
                        backgroundColor: "yellowgreen",
                        color: "white",
                        border: "1px solid yellowgreen",
                        padding: 10,
                        borderRadius: 5
                    }
                }

                onClick={setCondection}
            >
                Toggle Heading
            </button>
            <button
                style={
                    {
                        backgroundColor: "white",
                        color: "black",
                        border: "1px solid black",
                        padding: 10,
                        borderRadius: 5,
                        marginLeft: 5
                    }
                }
                onClick={() => setCondection(false)}
            >
                Hide Heading
            </button>
            <button
                style={
                    {
                        backgroundColor: "orange",
                        color: "white",
                        border: "1px solid orange",
                        padding: 10,
                        borderRadius: 5,
                        marginLeft: 5
                    }
                }
                onClick={() => setCondection(true)}
            >
                Show Heading
            </button>

            {
                condection ? <h4>Custom Hook In React js</h4> : null
            }
            <hr />

            <button
                style={
                    {
                        backgroundColor: "yellowgreen",
                        color: "white",
                        border: "1px solid yellowgreen",
                        padding: 10,
                        borderRadius: 5
                    }
                }

                onClick={setData}
            >
                Toggle Heading
            </button>
            <button
                style={
                    {
                        backgroundColor: "white",
                        color: "black",
                        border: "1px solid black",
                        padding: 10,
                        borderRadius: 5,
                        marginLeft: 5
                    }
                }
                onClick={() => setData(false)}
            >
                Hide Heading
            </button>
            <button
                style={
                    {
                        backgroundColor: "orange",
                        color: "white",
                        border: "1px solid orange",
                        padding: 10,
                        borderRadius: 5,
                        marginLeft: 5
                    }
                }
                onClick={() => setData(true)}
            >
                Show Heading
            </button>

            {
                data ? <h4>Custom Hook In React js</h4> : null
            }
        </>
    )
}
export default HandleCustomHook;