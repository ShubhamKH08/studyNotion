
import Sidebar from "../../../components/Instructor/Sidebar"
import  { useState } from 'react';
import { X, Plus, Code } from 'react-feather';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function CourseBuilder() {
  


 const [questions, setQuestions] = useState([{ content: '', marks: '' }]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handlePopup = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleQuestionChange = (questionIndex, field, newValue) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex][field] = newValue;
    setQuestions(newQuestions);
  };

  const addQuestion = () => {
    setQuestions([...questions, { content: '', marks: '' }]);
  };

  const cancelQuestion = (questionIndex) => {
    const newQuestions = [...questions];
    newQuestions.splice(questionIndex, 1);
    setQuestions(newQuestions);
  };

  const confirmDelete = (questionIndex) => {
    const isConfirmed = window.confirm('Are you sure you want to delete this question?');
    if (isConfirmed) {
      cancelQuestion(questionIndex);
    }
  };

//   const handleSubmit = async () => {
//     try {
//       const totalMarks = questions.reduce((acc, curr) => acc + (parseInt(curr.marks) || 0), 0);

//       // Send data to Flask backend
//       const response = await axios.post('http://127.0.0.1:5000/api/QuestionPaperInsertion', {
//         schoolName,
//         course,
//         currentDate,
//         examName,
//         department,
//         examType,
//         hours,
//         instructions,
//         scheduledDate,
//         scheduledTime,
//         totalMarks,
//         questions
//       });
//       alert(`Data Send Sucessfully ${response.data.message}`)
//       // Reset form after successful submission
//       // (if needed)
//     } catch (error) {
//       alert(`Error submitting data: ${error}`);
//     }
//   };


  return (
    <div className="min-h-screen  flex">
       <div className="w-[25%] h-screen ">
        <Sidebar className="fixed"/>
      </div>

      <div className="container mx-auto p-4 ">
        <div className="m-4  border border-[#2C333F] p-4 rounded-xl bg-[#161D29]">
          <h2 className="text-2xl font-bold">Course Builder</h2>
          {questions.map((question, questionIndex) => (
            <div key={questionIndex} className="my-4">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <input
                  className="w-full md:w-[80%] p-2 border rounded mb-2 md:mb-0 md:mr-2 focus:outline-none focus:ring focus:border-blue-300 bg-[#2C333F]"
                  placeholder={`Question ${questionIndex + 1}`}
                  value={question.content}
                  onChange={(e) => handleQuestionChange(questionIndex, 'content', e.target.value)}
                ></input>
                {/* <input
                  className="w-full md:w-1/4 p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                  type="number"
                  placeholder="Marks"
                  value={question.marks}
                  onChange={(e) => handleQuestionChange(questionIndex, 'marks', e.target.value)}
                />
                <X
                  className="cursor-pointer text-red-500 hover:text-red-700 ml-2"
                  size={24}
                  onClick={() => confirmDelete(questionIndex)}
                /> */}
              </div>
            </div>
          ))}
          <button
            className=" text-yellow-300 border border-yellow-300 hover:shadow-md hover:scale-105 duration-75 hover:shadow-secondaryText font-bold py-2 px-4 rounded"
            onClick={addQuestion}
          >
            <Plus className="inline-block mr-2 text-yellow-300" /> Create Section
          </button>
        </div>
      </div>

      <div className="w-1/2  p-4 ">
        <div className="border border-[#2C333F] rounded-xl w-full h-1/2 bg-[#161D29] p-4">
          <div className="font-bold text-xl">⚡Course Upload Tips</div>
        </div>
      </div>
      
    </div>
  );
}
