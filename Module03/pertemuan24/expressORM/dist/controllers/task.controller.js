import {} from "express";
import prisma from "./../config/prisma.js";
export default {
    function: getAllTask(req, Request, res, Response)
};
{
    const q = await prisma.task.findMany();
    const tasks = q;
    return res.status(200).send({
        message: "get all task success",
        data: tasks
    });
}
export async function createTasl(req, res) {
}
//# sourceMappingURL=task.controller.js.map