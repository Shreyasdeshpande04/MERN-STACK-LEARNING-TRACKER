import mongoose, { Schema } from "mongoose";

const signupSchema = new Schema({
  course : { type: String, required: true },
  topic: { type: String, required: true },
  description: { type: String, required: true },
  llink: { type: String, required: true },
    glink: { type: String, required: true }
});

export const User =mongoose.model("userReg", signupSchema)