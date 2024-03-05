
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import StudentSignUpImg from "../assets/StudentSignUpImg.png";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { IoIosInformationCircle } from "react-icons/io";
import { Link } from "react-router-dom";

export default function StudentSignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    accountType: "",
    contactNumber: "",
    otp: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); 
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  const navigate = useNavigate();

  const handleStudentLogin = () => {
    navigate("/instructorsignup");
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
                  Join the millions learning to code with StudyNotion for free
                </h1>
                <div className="opacity-90 mb-0.5">
                  <p className="mb-0.5 mt-3 text-xs sm:text-base md:text-lg lg:text-base text-rose-100 leading-3 lg:mt-4 tracking-wide">
                    Build skills for today, tomorrow, and beyond.
                    <span className="font-pacifico block leading-3 opacity-100">
                      {" "}
                      Education to future-proof your career.
                    </span>
                  </p>
                </div>

                <div className="flex justify-center items-center mt-8">
                  <button
                    onClick={handleStudentLogin}
                    className="bg-gray-900 border-1 border-yellow-100 rounded-3xl px-8 py-2 hover:opacity-90"
                  >
                    Go to Instructor SignUp
                  </button>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
                  <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
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

                  <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                    <div className="w-full">
                      <InputField
                        label="Country Code"
                        type="text"
                        placeholder="+91"
                        value={formData.countryCode}
                        required={true}
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
                        value={formData.phoneNumber}
                        required={true}
                        onChange={(e) =>
                          handleChange({
                            target: {
                              name: "phoneNumber",
                              value: e.target.value,
                            },
                          })
                        }
                        errorMessage={errors.phoneNumber?.message}
                        showError={!!errors.phoneNumber}
                        name="phoneNumber"
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
                        value={"Student"}
                        onChange={handleChange}
                        errorMessage={errors.accountType?.message}
                        showError={!!errors.accountType}
                        name="accountType"
                        disabled={true}
                      />
                    </div>
                    <div className="w-full">
                      <InputField
                        label="OTP"
                        type="text"
                        placeholder=". . . . . ."
                        value={formData.otp}
                        onChange={handleChange}
                        errorMessage={errors.otp?.message}
                        showError={!!errors.otp}
                        name="otp"
                        required={true}
                      />
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
                    to="/studentlogin"
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
                  src={StudentSignUpImg}
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
