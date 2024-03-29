
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import InstructorSignUpImg from "../assets/InstructorSignUpImg.png";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { IoIosInformationCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import axios from "axios"

export default function InstructorSignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    accountType: "Instructor",
    contactNumber: "",
    otp: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const {
    
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const onSubmit = async () => {
  //   try{
  //     const response = await axios.post("http://localhost:4000/api/v1/auth/signup",formData)
  //     console.log('Successfully registered: ', response)
  //     navigate('/instructorlogin')
  //   }catch(e){
  //     console.log('Error:',e)
  //   }
  // };

  const validatePassword = () => {
    const { password } = formData; // Corrected access to password field
    const errors = [];
    if (password.length < 8) {
      errors.push("Password must be at least 8 characters long");
    }
    if (!/[A-Z]/.test(password)) {
      errors.push("Password must contain at least one uppercase letter");
    }
    if (!/[a-z]/.test(password)) {
      errors.push("Password must contain at least one lowercase letter");
    }
    if (!/[^a-zA-Z0-9]/.test(password)) {
      errors.push("Password must contain at least one symbol");
    }
    return errors;
  };
  
  const onSubmit = async () => {
  

    try{
      // const response = await axios.post("http://localhost:4000/api/v1/auth/signup",formData)
      // console.log('Successfully registered: ', response)
      const passwordErrors = validatePassword();
      if (passwordErrors.length > 0) {
        // If there are password validation errors, display alert messages
        alert(passwordErrors.join("\n"));
        return; // Exit the function without submitting if there are errors
      }

      const response = await axios.post("http://localhost:4000/api/v1/auth/sendotp",{email:formData.email})
    // const response = await axios.post("http://localhost:4000/api/v1/auth/sendotp",{email:formData.email})
      console.log('Email verified: ', response)
      // navigate('/studentlogin')
      navigate('/otp',{state:{ formData }})
    }catch(e){
      console.log('Error:',e)
    }
  };


  const navigate = useNavigate();

  const handleStudentSignUp = () => {
    navigate("/studentsignup");
  };

  const [showNote, setShowNote] = useState(false);

  const toggleNoteVisibility = () => {
    setShowNote(!showNote);
  };

  return (
    <>
      <div className="mt-12 w-screen flex flex-wrap flex-row place-items-center">
        <section id="home" className="w-full px-16 sm:px-0">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col justify-center items-center text-center sm:text-left md:text-left lg:text-left">
              <div className="lg:mt-10 lg:ml-36 w-8/12">
                <h1 className="font-medium text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
                  Welcome Back
                </h1>
                <div className="opacity-90 mb-0.5">
                  <p className="mb-0.5 mt-3 text-xs sm:text-base md:text-lg lg:text-base text-rose-100 leading-3 lg:mt-4 tracking-wide">
                    Discover your passions,
                    <span className="font-pacifico block leading-3 opacity-100">
                      Be Unstoppable
                    </span>
                  </p>
                </div>

                <div className="flex justify-center items-center mt-8">
                  <button
                    onClick={handleStudentSignUp}
                    className="bg-gray-900 border-1 border-yellow-100 rounded-3xl px-8 py-2 hover:opacity-90"
                  >
                    Go to Student SignUp
                  </button>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="w-full">
                      <InputField
                        label="First Name"
                        type="text"
                        placeholder="Enter first name"
                        value={formData.firstName}
                        onChange={handleChange}
                        errorMessage={errors.firstName?.message}
                        showError={!!errors.firstName}
                        name="firstName"
                        required={true}
                      />
                    </div>
                    <div className="w-full">
                      <InputField
                        label="Last Name"
                        type="text"
                        placeholder="Enter last name"
                        value={formData.lastName}
                        onChange={handleChange}
                        errorMessage={errors.lastName?.message}
                        showError={!!errors.lastName}
                        name="lastName"
                        required={true}
                      />
                    </div>
                  </div>

                  <InputField
                    label="Email Address"
                    type="email"
                    placeholder="Enter email address"
                    value={formData.email}
                    onChange={handleChange}
                    errorMessage={errors.email?.message}
                    showError={!!errors.email}
                    name="email"
                    required={true}
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="w-full">
                      <InputField
                        label="Country Code"
                        type="text"
                        placeholder="+91"
                        required={true}
                        value={formData.countryCode}
                        onChange={(e) =>
                          handleChange({
                            target: {
                              name: "countryCode",
                              value: e.target.value,
                            },
                          })
                        }
                        errorMessage={errors.countryCode?.message}
                        showError={!!errors.countryCode}
                        name="countryCode"
                        defaultvalue="+91"
                      />
                    </div>
                    <div className="w-full">
                      <InputField
                        label="Phone Number"
                        type="tel"
                        placeholder="Enter phone number"
                        value={formData.contactNumber}
                        required={true}
                        onChange={(e) =>
                          handleChange({
                            target: {
                              name: "contactNumber",
                              value: e.target.value,
                            },
                          })
                        }
                        errorMessage={errors.phoneNumber?.message}
                        showError={!!errors.phoneNumber}
                        name="contactNumber"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="w-full">
                      <InputField
                        label="Create Password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter password"
                        value={formData.password}
                        onChange={handleChange}
                        errorMessage={errors.password?.message}
                        showError={!!errors.password}
                        name="password"
                        showIcon={true}
                        required={true}
                      />
                    </div>
                    <div className="w-full">
                      <InputField
                        label="Confirm Password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Confirm password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        errorMessage={errors.confirmPassword?.message}
                        showError={!!errors.confirmPassword}
                        name="confirmPassword"
                        showIcon={true}
                        required={true}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="w-full">
                      <InputField
                        label="Account Type"
                        type="text"
                        value={"Instructor"}
                        onChange={handleChange}
                        errorMessage={errors.accountType?.message}
                        showError={!!errors.accountType}
                        name="accountType"
                        disabled={true}
                      />
                    </div>
                    <div className="w-full">
                      {/* <InputField
                        label="OTP"
                        type="text"
                        placeholder="▢ ▢ ▢ ▢ ▢ ▢"
                        value={formData.otp}
                        onChange={handleChange}
                        errorMessage={errors.otp?.message}
                        showError={!!errors.otp}
                        name="otp"
                        required={true}
                      /> */}
                    </div>
                  </div>

                  <div className="relative">
                    <button
                      className="float-right"
                      onClick={toggleNoteVisibility}
                    >
                      <IoIosInformationCircle className="text-yellow-400" />
                    </button>
                    {showNote && (
                      <div className="absolute top-5 right-0 bg-gray-900 p-2 rounded-md z-[100] backdrop-blur-sm opacity-95">
                        <p className="text-md mb-1 underline underline-offset-4">
                          Password Requirements:
                        </p>
                        <ul className="list-disc pl-5">
                          <li>Minimum 8 characters</li>
                          <li>Include uppercase and lowercase letters</li>
                        </ul>
                      </div>
                    )}
                  </div>

                  <br />
                  <Button type="submit" text="Create Account" />
                  <Link
                    to="/instructorlogin"
                    className="flex justify-center items-center mt-2 custom-blue-text-color lg:text-xs mb-8 hover:underline hover:underline-offset-4"
                  >
                    Already have an account? Login here
                  </Link>
                </form>
              </div>
            </div>

            <div className="flex justify-center items-center mt-0.5">
              <div className="flex justify-center items-center">
                <img
                  src={InstructorSignUpImg}
                  alt="Student Signup"
                  className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-3xl"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
