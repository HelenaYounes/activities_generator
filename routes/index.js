import express from "express";
import "../config/db.js";
import Activity from "../models/Activity.js";
import * as activities from "./activities.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const list = await Activity.find();
  //   const myList = await JSON.stringify(list);
  res.json(list);
});

router.post("/activities", async (req, res) => {
  const newAct = await Activity.create({
    name: req.body.name,
    category: req.body.category,
  });
  res.json(newAct);
});

router.get("/activities/:id", activities.read);

router.post("/activities/:id", activities.create);

router.delete("/activities/:id", activities.deleteActivity);

export default router;
