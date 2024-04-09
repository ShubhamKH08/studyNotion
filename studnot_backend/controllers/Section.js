const Section = require("../models/Section");
const Course = require("../models/Course");

exports.createSection = async (req, res) => {
  try {
    //data fetch
    const { sectionName, courseId } = req.body;
    //data validation
    if (!sectionName || !courseId) {
      return res.status(400).json({
        success: false,
        message: "Missing Properties",
      });
    }
    //create section
    const newSection = await Section.create({ sectionName });
    //update course with section ObjectID
    const updateCourseDeatils = await Course.findByIdAndUpdate(
      courseId,
      {
        $push: {
          courseContent: newSection._id,
        },
      },
      { new: true }
    )
      //Todo: use populate to replace section/subections both in the updateCourseDeatils(course conetn mndy sectiona  and subscetion id nhi hvi object hva)
      .populate({
        path: "courseContent",
        populate: {
          path: "subSection",
        },
      })
      .exec();
    //return response
    return res.status(200).json({
      success: true,
      message: "Section created Successfully",
      updateCourseDeatils,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "unable to create section, please try again",
    });
  }
};

///update section
exports.updateSection = async (req, res) => {
  try {
    //data input
    const { sectionName, sectionId } = req.body;
    //data validation
    if (!sectionName || !sectionId) {
      return res.status(400).json({
        success: false,
        message: "Missing Properties",
      });
    }
    //section update
    const section = await Section.findByIdAndUpdate(
      sectionId,
      { sectionName },
      { new: true }
    );

    //return res
    return res.status(200).json({
      success: true,
      message: section,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "unable to create section, please try again",
    });
  }
};

exports.deleteSection = async (req, res) => {
  try {
    //get id -asssuming that we are sending ID in paras
    const { sectionId } = req.param;
    //use findByIdDelete
    await Section.findByIdAndDelete(sectionId);
    //TODO[testing]:do we need to delete the entry from the course schema ?
    //return response
    return res.status(200).json({
      success: true,
      message: "Section Deleted Successfully ",
    });
  } catch {
    return res.status(500).json({
      success: false,
      message: "unable to create section, please try again",
    });
  }
};
