import dotenv from "dotenv"; 
dotenv.config(); // bul jerde dotenv din config metodin sharip alip atirmiz
import mongoose from "mongoose"; // mongoosdi shaqirip alip atirmiz
import app from "./app"; // app file packagin shaqirip alip atirmiz



mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log("MongoDB connection succeed");
    const PORT = process.env.PORT ?? 3003;
    app.listen(PORT, function () {
      console.log(`The server is running successfully on ${PORT}`);
      console.log(`admin project on http://localhost:${PORT}/admin \n`);
    });
  })
  .catch((err) => {
    console.log("ERROR ON CONNECTION MongoDB", err);
  });
