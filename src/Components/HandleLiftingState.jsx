const HandleLiftingState = ({setUser}) => {
    return (
        <>
          <h2>Lifting State Up in React JS</h2>
          <input type="text" onChange={(event) => setUser(event.target.value)} placeholder="Enter user" />
        </>
    )
}

export default HandleLiftingState;