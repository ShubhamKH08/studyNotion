import { Route, Routes, BrowserRouter as Router} from "react-router-dom";
import './App.css'
import Navbar from "./components/Navbar";
import Home from './pages/Home'
import StudentLogin from './pages/StudentLogin';
import StudentSignUp from './pages/StudentSignUp';
import InstructorLogin from "./pages/InstructorLogin";
import InstructorSingUp from "./pages/InstructorSignUp";
import Instructor from "./pages/Instructor";
import UploadCourse from "./pages/UploadCourse";

function App() {
  return (
    <div>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/studentlogin" element={<StudentLogin />} />
          <Route path="/studentsignup" element={<StudentSignUp />} />
          <Route path="/instructorlogin" element={<InstructorLogin />} />
          <Route path="/instructorsignup" element={<InstructorSingUp />} />
          <Route path="/instructor" element={<Instructor />} />
          <Route path="/uploadcourse" element={<UploadCourse />} />
        </Routes>
        </Router>
    </div>
  );
}

export default App;


