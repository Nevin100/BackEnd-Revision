const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 4000;
const bodyParser = require("body-parser");
const cors = require("cors");

// Connection of MongoDB
mongoose
  .connect("mongodb://localhost:27017/Test")
  .then(() => {
    console.log("MongoDB is connected and working perfectly!!");
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Schema
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
});

// Model
const Product = mongoose.model("Products", productSchema);

// POST (CREATE)
app.post("/api/v1/newProduct", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Failed to create product!!",
    });
  }
});

// GET (READ)
app.get("/api/v1/product", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      success: true,
      products,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: "Failed to fetch data!!",
    });
  }
});

// PUT (UPDATE)
app.put("/api/v1/updateProduct/:id", async (req, res) => {
  try {
    let product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({
        success: false,
        error: "Product not found!",
      });
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Failed to update product!",
    });
  }
});

// DELETE (DELETE)
app.delete("/api/v1/delete/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({
        success: false,
        error: "Product not found!",
      });
    }

    await Product.findByIdAndDelete(req.params.id);
    res.json({
      success: true,
      message: "Product is deleted!",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Failed to delete the data",
    });
  }
});

// Server Listening
app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
