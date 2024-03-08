const express = require("express")
const router =  express.Router()

const { auth } = require("../middlewares/auth")

const { 

    updateProfile ,
    deleteAccount,
    getAllUserDetails,
    getEnrolledCourses,
    updateDisplayPicture,

} = require("../controllers/Profile")


// ********************************************************************************************************
//                                      Profile routes
// ********************************************************************************************************
router.post("/updateProfile", auth, updateProfile)
router.delete("/deleteAccount", auth, deleteAccount)
router.get("/getAlluserDetails", auth, getAllUserDetails)

//// Get Enrolled Courses
router.get("/getEnrolledCourses", auth, getEnrolledCourses)
///updateDisplayPicture
router.put("/updateDisplayPicture", auth, updateDisplayPicture)
///updateDisplayPicture
module.exports = router