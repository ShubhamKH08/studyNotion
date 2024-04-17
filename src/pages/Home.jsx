import "../Style/Home.css";
import BannerVideo from "../assets/video/Home_page_banner.mp4";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="w-screen">
      <div className="min-h-screen w-screen inset-0 m-0 ">
        <div>
          <div className=" mx-auto my-8">
            <div className="">
              <button className="hover:scale-105 mx-auto flex justify-between gap-2 text-[#999DAA] items-center m-auto w-[235px] h-[44px] p-4 rounded-full  bg-[#161D29] relative ">
                Become an Instructor
                <FaArrowRightLong className="hover:tr" />
              </button>
            </div>

       
            <div className=" text-white my-4  mx-auto w-[913px] h-[120 px] gap-16">
              <div className="box1ba w-[913px] h-[44px] text-[#FFFFFF] font-display font-medium text-4xl leading-[44px] tracking-tighter text-center">
                Empower Your Future with{" "}
                <span className=" bg-gradient-to-br from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] bg-clip-text text-transparent">
                  Coding Skills
                </span>
              </div>
              <div className="box1bb h-[70px] text-md font-medium font-inter text-center text-[#838894]">
                With our online coding courses, you can learn at your own pace,
                from anywhere in the world, and get access to a wealth of
                resources, including hands-on projects, quizzes, and
                personalized feedback from instructors.
              </div>
            </div>
            <div className="box1c mx-auto box1c mt-38 mb-4 h-[48px] w-[308px] gap-24">
              <div className="flex">
                <div className=""></div>
                <button className="h-[40px] w-[135px] bg-[#FFD60A] text-[#000000] rounded-lg p-[12px 24px]  gap-8 shadow-inner border-[2px] border-[#FFFFFF82] focus:outline-none">
                  learn more
                </button>
                <button className="h-[40px] w-[135px] ml-5  bg-[#161D29] text-white rounded-lg p-[12px 24px] gap-8 shadow-inner border-[2px] border-[#FFFFFF2E] focus:outline-none">
                  Book a Demo
                </button>
              </div>
            </div>
          </div>
          {/* <div className=" after:absolute after:inset-0 after:z-0 after:blur-[70px] after:mx-auto after:h-full after:w-full after:rounded-full after:bg-[#12D8FA]          ">
          </div> */}
          <motion.div
            initial={{ rotateY:120,scale:.5  }}
            animate={{ rotateY:0,scale:1 }}
            transition={{
              type: "reverse",
              duration:2  
            }}
            className="mx-auto  w-[80%]     "
          >
            <video
              className=" shadowAnimation z-50 bg-black rounded"
              style={{ animation: "shadow-less-more  2s infinite" }}
              autoPlay
              muted
              loop
            >
              <source src={BannerVideo} type="video/mp4" />
            </video>
          </motion.div>

          <div className="   h-[522px]  p-[90px, 120px, 90px, 120px] gap-[98px]">
            <div className="flex">
              <div className="box2a w-[486px] h-[284px]">
                <div className="box2aa w-[486px] h-[88px] font-display font-semibold text-4xl leading-[44px] tracking-tighter text-left text-[#F1F2FF]">
                  Unlock your{" "}
                  <span className=" bg-gradient-to-br from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] bg-clip-text text-transparent">
                    coding potential
                  </span>{" "}
                  with our online courses.
                </div>
                <div className="box2b h-[72px] text-md font-medium font-inter text-left text-[#838894]">
                  Our courses are designed and taught by industry experts who
                  have years of experience in coding and are passionate about
                  sharing their knowledge with you.
                </div>
                <div className="flex box2c w-[338px] h-[100px] p-[52px, 0, 0, 0] gap-5">
                  <button className="text-center w-[179px] h-[48px] p-[12px 24px] rounded-md font-bold shadow-[2px 2px 0px 0px rgba(255, 255, 255, 0.18)] bg-[#FFD60A] text-black hover:shadow-none hover:scale-95 transition-all duration-200">
                    <div className="flex items-center justify-center gap-2">
                      <span>Try it Yourself</span>
                      <FaArrowRight className="" />
                    </div>
                  </button>
                  <button className="text-center w-[179px] h-[48px] p-[12px 24px] rounded-md font-bold shadow-[2px 2px 0px 0px rgba(255, 255, 255, 0.18)] bg-[#161D29] text-white">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="box3 w-[534px] h-[342px] p-32 gap-2 bg-white"></div>
            </div>

            {/* <divs className="box4  p-[90px 120px 90px 120px] gap-98p"> */}
            <div className="box4  p-[90px 120px 90px 120px] gap-98p">
              <div className="flex">
                <div className="box4a w-[534px] h-[342px]  gap-2 bg-slate-500 p-8">
                  <div className="box4aa bg-white w-[470px] h-[278px] bg-gradient-to-b from-[rgba(14, 26, 45, 0.24)] via-[rgba(17, 30, 50, 0.38)] to-transparent border border-solid border-[rgba(255, 255, 255, 0.22)] border-[37.38%]"></div>
                </div>

                <div className="box4b w-[486px] h-[260px] gap-12">
                  <div className="w-[486px] h-[88px] font-display font-semibold text-4xl leading-[44px] tracking-tighter text-left text-[#F1F2FF]">
                    Start{" "}
                    <span className=" bg-gradient-to-br from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] bg-clip-text text-transparent">
                      coding
                      <br />
                      in seconds
                    </span>
                  </div>
                  <div className="w-476px h-48px text-md font-medium font-inter text-16 leading-24 tracking-normal text-left text-[#838894] mt-6">
                    Go ahead, give it a try. Our hands-on learning environment{" "}
                    <br />
                    means you will be writing real code from your very first
                    lesson.
                  </div>
                  <div className="mt-6 w-[360px] h-[100px] p-[52px 0 0 0] gap-24">
                    <div className="flex">
                      <div></div>
                      <button className="inline-flex items-center justify-center w-[201px] h-[48px] p-[12px 24px] rounded-[8px] gap-8 bg-[#FFD60A] shadow-inset-primary-default mt-12">
                        <span className="mr-2.5 text-black">
                          Continue Lesson
                        </span>
                        <span className="fi-rr-arrow-small-right"></span>
                      </button>
                      <button className="inline-flex items-center justify-center w-[135px] h-[48px] p-[12px 24px] rounded-[8px] gap-8 bg-[#161D29] shadow-inset-secondary-default text-white ml-12 mt-12">
                        <span>Learn More</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* </divs> */}
            <div className="box5a mx-auto w-[1200px]  gap-8">
              <div className="w-[1200px] h-[44px] text-[#FFFFFF] font-display font-medium text-4xl leading-[44px] tracking-tighter text-center">
                Unlock the{" "}
                <span className=" bg-gradient-to-br from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] bg-clip-text text-transparent">
                  Power of Code
                </span>
              </div>
              <div className="w-[1200px] mt-6 h-24 text-md font-medium font-inter text-16 leading-24 tracking-normal text-center text-[#838894]">
                Learn to Build Anything You Can Imagine
              </div>
              <div className="w-full md:w-[1200px] h-[332px] p-[32px 52px 0 52px] gap-36">
                <div className="flex  justify-center flex-wrap items-center">
                  <div className=" kp w-full md:w-[300px] h-[300px] bg-[#FFFFFF] ml-12 mt-8 shadow-[12px 12px 0 0 #FFD60A]">
                    <div className="mt-8 ml-5 w-[260px] h-7 text-xl font-semibold font-inter text-20 leading-28 tracking-normal text-left text-[#161D29]">
                      Learn HTML
                    </div>
                    <div className="w-[250px] h-60 text-md font-normal font-inter text-16 leading-24 tracking-normal text-left text-[#585D69] mt-5 ml-6">
                      This course covers the basic concepts of HTML including
                      creating and structuring web pages, adding text, links,
                      images, and more.
                      <div className="mt-10 w-full md:w-[260px] inline-flex items-center justify-center h-[56px]  border-t-[1px]  border-[solid [#C5C7D4] gap-16">
                        <div className="flex">
                          <div className=" w-[69px] h-[24px] text-md font-medium font-inter text-16 leading-24 tracking-normal text-center text-[#0A5A72]">
                            beginner
                          </div>
                          <div className=" w-[78px] ml-24 h-[24px]text-md font-medium font-inter text-16 leading-24 tracking-normal text-center text-[#0A5A72]">
                            6 lessons
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group w-full md:w-[300px] h-[300px] bg-[#161D29] hover:bg-white ml-12 mt-8 shadow-[12px 12px 0 0 #FFD60A] duration-100 hover:-translate-x-2 hover:-translate-y-2 relative">
                    <div className="w-full md:w-[300px] h-[244px] p-[16px 24px] border-t-[1px] border-[1px] group-hover:border-gray-300 border-[#424854] gap-16 ">
                      <div className="mt-8 ml-5 w-[260px] h-7 text-xl font-semibold font-inter text-20 leading-28 tracking-normal text-left text-[#DBDDEA] group-hover:text-black">
                        Learn CSS
                      </div>
                      <div className="w-[250px] h-96 text-md font-normal font-inter text-16 leading-24 tracking-normal text-left text-[#6E727F] mt-5 ml-6">
                        This course explores advanced topics in HTML5 and CSS3,
                        including animations, transitions, and layout techniques
                      </div>
                    </div>
                    <div className="  inline-flex ml-6 w-full md:w-[260px] items-center justify-center h-[56px] group-hover:text-[#44b6d8]">
                      <div className=" w-[69px] h-[24px] text-md font-medium font-inter text-16 leading-24 tracking-normal text-center text-[#838894] group-hover:text-[#0A5A72]:">
                        beginner
                      </div>
                      <div className=" w-[78px] ml-24 h-[24px]text-md font-medium font-inter text-16 leading-24 tracking-normal text-center text-[#838894] group-hover:text-[#0A5A72]:">
                        6 lessons
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-[300px] h-[300px] bg-[#161D29] ml-12 mt-8 shadow-[12px 12px 0 0 #FFD60A]">
                    <div className="w-full md:w-[300px] h-[244px] p-[16px 24px] border-t-[1px] border-[1px]  border-[#424854] gap-16">
                      <div className="mt-8 ml-5 w-[250px] h-7 text-xl font-semibold font-inter text-20 leading-28 tracking-normal text-left text-[#DBDDEA]">
                        Responsive web design
                      </div>
                      <div className="w-[250px] h-96 text-md font-normal font-inter text-16 leading-24 tracking-normal text-left text-[#6E727F] mt-5 ml-6">
                        This course teaches responsive web design techniques,
                        allowing web pages to adapt to different devices and
                        screen sizes
                      </div>
                    </div>
                    <div className="inline-flex ml-6 w-full md:w-[260px] items-center justify-center h-[56px]">
                      <div className=" w-[69px] h-[24px] text-md font-medium font-inter text-16 leading-24 tracking-normal text-center text-[#838894]">
                        beginner
                      </div>
                      <div className=" w-[78px] ml-24 h-[24px]text-md font-medium font-inter text-16 leading-24 tracking-normal text-center text-[#838894]">
                        6 lessons
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box5c w-[1200px] h-[300px] bg-[#F9F9F9]"></div>
            </div>
            <Footer className="mt-2" />

            {/* <Footer className=" "/> */}
          </div>
        </div>
      </div>
    </div>
  );
}
