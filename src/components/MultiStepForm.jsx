
import StepOne from './StepOne';
// import StepTwo from './StepTwo';
import CourseBuilder from '../pages/Instructor/DashBoard/CourseBuilder';
import StepThree from './StepThree';
import Multistep from 'react-multistep';
import { transform } from 'typescript';

const steps = [
  { component: <StepOne /> },
  { component: <CourseBuilder /> },
  { component: <StepThree /> }
];

const prevButton = {
  title: 'Back',
  style: {
    'background-color': '#161D29',
    'border-radius': '0.375rem',
    'border-color':'white',
    border: '1px solid',
    color: 'white',
    'text-align': 'center',
    'font-size': '1rem',
'line-height': '1.5rem',
    'font-weight': '500',
    height: '3.2rem',
    cursor: 'pointer',
    'margin-top':'10px',
    padding: '0 1.6rem',
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.2)',
    },
  }
}
const nextButton = {
  title: 'Next ',
  style: {
    'background-color': '#faca15',
    'border-radius': '0.375rem',
    'border-color': 'yellow',
    'margin-top':'10px',
    color: '#1f2937',
    'text-align': 'center',
    'font-size': '1rem',
    'line-height': '1.5rem',
    'font-weight': 'bold',
    height: '3rem',
    cursor: 'pointer',
    padding: '0 1.6rem',
    marginLeft: '28rem',
    transform: 'translateX(140%)',
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.2)',
    },
  },
}

const stepCustomStyle = {

  width: '100%',
  'font-size': '140%',

};

const MultiStepForm = () => {
  return <Multistep steps={steps} prevButton={prevButton} nextButton={nextButton} stepCustomStyle={stepCustomStyle} />;
};

export default MultiStepForm;
