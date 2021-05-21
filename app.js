const express = require("express")
const app = express()

const port = process.env.PORT || 3000

app.use("/static",express.static("public"))

app.listen(port,()=>{
    console.log(`server is running at ${port}....`);
})