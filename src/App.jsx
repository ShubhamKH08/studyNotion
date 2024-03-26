

import { Route, Routes, BrowserRouter as Router} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from './pages/Home'
import StudentLogin from './pages/StudentLogin';
import StudentSignUp from './pages/StudentSignUp';
import InstructorLogin from "./pages/InstructorLogin";
import InstructorSingUp from "./pages/InstructorSignUp";
import Instructor from "./pages/Instructor";
import UploadCourse from "./pages/UploadCourse";
import EnrolledCourses from "./components/Student/EnrolledCourses";
import Upload from "./components/Video/Upload";
import Profile from "./pages/Profile/Profile";
import OtpScreen from "./components/Auth/OtpScreen";
// import Footer from "./components/Footer";
import ResetPassword from "./components/Auth/ResetPassword";
import CheckEmail from "./components/Auth/CheckEmail";
import NewPassword from "./components/Auth/ChooseNewPassword";
import Footer from "./components/Footer";
import CourseDetails from "./pages/Course/Details/CourseDetails";
import CourseBuilder from "./pages/Instructor/DashBoard/CourseBuilder";

function App() {
  return (
    <div className=" h-screen overflow-y-auto overflow-x-hidden bg-[#000814]">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/otp" element={<OtpScreen />} />
          <Route path="/new-password/:generatedToken" element={<NewPassword />} />
          <Route path="/check-mail" element={<CheckEmail />} />
          <Route path="/reset" element={<ResetPassword />} />
          <Route path="/studentlogin" element={<StudentLogin />} />
          <Route path="/login" element={<StudentLogin />} />
          <Route path="/studentsignup" element={<StudentSignUp />} />
          <Route path="/instructorlogin" element={<InstructorLogin />} />
          <Route path="/instructorsignup" element={<InstructorSingUp />} />
          <Route path="/instructor" element={<Instructor />} />
          <Route path="/uploadcourse" element={<UploadCourse />} />
          <Route path="/enrolled-course" element={<EnrolledCourses />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/course" element={<CourseDetails />} />
          <Route path="/course-builder" element={<CourseBuilder />} />
        </Routes>
      {/* <Footer/> */}
        </Router>
      {/* <Footer/> */}
        

    </div>
  );
}

export default App;

