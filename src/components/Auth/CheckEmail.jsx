import { IoArrowBackOutline } from "react-icons/io5";
import "../../Style/Auth/ResetPassword.css";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";


export default function Checkemail() {
  const navigate = useNavigate()
  const location = useLocation();
  const email = location.state.email;

  const handleResend = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/auth/rest-password-token",
        email
      );
      console.log("Resend email verification status:", response);
      // navigate("/check-mail", { state: { email } });
    } catch (e) {
      console.log("error:", e);
      alert("Failed to send email! Try again.")
    }
  };
  return (
    <div className="reset-body">
      <div className="reset-container">
        <h1 className="reset-h1">Check email</h1>
        <p className="reset-p">We have sent the reset email to {email && <p> {email}</p>}</p>
        <form className="reset-updatePasswordForm">
          <button type="submit" className="reset-submit" onClick={handleResend}>
            Reset Password
          </button>
        </form>
        <div>
          <Link to="/reset" className="reset-login-link">
            {" "}
            <IoArrowBackOutline /> Back To Login
          </Link>
        </div>
      </div>
    </div>
  );
}