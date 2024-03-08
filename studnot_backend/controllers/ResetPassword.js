const User = require("../models/User");
const mailSender = require("../utils/mailSender");


//resetPasswordToken
exports.resetPasswordToken = async (req, res) => {
    try{
        //get email from req body
        const email = req.body.email;
        //check user this email, email validation
        const user = await User.findOne({email:email});
        if(!user) {
            return res.json({
                success:false,
                message:"Your Email is not registered with us"
            
            });
        }
        //generate token 
        const token = crypto.randomUUID();
      //update user by adding token and expiration time
      const updateDetails = await User.findOneAndUpdate(
                                        {email:email},
                                        {
                                            token:token,
                                            resetPasswordExpires:  Date.now() + 5*60*1000,
                                        },
                                        {new:true});
      //create url
      const url = `http://localhost:3000/update-password/${token}`
      //send mail containing the url
      await mailSender(email,
                       "Password Reset Link",
                       `Password Reset Link: ${url}`)
      //return response
      return res.json({
        success:true,
        message:'Email sent successfully, please check email and change pwd',
      })

    } catch(error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:'Something went wrong while sending reset pwd mail'
        })

    }
    
}


//resetPassword
exports.resetPassword = async (req, res) => {
    try{
        //data fetch
        const {password, confrimPassword, token} = req.body;
        //validation
        if(password !== confrimPassword) {
            return res.json({
                success:false,
                message:"Password not matching",
            })
        }
        //get userdetails from db using token
        const userDetails = await User.findOne({token: token});
       //if no entery -invalid token
       if(!userDetails) {
        return res.json({
            success:false,
            message:"Token us invalid",
        })
       }
        //token time check
        if(userDetails.resetPasswordExpires < Date.now() ) {
            return res.josn({
                success:false,
                message:'Token is expired, please regenerate your token',
            });
        }
        //hash pwd
        const hashedPassword = await bcrypt.hash(password, 10);
        //password update
        await User.findOneAndUpdate(
            {token:token},
            {password:hashedPassword},
            {new:true},
        )
        //return response
        return res.status(200).json({
            success:true,
            message:'Password reset successful',
        })
    } 
    catch(error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:'Something went wrong while sending reset pwd mail'
        })

    }

}
