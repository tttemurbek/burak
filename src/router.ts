import express from "express";
const router = express.Router();
import memberController from "./controllers/member.controller";
// bular burak-react ushin xizmet qiladi
import uploader from "./libs/utils/uploader"; // suwretlerdi jukrewde middleware-etip paydalanamiz
import productController from "./controllers/product.controller";
import orderController from "./controllers/order.controller";

// Member
router.get("/member/restaurant", memberController.getRestaurant);
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
router.post(
  "/member/update",
  memberController.verifyAuth,
  uploader("members").single("memberImage"),
  memberController.updateMember
);
router.get("/member/top-users", memberController.getTopUsers);

// Product
router.get("/product/all", productController.getProducts);
router.get(
  "/product/:id",
  memberController.retriveAuth,
  productController.getProduct
);

// Order
router.post(
  "/order/create",
  memberController.verifyAuth,
  orderController.createOrder
);
router.get(
  "/order/all",
  memberController.verifyAuth,
  orderController.getMyOrders
);
router.post(
  "/order/update",
  memberController.verifyAuth,
  orderController.updateOrder
);

export default router;
