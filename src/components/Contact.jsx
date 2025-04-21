import React from 'react';
import {Mail,Phone,Linkedin,Github} from 'lucide-react'

const Contact = ({ contact = {} }) => {
  const defaultContact = {
    email: 'raguldharma000@gmail.com',
    phone: '+91 7904167637',
    linkedIn: 'https://www.linkedin.com/in/ragul-dharma-g-72a830240/',
    github: 'https://github.com/G-RagulDharma',
  };

  const contactData = { ...defaultContact, ...contact };

  return (
    <div className="bg-gray-800 w-full max-w-5xl mx-4 sm:mx-6 lg:mx-auto my-8 rounded-3xl flex flex-col items-center p-6 sm:p-8 shadow-2xl">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8">Contact Information</h2>
      
      <div className="w-full max-w-lg">
        <div className="space-y-4">
          <div className="flex items-center bg-gray-900 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
          <span className="text-pink-500 font-semibold p-2"><Mail/></span>
          <span className="text-pink-500 font-semibold w-24 sm:w-32">Email:</span>
            <span className="text-white text-base sm:text-lg">{contactData.email}</span>
          </div>
          <div className="flex items-center bg-gray-900 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
          <span className="text-pink-500 font-semibold p-2"><Phone/></span>
            <span className="text-pink-500 font-semibold w-24 sm:w-32">Phone:</span>
            <span className="text-white text-base sm:text-lg">{contactData.phone}</span>
          </div>
          <div className="flex items-center bg-gray-900 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
          <span className="text-pink-500 font-semibold p-2"><Linkedin/></span>
            <span className="text-pink-500 font-semibold w-24 sm:w-32">LinkedIn:</span>
            <a
              href={contactData.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-base sm:text-lg hover:text-pink-300 transition-colors duration-300"
            >
              {contactData.linkedIn}
            </a>
          </div>
          <div className="flex items-center bg-gray-900 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
          <span className="text-pink-500 font-semibold p-2"><Github/></span>
            <span className="text-pink-500 font-semibold w-24 sm:w-32">GitHub:</span>
            <a
              href={contactData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-base sm:text-lg hover:text-pink-300 transition-colors duration-300"
            >
              {contactData.github}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;