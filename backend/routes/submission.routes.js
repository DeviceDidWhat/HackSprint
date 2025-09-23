import express from "express";
import { submitHackathonSolution } from "../controllers/submission.controllers.js";
import upload from "../middlewares/multer.js";

const router = express.Router();

// ✅ use upload.fields before controller
router.post(
  "/",
  upload.fields([
    { name: "docs", maxCount: 5 },
    { name: "images", maxCount: 5 },
    { name: "videos", maxCount: 2 },
  ]),
  submitHackathonSolution
);

export default router;
