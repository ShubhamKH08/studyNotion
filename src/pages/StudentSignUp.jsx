import { Formik, Form, Field, ErrorMessage } from 'formik';
import StudentSignUpImg from '../assets/StudentSignUpImg.png';

export default function StudentSigunUp() {
  return (
    <>
      <section id="home" className="flex items-center justify-center w-full h-screen">
        <div className="container mx-32 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div className='grid place-items-center'>
            <div>
              <h1 className='font-medium text-5xl'>Join the millions learning to code with StudyNotion for free</h1>
              <br />
              <p>Build skills for today, tomorrow, and beyond.<span className='font-pacifico'> Education 
              <br />
              to future-proof your career.</span></p>
            </div>
            
            Form here
          </div>

          <div className='flex justify-center items-center'>
            <div>
              <img src={StudentSignUpImg} alt="Student Signup"  className="w-auto h-auto" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
