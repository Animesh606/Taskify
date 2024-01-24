import dotenv from "dotenv";
import connectDB from "./DB";
import app from "./app";

dotenv.config();

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${port}`);
    })
})
.catch((err) => {
    console.error("MongoDB Connection failed!!!" + err);
})