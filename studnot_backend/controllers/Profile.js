const Profile = require("../models/Profile");
const User = require("../models/User");


// exports.updateProfile = async (req, res) => {
//     try{
//             //get data
//             const {dateOfBirth="", about="", contactNumber, gender} = req.body;
//             //get userId
//             const id = req.user.id;
//             //validation
//             if(!contactNumber || !gender || !id) {
//                 return res.status(400).json({
//                     success:false,
//                     message:'All fields are required',
//                 });
//             } 
//             //find profile
//             const userDetails = await User.findById(id);
//             const profileId = userDetails.additionalDetails;
//             const profileDetails = await Profile.findById(profileId);

//             //update profile
//             profileDetails.dateOfBirth = dateOfBirth;
//             profileDetails.about = about;
//             profileDetails.gender = gender;
//             profileDetails.contactNumber = contactNumber;
//             await profileDetails.save();
//             //return response
//             return res.status(200).json({
//                 success:true,
//                 message:'Profile Updated Successfully',
//                 profileDetails,
//             });

//     }
//     catch(error) {
//         return res.status(500).json({
//             success:false,
//             error:error.message,
//         });
//     }
// };  

exports.updateProfile = async (req, res) => {
  try{
          //get data
          const {dateOfBirth="", about="", contactNumber, gender} = req.body;

          const {currentPassword , changePassword} = req.body;



          //get userId
          const id = req.user.id;
          //validation
          if(!contactNumber || !gender || !id) {
              return res.status(400).json({
                  success:false,
                  message:'All fields are required',
              });
          } 

          
          if(!currentPassword , !changePassword){
            return res.status(400).json({
               success:false,
               message:"All the feilds are required"
            });
         }

         const user = await User.findById(id);

         if(!user){
            return res.status(404).json({
                success:false,
                message: "User not found"
            })
         }

         const isPasswordValid = await bcrypt.compare(currentPassword , user.password);

         
      if (!isPasswordValid) {
        return res.status(401).json({
            success: false,
            message: 'Invalid current password',
        });
    }

    const  hashedNewPassword = await bcrypt.hash(changePassword, 10);

    user.password = hashedNewPassword;
    await  user.save();

    
          //find profile
          const userDetails = await User.findById(id);
          const profileId = userDetails.additionalDetails;
          const profileDetails = await Profile.findById(profileId);

          //update profile
          profileDetails.dateOfBirth = dateOfBirth;
          profileDetails.about = about;
          profileDetails.gender = gender;
          profileDetails.contactNumber = contactNumber;
          await profileDetails.save();
          //return response
          return res.status(200).json({
              success:true,
              message:'Profile Updated Successfully',
              profileDetails,
          });

  }
  catch(error) {
      return res.status(500).json({
          success:false,
          error:error.message,
      });
  }
};


//deleteAccount
//Explore -> how can we schedule this deletion operation google- (cromjob)
exports.deleteAccount = async (req, res) => {
    try{
        //get id 
        const id = req.user.id;
        //validation
        const userDetails = await User.findById(id);
        if(!userDetails) {
            return res.status(404).json({
                success:false,
                message:'User not found',
            });
        } 
        //delete profile
        await Profile.findByIdAndDelete({_id:userDetails.additionalDetails});
        //TOOD: HW unenroll user form all enrolled courses
        //delete user
        await User.findByIdAndDelete({_id:id});
       
        //return response
        return res.status(200).json({
            success:true,
            message:'User Deleted Successfully',
        })

    }
    catch(error) {
        return res.status(500).json({
            success:false,
            message:'User cannot be deleted successfully',
        });
    }
};

exports.getAllUserDetails = async (req, res) => {

    try {
        //get id
        const id = req.user.id;

        //validation and get user details
        const userDetails = await User.findById(id).populate("additionalDetails").exec();
        //return response
        return res.status(200).json({
            success:true,
            message:'User Data Fetched Successfully',
        });
       
    }
    catch(error) {
        return res.status(500).json({
            success:false,
            message:error.message,
        });
    }
};

//updateDisplayPicture
exports.updateDisplayPicture = async (req, res) => {
    try {
      const displayPicture = req.files.displayPicture
      const userId = req.user.id
      const image = await uploadImageToCloudinary(
        displayPicture,
        process.env.FOLDER_NAME,
        1000,
        1000
      )
      console.log(image)
      const updatedProfile = await User.findByIdAndUpdate(
        { _id: userId },
        { image: image.secure_url },
        { new: true }
      )
      res.send({
        success: true,
        message: `Image Updated successfully`,
        data: updatedProfile,
      })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      })
    }
};


//getEnrolledCourses

  
exports.getEnrolledCourses = async (req, res) => {
    try {
      const userId = req.user.id
      const userDetails = await User.findOne({
        _id: userId,
      })
        .populate("courses")
        .exec()
      if (!userDetails) {
        return res.status(400).json({
          success: false,
          message: `Could not find user with id: ${userDetails}`,
        })
      }
      return res.status(200).json({
        success: true,
        data: userDetails.courses,
      })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      })
    }
};





