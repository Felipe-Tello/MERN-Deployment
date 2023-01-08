const mongoose = require("mongoose");

const PetSquema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required."],
        minlength: [2, "Name must have at least 2 characters"],
    },
    image: {
        type: String,
        required: false,
    },
    color: {
        type: String,
        required: [true, "Color is required."],
    },
    description: {
        type: String,
        required: false,
    },
    age: {
        type: Number,
        required: [true, "Age is required."],
    },
    gender: {
        type: String,
        required: [true, "Gender is required."],
    },
}, {timestamps: true, versionKey: false})

const Pet = mongoose.model("pets", PetSquema);
module.exports = Pet;