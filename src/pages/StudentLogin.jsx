

import  { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import StudentLoginImg from "../assets/StudentLoginImg.png";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import axios from "axios"



function StudentLogin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const {
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async() => {
    try{
      console.log('data:',formData)
    const response  = await axios.post("http://localhost:4000/api/v1/auth/login",formData);
      console.log(response);
      navigate('/')
  }
    catch(err){
    console.log(err);
    }
  };

  // const navigate = useNavigate();

  const handleInstructorLogin = () => {
    navigate("/instructorlogin");
  };

  return (
    <>
      <div className="mt-12 w-screen flex flex-wrap flex-row place-items-center">
        <section id="home" className="w-full px-16 sm:px-0">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col justify-center items-center text-center sm:text-left md:text-left lg:text-left">
              <div className="lg:ml-36">
                <h1 className="font-medium text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
                  Welcome Back
                </h1>
                <div className="opacity-90 mb-0.5">
                  <p className="mb-0.5 mt-3 text-xs sm:text-base md:text-lg lg:text-base text-rose-100 leading-3 lg:mt-4 tracking-wide">
                    Build skills for today, tomorrow, and beyond.
                    <span className="font-pacifico block leading-3 opacity-100">
                      Education to future-proof your career.
                    </span>
                  </p>
                </div>

                <div className="flex justify-center items-center mt-8">
                  <button
                    onClick={handleInstructorLogin}
                    className="bg-gray-900 border-1 border-yellow-100 rounded-3xl px-8 py-2 hover:opacity-90"
                  >
                    Go to Instructor Login
                  </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
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
                  <InputField
                    label="Password"
                    type="password"
                    placeholder="Enter Password"
                    value={formData.password}
                    onChange={handleChange}
                    errorMessage={errors.password?.message}
                    showError={!!errors.password}
                    name="password"
                    showIcon={true}
                    required={true}
                  />
                  <a
                    href="#"
                    className="float-right custom-blue-text-color lg:text-xs mb-8 hover:underline hover:underline-offset-4"
                  >
                    Forgot password?
                  </a>
                  <br />
                  <Button type="submit" text="Login" />
                  <Link
                    to="/studentsignup"
                    className="flex justify-center items-center mt-2 custom-blue-text-color lg:text-xs mb-8 hover:underline hover:underline-offset-4"
                  >
                    Don't have an account? Register here
                  </Link>
                </form>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className="flex justify-center items-center">
                <img
                  src={StudentLoginImg}
                  alt="Student Login"
                  className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default StudentLogin;



