// let guest = 0;
const HandlePureComponents = () => {
     
    return (
        <>
           <h3>Keep Your Components Pure</h3>
           <Cup guest={1}/>
           <Cup guest={2}/>
        </>
    )
}

const Cup = ({guest}) => {
    // guest = guest +1;
    return (
        <h3>
            We have {guest} guest and we have to make {guest} cup of tea.
        </h3>
    )
}
export default HandlePureComponents;