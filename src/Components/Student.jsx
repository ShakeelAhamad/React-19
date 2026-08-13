const Student = ({student}) => {
    return (
        <ul style={{border:"2px solid green", marginBottom:5, padding:5,borderRadius:5,backgroundColor:"grey",color:"white"}}>
            <li>Code : {student.studentCode}</li>
            <li>Name : {student.studentName}</li>
            <li>Email : {student.studentEmail}</li>
            <li>Mobile : +91 {student.studentMob}</li>
        </ul>
    )
}

export default Student