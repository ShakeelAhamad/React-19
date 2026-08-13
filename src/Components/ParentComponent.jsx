const ParentComponent = ({dispalyName,name,getUser}) => {
    return (
        <>
        <button onClick={() => dispalyName(name)}>Display Name</button>
        <button onClick={() => getUser()}>Get User function</button>
        </>
    )
}

export default ParentComponent;