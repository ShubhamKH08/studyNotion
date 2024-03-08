const Course = require("../models/Course");
const Category = require("../models/Category");
const User = require("../models/User");
const {uploadImageToCloudinary} = require("../utils/imageUploader");

//createCouse handler function
exports.createCourse = async (req, res) => {
    try{
        //fetch data 
        const {courseName, courseDescription, whatYouWilLern, price, category,instructions} = req.body;

        //get thumbnail
        const thumbnail = req.files.thumbnailImage;

        //validation

        if(!courseName || !courseDescription || !whatYouWilLern || !price  || !category || !thumbnail) {
            return res.status(400).json({
                success:false,
                message:"All Fields are required"
            })
        }

        //check for instructor(db call to fetch instrc. detalis )
        const userId = req.user.id;
        const instructorDeatils = await User.findById(userId);
        console.log("InstructorDeatils", instructorDeatils);

        if(!instructorDeatils) {
            return res.status(404).json({
                success:false,
                message:"Instructor Detalis not found",
            })
        }
        //check givent ag is valid or not
        const CategoryDetalis = await Category.findById(Category);
        if(!Category) {
            return res.status(404).json({
                success:false,
                message:"Category Detalis not found",
            })
        }

        //upload Image to cloudinary
        const thumbnailImage = await uploadImageToCloudinary(thumbnail, process.env.FOLDER_NAME);

        //create an entry in for new course
        const newCourse = await Course.create({
            courseName,
            courseDescription,
            courseDescription,
            instructor:instructorDeatils._id,
            whatYouWillLearn:whatYouWilLern,
            price,
            Category:CategoryDetalis._id,
            thumbnail:thumbnailImage.secure_url,

       
        })

        //add new course to the user schema of intrcutor
        await User.findByIdAndUpdate(
            {_id: instructorDeatils._id},
            {
                $push: {
                    courses: newCourse._id,
                }

            },
             {new:true}
            
         );
         //Todo
         //update the Category schema
         

         //return response
         return res.status(200).json({
            success:true,
            message:"Course Created Successfully",
            data:newCourse,
        });

       


    }
    catch(error) {
        console.error(error);
        return res.status(500).json({
            success:false,
            message:"Failed to create course",
        })

    }
}



//getAllCourse handler
exports.getAllCourses  = async (req, res) => {
    try{
        const  allCourses = await Course.find({}, {courseName:true,
                                                  price:true,
                                                  thumbnail:true, 
                                                  instructor:true,
                                                  ratingAndReviews:true,
                                                  studentsEnrolled:true,})
                                                  .populate("instructor")
                                                  .exec();
        return res.status(200).json({
            success:true,
            message:"Data for all courses fetched successfully"
        })


    } catch(error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Cannot fetch course data",
            error : error.message,
        })

    }
}

exports.getCourseDetails = async (req, res) => {
    try {
            //get id
            const {courseId} = req.body;
            //find course details
            const courseDetails = await Course.find(
                                        {_id:courseId})
                                        .populate(
                                            {
                                                path:"instructor",
                                                populate:{
                                                    path:"additionalDetails",
                                                },
                                            }
                                        )
                                        .populate("category")
                                        //.populate("ratingAndreviews")
                                        .populate({
                                            path:"courseContent",
                                            populate:{
                                                path:"subSection",
                                            },
                                        })
                                        .exec();

                //validation
                if(!courseDetails) {
                    return res.status(400).json({
                        success:false,
                        message:`Could not find the course with ${courseId}`,
                    });
                }
                //return response
                return res.status(200).json({
                    success:true,
                    message:"Course Details fetched successfully",
                    data:courseDetails,
                })

    }
    catch(error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:error.message,
        });
    }
}
