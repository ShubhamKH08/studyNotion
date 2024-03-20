
import { IoArrowBackOutline } from "react-icons/io5";
import "../../Style/Auth/ResetPassword.css";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function Choosenewpassword() {
  const { generatedToken } = useParams();
  const navigate= useNavigate()

  console.log("token", generatedToken);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      console.log("request:", {
        password,
        confirmPassword,
        token: generatedToken,
      });

      const response = await axios.post(
        "http://localhost:4000/api/v1/auth/rest-password",
        {
          password,
          confirmPassword,
          generatedToken,
        }
      );
      localStorage.setItem("token:","dbdhbdhbdihbdndndj.dddhdhbfhfbhyff")
    
      navigate("/home")
      console.log(response.data); 
    } catch (error) {
      console.error("Error resetting password:", error);
      alert("Error resetting password. Please try again later.");
    }
  };

  return (
    <div className="reset-body">
      <div className="reset-container">
        <h1 className="reset-h1">Choose new password</h1>
        <p className="reset-p">
          Almost done. Enter your new password and you are all set.
        </p>
        <form className="reset-updatePasswordForm" onSubmit={handleSubmit}>
          <label className="reset-label" htmlFor="custom-password">
            New Password <sup className="reset-required">*</sup>
          </label>
          <br />
          <input
            type="password"
            className="reset-password"
            id="custom-password"
            placeholder="New Password"
            name="password"
            required
            value={password}
            onChange={handlePasswordChange}
          />
          <br />

          <label className="reset-label" htmlFor="custom-confirmPassword">
            Confirm New Password <sup className="reset-required">*</sup>
          </label>
          <br />
          <input
            type="password"
            className="reset-password"
            id="custom-confirmPassword"
            placeholder="Confirm Password"
            name="confirmPassword"
            required
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          <br />

          <button type="submit" className="reset-submit">
            Reset Password
          </button>
        </form>
        <div>
          <a href="/login" className="reset-login-link">
            <IoArrowBackOutline />
            Back To Login
          </a>
        </div>
      </div>
    </div>
  );
}