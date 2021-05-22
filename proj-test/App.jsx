const contentNode = document.getElementById("container")
const todos = ["go to gym","buy bread","eat","go to office"]

const message = todos.map(c => `faisal ${c}!`).join("<br>")
const component = <p>{message}</p>


ReactDOM.render(component,contentNode)
