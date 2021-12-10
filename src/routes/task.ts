import { Router, Request, Response } from "express";
import {
  createTask,
  deleteTask,
  getAllTasks,
  getOneTask,
  updateTask,
} from "../controller/TaskController";

export const taskRouter = Router();

taskRouter.get("/", getAllTasks);
taskRouter.get("/:id", getOneTask);
taskRouter.post("/", createTask);
taskRouter.put("/:id", updateTask);
taskRouter.delete("/:id", deleteTask);
