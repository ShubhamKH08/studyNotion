
import "../../../Style/Course/CourseDetails.css";
import { WiTime9 } from "react-icons/wi";
import { BiPointer } from "react-icons/bi";
import { FaMobileAlt } from "react-icons/fa";
import { GrDocumentVerified } from "react-icons/gr";

export default function CourseDetails() {
  return (
    <div>
      <div className="CourseScreen">
        <div>
          <div className="flex">
            <div className="h-auto w-full  bg-[#161D29] ">

              <div className="flex ml-28 gap-2">

                <div className="">
                  <div className="w-[768px] h-[254px] gap-4">
                    <div className="w-[786px] h-[22px] gap-3 text-[#838894] flex">
                      <div>Home</div> <div>/</div> <div>Learning</div>{" "}
                      <div>/</div>{" "}
                      <span className="text-[#FFD60A]">Python</span>
                    </div>
                    <div className="w-[768px] h-[76px] text-3xl md:text-md font-inter font-medium text-30 leading-38 tracking-normal text-left text-[#F1F2FF] mt-10">
                      The Complete Python Bootcamp From Zero to Hero in Python
                    </div>
                    <div className="w-768 h-22 text-1xl font-inter font-normal text-gray-600 leading-22 tracking-normal text-left mt-12">
                      This Python for beginners course will help you to become
                      Zero to Hero. Learn Python Programming in Easy Way.
                    </div>
                    <div className="flex">
                      <div className="w-29 h-26 text-lg font-inter font-semibold leading-26 tracking-normal mt-12 text-left text-yellow-400">
                        4.5
                      </div>
                      <div className="rate mt-9">
                        <input type="radio" id="star5" name="rate" value="5" />
                        <label htmlFor="star5" title="text">
                          5 stars
                        </label>
                        <input type="radio" id="star4" name="rate" value="4" checked />
                        <label htmlFor="star4" title="text">
                          4 stars
                        </label>
                        <input type="radio" id="star3" name="rate" value="3" />
                        <label htmlFor="star3" title="text">
                          3 stars
                        </label>
                        <input type="radio" id="star2" name="rate" value="2" />
                        <label htmlFor="star2" title="text">
                          2 stars
                        </label>
                        <input type="radio" id="star1" name="rate" value="1" />
                        <label htmlFor="star1" title="text">
                          1 star
                        </label>
                      </div>
                    </div>
                    <div className="w-[768px] h-[24px] text-1xl font-inter text-base font-normal leading-24 tracking-normal text-left text-gray-300 mt-12">
                      Created by Instructor Name
                    </div>
                    <div className="flex">
                      <div className="font-inter text-base font-normal leading-24 tracking-normal text-left mt-12 text-gray-300">
                        Created at 02/2020
                      </div>
                      <div className="ml-3 font-inter text-base font-normal leading-24 tracking-normal text-left mt-12 text-gray-300">
                        English
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full p-2  items-center m-4 bg-[#2C333F] rounded-md  relative  flex justify-center">
                  <div className="p-2  h-full w-full   ">
                    <div className="w-full   ">
                      <div className="ml-4  mx-auto text-2xl  text-[#F1F2FF] font-bold">
                        Rs. 1,200
                      </div>
                      <div className="mx-auto gap-1">
                        <button className="w-full p-2 my-2 bg-yellow-400 border-solid   rounded-xl flex items-center justify-center gap-8 shadow-inner text-black font-bold text-base opacity-100 hover:bg-yellow-500">
                          Add to Cart
                        </button>
                        <button className="w-full p-2 hover:bg-[#212835]  bg-[#161D29]  bg-secondary  rounded-xl  flex items-center justify-center  shadow-inner text-white font-bold text-base hover:opacity-100 hover:bg-secondary-light">
                          Buy now
                        </button>
                        <p className="font-inter mt-3 text-sm font-normal leading-22 text-center text-[#DBDDEA]">
                          30-Day Money-Back Guarantee
                        </p>
                      </div>
                      <div className="w-[90%] mx-1 mt-6">
                        <div className="w-full  text-[#F1F2FF] ">
                          This course includes:
                        </div>
                        <div className="text-[#06D6A0] text-sm flex gap-1 items-center">
                          <WiTime9 className="w-4 h-4" />8 hours on-demand video
                        </div>
                        <div className="text-[#06D6A0] text-sm flex gap-1 items-center">
                          <BiPointer /> Full Lifetime access
                        </div>
                        <div className="text-[#06D6A0] text-sm flex gap-1 items-center">
                          <FaMobileAlt /> Access on Mobile and TV
                        </div>
                        <div className="text-[#06D6A0] text-sm flex gap-1 items-center">
                          <GrDocumentVerified /> Certificate of completion
                        </div>
                        <div className="w-full py-2 text-[#E7C009] font-inter text-md font-medium  text-center ">
                          Share
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#000814] w-full h-full">
                <div className="  w-full  h-auto mt-60 bg-[#000814]">
                  <div className="block2a   h-auto">
                    <div className="block2aa w-[728px] h-auto gap-12px mx-28 relative top-20">
                      <div className=" text-[#F1F2FF] font-inter text-3xl font-medium">
                        What you will learn
                      </div>
                      <div className="w-[728px] h-[22px]   flex items-center justify-start text-C5C7D4 font-inter text-[#C5C7D4] mt-3  text-sm font-medium leading-22">
                        Introduction to Python and Python 3
                      </div>
                      <div className="w-[728px] h-[22px] flex items-center justify-start text-C5C7D4 font-inter text-[#C5C7D4] mt-3  text-sm font-medium leading-22">
                        Understand the basics: Data types, Loops, Conditional
                        statements, Functions and Modules
                      </div>
                      <div className="w-[728px] h-[22px] flex items-center justify-start text-C5C7D4 font-inter text-[#C5C7D4] mt-3  text-sm font-medium leading-22">
                        Learn object oriented programming in Python
                      </div>
                      <div className="w-[728px] h-[22px] flex items-center justify-start text-C5C7D4 font-inter text-[#C5C7D4] mt-3  text-sm font-medium leading-22">
                        Learn how to make your own web-scraping tool using
                        Python
                      </div>
                      <div className="w-[728px] h-[22px] flex items-center justify-start text-C5C7D4 font-inter text-[#C5C7D4] mt-3  text-sm font-medium leading-22">
                        Know how to Read and Parse JSON and XML files
                      </div>
                    </div>
                  </div>
                  <div className="w-[792px] h-[620px] gap-16  mt-32">
                    <div className="max-w-[792px] h-auto min-h-[62px] gap-8 ">
                      <div className="w-[792px] h-[32px] text-[#F1F2FF] font-inter text-2xl  font-semibold leading-32">
                        Course content
                      </div>
                      <div className="flex">
                        <div className="w-auto h-[22px] flex items-center justify-start text-C5C7D4 font-inter text-[#C5C7D4] mt-3  text-sm font-medium leading-22">
                          10 sections • 41 lectures • 7h 57m total length
                        </div>
                        <div className="w-[473px] h-[22px] flex items-center justify-end text-yellow-400 font-inter text-sm font-medium leading-22 mt-3">
                          Text small/Medium
                        </div>
                      </div>
                      {/* accordation */}
                      <div className=" max-w-[792px] h-auto min-h-[542px] border mt-8  bg-white border-solid border-gray-700"></div>

                      <div className="absolute bl1  mt-44 left-120 w-[792px] h-[123px] flex flex-col gap-16">
                        <div className="w-[792px] h-[32px] text-3xl font-inter font-semibold text-24 leading-32 text-left text-white">
                          Author
                        </div>
                        <div className="w-[96px] h-[23px] font-inter font-medium text-16 leading-24 text-left -translate-y-10 text-blue-100">
                          William Jo
                        </div>
                        <div className="w-[792px] h-[44px] font-inter text-sm font-normal  -translate-y-20 leading-22 text-left text-gray-300">
                          I will be your lead trainer in this course. Within no
                          time, I will help you to understand the subject in an
                          easy manner. I have a huge experience in online
                          training and recording videos. Let's get started!
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full translate-y-60 mt-36 h-[460px] bg-white gap-52"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}