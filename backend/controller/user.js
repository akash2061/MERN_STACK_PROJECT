const User = require("../model/user");
const bcrypt = require("bcrypt");

exports.signup = async (req, res) => {
    try {
        const { name, email, password, phoneNumber } = req.body;
        const isExisting = await User.findOne({ email: email });

        if (isExisting) {
            return res.status(400).send({ message: "User Already Exist" });
        }

        //! Encription of password
        // const hashPassword = await bcrypt.hash(password, 10); 
        const newUser = new User({ name: name, email: email, password: password, phoneNumber: phoneNumber });
        //! Use Middleware
        await newUser.save();
        res.status(201).send({ message: "Account Created" });
    } catch (error) {
        if (error.name === "ValidationError") {
            const errors = Object.values(error.errors).map(error => error.message);
            return res.status(400).json({ message: "Validation Error", error: errors });
        }

        console.log(error.name);
        res.status(500).send(error);
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const isExisting = await User.findOne({ email: email });

        if (!isExisting) {
            return res.status(404).send({ message: "User Not Found" });
        };

        const isMatched = await bcrypt.compare(password, isExisting.password);
        if (!isMatched) {
            return res.status(401).send({ message: "Invalid Password" });
        }

        res.status(200).send({ message: "User Logged-In", data: isExisting });
    } catch (error) {
        res.status(500).send(error);
    }
}