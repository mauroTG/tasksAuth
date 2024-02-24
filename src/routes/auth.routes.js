import { Router } from "express";
import { register, login, logout, verifyToken } from '../controllers/auth.controllers.js';
import { validateSchema } from '../middlewares/validator.js';
import { registerSchema, loginSchema } from '../validators/auth.validator.js';

const router = Router();

router.post("/register", validateSchema(registerSchema), register);
router.post("/login", validateSchema(loginSchema), login);
router.post("/logout", logout);
router.get("/verify", verifyToken);

export default router;