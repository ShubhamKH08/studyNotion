const Course = require("../models/Course");
const Category = require("../models/Category");
const User = require("../models/User");
// const {uploadImageToCloudinary} = require("../utils/imageUploader");
exports.createCourse = async (req, res) => {
  try {
    // Get user ID from request object
    const userId = req.user.id;
    console.log('user id:'+userId);

    let {
      courseName,
      courseDescription,
      price,
      category,
      tags,
      thumbnail,
      benefits,
      requirements,
    } = req.body;

    console.log("data: ", {
      courseName,
      courseDescription,
      price,
      category,
      tags,
      thumbnail,
      benefits,
      requirements,
    });

    // Check if any of the required fields are missing
    if (
      !courseName ||
      !courseDescription ||
      !benefits ||
      !price ||
      !tags ||
      !thumbnail||
      !category
    ) {
      return res.status(400).json({
        success: false,
        message: "All Fields are Mandatory",
      });
    }

    // if (!status || status === undefined) {
    //   status = "Draft";
    // }

    // Check if the user is an instructor
    const instructorDetails = await User.findById(userId, {
      accountType: "Instructor",
    });

    if (!instructorDetails) {
      return res.status(404).json({
        success: false,
        message: "Instructor Details Not Found",
      });
    }

    // Check if the tag given is valid
    // const categoryDetails = await Category.findByName(category);
    const categoryDetails = await Category.findOne({ name: category });
    if (!categoryDetails) {
      console.log('Category Details :', categoryDetails);
      return res.status(404).json({
        success: false,
        message: "Category Details Not Found",
      });
    }

    // Create a new course with the given details
    const newCourse = await Course.create({
      courseName:courseName,
      courseDescription:courseDescription,
      instructor: instructorDetails._id,
      benefits: benefits,
      price:price,
      tags:tags,
      thumbnail:thumbnail,
      category: category,
      requirements:requirements,
    });

    // Add the new course to the User Schema of the Instructor
    await User.findByIdAndUpdate(
      {
        _id: instructorDetails._id,
      },
      {
        $push: {
          courses: newCourse._id,
        },
      },
      { new: true }
    );

    // Add the new course to the Categories
    const categoryDetails2 = await Category.findByIdAndUpdate(
      { _id: categoryDetails._id },
      {
        $push: {
          courses: newCourse._id,
        },
      },
      { new: true }
    );

    console.log("HEREEEEEEEE", categoryDetails2);

    // Return the new course and a success message
    res.status(200).json({
      success: true,
      data: newCourse,
      message: "Course Created Successfully",
    });
  } catch (error) {
    // Handle any errors that occur during the creation of the course
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to create course",
      error: error.message,
    });
  }
};

//getAllCourse handler
exports.getAllCourses = async (req, res) => {
  try {
    const allCourses = await Course.find(
      {},
      {
        courseName: true,
        price: true,
        thumbnail: true,
        instructor: true,
        ratingAndReviews: true,
        studentsEnrolled: true,
      }
    )
      .populate("instructor")
      .exec();
    return res.status(200).json({
      success: true,
      message: "Data for all courses fetched successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Cannot fetch course data",
      error: error.message,
    });
  }
};

exports.getCourseDetails = async (req, res) => {
  try {
    //get id
    const { courseId } = req.body;
    //find course details
    const courseDetails = await Course.find({ _id: courseId })
      .populate({
        path: "instructor",
        populate: {
          path: "additionalDetails",
        },
      })
      .populate("category")
      //.populate("ratingAndreviews")
      .populate({
        path: "courseContent",
        populate: {
          path: "subSection",
        },
      })
      .exec();

    //validation
    if (!courseDetails) {
      return res.status(400).json({
        success: false,
        message: `Could not find the course with ${courseId}`,
      });
    }
    //return response
    return res.status(200).json({
      success: true,
      message: "Course Details fetched successfully",
      data: courseDetails,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
