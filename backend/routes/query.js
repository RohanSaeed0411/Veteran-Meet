import query from "../controllers/query.js";
import express from "express";
const router = express.Router();

router.get("/", query.appendEvent);
router.get("/status/",query.eventStatus);
export default router;
