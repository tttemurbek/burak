import express from "express"; // express shaqilip alip atirmiz
const routerAdmin = express.Router(); //expresstin Router methodin routerAdminga berip atirmiz
import restaurantController from "./controllers/restaurant.controller"; // rest.controllerdi shaqirip alip atirmiz
import productController from "./controllers/product.controller";
import makeUploader from "./libs/utils/uploader";

// Restaurant
routerAdmin.get("/", restaurantController.goHome); // get metod i qanday method, ol tek data alip browserda korsetip beredi
/* bul jerde localhost:3003/admin/ bolgan waqitta, 
1. restaurantControllerga barip, sol jerdegi goHome metodin iske tusiredi
restaurantController bul object
goHome 
*/

/* localhost:3003/admin/signup bolgan waqitta jabe controllerga baradi, keyin sol jerdegi getSignup metodi iske tusedi
keyin userga "form" shigadi, sol formdi toltirip submit bassa post arqali processSignup metodi iske tusedi
call qilip atirmiz, bul jerde call iske tusedi, define bolimi restaurantControllerdin ishinde
*/
routerAdmin
  .get("/signup", restaurantController.getSignup)
  .post(
    "/signup",
    makeUploader("members").single("memberImage"),
    restaurantController.processSignup
  );

routerAdmin
  .get("/login", restaurantController.getLogin)
  .post("/login", restaurantController.processLogin);

routerAdmin.get("/logout", restaurantController.logout);
routerAdmin.get("/check-me", restaurantController.checkAuthSession);

/* Products*/
routerAdmin.get(
  "/product/all",
  restaurantController.verifyRestaurant,
  productController.getAllProducts
);
routerAdmin.post(
  "/product/create",
  restaurantController.verifyRestaurant,
  // uploadProductImage.single("productImage"),
  makeUploader("products").array("productImages", 5),
  productController.createNewProduct
);
routerAdmin.post(
  "/product/:id",
  restaurantController.verifyRestaurant,
  productController.updateChosenProduct
); //:id is "param"

export default routerAdmin;
