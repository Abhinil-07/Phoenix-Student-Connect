import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    // select: false,
  },
  Image: {
    type: String,
  },
  googleId: {
    type: String,
  },
  sessionToken: {
    type: String,
  },
});

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
