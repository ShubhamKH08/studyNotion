
import {useState} from 'react'
import {useNavigate, useLocation} from "react-router-dom";
import OtpInput from 'react-otp-input';
import "../../Style/OtpScreen.css"
import axios from 'axios';
import Button from '../Button';
import { FaArrowLeftLong } from "react-icons/fa6";
import {Link} from "react-router-dom"


export default function OtpScreen() {
    const [otp, setOtp] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const handleVerify =async () =>{
      try{

        console.log("otp is: ", otp);
        const formData = location.state.formData;
        formData.otp = otp;
        console.log("\nformData: ", formData);
        localStorage.setItem("token:","sihybddhybdib.f.ffkfkjunfnf")
        const response = await axios.post("http://localhost:4000/api/v1/auth/signup",formData)
        console.log('Successfully registered: ', response)
        navigate("/home")
      }catch(e){
        console.log('Error:',e)
      }
  
    }


 
  return (
   

    <div className="blocScreen">
  <div className="container1 ">
    <div className="c1 text-white font-semibold text-2xl">Verify email</div>
    <div className="c2 text-gray-400 mt-3">
      A verification code has been sent to you. Enter the code below
    </div>
  </div>
  <div className="container2 flex justify-center">
    <OtpInput
      className="otp-input text-white"
      placeholder="-"
      value={otp}
      onChange={setOtp}
      numInputs={6}
      renderSeparator={<span className="text-white">-</span>}
      renderInput={(props) => <input {...props} className="otp-field w-14 p-4 rounded-xl m-2" style={{color:'white'}}/>}
    />
    
  </div>
  <div className="container3">
    <div className="translate-x-2 my-6 w-full ">
    <Button onClick={handleVerify} text="Verify email" type="submit" ></Button>
    </div>

    <div className="flex justify-between" style={{ color: 'aliceblue' }}>
      <div  className="">
        {/* <div className="arrow flex items-center hover:scale-105 cursor-pointer"> */}
        {/* <Link to="/login" className="arrow flex items-center hover:scale-105 cursor-pointer"> */}
       <Link to="/login">
        <FaArrowLeftLong />
          <div className="bt2 ml-2 mt-1">
            Back to login</div>
        
        </Link>
        {/* </Link> */}
      </div>
      <div className=" flex items-center">
        <div className="resend-button ml-3 text-blue-500 hover:scale-105 cursor-pointer">Resend it</div>
      </div>
    </div>
  </div>
</div>

  );
}
