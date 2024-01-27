import dotenv from "dotenv";
import connectDB from "./DB/index.js";
import app from "./app.js";

dotenv.config();

connectDB()
.then(() => {
    const port = process.env.PORT || 8000;
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    })
})
.catch((err) => {
    console.error("MongoDB Connection failed!!!" + err);
})