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
        return(
            <div>
                <p>This is the placeholder for Issue Table...</p>
            </div>
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

ReactDOM.render(<IssueList></IssueList>, contentNode); // Render the component inside the content Node
