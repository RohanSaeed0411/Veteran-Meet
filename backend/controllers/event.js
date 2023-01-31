import Event from "../models/Event.js";

const getEvents = async (req, res) => {
  const { ids } = req.query;
  if (ids) {
    const events = [];
    const mulIds = ids.split(",");
    for (const element of mulIds) {
      try {
        const event = await Event.find({ eventId: element });
        events.push(event);
      } catch (error) {
        console.log(error);
      }
    }
    res.status(200).json(events);
  }

  try {
    const events = await Event.find({});
    res.status(200).json(events);
  } catch (error) {
    res.status(404);
  }
};

const createEvent = async (req, res) => {
  try {
    const event = await Event.create({ ...req.body });
    res.status(200).json(event);
  } catch (error) {
    res.send(error);
  }
};

const getEvent = async (req, res) => {
  const { id } = req.params;
  try {
    const event = await Event.findById(id);
    res.status(200).json(event);
  } catch (error) {
    res.status(404);
  }
};

const updateEvent = async (req, res) => {
  const { id } = req.params;

  try {
    const event = await Event.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true, runValidator: true }
    );
    res.status(200).json(direction);
  } catch (error) {
    res.send(error);
  }
};

const deleteEvent = async (req, res) => {
  const { id } = req.params;
  try {
    const event = await Event.findByIdAndDelete(id);
    res.status(200).json(event);
  } catch (error) {
    res.status(404);
  }
};

export default {
  getEvents,
  createEvent,
  getEvent,
  updateEvent,
  deleteEvent,
};
