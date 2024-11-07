const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/Sample", {})
  .then(() => {
    console.log("Connected to MongoDB Successfully");
  })
  .catch((err) => {
    console.log(err);
  });

const student = new mongoose.Schema({
  name: String,
  workout: Boolean,
  height: Number,
});

const Student = mongoose.model("Student", student);

const adder = async () => {
  const ss = await Student.create({
    name: "Naveen",
    workout: true,
    height: 185,
  });
  console.log(ss);
};

adder();
