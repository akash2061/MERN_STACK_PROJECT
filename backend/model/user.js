const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "ERROR: Name is Required."],
        minlength: [3, "ERROR: Name Should be atleast 3 character long."],
        maxlength: [50, "ERROR: Name cannot exceed 50 characters."]
    },

    email: {
        type: String,
        required: [true, "Email is Required."],
        unique: true,
        validate: {
            validator: function (value) {
                return validator.isEmail(value);
            },
            message: "ERROR: email should be in valid format"
        }
    },

    password: {
        type: String,
        required: [true, "WARNING: Password is required"],
        minlength: [8, "ERROR: Password must be 8 character long"],
        maxlength: [128, "ERROR: Password cannot exceed 128 characters."],
        validate: {
            validator: function (value) {
                return validator.isStrongPassword(value, {
                    minLength: 8,
                    minLowercase: 1,
                    minUppercase: 1,
                    minNumbers: 1,
                    minSymbols: 1
                })
            },
            message: "WARNING: Password must be stronger"
        }
    },

    phoneNumber: {
        type: String,
        required: [true, "WARNING: Phone Number is required"],
        validate: {
            validator: function (value) {
                return validator.isMobilePhone(value, "en-IN")
            },
            message: "ERROR: Phone number should be valid"
        }
    },

});

module.exports = mongoose.model("User", userSchema);