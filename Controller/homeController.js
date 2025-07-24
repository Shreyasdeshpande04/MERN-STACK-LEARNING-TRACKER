import { User } from "../Module/signup.js";
import { Contact } from "../Module/contact.js";

// Home Page
export const homeController = async (req, res) => {
  try {
    const users = await User.find();
    res.render("homepage", { users, loggedIn: req.session.loggedIn });
  } catch (error) {
    res.json({ error: "Internal server error", details: error.message });
  }
};

// Contact Page
export const contactPageController = (req, res) => {
  res.render("contact", { loggedIn: req.session.loggedIn });
};

// Contact Form Submission
export const contactController = async (req, res) => {
  try {
    const { name, email, mobile, comment } = req.body;
    const newContact = new Contact({ name, email, mobile, comment });
    await newContact.save();
    res.render("contact", { loggedIn: req.session.loggedIn });
  } catch (err) {
    res.json({ error: "Internal Server Error", details: err.message });
  }
};

// Services Page
export const serviceController = (req, res) => {
  res.render("services", { loggedIn: req.session.loggedIn });
};

// Signup Form Page
export const signupController = (req, res) => {
  res.render("signup", { loggedIn: req.session.loggedIn });
};

// Signup Form Submission
export const signupuserController = async (req, res) => {
  try {
    const { course, topic, description, llink, glink } = req.body;
    const newUser = new User({ course, topic, description, llink, glink });
    await newUser.save();
    res.redirect("/list");
  } catch (err) {
    res.json({ error: "Internal Server Error", details: err.message });
  }
};

// Show All Users in Table
export const getalluser = async (req, res) => {
  try {
    const users = await User.find();
    res.render("table", { users, loggedIn: req.session.loggedIn });
  } catch (error) {
    res.json({ error: "Internal Server Error", details: error.message });
  }
};

// Edit Form Page
export const editController = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.render("edit", { user, loggedIn: req.session.loggedIn });
  } catch (error) {
    res.json({ error: "Internal Server Error", details: error.message });
  }
};

// Update User
export const updateController = async (req, res) => {
  try {
    const { id } = req.params;
    const { course, topic, description, llink, glink } = req.body;
    await User.findByIdAndUpdate(id, { course, topic, description, llink, glink });
    res.redirect("/list");
  } catch (err) {
    res.json({ error: "Internal Server Error", details: err.message });
  }
};

// Delete User
export const deleteController = async (req, res) => {
  try {
    const userId = req.params.id;
    await User.findByIdAndDelete(userId);
    res.redirect("/list");
  } catch (error) {
    res.json({ error: "Internal Server Error", details: error.message });
  }
};
export const updateUserController = async (req, res) => {
  try {
    const { id } = req.params;
    const { course, topic, description, llink, glink } = req.body;
    await User.findByIdAndUpdate(id, { course, topic, description, llink, glink });
    res.redirect("/list");
  } catch (error) {
    res.json({ error: "Internal Server Error", details: error.message });
  }
};
