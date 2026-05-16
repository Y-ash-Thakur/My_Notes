import express from "express";
import { getNotes } from "../controllers/notes.controller.js";

const router = express.Router();

router.post('/notes', getNotes)

export default router;