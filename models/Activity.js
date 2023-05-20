import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const { Schema, model } = mongoose;
const activitySchema = new Schema({
    _id: { type: ObjectId, auto: true },
    name: { type: String, required: true },
    category: { type: String, required: true }
});

const Activity = model('activity', activitySchema);
export default Activity;