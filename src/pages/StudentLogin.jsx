// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
import StudentLoginImg from '../assets/StudentLoginImg.png';

export default function StudentLogin() {
  return (
    <>
      <section id="home" className="flex items-center justify-center w-full h-screen">
        <div className="container mx-32 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div className='grid place-items-center'>
            <div>
              <h1 className='font-medium'>Welcome Back</h1>
              <p>Build skills for today, tomorrow, and beyond.<span className='font-pacifico'> Education 
              <br />
              to future-proof your career.</span></p>
            </div>
            
            Form here
          </div>

          <div className='flex justify-center items-center'>
            <div>
              <img src={StudentLoginImg} alt="Student Login"  className="w-auto h-auto" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
