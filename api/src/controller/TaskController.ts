import { Request, Response } from "express";
import { prisma } from "../utils/prisma";

export class TaskController {
    async index(req: Request, res: Response) {
        const tasks = await prisma.task.findMany();
        return res.json({ tasks });
    }

    // CREATE
    async create(req: Request, res: Response) {
        const { titulo, descricao, userId } = req.body;

        if (!titulo) {
            return res.status(400).json({ error: "É preciso colocar um título" });
        }

        if (!userId) {
            return res.status(400).json({ error: "userId is required" });
        }

        try {
            const task = await prisma.task.create({
                data: {
                    titulo,
                    descricao,
                    userId,
                },
            });
            return res.status(201).json({ task });
        } catch (error) {
            return res.status(500).json({ error: "Failed to create task", details: error });
        }
    }

    // DELETE
    async delete(req: Request, res: Response) {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ error: "ID is required" });
        }

        try {
            await prisma.task.delete({
                where: {
                    id: Number(id),
                },
            });
            return res.status(204).send();
        } catch (error) {
            return res.status(500).json({ error: "Failed to delete task", details: error });
        }
    }

    // UPDATE
    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { titulo, descricao, status } = req.body;

        if (!id) {
            return res.status(400).json({ error: "ID is required" });
        }

        try {
            const task = await prisma.task.update({
                where: {
                    id: Number(id),
                },
                data: {
                    titulo,
                    descricao,
                    status,
                },
            });
            return res.json({ task });
        } catch (error) {
            return res.status(500).json({ error: "Failed to update task", details: error });
        }
    }

    async updateStatusTask(req: Request, res: Response) {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ error: "ID is required" });
        }

        try {
            const task = await prisma.task.update({
                where: {
                    id: Number(id),
                },
                data: {
                    status: "Concluído",
                },
            });

            if (task.status === "Concluído") {
                return res.json({ message: "Tarefa já concluída" });
            }

            return res.json({ task });
        } catch (error) {
            return res.status(500).json({ error: "Failed to update task", details: error });
        }
    }
}
