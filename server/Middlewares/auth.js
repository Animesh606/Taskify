import { ApiError, AsyncHandler } from "../Utils/index.js";
import jwt from "jsonwebtoken";

const verifyJWT = AsyncHandler(async  (req, res, next) => {
    // Check and collect the Token
    const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");

    //  If there is no token provided
    if (!token) {
        throw new ApiError(401, "Unauthorised request");
    }

    // Decode the token
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    // Add user data to the request object
    req.userId = decodedToken?._id;

    // Move on to the next function
    return next();
})

export default verifyJWT;