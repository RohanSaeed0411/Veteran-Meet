import event from "../controllers/event.js";
import express from "express";
const router = express.Router();

router.get("/", event.getEvents);
router.post("/", event.createEvent);
router.get("/:id", event.getEvent);
router.patch("/:id", event.updateEvent);
router.delete("/:id", event.deleteEvent);
export default router;
