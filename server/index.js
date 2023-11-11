require("dotenv").config();
const express = require("express");
const cors = require("cors")
const connectDB = require("./DB");

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

connectDB()
.then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    })
})
.catch((err) => {
    console.error(err);
})