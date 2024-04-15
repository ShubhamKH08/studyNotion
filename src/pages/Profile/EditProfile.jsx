import "../../Style/Profile/Edit.css";
import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";
import { useState } from "react";
import InputField from "../../components/InputField";
import Sidebar from "../../components/Student/Sidebar";

export default function EditProfile() {
  //   const [password, setPassword] = useState();
  const profession = [
    "Teacher",
    "Doctor",
    "Engineer",
    "Software Developer",
    "Nurse",
    "Architect",
    "Accountant",
    "Lawyer",
    "Chef",
    "Graphic Designer",
    "Marketing Specialist",
    "Journalist",
    "Police Officer",
    "Firefighter",
    "Real Estate Agent",
    "Electrician",
    "Plumber",
    "Mechanic",
    "Pilot",
    "Actor",
    "Musician",
    "Athlete",
    "Translator",
    "Librarian",
    "Psychologist",
    "Social Worker",
    "Dentist",
    "Veterinarian",
    "Pharmacist",
    "Scientist",
    "Researcher",
    "Consultant",
    "Entrepreneur",
    "Investor",
    "Project Manager",
    "Executive Assistant",
    "Public Relations Specialist",
    "Event Planner",
    "Security Guard",
    "Teacher's Assistant",
    "Flight Attendant",
    "Interior Designer",
    "HR Manager",
    "IT Specialist",
    "Customer Service Representative",
    "Fashion Designer",
    "Content Creator",
  ];

  console.log(profession);

  const [value, setValue] = useState("");
  return (
    <div className="flex">
      <div className="w-[14%] min-h-screen bg-gray-800">
        <Sidebar className="fixed" />
      </div>
      <div className="prof p-2">
        <div className="upperframe  w-[1217px] h-[120px] mx-8 bg-[#000814]  top-[57px] left-[223px]  gap-24">
          <div className="prt1 w-[1073px] bg-[#000814] h-[72px] gap-3">
            <div className="prt11 w-[1073px] bg-[#000814] h-[22px] gap-2">
              <div className="flex items-center">
                <div className="prt11a w-[40px] h-[22px] text-text-small font-inter text-sm font-regular leading-[22px] text-left text-[#838894]">
                  Back
                </div>
              </div>
            </div>
            <div className="prt12 mt-1 w-[1073px] h-[38px] text-display-sm-medium font-inter text-2xl  leading-[38px] text-left text-[#F1F2FF]">
              Edit Profile
            </div>
          </div>
        </div>
        <div className="lowerframe custom-frame  mx-36 w-[792px] h-[366px] top-[209px] left-[324px] gap-44">
          <div className="prt2 w-full h-[126px] p-12 rounded-8 border-1 border-solid border-[#2C333F] gap-20 bg-[#161D29]">
            <div className="flex items-center">
              <img
                src="https://preview.redd.it/lord-krishna-as-the-cosmic-god-v0-q86ta3p8cttb1.jpg?auto=webp&s=c6450c6da4a2fd4ef9202c5db0c4245d486ce2c8"
                alt="Profile"
                className="w-16 h-16 rounded-full -translate-x-36"
              />

              <div className="text-white text-xl -translate-x-28 mb-14">
                Change Profile Picture
              </div>
              <div className="flex -translate-x-80 ml-4 mt-2">
                <button className="flex items-center justify-center p-2 md:p-4 w-[96px] h-[40px] gap-2 bg-yellow-400 border border-gray-300 rounded-md shadow-md mt-7">
                  <span className="text-md font-medium font-inter text-[#000814]">
                    Change
                  </span>
                </button>
                <button className="flex  items-center justify-center p-2 md:p-4 w-[96px] ml-2 h-[40px] gap-2 bg-[#2C333F] border border-[#424854] rounded-md shadow-md mt-7">
                  <span className="text-md font-medium font-inter text-[#C5C7D4]">
                    Remove
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="h-auto w-[792px] bg-[#161D29] pt-3 pb-10  mx-36 -translate-y-52">
          <div className="w-[90%] h-auto">
            <div className="h-[20%]    top-0 mt-6   text-2xl mx-12 text-[#F1F2FF]">
              Profile Information
            </div>
          </div>
          <div className="mt-3 ">

            <div className="flex gap-1   justify-center">
              <div className="text-[#F1F2FF] mx-12  w-full">
                <InputField
                  type="text"
                  label="Display Name"
                  labelClassName="after:content-[]"
                  className="bg-grayWhite w-[100%]"
                />
              </div>

              <div className="text-[#F1F2FF] mx-1 w-full flex flex-col">
                <label
                  className={`block text-sm font-normal text-slate-200 opacity-95 relative `}
                >
                  Profession
                </label>
                <select
                  className={`pl-4  mt-1 block border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-100 sm:text-sm border-b-[2px] h-10 bg-grayPopUp text-grayText font-bold `}
                >
                  <option value="" className="bg-transparent ">Developer</option>
                  <option value="" className="bg-transparent ">Developer</option>
                </select>
              </div>
            </div>

            <div className="flex">
              <div className="flex p-2 items-center mt-2 max-w-xl h-[45px] w-[330px] gap-4 rounded-xl  bg-[#2C333F] text-[#999DAA] text-xl shadow-md ml-12"></div>
              <div className="relative mt-2 max-w-xl h-[45px] w-[330px] gap-4 rounded-xl bg-[#2C333F] shadow-md ml-12">
                <svg
                  className="absolute right-0 h-6 w-6 mr-2 top-1/2 transform -translate-y-1/2 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="text-[#585D69] ml-12 text-sm">
              Name entered above will be used for all issued certifies.
            </div>
          </div>


          <div className="mt-3">
            <div className="flex"> 
              <div className="text-[#F1F2FF] mx-12">Date of birth</div>
              <div className="text-[#F1F2FF] mx-auto -translate-x-8">
                Gender
              </div>
            </div>
            <div className="flex">
              <div className=" mt-2 max-w-xl h-[45px] w-[330px] gap-4 rounded-xl  bg-[#2C333F]  shadow-md ml-12">
                {" "}
                <div className="relative max-w-sm ">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-[#999DAA] dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                  <input
                    // datepicker
                    type="datepicker"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Select date"
                  />
                </div>
              </div>
              <div className=" mt-2 max-w-xl h-[45px] w-[330px] gap-4 rounded-xl  bg-[#2C333F]  shadow-md ml-12">
                <form className="h-full w-full justify-center kp">
                  <fieldset className="h-full w-full">
                    <div className="gap-2 flex items-center justify-center h-full w-full mr-4">
                      <input
                        type="radio"
                        id="Choice1"
                        name="ChoiceA"
                        value="male"
                      />
                      <label htmlFor="Choice1" className=" text-[#999DAA] pr-2">
                        Male
                      </label>

                      <input
                        type="radio"
                        id="Choice1"
                        name="ChoiceB"
                        value="female"
                      />
                      <label htmlFor="Choice2" className="text-[#999DAA] pr-2">
                        Female
                      </label>

                      <input
                        type="radio"
                        id="Choice1"
                        name="ChoiceC"
                        value="Other"
                      />
                      <label htmlFor="Choice3" className=" text-[#999DAA] pr-2">
                        Other
                      </label>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <div className="flex">
              <div className="text-[#F1F2FF] mx-12">Phone number</div>
              <div className="text-[#F1F2FF] mx-auto -translate-x-10">
                About
              </div>
            </div>
            <div className="flex">
              <div className="flex">
                <div className=" mt-2 max-w-xl h-[45px] w-[60px] justify-center flex items-center gap-4 rounded-xl bg-[#2C333F]  text-[#999DAA]  shadow-md ml-12">
                  {" "}
                  +91
                </div>
                <div className=" mt-2 max-w-xl h-[45px] w-[266px] pl-3  flex items-center gap-4 rounded-xl bg-[#2C333F]  text-[#999DAA]  shadow-md ml-2">
                  {" "}
                  12345678
                </div>
              </div>

              <div className=" mt-2 max-w-xl h-[45px] w-[330px] pl-3 flex items-center text-[#999DAA] gap-4 rounded-xl  bg-[#2C333F]  shadow-md ml-12">
                {" "}
                Enter Bio details
              </div>
            </div>
            9
          </div>
        </div>
        <div className="h-auto mt-6 w-[792px] bg-[#161D29] pt-3 pb-10 mx-36 -translate-y-52">
          <div className="w-[90%] h-auto">
            <div className="h-[20%]    top-0 mt-6   text-2xl mx-12 text-[#F1F2FF]">
              Profile Information
            </div>
          </div>
          <div className="mt-3">
            <div className="flex">
              {/* <div className="text-[#F1F2FF] mx-12">Current password</div> */}
              {/* <div className="text-[#F1F2FF] mx-auto -translate-x-4">
                Change password
              </div> */}
            </div>
            {/* <div className="flex"> */}

            <div className="card flex justify-between py-4 px-12">
              <InputField
                type="password"
                label="Current Password"
                value="78181891dujsdj"
                labelClassName="after:content-[]"
              />
              {/* </div>

                <div className="card flex justify-content-center text-white"> */}

              <InputField
                type="password"
                label="Change Password"
                value="78181891dujsdj"
                labelClassName="after:content-[]"
              />
            </div>
          </div>
        </div>
        {/* <div className=" -translate-y-32 w-[792px] h-[182px] bg-[#340019] ml-36 border border-solid border-red-800">
            <div className="w-full md:w-673px h-auto md:h-134px px-0 md:px-120 gap-8 opacity-0 ">
              <span className="text-white"></span>
            </div>
          </div> */}
        {/* </div> */}
      </div>
    </div>
  );
}
