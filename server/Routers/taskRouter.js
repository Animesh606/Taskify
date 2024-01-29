import { Router } from "express";

const router = Router();

import verifyJWT from "../Middlewares/auth.js";
import { addTask, getTask, editTask, completeTask, deleteTask } from "../Controllers/taskController.js";

router.route("/").post(verifyJWT, addTask);
router.route("/:taskId").get(verifyJWT, getTask);
router.route("/:taskId").put(verifyJWT, editTask);
router.route("/:taskId").patch(verifyJWT, completeTask);
router.route("/:taskId").delete(verifyJWT, deleteTask);

export default router;