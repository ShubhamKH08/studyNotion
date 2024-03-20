const User = require("../models/User");
const mailSender = require("../utils/mailSender");

const bcrypt = require("bcrypt");

//resetPasswordToken
exports.resetPasswordToken = async (req, res) => {
  try {
    //get email from req body
    const { email, isSend } = req.body;
    if (!email || !isSend) {
      return res.status(403).json({
        success: false,
        // message: "While login all fields are required. please try agian",
        message: "Body email: " + email + " password: " + isSend,
      });
    }
    // const email = req.body.email.trim();
    // console.log("email reacvhed",email);
    //check user this email, email validation

    // const user = await User.findOne({ email: { $regex: new RegExp('^' + email + '$', 'i') } });
    const user = await User.findOne({ email: email });
    if (!user) {
      console.log("email:,", email, "user", user);
      return res.json({
        success: false,
        message: "Your Email is not registered with us",
      });
    }

    // ############## }

    //generate token
    const token = crypto.randomUUID();
    //update user by adding token and expiration time
    const updateDetails = await User.findOneAndUpdate(
      { email: email },
      {
        token: token,
        resetPasswordExpires: Date.now() + 5 * 60 * 1000,
      },
      { new: true }
    );
    //create url
    const url = `http://localhost:3000/new-password/${token}`;
    //send mail containing the url
    await mailSender(
      email,
      "Password Reset Link",
      `Password Reset Link: ${url}`
    );
    //return response
    return res.json({
      success: true,
      message: "Email sent successfully, please check email and change pwd",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while sending reset pwd mail",
    });
  }
};

exports.resetPassword = async (req, res) => {
  try {
    const { password, confirmPassword, generatedToken } = req.body;
    console.log({ password, confirmPassword, generatedToken });

    if (!password || !confirmPassword || !generatedToken) {
      return res.status(403).json({
        success: false,
        message:
          "Body password: " +
          password +
          " confirmPassword: " +
          confirmPassword +
          " token:" +
          generatedToken,
      });
    }

    // ##### }
    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Password not matching",
      });
    }

    //get userdetails from db using token
    const userDetails = await User.findOne({ token: generatedToken });
    if (!userDetails) {
      return res.status(400).json({
        success: false,
        message: "Token us invalid",
      });
    }
    //token time check
    // if (userDetails.resetPasswordExpires < Date.now()) {
    //     return res.status(400).json({
    //         success: false,
    //         message: "Token is expired, please regenerate your token",
    //     });
    // }

    //hash pwd
    const hashedPassword = await bcrypt.hash(password, 10);
    //password update
    await User.findOneAndUpdate(
      { token: generatedToken },
      { password: hashedPassword },
      { new: true }
    );
    //return response
    return res.status(200).json({
      success: true,
      message: "Password reset successful",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while sending reset pwd mail",
    });
  }
};
