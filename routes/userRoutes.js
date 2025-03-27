import express from "express";
import {
  register,
  getAllUsers,
  updateUser,
  getUsersByRole,
  updateUserStatus
} from "../controllers/userController.js";

const router = express.Router();


router.get("/:roleName",getUsersByRole );
router.get("/", getAllUsers);
router.post("/register", register);
router.put("/:id/status", updateUserStatus);
router.put("/:id", updateUser);

export default router;
