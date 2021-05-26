const example = document.getElementById("example")

const students = [
    {
        rollNo: 1,
        name: "rahul",
        age: 20,
        DateOfBirth: new Date('2000-05-21')
    }, {
        rollNo: 2,
        name: "sakshi",
        age: 21,
        DateOfBirth: new Date('1999-07-1')
    },
]


class StudentList extends React.Component {
    render() {
        return (
            <div>
                <StudentTable students={students} />
            </div>


        )
    }
}

class StudentTable extends React.Component {
    render() {

        const fetchStudentData = this.props.students.map(student => <StudentRows key={student.rollNo} student={student} />)
        return (
            <table>
                <thead>
                    <tr>
                        <th>RollNo</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>DOB</th>
                    </tr>
                </thead>
                <tbody>
                    {fetchStudentData}
                </tbody>
            </table>
        )
    }
}

class StudentRows extends React.Component {
    render() {
        const student = this.props.student
        return (
            <tr>
                <td>{student.rollNo}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.DateOfBirth.toDateString()}</td>
            </tr>
        )
    }
}

ReactDOM.render(<StudentList />, example)