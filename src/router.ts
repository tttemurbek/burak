import express from "express";
const router = express.Router();
import memberController from "./controllers/member.controller";
// bular burak-react ushin xizmet qiladi

// Member
router.post("/member/signup", memberController.signup);
router.post("/member/login", memberController.login);
router.post(
  "/member/logout/",
  memberController.verifyAuth,
  memberController.logout
);
router.get(
  "/member/detail",
  memberController.verifyAuth,
  memberController.getMemberDetail
);

// Product

// Order
export default router;
