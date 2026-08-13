const User = ({data}) => {
    return(
        <div style={{
            border:"1px solid green",
            padding:"10px",
            margin:"10px",
            width:"400px",
            borderRadius:"10px"
        }}>
            <h3>User ID : <span style={{color:"green"}}>{data.id}</span> </h3>
            <h3>User Name :<span style={{color:"red"}}> {data.name} </span></h3>
            <h3>User Email : <span style={{color:"orange"}}>{data.email} </span></h3>
            <h3>User Age : <span style={{color:"yellowgreen"}}>{data.age}</span> </h3>
        </div>
    )
}

export default User;