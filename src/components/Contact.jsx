import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Contact = ({ contact = {} }) => {
  const defaultContact = {
    email: 'raguldharma000@gmail.com',
    phone: '+91 7904167637',
    linkedIn: 'https://www.linkedin.com/in/ragul-dharma-g-72a830240/',
    github: 'https://github.com/G-RagulDharma',
  };

  const contactData = { ...defaultContact, ...contact };

  return (
    <div className="bg-gray-800 w-full max-w-4xl mx-4 sm:mx-6 lg:mx-auto my-6 rounded-3xl flex flex-col items-center p-4 sm:p-6 lg:p-8 shadow-2xl">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6 text-center">Contact Information</h2>

      <div className="w-full max-w-xl">
        <div className="space-y-3 sm:space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center bg-gray-900 rounded-lg p-3 sm:p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-2 sm:mb-0">
              <span className="text-pink-500 p-2"><Mail size={20} /></span>
              <span className="text-pink-500 font-semibold w-20 sm:w-24">Email:</span>
            </div>
            <span className="text-white text-sm sm:text-base pl-10 sm:pl-0 break-all">{contactData.email}</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center bg-gray-900 rounded-lg p-3 sm:p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-2 sm:mb-0">
              <span className="text-pink-500 p-2"><Phone size={20} /></span>
              <span className="text-pink-500 font-semibold w-20 sm:w-24">Phone:</span>
            </div>
            <span className="text-white text-sm sm:text-base pl-10 sm:pl-0">{contactData.phone}</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center bg-gray-900 rounded-lg p-3 sm:p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-2 sm:mb-0">
              <span className="text-pink-500 p-2"><Linkedin size={20} /></span>
              <span className="text-pink-500 font-semibold w-20 sm:w-24">LinkedIn:</span>
            </div>
            <a
              href={contactData.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-sm sm:text-base pl-10 sm:pl-0 hover:text-pink-300 transition-colors duration-300 break-all"
            >
              {contactData.linkedIn}
            </a>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center bg-gray-900 rounded-lg p-3 sm:p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-2 sm:mb-0">
              <span className="text-pink-500 p-2"><Github size={20} /></span>
              <span className="text-pink-500 font-semibold w-20 sm:w-24">GitHub:</span>
            </div>
            <a
              href={contactData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-sm sm:text-base pl-10 sm:pl-0 hover:text-pink-300 transition-colors duration-300 break-all"
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