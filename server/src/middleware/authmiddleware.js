const jwt = require("jsonwebtoken");
const User = require("../models/user");


const authenticate = async (req, res, next) => {
    try {
        // extract token from authorization header
        const token = req.header("Authorization")?.replace("Bearer ", "");
        if (!token) {
            return res.status(401).json({ message: "Access denied. No token provided" });
        }

        // verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            return res.status(401).json({ message: "Invalid token" });
        }

        // attach the user to the request
        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({ message: "Unauthorized access", error })
    }
};

module.exports = authenticate;