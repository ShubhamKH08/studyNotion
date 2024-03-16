import { useState } from 'react';
import MultiStep from 'react-multistep'
import CourseInfoForm from '../components/CourseInfoForm';
import CourseBuilderForm from '../components/CourseBuilderForm';
import CoursePublishForm from '../components/CoursePublishForm';

const UploadCourse = () => {

    const [formDataStepOne, setFormDataStepOne] = useState({
        coursetitle: '',
        coursedesc: '',
        price: '',
        category: '',
        tag: '',
        thumbnail: '',
        benefits: '',
        req: ''
      });

    const steps = [
        {title: 'stepone', component:  <CourseInfoForm formData={formDataStepOne} setFormData={setFormDataStepOne} />},
        {title: 'steptwo', component: <CourseBuilderForm />},
        {title: 'stepthree', component: <CoursePublishForm />},
      ];

    const prevbtn = {
        title: "< Back",
        style: {
            padding: '1rem',
            margin: '0.5rem',
            borderRadius: '0.375rem',
            backgroundColor: '#161d29', 
            color: 'white', 
            textAlign: 'center',
            fontSize: '0.875rem', 
            fontWeight: '500', 
            transitionProperty: 'transform, opacity',
            transitionDuration: '0.3s',
        }
    }
    
        const handleNextStep = () => {
            console.log('Form data from step one:', formDataStepOne);
          };

    const nextbtn = {
        title: "Next > ",
        style: {
            padding: '1rem',
            margin: '0.5rem',
            borderRadius: '0.375rem',
            backgroundColor: '#ffd60a', 
            color: '#1f2937', 
            textAlign: 'center',
            fontSize: '0.875rem', 
            fontWeight: '500', 
            transitionProperty: 'transform, opacity',
            transitionDuration: '0.3s',
            float: 'right'
        },
        onClick: (e) => {
            console.log('Next button clicked');
            handleNextStep();
          }
    }

      const stepStyles = {

            stepone: 
            {
                backgroundColor: 'red',
                padding: '20px',
                borderRadius: '5px',
            },

      };
    
  return (
    <div className='p-16 grid grid-cols-2 gap-4'>
        <div className='w-12/12'>
            Upload course here

            <MultiStep activeStep={0} steps={steps} prevButton={prevbtn} nextButton={nextbtn} />
        </div>

        <div>
            Some message here
        </div>
    </div>
  )
}

export default UploadCourse
