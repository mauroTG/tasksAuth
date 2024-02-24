import { Schema, model } from 'mongoose';

const taskSchema = new Schema({
    title: { type: String, required: [true, "Title is required"], unique: false },
    description: { type: String, required: [true, "Description is required"], unique: false },
    date: { type: Date, default: Date.now() },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true }
}, { timestamps: true });

export default model("Task", taskSchema);