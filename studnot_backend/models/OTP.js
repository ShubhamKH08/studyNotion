const mongoose = require("mongoose");
const mailSender = require("../utils/mailSender");
const otpTemplate = require("../mail/templates/emailVerificationTemplate");

const OTPSchema = new mongoose.Schema({
    email:{
        type:String,
        required: true,
    },
    otp: {
        type:String,
        required:true,
    },
    createdAt: {
        type:Date,
        default:Date.now(),
        expires: 5*60,
    }
});


//a function -> to send emails
async function sendVerificationEmail(email, otp) {
    try{
        const mailResponse = await mailSender(email, "Verification Email from StudyNotion", otpTemplate(otp));
        console.log("Email sent Successfully: ", mailResponse);
    }
    catch(error) {
        console.log("error occurred while sending mails: ", error);
        throw error;
    }
}

// OTPSchema.post("save", async function(doc) {
//     try {
//         // Check if email has already been sent for this OTP
//         if (!doc.sentEmail) {
//             // Send the verification email
//             await sendVerificationEmail(doc.email, doc.otp);

//             // Update the sentEmail flag to indicate that the email has been sent
//             doc.sentEmail = true;

//             // Save the document again to update the sentEmail flag
//             await doc.save();
//         }
//     } catch (error) {
//         console.error("Error in post-save hook:", error);
//     }
// });

// OTPSchema.pre("save", async function(next) {
//     await sendVerificationEmail(this.email, this.otp);
//     next();
// }) 

OTPSchema.post("save", async function(doc) {
    try {
        // Check if email has already been sent for this OTP
        if (!doc.sentEmail) {
            // Send the verification email
            await sendVerificationEmail(doc.email, doc.otp);
            // Update the sentEmail flag to indicate that the email has been sent
            doc.sentEmail = true;
            await doc.save();
        }
    } catch (error) {
        console.error("Error in post-save hook:", error);
    }
});

module.exports = mongoose.model("otp", OTPSchema);



