let contentNode = document.getElementById("container");

//In-Memory Array of Issues -- Dynamic composition
const issues = [
    {
        issue_id: 1,
        issue_title: "ETL failed today",
        issue_status: "In-Progress",
        createdDate: new Date('2021-05-25'),
        completionDate: undefined
    },
    {
        issue_id: 2,
        issue_title: "Please provide us a sql query",
        issue_status: "Closed",
        createdDate: new Date('2021-05-5'),
        completionDate: new Date('2021-05-7')
    },
]

class IssueList extends React.Component {
    render() {
        return (
            <div>
                <h1>Issue Tracker</h1>
                <IssueFilter />
                <hr />
                <IssueTable issues={issues} />
                <hr />
                <IssueAdd />
            </div>
        );
    }
}

class IssueFilter extends React.Component {
    render() {
        return (
            <div>
                <p>This is the placeholder for Issue filter...</p>
            </div>
        )
    }
}

class IssueTable extends React.Component {
    render() {

        const issueRow = this.props.issues.map(issue => <IssueRow issue={issue} />)
        return (
            <table className="border-table  ">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Status</th>
                        <th>createdDate</th>
                        <th>completionDate</th>

                    </tr>
                </thead>
                <tbody>
                    {issueRow}
                </tbody>
            </table>

        )
    }
}
// Passing data from IssueTable to IssueRow Component
class IssueRow extends React.Component {
    render() {
        const issue = this.props.issue
        return (
            <tr>
                <td>{issue.issue_id}</td>
                <td>{issue.issue_title}</td>
                <td>{issue.issue_status}</td>
                <td>{issue.createdDate.toDateString()}</td>
                <td>{issue.completionDate ? issue.completionDate.toDateString() : " "}</td>
            </tr>
        )
    }
}

class IssueAdd extends React.Component {
    render() {
        return (
            <div>
                <p>This is the placeholder for Issue Add entry form...</p>
            </div>
        )
    }
}



ReactDOM.render(<IssueList></IssueList>, contentNode); // Render the component inside the content Node