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
router.get("/tasks", taskController.index);
router.post("/createtask", taskController.create);
router.delete("/deletetask/:id", taskController.delete);
router.put("/updatetask/:id", taskController.update);
router.put("/updatetaskstatus/:id", taskController.updateStatusTask);
