import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
    {
        firstName : {
            type : String,
            required : [true, "Please add a firstName"],
            trim : true,
            lowercase : true
        },
        lastName : {
            type : String,
            required : [true, "Please add a lastName"],
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

userSchema.pre("save", async function(next) {
    if(this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
})

userSchema.methods.isPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateAccessToken = function() {
    const token = jwt.sign({_id : this._id, firstName : this.firstName}, process.env.JWT_SECRET, {expiresIn: "30d"});
    return token;
}

const User = mongoose.model("User", userSchema);

export default User;