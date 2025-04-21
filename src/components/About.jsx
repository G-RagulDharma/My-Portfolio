import React from 'react';

const About = () => {
  const education = [
    {
      degree: 'PG',
      institution: 'VHNSN COLLEGE',
      course:'MCA',
      percentage: '88%',
      year: '2025',
    },
    {
      degree: 'UG',
      institution: 'VHNSN COLLEGE',
      course:'Computer Science',
      percentage: '84%',
      year: '2023',
    },
  ];

  return (
    <div className="bg-gray-800 w-full max-w-5xl mx-4 sm:mx-6 lg:mx-auto my-8 rounded-3xl flex flex-col items-center p-6 sm:p-8 shadow-2xl">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8">Professional Summary</h2>
      <p className="text-base sm:text-lg text-gray-300 max-w-3xl text-center mb-8 sm:mb-12">
      Enthusiastic Full Stack Developer with knowledge in both front-end and back-end development.
      Experienced in building responsive web applications using HTML, CSS, JavaScript, React, Node.js, and MongoDB. 
      Strong problem-solving skills and ability to work well in a team. Passionate about learning new technologies and building efficient, user-friendly applications
      </p>

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8">Education</h2>
      <div className="w-full max-w-3xl space-y-6">
        {education.map((edu, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-lg p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-pink-500 mb-2">{edu.degree}</h3>
            <div className="text-base sm:text-lg text-gray-300 space-y-1">
              <p>
                <span className="font-medium text-white">Institution:</span> {edu.institution}
              </p>
              <p>
                <span className="font-medium text-white">Course:</span> {edu.course}
              </p>
              <p>
                <span className="font-medium text-white">Mark/Percentage:</span> {edu.percentage}
              </p>
              <p>
                <span className="font-medium text-white">Pass-out Year:</span> {edu.year}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;