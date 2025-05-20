import React from 'react'
import image from '../assets/Images/TCS.png';
import image2 from '../assets/Images/Wipro.png';
import image3 from '../assets/Images/amazon.png';

const Companies = () => {

  const companies = [
    {
      name: 'TCS',
      image: image,
    },
    {
      name: 'Wipro',
      image: image2,
    },
    {
      name: 'amazon',
      image: image3,
    },
    {
      name: 'Company 4',
      // logo: 'https://via.placeholder.com/150',
      description: 'Description of Company 4'
    }
  ];
  return (
    <div className='h-auto w-full bg-gradient-to-r from-[#f0f4f8] to-[#95a8dd] flex items-center justify-center'>
          <div>
            <h1 className='text-4xl font-bold text-center'>Our Partners</h1>
            <p className='text-center'>We are proud to partner with leading companies in the industry.</p>
            <div className='flex flex-wrap justify-center  items-center gap-10 p-10'>
              {companies.map((company, index) => (
                <div key={index} className='flex flex-col items-center justify-center w-36 h-20 bg-white shadow-lg rounded-lg p-4 hover:scale-95 transform transition duration-300 ease-in-out hover:shadow-blue-400'>
                  <img src={company.image} alt={company.name} className='w-full h-full object-fit' />
                  {/* <h2 className='text-xs font-bold'>{company.name}</h2> */}
                </div>
              ))}
          </div>
    </div>
    </div>
  )
}

export default Companies;