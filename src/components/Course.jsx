
import React from 'react'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { IoTimeSharp } from "react-icons/io5";

const Course = (props) => {
  return (
    <div className='grid grid-cols-3 gap-10'>

      <div>
        <img src={props.image} alt={props.title} className='w-80 rounded-lg' />
      </div>

      <div>
        <h1 className='text-white'>{props.title}</h1>
        <p className='text-gray-400'>{props.description}</p>

        <div className='pt-4'>
            <h5>Created: {props.created}</h5>
        </div>
        <div className='pt-4'>
        <div>
      {
        props.published ? 
        <div className="flex bg-gray-900 border-1 border-yellow-100 rounded-3xl h-10 text-yellow-400 w-4/12 place-items-center place-content-center">
            <div><FaCheckCircle /></div>
            <div className='ps-2'>Published</div>
        </div> 
        : 
        <div className="flex bg-gray-900 border-1 border-yellow-100 rounded-3xl h-10 text-red-400 w-4/12 place-items-center place-content-center">
            <div><IoTimeSharp /></div>
            <div className='ps-2'>Drafted</div>
        </div> 
      }
    </div>
        </div>
      </div>

      <div className='grid grid-cols-3'>
        <div>{props.duration}</div>
        <div>₹{props.price}</div>
        <div>
            <div className='grid grid-cols-2 gap-0'>
                <button className='text-gray-400 text-2xl'><MdEdit /></button>
                <button className='text-gray-400 text-2xl'><MdDelete /></button>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Course