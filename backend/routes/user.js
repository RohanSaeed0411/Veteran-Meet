import user from "../controllers/user.js";
import express from "express";
const router = express.Router();

router.get("/", user.getUsers);
router.post("/", user.createUser);
router.get("/:id", user.getUser);
router.patch("/:id", user.updateUser);
router.delete("/:id", user.deleteUser);

export default router;