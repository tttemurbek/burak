import express from "express";
const router = express.Router();
import memberController from "./controllers/member.controller";
// bular burak-react ushin xizmet qiladi

router.post("/signup", memberController.signup);
router.post("/login", memberController.login);

export default router;
