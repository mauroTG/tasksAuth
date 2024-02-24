import jwt from "jsonwebtoken";
import 'dotenv/config';

const { JWT_SECRET } = process.env;

export const createAccessToken = (payload) => {
    return new Promise((resolve, reject) => {
        jwt.sign(payload, JWT_SECRET, { expiresIn: "1d" }, (err, token) => {
            if (err) reject(err);
            resolve(token);
        });
    });
};