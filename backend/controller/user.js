const User = require("../model/user");
const bcrypt = require("bcrypt");

exports.signup = async (req, res, next) => {
    try {
        const { name, email, password, phoneNumber } = req.body;
        const isExisting = await User.findOne({ email: email });

        if (isExisting) {
            const error = new Error("User Already Exist");
            error.statusCode = 400;
            throw error;
            // return res.status(400).send({ message: "User Already Exist" });
        }

        //! Encription of password
        // const hashPassword = await bcrypt.hash(password, 10); 
        const newUser = new User({ name: name, email: email, password: password, phoneNumber: phoneNumber });
        //! Use Middleware
        await newUser.save();
        res.status(201).send({ message: "Account Created" });
    } catch (error) {
        next(error);
    }
}

exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const isExisting = await User.findOne({ email: email });

        if (!isExisting) {
            const error = new Error("User Not Found");
            error.statusCode = 404;
            throw error;
            // return res.status(404).send({ message: "User Not Found" });
        };

        const isMatched = await bcrypt.compare(password, isExisting.password);
        if (!isMatched) {
            const error = new Error("Invalid Password");
            error.statusCode = 401;
            throw error;
            // return res.status(401).send({ message: "Invalid Password" });
        }

        res.status(200).send({ message: "User Logged-In", data: isExisting });
    } catch (error) {
        next(error);
    }
}