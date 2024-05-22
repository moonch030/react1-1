export default function AttendanceBook(props){
    return(
        <ul>
            {students.map((student,index) =>{
            return <li key={index}>{student.name}</li>
            })}
    </ul>
    )
}

const students = [
    {
        name: "홍길동"
    },
    {
        name: "홍길동1"
    },
    {
        name: "홍길동2"
    },
]