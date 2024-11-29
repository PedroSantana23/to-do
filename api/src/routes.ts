import { Router } from "express";
import { UserController } from "./controller/UserController";
import { AuthController } from "./controller/AuthController";
import { AuthMiddlewares } from "./middlewares/auth";
import { TaskController } from "./controller/TaskController";

const userController = new UserController();
const authController = new AuthController();
const taskController = new TaskController();

export const router = Router();

// User Routes
router.post("/create", userController.create);
router.get("/index", AuthMiddlewares, userController.index);
router.post("/auth", authController.authenticate);

// Tasks Routes
router.get("/tasks", AuthMiddlewares, taskController.Tarefas);
router.get("/tasksdeleted", AuthMiddlewares, taskController.TarefasExcluidas);
router.get("/tasksafazer", AuthMiddlewares, taskController.TarefasAFazer);
router.get("/tasksimportantes", AuthMiddlewares, taskController.TarefasImportantes);
router.post("/createtask", AuthMiddlewares, taskController.criarTarefa);
router.put("/deletetask/:id", AuthMiddlewares, taskController.ExcluirTarefa);
router.put("/updatetask/:id", AuthMiddlewares, taskController.AtualizarTarefa);
router.put("/updatetaskstatus/:id", AuthMiddlewares, taskController.AtualizarStatusDaTarefa);
router.put("/updateimportanttask/:id", AuthMiddlewares, taskController.AtulizarTarefaParaImportante);