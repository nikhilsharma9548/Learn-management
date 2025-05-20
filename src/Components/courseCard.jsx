import React from 'react'

const courseCard = () => {
  const courses = [
    {
      title: 'Course 1',
      description: 'Description of Course 1',
      // image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Course 2',
      description: 'Description of Course 2',
      // image: 'https://via.placeholder.com/150',00
    },
    {
      title: 'Course 3',
      description: 'Description of Course 3',
      // image: 'https://via.placeholder.com/150',0
    },
    {
      title: 'Course 4',
      description: 'Description of Course 3',
      // image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Course 1',
      description: 'Description of Course 1',
      // image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Course 2',
      description: 'Description of Course 2',
      // image: 'https://via.placeholder.com/150',00
    },
    {
      title: 'Course 3',
      description: 'Description of Course 3',
      // image: 'https://via.placeholder.com/150',0
    },
    {
      title: 'Course 4',
      description: 'Description of Course 3',
      // image: 'https://via.placeholder.com/150',
    }
  ];

  return (
    <section id='Courses' className='pt-18 bg-gradient-to-r from-[#f0f4f8] to-[#95a8dd]'>
      <h1 className='text-4xl font-bold text-center'>Our Courses</h1>
      <p className='text-center'>Explore our wide range of courses designed to help you succeed.</p>
      <div className='flex flex-wrap justify-center items-center gap-10 p-10'>
        {courses.map((course, index) => (
          <div key={index} className='flex flex-col items-center justify-center w-72 h-48 bg-white shadow-lg rounded-lg p-4 hover:scale-100 transform transition duration-300 ease-in-out hover:shadow-blue-400'>
            {/* <img src={course.image} alt={course.title} className='w-full h-full object-fit' /> */}
            <h2 className='text-xl font-bold'>{course.title}</h2>
            <p className='text-sm'>{course.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
export default courseCard;