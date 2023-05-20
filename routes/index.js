import express from "express";
import mongoose from "mongoose";
import Activity from "../models/Activity.js";
import * as activities from "./activities.js";

mongoose.connect("mongodb://localhost:27017");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function () {
  console.log("Connection Successful!");
});
const router = express.Router();

router.get("/activities", async (req, res) => {
  console.log(req);
  const list = await Activity.find();
  const myList = await JSON.stringify(list);
  res.send(myList);
});

router.post("/activities", async (req, res) => {
  const newAct = await Activity.create({
    name: req.body.name,
    type: req.body.type,
  });
  res.json(newAct);
});

router.get("/activities/:id", activities.read);

router.post("/activities/:id", activities.create);

router.delete("/activities/:id", activities.deleteActivity);

export default router;
