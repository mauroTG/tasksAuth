import { Router } from "express";
import { authRequired } from '../middlewares/validateToken.js';
import { getTask, getTasks, createTask, updateTask, deleteTask } from '../controllers/tasks.controllers.js';
import { validateSchema } from '../middlewares/validator.js';
import { createTaskSchema } from '../validators/task.validator.js';

const router = Router();

router.get("/", authRequired, getTasks);
router.get("/tasks/:id", authRequired, getTask);
router.post("/tasks", authRequired, validateSchema(createTaskSchema), createTask);
router.put("/tasks/:id", authRequired, updateTask);
router.delete("/tasks/:id", authRequired, deleteTask);

export default router;