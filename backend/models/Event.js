import mongoose from "mongoose";

const eventSchema = mongoose.Schema({
  eventId: { type: String },
  eventName: { type: String },
  eventDate: { type: Date },
  organizingCompanies: { type: Array },
  intrestedPeople: { type: Array },
  notIntrestedPeople: { type: Array },
  goingPeople: { type: Array },
  eventDescription: { type: String },
});

export default mongoose.model("Event", eventSchema);
