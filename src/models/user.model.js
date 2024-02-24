import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    username: { type: String, required: [true, "Username is required"], unique: true, trim: true },
    email: { type: String, required: [true, "Email is required"], unique: true, trim: true },
    password: { type: String, required: [true, "Password is required"] },
}, { timestamps: true });

export default model("User", userSchema);