import dotenv from "dotenv"; // dotenv - sirlikodlardi saqlar ushin xizmet qiladi
dotenv.config(); // bul jerde dotenv din config metodin sharip alip atirmiz
import mongoose from "mongoose"; // mongoosdi shaqirip alip atirmiz
import app from "./app"; // app file packagin shaqirip alip atirmiz

/*tomende mongoosega qosiliwga hareket qilip atirmiz, ol 3 parametr qabil qiladi, birinshisi
1. connect, ogan process.env.MONGO_URL di string qilip al dep aytiwimiz kerek
2. eger 1st step amelge assa onda then(data) dep turip consolega shigarip, const dep PORT jaratip alip
portti .env dan alip alip atirmiz eger awmetli ala almasaq onda 3003 portti al dep aytip atirmiz
ha'm app(server)ga listen metodin paydalanip biraz aldin jaratqan PORT constantasin berip jiberip atirmiz
ha'm callback function jazip atirmiz, ol callback functionda console.log arqali awmetli turde
portqa qosildi degen log shigarip atirmiz  
3. eger 2nd stepta qatelik ketetugin bolsa, onda 3rd step amelge asadi, qatelikti tutip alip bizge qatelikti shigaradi
*/

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
