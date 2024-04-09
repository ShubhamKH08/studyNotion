import Sidebar from "../../components/Instructor/Sidebar";
import "../../Style/Profile.css"
import { BiSolidEdit } from "react-icons/bi";


export default function Profile() {
  return (
   
    <div className="App">
      <div className="w-[14%] min-h-screen bg-gray-800">
        <Sidebar className="fixed" />
      </div>
    
      <div className='prof'>

      <div className='upperframe  w-[1217px] h-[120px] top-[57px] left-[223px] p-[24px, 120px, 24px, 24px] gap-24'>
 
          <div className='prt1 w-[1073px] h-[72px] gap-3'>
            <div className='prt11 w-[1073px] h-[22px] gap-2'>

            <div className='flex items-center m-4 '>
                <div className='prt11a w-[40px] h-[22px] text-text-small font-inter text-sm font-regular leading-[22px] text-left text-[#838894]'>
                  Home
                </div>
                <div className='prt11a w-[73px] h-[22px] ml-4 text-text-small font-inter text-sm font-regular leading-[22px] text-left text-[#838894]'>
                  Dashboard
                </div>
                <div className='prt11b w-[68px] h-[22px] ml-4 text-text-small-medium font-inter text-sm font-medium leading-[22px] text-left text-[#FFD60A]'>
                  My Profile
                </div>

            </div>


            </div>
            <div className='prt12 mt-3 w-[1073px] h-[38px] text-display-sm-medium font-inter text-xl font-bold leading-[38px] text-left text-[#F1F2FF]'>
                My profile
            </div>
          </div>
        </div>

        <div className='lowerframe custom-frame fixed w-[792px] h-[366px] top-[209px] left-[324px] gap-44'>
            <div className='prt2 w-full h-[126px] p-12 rounded-8 border-1 border-solid border-[#2C333F] gap-20 bg-[#161D29]'>
            <div className="flex items-center">
    <img src="https://preview.redd.it/lord-krishna-as-the-cosmic-god-v0-q86ta3p8cttb1.jpg?auto=webp&s=c6450c6da4a2fd4ef9202c5db0c4245d486ce2c8" alt="Profile Image" className="w-14 h-14 rounded-full mr-2" />
    
    <div className='prt21 mt-14 mb-14 h-[50px] gap-2'>
        <div className="w-200 h-35 text-lg font-bold font-inter text-left leading-26 text-[#F1F2FF] ml-16">
            Pranay Gupta
            <br />
            <div className="email-address">
                pranay@thecodehelp.in
            </div>



        </div>
    </div>

    <button className="flex items-center justify-center p-2 md:p-4 w-[96px] h-[40px] gap-2 bg-yellowBg border border-gray-300 rounded-md shadow-md">
        <span className="text-md flex font-bold items-center font-inter text-[#000814]"><BiSolidEdit className="w-5 h-5 m-1" />Edit</span>
    </button>
</div>
            </div>
            <div className='prt3 w-full h-[250x] rounded-8 p-10 border-1 border-solid border-[#2C333F]  mt-10 bg-[#161D29]'>
                <div className='prt31'>
                  <div className='prt311'>
                    Personal Details

                  </div>
                  <button className="flex items-center justify-center p-2 md:p-4 w-[96px] h-[40px] gap-2 bg-yellowBg border border-gray-300 rounded-md shadow-md">
        <span className="text-md flex font-bold items-center font-inter text-[#000814]"><BiSolidEdit className="w-5 h-5 m-1" />Edit</span>
    </button>
                  
                  

                </div>
                <div className='prt32'>
                  <div className='prt321'>
                    First Name
                  </div>
                  <div className='prt322'>
                    Last Name
                    
                  </div>
                  


                </div>
                <div className='prt32b'>
                  <div className='prt323'>
                    Pranay
                    
                    </div>
                    <div className='prt324'>
                      Gupta
                      
                    </div>

                </div>
                <div className='prt32'>
                  <div className='prt321'>
                    Email
                  </div>
                  <div className='prt322'>
                    Mobile Number
                    
                  </div>
                  


                </div>
                <div className='prt32b'>
                  <div className='prt33'>
                  pranay@thecodehelp.in
                    
                    </div>
                    <div className='prt324'>
                    (+91) 12345 67890
                      
                    </div>

                </div>
                


               
            </div>


        </div>

      </div>
    </div>
    
  );
}