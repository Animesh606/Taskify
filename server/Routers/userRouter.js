import { Router } from "express";
import { registerUser, loginUser, getUser } from "../Controllers/userController.js";
import verifyJWT from "../Middlewares/auth.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

router.route("/profile").get(verifyJWT, getUser);

export default router;