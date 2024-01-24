import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            required : [true, "Please add a Name"],
            trim : true,
            lowercase : true
        },
        email: {
            type : String,
            unique : true,
            required : [true,"Please add an Email"],
            lowercase : true
        },
        password:{
            type : String,
            required : [true,"Please add a Password"]
        },
        tasks : [
            {
                type : mongoose.Schema.Types.ObjectId,
                ref : "Task"
            }
        ]
    },
    {timestamps : true}
)

const User = mongoose.model("User", userSchema);

export default User;