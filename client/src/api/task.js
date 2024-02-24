import axios from './axios.js';

export const getTasksReq = () => axios.get("/");
export const getTaskReq = (id) => axios.get(`/tasks/${id}`);
export const createTaskReq = (task) => axios.post("/tasks", task);
export const updateTaskReq = (id, task) => axios.put(`/tasks/${id}`, task);
export const deleteTaskReq = (id) => axios.delete(`/tasks/${id}`);