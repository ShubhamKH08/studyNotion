
import { IoArrowBackOutline } from "react-icons/io5";
import {useNavigate} from "react-router-dom"
import { useState } from "react";
import "../../Style/Auth/ResetPassword.css";
import axios from "axios"
import {Link} from "react-router-dom"

export default function ResetPassword() {
    const [email, setEmail]=useState('')
    const navigate = useNavigate()
    
    const handleChange = (event) => {
        setEmail(event.target.value);
      };
    

    const handleClick=async()=>{
      try{
          console.log("submiting email:",email)
          const isSend = 123
        const response = await axios.post("http://localhost:4000/api/v1/auth/rest-password-token",{email,isSend})
        console.log("Email for verification intiated status: ",response)
        navigate("/check-mail",{state:{email}})
        }
        catch(e){
            console.log("error:" ,e)
        }
    }
    
  return (
    <div className="reset-body">
      <div className="reset-container">
        <h1 className="reset-h1">Reset your password</h1>
        <p className="reset-p">
          Have no fear. We will email you instructions to reset your password. If
          you dont have access to your email we can try account recovery
        </p>
        <div className="reset-updatePasswordForm" >
          <label htmlFor="custom-password" className="reset-label">
            Email Address <sup className="reset-required">*</sup>
          </label>
          <br />
          <input
            type="email"
            className="reset-input"
            placeholder="my********fws@gmail.com"
            name="email"
            required
            value={email}
            onChange={(e)=>handleChange(e)}
          />
          <br />

          <button type="submit" className="reset-submit" onClick={handleClick}>
            Reset Password
          </button>
        </div>
        <div>
          <Link to="/login" className="reset-login-link">
            {" "}
            <IoArrowBackOutline /> Back To Login
          </Link>
        </div>
      </div>
    </div>
  );
}