import express from "express";
import path from "path"; // core model
import router from "./router";
import routerAdmin from "./routerAdmin";
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/types/config";
/** 1-ENTERANCE **/

const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // rest api orqali keladigan json formatdagi data ni otkazishga ruxsat beradi
app.use(morgan(MORGAN_FORMAT));

/** 2-SESSIONS **/

/** 3-VIEWS **/
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/** 4-ROUTERS **/
app.use("/ADMIN", routerAdmin); // BSSR: EJS
app.use("/", router); // SPA: REACT

export default app;
