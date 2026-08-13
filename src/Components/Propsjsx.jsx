

const Propsjsx = ({children,color="red"}) =>{
    return (
        <div style={{border:"1px solid green",padding:5,margin:5,color:color}}>
            {children}
        </div>
    )
}
export default Propsjsx;