import express from "express"
import cors from "cors"

const port = process.env.PORT || 3000
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cors())

app.get("/", (req, res)=>{
    res.send("hello world")
})

app.listen(port, ()=> {
    console.log(`server is running on port ${port}`)
})