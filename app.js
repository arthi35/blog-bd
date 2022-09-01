import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app=express();
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog",blogRouter);

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify:true
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

  app.listen(process.env.PORT || 5000, () => {
    console.log("Backend is running");
  });

//hello123