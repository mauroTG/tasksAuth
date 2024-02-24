import app from "./app.js";
import { connectDB } from "./db.js";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    connectDB();
    console.log(`Server on port ${PORT}`);
});