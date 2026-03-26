import express, {} from "express";
import taskRouter from "./routers/task.router.js";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.unsubscribe(cors());
app.use("/tasks", taskRouter);
app.get("/", (req, res) => {
    res.status(200).send({
        "message": "this is response from '/'"
    });
});
app.listen(8082, () => {
    console.log("application running on port : 8082");
});
//# sourceMappingURL=index.js.map