// ✅ user.router.js
import express from "express";
import {
  homeController,
  signupController,
  updateController,
  getalluser,
  contactPageController,
  contactController,
  deleteController,
  serviceController,
  signupuserController,
  editController,
  updateUserController

} from "../controller/homeController.js";

import {
  getLogin,
  postLogin,
  logoutUser
} from "../Controller/authController.js";

const userRouter = express.Router();

// Public pages
userRouter.get("/homepage", homeController);
userRouter.get("/services", serviceController);
userRouter.get("/contact", contactPageController);

// Auth
userRouter.get("/login", getLogin);
userRouter.post("/login", postLogin);
userRouter.get("/logout", logoutUser);

// Post data
userRouter.get("/signup", signupController);
userRouter.post("/signup", signupuserController);
userRouter.get("/list", getalluser);
userRouter.get("/edit/:id", editController);
userRouter.post("/update/:id", updateController);
userRouter.get("/delete/:id", deleteController);
userRouter.post("/signupUser", signupuserController);
userRouter.post("/delete/:id", deleteController);
// Show the edit form (GET)

// Handle the edit form submission (POST)
userRouter.post("/edit/:id", updateUserController);




// Contact form
userRouter.post("/contact", contactController);

export { userRouter };
