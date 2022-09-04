const express = require("express");
const app = express();

const cors = require('cors')
app.use(cors())

app.use(express.json());

require("./connection");

const Student = require("./models/Student");

app.post("/student", async (req, res) => {
  try {
    const student = new Student(req.body);
    const createStudent = await student.save();
    res.status(201).send(createStudent);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.get("/student", async (req, res) => {
  try {
    const students = await Student.find();
    res.send(students);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.get("/student/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const student = await Student.findById(_id);
    if (!student) {
      return res.status(404).send();
    } else {
      res.send(student);
    }
  } catch (e) {
    res.status(500).send(e);
  }
});

app.put("/student/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const student = await Student.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(student);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.delete("/student/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const student = await Student.findByIdAndDelete(_id);
    if (!student) {
      return res.status(404).send();
    } else {
      res.send(student);  
    }
  } catch (e) {
    res.status(500).send(e);
  }
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
