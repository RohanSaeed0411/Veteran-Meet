import express from "express";
import mongoose, { connect } from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import createError from "http-errors";
import eventRoute from "./routes/event.js";
import userRoute from "./routes/user.js";
import queryRoute from "./routes/query.js";

const app = express();
const MONGO_URI =
  "mongodb+srv://rohan638:rohan08042001@mycluster.wznq2cy.mongodb.net/VeteranMeet?retryWrites=true&w=majority";
const port = 4000;

app.use(bodyParser.json());

//routes

// app.get("/", (req, res) => {
//   res.send(
//     "<h1>VeteranMeet API</h1><ul><li><a href='/events/'>Events</a></li><li><a href='/users/'>Users</a></li></ul>"
//   );
// });
app.use("/query/", queryRoute);
app.use("/events/", eventRoute);
app.use("/users/", userRoute);

mongoose.set("strictQuery", false);
//db connection
try {
  connect(MONGO_URI, () => {
    app.listen(port, () => {
      console.log("Server is listening to the port " + port);
    });
  });
} catch (error) {
  console.log(error);
}
