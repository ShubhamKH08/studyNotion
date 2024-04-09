
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import Multistep from 'react-multistep';

const steps = [
  { component: <StepOne /> },
  { component: <StepTwo /> },
  { component: <StepThree /> },
];

const prevButton = {
  title: '< Back',
  style: {
    backgroundColor: '#161D29',
    borderRadius: '0.375rem',
    color: 'white',
    textAlign: 'center',
    fontSize: '0.875rem',
    fontWeight: '500',
    height: '3.2rem',
    cursor: 'pointer',
    padding: '0 1rem',
    marginTop: '1rem'
  }
}
const nextButton = {
  title: 'Next >',
  style: {
    backgroundColor: '#FFD60A',
    borderRadius: '0.375rem',
    color: '#1f2937',
    textAlign: 'center',
    fontSize: '0.875rem',
    fontWeight: '500',
    height: '3rem',
    cursor: 'pointer',
    padding: '0 1rem',
    marginTop: '1rem',
    marginLeft: '28rem'
  }
}

const stepCustomStyle = {
  color: "#FFD60A"
};

const MultiStepForm = () => {
  return <Multistep steps={steps} prevButton={prevButton} nextButton={nextButton} stepCustomStyle={stepCustomStyle} />;
};

export default MultiStepForm;
