


import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import download from "../assets/catalog/download.jpeg"
import ai from "../assets/catalog/ai.jpeg"
import dsapy from "../assets/catalog/dsapy.jpeg"
import htmlcss from "../assets/catalog/htmlcss.jpeg"
import js from "../assets/catalog/js.jpeg"
import jsx from "../assets/catalog/jsx.png"
import ml from "../assets/catalog/ml.jpeg"
import python from "../assets/catalog/python.jpeg"
import web from "../assets/catalog/web.jpeg"



const CourseSlider = ({ Courses }) => {
  return (
    <>
      {Courses?.length ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Courses?.map((course, i) => (
            <Course_Card
              key={i}
              course={course}
              Height={"h-[230px]  md:h-[250px]"}
            />
          ))}
        </div>
      ) : (
        <p className="text-xl text-gray-900">No Course Found</p>
      )}
    </>
  );
};

const StaticCourseCards = () => {
  const staticCourses = [
    {
      _id: 1,
      courseName: 'Introduction to Blockchain by omkar',
      instructor: { firstName: 'John', lastName: 'Doe' },
      ratingAndReviews: [],
      price: 4999.99,
      thumbnail: download,
    },
    {
      _id: 2,
      courseName: 'Web Development Fundamentals',
      instructor: { firstName: 'Jane', lastName: 'Doe' },
      ratingAndReviews: [],
      price: 39.99,
      thumbnail: web,
    },
    {
      _id: 3,
      courseName: 'Python Programming Basics',
      instructor: { firstName: 'Alice', lastName: 'Smith' },
      ratingAndReviews: [],
      price: 29.99,
      thumbnail: python,
    },
    {
      _id: 4,
      courseName: 'Advanced JavaScript Programming',
      instructor: { firstName: 'Michael', lastName: 'Johnson' },
      ratingAndReviews: [],
      price: 39.99,
      thumbnail: js,
    },
    {
      _id: 5,
      courseName: 'Data Structures and Algorithms in Python',
      instructor: { firstName: 'Emily', lastName: 'Williams' },
      ratingAndReviews: [],
      price: 49.99,
      thumbnail: dsapy,
    },
    {
      _id: 6,
      courseName: 'Introduction to Machine Learning',
      instructor: { firstName: 'David', lastName: 'Brown' },
      ratingAndReviews: [],
      price: 59.99,
      thumbnail: ml,
    },
    {
      _id: 7,
      courseName: 'React.js Fundamentals',
      instructor: { firstName: 'Sarah', lastName: 'Jones' },
      ratingAndReviews: [],
      price: 29.99,
      thumbnail: jsx,
    },
    {
      _id: 8,
      courseName: 'HTML and CSS Basics',
      instructor: { firstName: 'Daniel', lastName: 'Davis' },
      ratingAndReviews: [],
      price: 19.99,
      thumbnail: htmlcss,
    },
    {
      _id: 9,
      courseName: 'Introduction to Artificial Intelligence',
      instructor: { firstName: 'Olivia', lastName: 'Martinez' },
      ratingAndReviews: [],
      price: 49.99,
      thumbnail: ai,
    }
    
  ];

  return (
    <>
    <div className='bg-richblack-900'>
      <div className=" mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent">
        <div className="section_heading"><p className='text-white text-3xl'>Courses to get you Started</p></div>
        <div className="py-8">
          <CourseSlider Courses={staticCourses} />
        </div>
      </div>
      </div>
    </>
  );
};

const Course_Card = ({ course, Height }) => {
  const [avgReviewCount, setAvgReviewCount] = useState(0);

  useEffect(() => {
    // Calculate average review count
    // This functionality can be implemented later with dynamic data
    // For now, let's keep it as 0
    setAvgReviewCount(0);
  }, [course]);

  return (
    <>
      <div className="bg-richblack-900 text-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={course?.thumbnail}
          alt="course thumbnail"
          className={`${Height} w-full object-cover`}
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">{course?.courseName}</h2>
          <p className="text-sm text-gray-700">
            {course?.instructor?.firstName} {course?.instructor?.lastName}
          </p>
          <div className="flex items-center mt-2">
            <span className="text-yellow-500">{avgReviewCount || 0}</span>
            <svg
              className="w-4 h-4 fill-current text-yellow-500 mx-1"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M19.771 9.722a.702.702 0 00-.565-.447l-6.04-.93-2.697-5.487a.75.75 0 00-1.35 0L6.833 8.345l-6.04.93a.703.703 0 00-.39 1.196l4.37 4.256-1.034 6.326a.703.703 0 001.019.742l5.398-2.837 5.398 2.837a.703.703 0 001.018-.742l-1.033-6.326 4.37-4.256a.703.703 0 00.225-.749z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="text-gray-600">
              {course?.ratingAndReviews?.length} Ratings
            </span>
          </div>
          <p className="mt-2 text-xl text-gray-900">Rs. {course?.price}</p>
        </div>
      </div>
    </>
  );
};

const Catalog = () => {
  const { catalogName } = useParams();
  const [categoryId, setCategoryId] = useState('');

  useEffect(() => {
    // Fetch categories
    // This functionality can be implemented later with dynamic data
  }, [catalogName]);

  useEffect(() => {
    // Fetch category details based on categoryId
    // This functionality can be implemented later with dynamic data
  }, [categoryId]);

  // Placeholder loading and error handling
  const loading = false;
  const catalogPageData = {}; // Placeholder data

  return (
    <>
      {/* Hero Section */}
      <div className="box-content bg-richblack-800 px-4">
        <div className="mx-auto flex min-h-[260px] max-w-maxContentTab flex-col justify-center gap-4 lg:max-w-maxContent ">
          <p className="text-sm text-richblack-300">
            {`Home / Catalog / `}
            <span className="text-yellow-25">
              {catalogPageData?.selectedCategory?.name}
            </span>
          </p>
          <p className="text-3xl text-richblack-5">
            {catalogPageData?.selectedCategory?.name}
          </p>
          <p className="max-w-[870px] text-richblack-200">
            {catalogPageData?.selectedCategory?.description}
          </p>
        </div>
      </div>

      {/* Static Course Cards */}
      <StaticCourseCards />

      {/* Footer */}
      <footer>Footer Content</footer>
    </>
  );
};

export default Catalog;