
const mongoose = require("mongoose");

// Define the Courses schema
const coursesSchema = new mongoose.Schema({
  courseName: { type: String },
  courseDescription: { type: String },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
  benefits: {
    type: String,
  },
  courseContent: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Section",
    },
  ],
  ratingAndReviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "RatingAndReview",
    },
  ],
  price: {
    type: Number,
  },
  thumbnail: {
    type: String,
  },
  tags: [
    {
      type: String,
      required: true,
    },
  ],
  category: {
    type: String,
    // required: true,
    ref: "Category",
  },
  studentsEnroled: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
  ],
  requirements: [
    {
      type: String,
    },
  ],

  instructions: [
    {
      type: String,
    },
  ],

  //   status: {
  //     type: String,
  //     enum: ["Draft", "Published"],
  //   },
  createdAt: { type: Date, default: Date.now },
});

// Export the Courses model
module.exports = mongoose.model("Course", coursesSchema);

