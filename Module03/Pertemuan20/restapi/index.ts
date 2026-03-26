import express, { Request, Response } from "express"
import todosRouter from "./routers/todos.router"

const PORT = 8000
const app = express()

// Middleware untuk parsing JSON
app.use(express.json());

// Middleware untuk parsing data URL-encoded (dari form HTML)
app.use(express.urlencoded({ extended: true }));

//grouping route
app.use("/api/todos", todosRouter)

app.get("/api", async (req: Request, res: Response) => {
    res.json({
        "foo": "bar"
    })
})

// // router handler , 
// // code endpoint /api/todos
// app.get("/api/todos", )


// // router detail todos 
// // :id ini adalah dynamic parameter 
// app.get("/api/todos/:id", )

// // router handler untuk add todos 
// app.post("/api/todos", )

app.listen(PORT, () => {
    console.log("Application running on port : ", PORT)
})