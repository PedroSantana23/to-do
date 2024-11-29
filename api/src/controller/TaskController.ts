import { Request, Response } from "express";
import { prisma } from "../utils/prisma";

export class TaskController {

    // CREATE
    async criarTarefa(req: Request, res: Response) {
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
            return res.status(500).json({ error: "Falha ao criar tarefa", details: error });
        }
    }

    // READ
    async Tarefas(req: Request, res: Response) {
        const tasks = await prisma.task.findMany();
        return res.json({ tasks });
    }

    async TarefasExcluidas(req: Request, res: Response) {
        const tasks = await prisma.task.findMany({
            where: {
                excluido: true,
            },
        });

        if (!tasks) {
            return res.status(404).json({ error: "Não há tarefas excluídas" });
        }

        return res.json({ tasks });
    }

    async TarefasAFazer(req: Request, res: Response) {
        const tasks = await prisma.task.findMany({
            where: {
                status: "pendente",
            },
        });

        if (!tasks) {
            return res.status(404).json({ error: "Não há tarefas a fazer" });
        }

        return res.json({ tasks });
    }

    async TarefasImportantes(req: Request, res: Response) {
        const tasks = await prisma.task.findMany({
            where: {
                isImportant: true,
            },
        });

        if (!tasks) {
            return res.status(404).json({ error: "Não há tarefas importantes" });
        }

        return res.json({ tasks });
    }

    // UPDATE
    async AtualizarTarefa(req: Request, res: Response) {
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

    async AtualizarStatusDaTarefa(req: Request, res: Response) {
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

    async AtulizarTarefaParaImportante(req: Request, res: Response) {
        const { id } = req.params;
    
        if (!id) {
            return res.status(400).json({ error: "ID is required" });
        }
    
        try {
            const task = await prisma.task.findUnique({
                where: {
                    id: Number(id),
                },
            });
    
            if (!task) {
                return res.status(404).json({ error: "Task not found" });
            }
    
            const updatedTask = await prisma.task.update({
                where: {
                    id: Number(id),
                },
                data: {
                    isImportant: !task.isImportant,
                },
            });
    
            const message = updatedTask.isImportant
                ? "Tarefa marcada como importante"
                : "Tarefa não é mais importante";
    
            return res.json({ message, task: updatedTask });
        } catch (error) {
            return res.status(500).json({ error: "Failed to update task", details: error });
        }
    }

    
    // DELETE
    async ExcluirTarefa(req: Request, res: Response) {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ error: "ID is required" });
        }

        try {
            await prisma.task.update({
                where: {
                    id: Number(id),
                },
                data: {
                    excluido: true,
            }});

            return res.json({ message: "Tarefa excluída" });
        } catch (error) {
            return res.status(500).json({ error: "Falha ao excluir tarefa", details: error });
        }
    }
}
