import Student from "./Student";
const College = ({ collegeRow }) => {
    return (
        <>
            <div style={{ border: "1px solid black", width: 450, borderRadius: 5, padding: 5, marginTop: 2 }}>
                <span>College Details</span>
                <hr />
                <h3>College Name : <span style={{ color: "green" }}>{collegeRow.collegeName}</span></h3>
                <ul>
                    <li>College Code : {collegeRow.collegeCode}</li>
                    <li>Web Sit : {collegeRow.collegeWebSite}</li>
                    <li>College Email : {collegeRow.collegeEmail}</li>
                    <li>
                        <h2>Students Details</h2>
                        {collegeRow.students.map((student, ind) =>
                            <Student student={student} key={ind} />
                        )}
                    </li>
                </ul>
            </div>
        </>
    )
}

export default College;