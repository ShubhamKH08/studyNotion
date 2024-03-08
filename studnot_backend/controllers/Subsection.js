const SubSection = require("../models/SubSection");
const Section = require("../models/Section");
const { uploadImageToCloudinary } = require("../utils/imageUploader");

//create subsection

exports.createSubSection = async (req,res) => {
    try{
        //fetch data from Req body
        const { SectionId, title, timeDuration, description} = req.body;
        //extract file/video
        const video = req.files.videoFile;
        //validation
        if(!SectionId || !title || !timeDuration || !description || !video) {
            return res.status(400).json({
                success:"All fileds are required",
            });
        }
        //upload video to cloudniary 
        const uploadDetalis = await uploadImageToCloudinary(video, process.env.FOLDER_NAME);
        //create sub-section
        const subSectionDetails = await SubSection.create({
            title:title,
            timeDuration:timeDuration,
            description:description,
            videoUrl:uploadDetalis.secure_url,
        })
        //update sectiom with this subsection
        const updatedSection = await Section.findByIdAndUpdate({_id:SectionId},
                                                               {$push:{
                                                                subSection:subSectionDetails._id,
                                                               }},
                                                               {new:true})
                                                               .populate("subSection")
        //TODO log update ssection here, after adding populate query
          
        //retunr res
        return res.status(200).json({
            success:true,
            message:"Sub Section Created Successfully",
            updatedSection,
        })

    } catch(error) {
        return res.status(500).json({
            success:false,
            message:"unable to create Sub-section, please try again",
            error:error.message,
        })

    }
};

//TODO-update subsection
exports.updateSubSection = async (req, res) => {
    try {
      const { sectionId, title, description } = req.body
      const subSection = await SubSection.findById(sectionId)
  
      if (!subSection) {
        return res.status(404).json({
          success: false,
          message: "SubSection not found",
        })
      }
  
      if (title !== undefined) {
        subSection.title = title
      }
  
      if (description !== undefined) {
        subSection.description = description
      }
      if (req.files && req.files.video !== undefined) {
        const video = req.files.video
        const uploadDetails = await uploadImageToCloudinary(
          video,
          process.env.FOLDER_NAME
        )
        subSection.videoUrl = uploadDetails.secure_url
        subSection.timeDuration = `${uploadDetails.duration}`
      }
  
      await subSection.save()
  
      return res.json({
        success: true,
        message: "Section updated successfully",
      })
    } catch (error) {
      console.error(error)
      return res.status(500).json({
        success: false,
        message: "An error occurred while updating the section",
      })
    }
  }

  exports.deleteSubSection  = async (req, res) => {
    try {
      const { subSectionId, sectionId } = req.body
      await Section.findByIdAndUpdate(
        { _id: sectionId },
        {
          $pull: {
            subSection: subSectionId,
          },
        }
      )
      const subSection = await SubSection.findByIdAndDelete({ _id: subSectionId })
  
      if (!subSection) {
        return res
          .status(404)
          .json({ success: false, message: "SubSection not found" })
      }
  
      return res.json({
        success: true,
        message: "SubSection deleted successfully",
      })
    } catch (error) {
      console.error(error)
      return res.status(500).json({
        success: false,
        message: "An error occurred while deleting the SubSection",
      })
    }
  }

