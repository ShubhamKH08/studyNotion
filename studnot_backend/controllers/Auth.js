const User = require("../models/User");
const OTP = require("../models/OTP");
const otpGenerator = require("otp-generator");
const bcrypt = require("bcrypt");
const mailSender = require("../utils/mailSender");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const Profile = require("../models/Profile");
const crypto= require("crypto");
const requestIp = require('request-ip');


//----- New approch for sendotp
exports.sendotp = async (req, res) => {
  try {
    const { email } = req.body;
    console.log('email is: '+email)
    // Check if user is already present
    // Find user with provided email
    const checkUserPresent = await User.findOne({ email });
    // to be used in case of signup

    // If user found with provided email
    if (checkUserPresent) {
      // Return 401 Unauthorized status code with error message
      return res.status(401).json({
        success: false,
        message: `User is Already Registered`,
      });
    }

    var otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });
    const result = await OTP.findOne({ otp: otp });
    console.log("Result is Generate OTP Func");
    console.log("OTP", otp);
    console.log("Result", result);
    while (result) {
      otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false,
      });
    }
    

    const otpBody = await OTP.create({ email, otp, });
    console.log("OTP Body", otpBody);
    res.status(200).json({
      success: true,
      message: `OTP Sent Successfully`,
      otp,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, error: error.message });
  }
};

function generateDeviceToken(){
   return crypto.randomBytes(16).toString('hex');

}



// Signup Controller for Registering USers
exports.signup = async (req, res) => {
  try {
    // Destructure fields from the request body
    // Destructure fields from the request body~
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      accountType,
      contactNumber,
      otp,
    } = req.body;
    // Check if All Details are there or not
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !confirmPassword ||
      !otp
    ) {
      return res.status(403).send({
        success: false,
        message: "All Fields are required",
      });
    }
    // Check if password and confirm password match
    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message:
          "Password and Confirm Password do not match. Please try again.",
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists. Please sign in to continue.",
      });
    }

    // Find the most recent OTP for the email
    const response = await OTP.find({ email }).sort({ createdAt: -1 }).limit(1);
    console.log("response", response);
    if (response.length === 0) {
      // OTP not found for the email
      return res.status(400).json({
        success: false,
        message: "The OTP is not valid i.e. not created",
      });
    } 
    else if (otp !== response[0].otp) {
      // Invalid OTP
      return res.status(400).json({
        success: false,
        message: "The OTP is not valid",
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user
    let approved = "";
    approved === "Instructor" ? (approved = false) : (approved = true);

    // Create the Additional Profile For User
    const profileDetails = await Profile.create({
      gender: null,
      dateOfBirth: null,
      about: null,
      contactNumber: null,
    });
    const user = await User.create({
      firstName,
      lastName,
      email,
      contactNumber,
      password: hashedPassword,
      accountType: accountType,
      approved: approved,
      additionalDetails: profileDetails._id,
      image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
    });

    return res.status(200).json({
      success: true,
      user,
      message: "User registered successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "User cannot be registered. Please try again.",
    });
  }
};



//Login
// Login Controller
// Login Controller
exports.login = async (req, res) => {
  console.log("Login controller is called");
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(403).json({
        success: false,
        message: "All fields are required. Please try again.",
      });
    }

    // Fetch user including password field
    const user = await User.findOne({ email }).select('+password').populate("additionalDetails");

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User is not registered. Please sign up first.",
      });
    }

    // Check if user has an active session
    if (user.activeSession) {

      console.log("the token is" , user.token);
      return res.status(401).json({
        success: false,
        message: "User is already logged in on another device.",
        activeDevices: user.deviceTokens,
        activeDeviceIP: user.activeDeviceIP,
        lastLogin: user.lastLogin
      });
    }

    if (await bcrypt.compare(password, user.password)) {
      const payload = {
        email: user.email,
        id: user._id,
        accountType: user.accountType,
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET);

      // Update user details for active session
      user.token = token;
      user.activeSession = true;
      const deviceToken = generateDeviceToken();
      user.deviceTokens.push(deviceToken);
      const clientIp = requestIp.getClientIp(req);
      user.activeDeviceIP = clientIp;
      user.lastLogin = Date.now();

      await user.save();

      const options = {
        httpOnly: true,
      };
      res.cookie("token", token, options).status(200).json({
        success: true,
        token,
        user,
        message: "Logged in successfully",
      });
    } else {
      return res.status(401).json({
        success: false,
        message: "Password is incorrect",
      });
    }
  } catch (error) {
    console.error('Error while logging in:', error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

exports.logout = async(req,res) => {
      
      try{

        console.log("In the handler")

          const userId = req.user.id;

          const user = await User.findById(userId);

          console.log(user);


          if(!user){

            return res.status(404).json({
              success: false,
              message: "User not found",
            });

          }

          console.log("User verfied");

          user.activeSession = false;
          user.deviceTokens = []; // Clear device tokens
          user.activeDeviceIP = null; // Clear active device IP
          user.lastLogout = Date.now(); // Update last logout time
          await user.save();
          
          console.log(user.activeSession);



         const  token = req.user.token;
         
         res.clearCookie(token);
         console.log("the token agter clearing is");


         return res.status(200).json({
             success:true,
             mesaage: " User logged out successfully",
         });



           
          
      }

      catch(error){

         return res.status(500).json({
             success:false,
             message : "Unable to logged out  , Please try again"
         })
      }
}
  


// Controller for Changing Password
exports.changePassword = async (req, res) => {
  try {
    //get data from req body   //get oldPassword, newPassword, confrimNewPassword
    const { email, oldPassword, newPassword, confrimPassword } = req.body;
    //validation

    if (!email || !oldPassword || !newPassword || !confrimPassword) {
      return res.status(401).json({
        success: false,
        message: "All fields are required. please try agian",
      });
    }
    //Retrive user from the database
    const user = await User.findOne({ email });
    //check if the user exists
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    //check old the password match
    const isOldPasswordValid = await bcrypt.compare(oldPassword, user.password);
    if (!isOldPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Old password is incorrect.",
      });
    }

    //check the new PASS and conf PASS
    if (newPassword !== confrimPassword) {
      return res.status(400).json({
        success: false,
        message: "New password and confirm password do not match.",
      });
    }

    //Hash the new Password
    const hashedPasswod = await bcrypt.hash(newPassword, 100);
    //update pwd in DB
    await User.updateOne({ email }, { password: hashedPasswod });
    //send mail - Password updated
    await mailSender(
      user.email,
      "Password Update Successful",
      "Visit the login page to sign in"
    );

    //return response
    return res.status(200).json({
      success: true,
      message: "Password updated successfully. Confirmation email sent.",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).josn({
      success: false,
      message: "Password not changed",
    });
  }
};

