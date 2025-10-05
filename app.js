import express from "express";
import mongoose from "mongoose";
import session from "express-session";
import connectMongo from "connect-mongo";
import { userRouter } from "./Router/user.router.js";

const DB_URI = "mongodb://localhost:27017/project";
const PORT = 3000;

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set EJS as view engine
app.set("view engine", "ejs");


app.use(
  session({
    secret: "yourSecretKey",
    resave: false,
    saveUninitialized: false,
    store: connectMongo.create({
      mongoUrl: DB_URI,
      collectionName: "sessions",
    }),
 
  })
);

// Routes
app.use(userRouter);


mongoose
  .connect(DB_URI)
  .then(() => {
    console.log("✅ MongoDB Connected Successfully");
    app.listen(PORT, () =>
      console.log(`🚀 Server running at http://localhost:${PORT}`)
    );
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err.message);
    process.exit(1);
  });
