const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
    name: String,
    usn: String,
    branch: String,
    sem: String,
    email: String,
    phone: String,
})

module.exports = mongoose.model("Student", studentSchema);