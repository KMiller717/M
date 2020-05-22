const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Must have a dog name"]
    },
    type: {
        type:String,
        required: [true, "Must have a type"],
        minlength: [3, "Must be at least 3 characters"]
    },
    description: {
        type: String,
        required: [true, "Must have description"],
        min: [1, "Must be longer than 1 character"]
    },
    skill_one: {
        type: String,
        required: [true, "Must have a skill"],
        min: [1, "Must be longer than 1 character"]
    },
    skill_two: {
        type: String,
        required: [true, "Must have a skill"],
        min: [1, "Must be longer than 1 character"]
    },
    skill_three: {
        type: String,
        required: [true, "Must have a skill"],
        min: [1, "Must be longer than 1 character"]
    }

}, {timestamps: true})


const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;