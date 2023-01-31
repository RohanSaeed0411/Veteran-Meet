import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  userId: { type: String },
  userName: { type: String },
  password: { type: String },
  age: { type: Number },
  company: { type: String | null },
  intrestedEventsId: { type: Array },
  notIntrestedEventsId: { type: Array },
  goingEventsId: { type: Array },
  sharedEventsid: { type: Array },
});

export default mongoose.model("User", userSchema);
