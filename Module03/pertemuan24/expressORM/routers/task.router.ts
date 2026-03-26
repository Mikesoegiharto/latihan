import { Router } from "express";
import * as taskController from "../controllers/task.controller.js"

const router = Router()

router.get("/", taskController.getAllTask)
router.post("/", taskController.createTask)
router.get("/important", () => { }) // /task/important


export default router