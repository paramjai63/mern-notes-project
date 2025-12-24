import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve()

if(process.env.NODE_ENV !=="production"){
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
}


app.use(express.json()); // to parse the json data (allows to acces the body of the request)
app.use("/api",rateLimiter); // To limit the numbrer of api requests from each ip adress or each user for a certain time limit this middleware is used
//Cors>> lets us use the apis around the frontend and backend without any error


app.use("/api/notes", notesRoutes); // app.use instead of app.get or post etc with the basic api call (/api/notes)

if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

connectDB().then(() => {
  //this will make sure that once the database is connected only after that the server get started
  app.listen(PORT, () => {
    console.log("server started on port :", PORT);
  });
});
