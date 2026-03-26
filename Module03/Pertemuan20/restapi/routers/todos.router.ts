import express, {Router} from "express";
import * as todosController from "./../controllers/todos.controller"
const router = Router()

router.get("/", todosController.getAllTodos)
router.get("/:id", todosController.getTodoDetail)
router.post("/", todosController.createTodos)
// router.put("/id", )
// router.delete("/:id", )

export default router

