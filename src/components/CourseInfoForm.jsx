
import React, { useState } from 'react'
import InputField from './InputField';
import Button from './Button';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CourseInfoForm = () => {

  const [formData, setFormData] = useState({
    coursetitle: "",
    coursedesc:"",
    price: "",
    category: "",
    tag: "",
    thumbnail: "",
    benefit: "",
    req: ""
  });

  const {
    handleSubmit,
    formState: { errors},
  } = useForm();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value});
  }

  const onSubmit = (data) => {
    console.log(data);
  };

  const navigate = useNavigate();

  const handleInstructorLogin = () => {
    navigate("/instructorlogin");
  };


  return (
    <div className='grid p-13 bg-gray-800 rounded-lg mb-2'>

                <form onSubmit={handleSubmit(onSubmit)} className="mt-8 px-12 pb-8 rounded-lg">
                  <InputField
                    label="Course Title"
                    type="text"
                    placeholder="Enter Course Title"
                    value={formData.coursetitle}
                    onChange={handleChange}
                    errorMessage={errors.coursetitle?.message}
                    showError={!!errors.coursetitle}
                    name="coursetitle"
                    required={true}
                  />
                  <InputField
                    label="Course Short Description"
                    type="text"
                    placeholder="Enter Description"
                    value={formData.coursedesc}
                    onChange={handleChange}
                    errorMessage={errors.coursedesc?.message}
                    showError={!!errors.coursedesc}
                    name="coursedesc"
                    required={true}
                  />
                  <InputField
                    label="Price"
                    type="text"
                    placeholder="₹ Enter Price"
                    value={formData.price}
                    onChange={handleChange}
                    errorMessage={errors.price?.message}
                    showError={!!errors.price}
                    name="price"
                    required={true}
                  />
                  <InputField
                    label="Category"
                    type="text"
                    placeholder="Choose a Category"
                    value={formData.category}
                    onChange={handleChange}
                    errorMessage={errors.category?.message}
                    showError={!!errors.category}
                    name="category"
                    required={true}
                  />
                  <InputField
                    label="Tags"
                    type="text"
                    placeholder="Choose a Tag"
                    value={formData.tag}
                    onChange={handleChange}
                    errorMessage={errors.tag?.message}
                    showError={!!errors.tag}
                    name="tag"
                    required={true}
                  />
                  <InputField
                    label="Course Thumbnail"
                    type="file"
                    placeholder="Upload Thumbnail"
                    value={formData.thumbnail}
                    onChange={handleChange}
                    errorMessage={errors.thumbnail?.message}
                    showError={!!errors.thumbnail}
                    name="thumbnail"
                    required={true}
                  />
                  <InputField
                    label="Benefits of the course"
                    type="text"
                    placeholder="Enter the Benefits of the Course"
                    value={formData.benefits}
                    onChange={handleChange}
                    errorMessage={errors.benefits?.message}
                    showError={!!errors.benefits}
                    name="benefits"
                    required={true}
                  />
                  <InputField
                    label="Requirements/Instructions"
                    type="text"
                    placeholder="Enter the Requirements/Instructions of the course"
                    value={formData.req}
                    onChange={handleChange}
                    errorMessage={errors.req?.message}
                    showError={!!errors.req}
                    name="req"
                    required={true}
                  />
                </form>
    </div>
  )
}

export default CourseInfoForm
