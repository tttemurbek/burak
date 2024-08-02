// app.ts bizde express arqali qurilgan server side bolip esaplanadi
// bul web-applicationlardi ha'm API lardi quriwga jaratilgan
import cors from "cors";
import express from "express"; // express external packagin shaqirip alip atirmiz
import path from "path"; // core model pathdi shaqirip alip atirmiz
import router from "./router"; // router file package
import routerAdmin from "./routerAdmin"; // routeraAdmin file package shaqirip alip atirmiz
import morgan from "morgan"; /* logging middleware, Request Logging: Morgan logs details
about incoming HTTP requests, including the request method, URL, status code, response time, and more. */
import { MORGAN_FORMAT } from "./libs/types/config";
/* config.ts da jaratip alingam MORGAN_FORMAT constantasin shaqirip alip atirmiz,
ol ozinin ishine method[get, post, put, delete], url[/, /admin etc], response-time[ketken waqit],
status[200-ok, 404-not found etc]  */
import cookieParser from "cookie-parser";

import session from "express-session";
import ConnectMongoDB from "connect-mongodb-session";
import { T } from "./libs/types/common";

const MongoDBStore = ConnectMongoDB(session);
const store = new MongoDBStore({
  // qayerga save qilishini addressini yaratib oldik
  uri: String(process.env.MONGO_URL),
  collection: "sessions", // tcp
});

/** 1-ENTERANCE **/

const app = express(); // instance or Creating an instance of the Express application
app.use(express.static(path.join(__dirname, "public"))); // dirname[path core package] ha'm sol jerden public ti al dep aytip atirmiz
app.use("/uploads", express.static("./uploads"));
app.use(express.urlencoded({ extended: true })); // post arqali keletugin magliwmatlardi aliwda kerek boladi, get ushin kerek emes, middleware
app.use(express.json()); // rest api orqali keladigan json formatdagi data ni otkazishga ruxsat beradi, middleware
app.use(cors({ credentials: true, origin: true }));
app.use(cookieParser()); //cookie parser, and interation with cookies
app.use(morgan(MORGAN_FORMAT)); // 9-qatarda shaqirip algan MORGAN_FORMAT bolip esaplanadi, bulda middleware

/** 2-SESSIONS **/
app.use(
  session({
    secret: String(process.env.SESSION_SECRET),
    cookie: {
      maxAge: 1000 * 3600 * 6, // 6 hrs
    },
    store: store, //19 qatardagi storedi berip atirmiz
    resave: true, // 10:30-13:30, false bolsa ozgermeydi
    saveUninitialized: true, // registration bolmagan memberlar uchun
  })
);

app.use(function (req, res, next) {
  const sessionInstance = req.session as T;
  res.locals.member = sessionInstance.member;
  next();
}); //res.locals degani browserimizni variabellari

/** 3-VIEWS **/
app.set("views", path.join(__dirname, "views")); // views filen kor dep aytip atirmiz
app.set("view engine", "ejs"); // sonin ishinde ejs formattagi file lardi kor dep aytip atirmiz

/** 4-ROUTERS **/
app.use("/admin", routerAdmin); // BSSR: EJS, SSR -server-side-rendering, usi jerden baslap MVC baslanadi
app.use("/", router); // SPA: REACT- single-page-application

export default app;
