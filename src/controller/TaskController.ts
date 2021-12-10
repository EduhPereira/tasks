import { getRepository } from "typeorm";
import { Task } from "../entity/Task";
import { json, Request, Response } from "express";

export const getAllTasks = async (request: Request, response: Response) => {
  const tasks = await getRepository(Task).find();
  return response.json(tasks);
};

export const getOneTask = async (request: Request, response: Response) => {
  const task = await getRepository(Task).findOne(request.params["id"]);
  return response.json(task);
};

export const createTask = async (request: Request, response: Response) => {
  const task = await getRepository(Task).save(request.body);
  return response.status(201).json(task);
};

export const updateTask = async (request: Request, response: Response) => {
  const { id } = request.params;
  const task = await getRepository(Task).update(id, request.body);

  if (task.affected === 1) {
    const taskUpdated = await getRepository(Task).findOne(id);
    return response.json(taskUpdated);
  }

  return response.status(404).json({ error: "task not found to be updated" });
};

export const deleteTask = async (request: Request, response: Response) => {
  const task = await getRepository(Task).delete(request.params["id"]);

  if (task.affected === 1) {
    return response.status(204).json("");
  }

  return response.status(404).json({ error: "task not found to be deleted" });
};
