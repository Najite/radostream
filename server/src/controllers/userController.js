const User = require("../models/user");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");

// register new user
exports.register = async (req, res) => {
    try {
        const {username, email, password} = req.body;

        // check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // password encrypting
        const hashedPassword = await bcrypt.hash(password, 10);

        // create new user
        const user = new User({
            username,
            email,
            password:hashedPassword,
        });

        // save user to database
        await user.save();

        res.status(201).json({ message: "User registered successfully"});
    } catch (error) {
        res.status(500).json({ message: "Server error", error});
    }
};


// authenticate user and return a token
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // check if the password is correct
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.
        }

    }
}