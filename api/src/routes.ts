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
router.get("/tasks", AuthMiddlewares, taskController.index);
router.post("/createtask", AuthMiddlewares, taskController.create);
router.delete("/deletetask/:id", AuthMiddlewares, taskController.delete);
router.put("/updatetask/:id", AuthMiddlewares, taskController.update);
router.put("/updatetaskstatus/:id", AuthMiddlewares, taskController.updateStatusTask);
router.put("/updateimportanttask/:id", AuthMiddlewares, taskController.updateImportantTask);