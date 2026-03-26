"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllTodos = getAllTodos;
exports.getTodoDetail = getTodoDetail;
exports.createTodos = createTodos;
const express_1 = require("express");
const promises_1 = __importDefault(require("fs/promises"));
async function getAllTodos(req, res) {
    // membaca file 
    const jsonFile = await promises_1.default.readFile("./todos.json", 'utf-8');
    const todosData = JSON.parse(jsonFile); // object di js atau array 
    res.status(200).send({
        "message": "fetch todos success",
        data: todosData.todos
    });
}
async function getTodoDetail(req, res) {
    const { id } = req.params; // params 
    // baca todos.json
    const jsonFile = await promises_1.default.readFile("./todos.json", 'utf-8');
    const todosData = JSON.parse(jsonFile); // convert ke object 
    // pencarian todos yang id nya sekian
    const detail = todosData.todos.find((todo) => {
        return todo.id === Number(id);
    });
    if (!detail) {
        return res.status(404).send({
            "message": "todo not found",
        });
    }
    return res.status(200).send({
        "message": "fetch todos success",
        data: detail
    });
}
async function createTodos(req, res) {
    const jsonFile = await promises_1.default.readFile("./todos.json", 'utf-8');
    const todosData = JSON.parse(jsonFile); // array of object
    const { title, done } = req.body;
    todosData.todos.push({
        id: todosData.todos[todosData.todos.length - 1].id + 1, // 2 + 1
        title,
        done
    });
    // menulis ulang keseluruhan file json nya
    const writeJson = await promises_1.default.writeFile("./todos.json", JSON.stringify({
        "todos": todosData.todos
    }));
    return res.status(200).send({
        "message": "insert todos success",
        data: {
            id: todosData.todos[todosData.todos.length - 1].id,
            title, done
        }
    });
}
//# sourceMappingURL=todos.controller.js.map