const RatingAndReviews =  require("../models/RatingAndRaview");
const Course = require("../models/Course");
const { mongo, default: mongoose, trusted } = require("mongoose");

//create
exports.createRating = async (req,res) => {
    try{
        //get userid
        const id = req.user.id;
        //fetch data from req body
        const {rating,review, CourseId} = req.body;
        //check if user enrolled or not
        const courseDetail = await Course.findOne(
                                     {id:CourseId,
                                    studentsEnrolled:{$elemMatch: {$eq: userId}},
                                });
        if(!courseDetail) {
            return res.status(404).json({
                success:false,
                message:'Student is not enrolled in the course',

            });
        }
        //check if user already reviewed the course
        const alreadyReviewed = await RatingAndReviews.findOne({
                                                  user:userId,
                                                  course:CourseId,
                                                });
                                        
       //check if user already reviewd the course
       if(alreadyReviewed) {
        return res.status(403).json({
            success:false,
            message:'Course is already reviewed by the user',
        });
       }

       //create rating and review
       const ratingAndReviews = await RatingAndReviews.create({
                                          rating,review,
                                          course:CourseId,
                                          user:userId,
                                    });

      //update course with this rating/reviw
      const updateCourseDeatils = await Course.findByIdAndUpdate({_id:CourseId},
                                 {
                                    $push: {
                                        ratingAndReviews: ratingAndReviews._id,
                                    }
                                 },
                                 {new: true});
    
    console.log(updateCourseDeatils);
    //return response
    return res.status(200).json({
        success:true,
        message:"Rating and Review created Successfully",
        ratingAndReviews,
    })




    }
    catch(error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:error.message,
        })

    }
}

//getAverageRating
exports.getAverageRating = async (req, res) => {
    try{
        //get course Id
        const couresId = req.body.couresId;
        //calculate avg rating
        const result = await RatingAndReviews.aggregate([
            {
                $match: {
                    course: new mongoose.Types.ObjectId(couresId),
                },
            },
            {
                $group: {
                    _id:null,
                    averageRating: { $avg: "$rating"},
                }
            }
        ])
        //return rating
        if(result.length > 0) {
             return res.status(200).json({
                success:true,
                averageRating: result[0].averageRating,
             })
        }
        //if no rating/Review exit
        return res.status(200).json({
            success:true,
            message:'Average Rating is 0, no ratings given till now',
            averageRating:0,
        })

    }
    catch(error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:error.message,
        })

    }
}

//getAlllRatingAndReviews
 
exports.getAllRating = async (req,res) => {
    try{
        const allReviwes = await RatingAndReviews.find({})
                                .sort({rating:"desc"})
                                .populate({
                                    path:"user",
                                    select:"courseName",
                                })
                                .exec();
        return res.status(200).json({
            success:true,
            message:"All reviews fetched successfully",
            data:allReviwes,
        })
    }
    catch(error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}