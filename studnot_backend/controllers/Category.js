const Category = require("../models/Category");

//create Category  ka handler function

exports.createCategory = async (req, res) => {
    try{
        //fetch data
        const {name, description} = req.body;
        //validation
        if(!name || !description) {
            return res.status(400).json({
                success:false,
                message:"ALl fields are required",
            })
        }
        //create entry in DB
        const CategoryDetalis = await Category.create({
            name:name,
            description:description,
        });
        console.log(CategoryDetalis);

        //return response
        return res.stauts(200).json({
            success:true,
            message:"Category creeate successfully"
        })


    } catch(error) {
        return res.status(500).json({
            success:false,
            message:error.message,
        })

    }
};

//getAll Category
exports.showAllCategories = async (req,res) => {
    try{
        const allCategorys = await Category.find({}, {name:true,description:true});
        res.status(200).json({
            success:true,
            message:"All Category return successfully",
            allCategorys,
        })
    } catch(error) {
        return res.status(500).json({
            success:false,
            message:error.message,
        })

    }
};

//categorypageDetails

exports.categoryPageDetails = async (req,res) => {
    try{
        //get categoryId
        const {categoryId} = req.body;
        //get courses for specified categoryId
        const selectedCategory = await Category.findById(categoryId)
                                        .populate("courses")
                                        .exec();
        //validation
        if(!selectedCategory) {
            return res.status(404).json({
                success:false,
                message:"Data Not Found",
            })
        }
        //get courses for differnet catgories
        const differnetCategories = await Category.find({
                                    _id:{$ne: categoryId},
                                    })
                                    .populate("courses")
                                    .exec();
        
        //get top 10 selling courses
        //find max num for studentEnlloed in which course 
        const topSellingCourse = await Course.find({})
                                 .sort({studentsEnrolled:-1})
                                 .limit(10)
                                 .populate("courses")
                                .exec();
        
        

        //return response
        return res.status(200).json({
            success:true,
            data: {
                selectedCategory,
                differnetCategories,
                topSellingCourse
            }
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
