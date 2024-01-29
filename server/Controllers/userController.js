import User from "../Models/UserModel.js";
import { AsyncHandler, ApiResponse, ApiError } from "../Utils/index.js";

const registerUser = AsyncHandler(async (req, res) => {

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

    return res.json(
        new ApiResponse(201, "User Successfully Registered")
    );
})

const loginUser = AsyncHandler(async (req, res) => {

    // Form data from frontend
    const { email, password } = req.body;

    // email or password empty or not
    if (!email || !password) {
        throw new ApiError(400, "Email and Password are required fields.");
    }

    // find the user by email
    const user = await User.findOne({email});

    // check user exist and password is correct
    if(!user || !(await user.isPassword(password))) {
        throw new ApiError(401, 'Invalid Email or Password');
    }

    // Set accessToken to user cookie
    const accessToken = user.generateAccessToken();
    return res.status(200)
    .cookie("accessToken", accessToken, {httpOnly : true, secure : true})
    .json(
        new ApiResponse(200, "Login Successful!!", {
            user,
            accessToken
        })
    )
})

const getUser = AsyncHandler(async (req, res) => {
    const user = await User.findById(req?.userId)?.populate("tasks").select("-password");
    return res.json(
        new ApiResponse(200, "User Details Retrieved successfully.", user)
    );
});

export {
    registerUser,
    loginUser,
    getUser
}