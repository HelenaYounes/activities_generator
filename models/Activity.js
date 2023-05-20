import mongoose from "mongoose";

const { Schema, model } = mongoose;
const activitySchema = new Schema({
    name: String,
    type: String,
});

const Activity = model('Activity', activitySchema, "myActivities");
export default Activity;