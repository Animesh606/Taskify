import User from "../Models/UserModel";
import { asyncHandler, ApiResponse, ApiError } from "../Utils";

const registerUser = asyncHandler(async (req, res) => {

    // Form data from frontend
    const { firstName, lastName, email, mobile, password } = req.body;

    // check user exist or not
    const oldUser = await User.findOne({email});
    if (oldUser) {
        throw new ApiError(401, "User already exists");
    }
    
    // Create new user
    const newUser = new User({
        firstName,
        lastName,
        email,
        mobile,
        password
    });
    await newUser.save();

    return ApiResponse(201, "User Successfully Registered");
})

const loginUser = asyncHandler(async (req, res) => {

    // Form data from frontend
    const { email, password } = req.body;

    // check user exist and password is correct
    const user = await User.findOne({email});
    if(!user || !(await user.isPassword(password))) {
        throw new ApiError(401, 'Invalid Email or Password');
    }

    // Set accessToken to user cookie
    const accessToken = user.generateAccessToken();
    return res.status(200)
    .cookie("accessToken", accessToken, {httpOnly : true, secure : true})
    .json(
        new ApiResponse(200, "Logged In", {
            user,
            accessToken
        })
    )
})

export {
    registerUser,
    loginUser
}