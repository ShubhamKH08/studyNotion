import { Route, Routes} from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import StudentLogin from './pages/StudentLogin';
import StudentSignUp from './pages/StudentSignUp';

function App() {
  return (
    <div>
      {/* <Router> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/studentlogin" element={<StudentLogin />} />
          <Route path="/studentsignup" element={<StudentSignUp />} />
        </Routes>
        {/* </Router> */}

    </div>
  );
}

export default App;
