let contentNode = document.getElementById("container");

class IssueList extends React.Component {
  render() {
    return (
      <div>
       <h1>Issue Tracker</h1>
       <IssueFilter/>
       <hr />
       <IssueTable />
       <hr />
       <IssueAdd />
      </div>
    );
  }
}

class IssueFilter extends React.Component {
    render(){
        return(
            <div>
                <p>This is the placeholder for Issue filter...</p>
            </div>
        )
    }
}

class IssueTable extends React.Component {
    render(){
        const borderStyle = {border: "1px solid silver", padding: 6}
        return(
            <table style={{borderCollapse: "collapse"}}>
                <thead>
                    <tr>
                        <th style={borderStyle}>Ticket_ID</th>
                        <th style={borderStyle}>Title</th>  
                        <th style={borderStyle}>Status</th>  
                        <th style={borderStyle}>ClientName</th>
                    </tr>
                </thead>
                <tbody>
                    <IssueRow issue_id={1} 
                    issue_title = {"ETL failed today"}
                    issue_status = {"pending with client"}
                    client_name = "RBL"
                    />
                    <IssueRow  issue_id = {2}
                    issue_title = {"Please provide us a sql query"}
                    issue_status = {"closed"}
                    client_name = "Axis"
                    />
                    <IssueRow issue_id = {3}
                    issue_title = "Error in console when clicking Add"
                    issue_status = {"open"}
                    client_name = "SBIG"
                    />
                    <IssueRow issue_id = {4}
                    issue_title = {"Missing bottom border on panel"}
                    issue_status = {"In-progress"}
                    client_name = "Paytm"
                    />
                </tbody>
            </table>
          
        )
    }
}

class IssueAdd extends React.Component {
    render() {
        return(
            <div>
                <p>This is the placeholder for Issue Add entry form...</p>
            </div>
        )
    }
}

// Passing data from IssueTable to IssueRow Component
class IssueRow extends React.Component {
    render() {
        const borderStyle = {border: "1px solid silver", padding: 4} // style object
        const textstyle = {color: "red"}
        return(
            <tr>
                <td style={borderStyle}>{this.props.issue_id}</td>
                <td style={borderStyle}>{this.props.issue_title}</td>
                <td style={borderStyle, textstyle}>{this.props.issue_status}</td>
                <td style={borderStyle}>{this.props.client_name}</td>
            </tr>
        )
    }
}
ReactDOM.render(<IssueList></IssueList>, contentNode); // Render the component inside the content Node
