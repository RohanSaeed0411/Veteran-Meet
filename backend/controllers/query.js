import Event from "../models/Event.js";
import User from "../models/User.js";
import user from "./user.js";

const appendEvent = async (req, res) => {
  const { userId, eventId } = req.query;

  let user = await User.find({ userId: userId });

  if (user) {
    // user[0].sharedEventsId.push({ eventId: eventId });
    let updatedUser = user[0];
    const { sharedEventsid } = updatedUser;
    sharedEventsid.push({ eventId: eventId });
    updatedUser = { ...updatedUser, sharedEventsid };

    let newUser = await User.findOneAndUpdate(
      { userId: userId },
      { ...updatedUser },
      { new: true, runValidator: true }
    );

    res.status(200).json(newUser);
  }
};

const eventStatus = async (req, res) => {
  const { userId, eventId, status } = req.query;

  let user = await User.find({ userId: userId });

  if (user) {
    let updatedUser = user[0];
    if (status == "interested") {
      const { intrestedEventsId } = updatedUser;
      intrestedEventsId.push({ eventId: eventId });
      updatedUser = { ...updatedUser, intrestedEventsId };
    } else if (status == "not interested") {
      const { notIntrestedEventsId } = updatedUser;
      notIntrestedEventsId.push({ eventId: eventId });
      updatedUser = { ...updatedUser, notIntrestedEventsId };
    }
    else if (status=="going"){
        const { goingEventsId } = updatedUser;
        goingEventsId.push({ eventId: eventId });
      updatedUser = { ...updatedUser, goingEventsId };
    }
    
    let newUser = await User.findOneAndUpdate(
        { userId: userId },
        { ...updatedUser },
        { new: true, runValidator: true }
      );
  
      res.status(200).json(newUser);
  }
};
export default {
  appendEvent,
  eventStatus,
};
