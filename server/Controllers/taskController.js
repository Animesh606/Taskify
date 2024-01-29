import { ApiError, ApiResponse, AsyncHandler } from "../Utils/index.js";
import UserModel from "../../Models/UserModel.js";
import Task from "../Models/TaskModel.js";

const addTask = AsyncHandler(async (req, res) => {
    // get task information from req
    const { title, description, dueDate, priority, createdBy } = req.body;

    // Check if all fields are filled out
    if (!title || !description || !dueDate || !priority || !createdBy) {
        throw ApiError(400, "Missing required field");
    }

    // Find the user
    const user = await UserModel.findOne({ _id: createdBy });

    // Check the user is exist or not
    if (!user) {
        throw ApiError(401, "Invalid credentials");
    }

    // Create a new Task and save it to database
    const task = new Task({
        title,
        description,
        dueDate: new Date(dueDate),
        priority,
        createdBy: user._id,
    });
    const resultTask = await task.save();

    // Also add task id to user model
    user.tasks.push(resultTask._id);
    await user.save();

    // Send response
    return res.json(
        new ApiResponse(201, "The task has been added successfully")
    );
});

const getTask = AsyncHandler(async (req, res) => {
    // Get user ID from params
    const taskId = req.params.taskId;

    // Get task data by task ID from DB
    const task = await TaskModel.findById(taskId).populate(
        "createdBy",
        "-password -tasks"
    );

    // If no such task exists then send 404 error
    if (!task) {
        throw new ApiError(404, "No task found!");
    }

    // Send response
    return res.json(
        new ApiResponse(200, "Successfully got the task details", task)
    );
});

const editTask = AsyncHandler(async (req, res) => {});

const completeTask = AsyncHandler(async (req, res) => {});

const deleteTask = AsyncHandler(async (req, res) => {});

export { addTask, getTask, editTask, completeTask, deleteTask };
