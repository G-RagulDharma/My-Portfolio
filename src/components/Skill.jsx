import React from "react"

const Skill = (props) => {
  return (
    <div className="bg-gray-800 w-full max-w-5xl mx-4 sm:mx-6 lg:mx-auto my-8 rounded-3xl flex flex-col items-center p-6 sm:p-8 shadow-2xl">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8">Technical Skills</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {/* Programming Languages */}
        <div className="bg-gray-900 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl sm:text-2xl font-semibold text-pink-500 mb-4">Programming Languages</h3>
          <ul className="text-white text-base sm:text-lg space-y-2">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span> Python
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span> Java
            </li>
          </ul>
        </div>

        {/* Frameworks */}
        <div className="bg-gray-900 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl sm:text-2xl font-semibold text-pink-500 mb-4">Frameworks</h3>
          <ul className="text-white text-base sm:text-lg space-y-2">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span> Bootstrap
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span> Tailwind CSS
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span> Node.js
            </li>
          </ul>
        </div>

         {/* Libraries */}
         <div className="bg-gray-900 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl sm:text-2xl font-semibold text-pink-500 mb-4">Libraries</h3>
          <ul className="text-white text-base sm:text-lg space-y-2">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span> React.js
            </li>
          </ul>
        </div>

        {/* Database */}
        <div className="bg-gray-900 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl sm:text-2xl font-semibold text-pink-500 mb-4">Databases</h3>
          <ul className="text-white text-base sm:text-lg space-y-2">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span> MongoDB
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span> MySQL
            </li>
          </ul>
        </div>

        {/* Version Control */}
        <div className="bg-gray-900 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl sm:text-2xl font-semibold text-pink-500 mb-4">Tools</h3>
          <ul className="text-white text-base sm:text-lg space-y-2">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span> Git
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span> GitHub
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skill;
