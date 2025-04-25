import React, { useState } from 'react';

const Project = () => {
  const [activeVideo,setActiveVideo]=useState(null);
  const projects = [
    {
      name: 'QuickMart',
      description:
        'Built a full-stack e-commerce application that allows users to browse and purchase products online. Key features include product listing, shopping cart, order processing, QR code generation for order tracking, and simulated credit card payment system. Designed a responsive and user-friendly interface using React.js and Tailwind CSS, with backend services handled by Node.js and Express.js. Used MongoDB for storing user, product, and order data.',
      technology: 'React.js, Node.js, Express.js, MongoDB, Bootstrap, Tailwind CSS',
      videoSrc:'/assets/Quickmart.mp4'
    },
    {
      name: 'Portfolio Website',
      description:
        'A personal portfolio website built using the MERN stack (MongoDB, Express.js, React, and Node.js) to showcase my skills, projects, and experience as a Full Stack Developer. The site includes sections like About Me, Projects, Skills, Resume, and Contact, all presented with a clean and responsive design. It demonstrates my ability to build full-stack web applications, handle both front-end and back-end development, and create smooth user experiences. This website serves as a platform for potential employers and collaborators to explore my work and get in touch.',
      technology: 'React.js, Node.js, Express.js, MongoDB',
      videoSrc:'/assets/Portfolio_Website.mp4'
    },
    {
      name: 'Online Food Management System',
      description:
        'Created a basic web application to manage food items and orders. The system supports core operations like adding, updating, and deleting food items, as well as placing and viewing orders. The interface was built using HTML and CSS, with PHP handling the server-side logic and MySQL used for data storage. Focused on implementing essential features with a simple and clean UI.',
      technology: 'PHP, HTML, CSS, MySQL',
      videoSrc:'/assets/online_food_management.mp4'
    },
    {
      name: 'School Management System (CRUD)',
      description:
        'Developed a basic school management system to handle attendance, student, staff, and fee records. Implemented full CRUD (Create, Read, Update, Delete) operations for efficient data management using PHP and MySQL, with a user-friendly interface built using HTML and CSS.',
      technology: 'HTML, CSS, PHP, MySQL',
    },
  ];

  return (
    <div className="bg-gray-800 w-full max-w-5xl mx-4 sm:mx-6 lg:mx-auto my-8 rounded-3xl flex flex-col items-center p-6 sm:p-8 shadow-2xl">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8">Projects</h2>
      <div className="w-full space-y-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-lg p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-pink-500 mb-2">{project.name}</h3>
            <h4 className="text-lg sm:text-xl font-medium text-white mb-2">Description:</h4>
            <p className="text-base sm:text-lg text-gray-300 mb-4">{project.description}</p>
            <h4 className="text-lg sm:text-xl font-medium text-white mb-2">Technology:</h4>
            <p className="text-base sm:text-lg text-pink-500">{project.technology}</p>

           {project.videoSrc && (
            <>
            <button onClick={()=>setActiveVideo(activeVideo===index?null:index)}
            className="bg-pink-600 text-white px-4 py-2 mt-2 rounded hover:bg-pink-700 transition cursor-pointer"
            >
              {activeVideo===index?'Hide Video':'View video'}
            </button>
            {activeVideo===index&&(
              <video
                src={project.videoSrc}
                controls
                className='mt-4 w-full rounded-lg'
              />
            )}

            </>
           )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;