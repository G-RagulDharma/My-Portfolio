import React, { useState } from "react"

const Internship = (props) => {
    const [activeCertificate, setActiveCertificate] = useState(null);
    const internships = [
        {
            company: 'DCE Technology',
            title: 'Full Stack Developer',
            duration: 'Dec 2,2024 - May 2,2025',
            technology: 'React.js, Python Flask, Tailwind CSS',
            internshipSrc: `${import.meta.env.BASE_URL}assets/Full Stack Intern.pdf`
        },
        {
            company: 'DCE Technology',
            title: 'QuickMart',
            duration: 'Jan 9,2025 - Apr 14,2025',
            technology: 'React.js, Node.js, Express.js, MongoDB, Bootstrap, Tailwind CSS',
            internshipSrc: `${import.meta.env.BASE_URL}assets/DCE_certificate.pdf`
        },
        {
            company: 'Thulija',
            title: 'Learning Management System',
            duration: 'Jan 2025 - Apr 2025',
            technology: 'Angular',
            internshipSrc: `${import.meta.env.BASE_URL}assets/Thulija_certificate.pdf`
        }
    ]
    return (
        <div className="bg-gray-800 w-full max-w-4xl mx-auto my-6 rounded-3xl flex flex-col items-center p-4 sm:p-6 lg:p-8 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8">Internships</h2>
            <div className="w-full space-y-6">
                {internships.map((internship, index) => (
                    <div key={index} className="bg-gray-900 rounded-lg p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h3 className="text-xl sm:text-2xl font-semibold text-pink-500 mb-2">Company Name:</h3>
                        <p className="text-base sm:text-lg text-gray-300 mb-4">{internship.company}</p>
                        <h4 className="text-lg sm:text-xl font-medium text-white mb-2">Title:</h4>
                        <p className="text-base sm:text-lg text-pink-500">{internship.title}</p>
                        <h4 className="text-lg sm:text-xl font-medium text-white mb-2">Duration:</h4>
                        <p className="text-base sm:text-lg text-pink-500">{internship.duration}</p>
                        <h4 className="text-lg sm:text-xl font-medium text-white mb-2">Technology:</h4>
                        <p className="text-base sm:text-lg text-pink-500">{internship.technology}</p>

                        {internship.internshipSrc && (
                        <>
                            <button onClick={()=>setActiveCertificate(activeCertificate===index?null:index)}
                            className="bg-pink-600 text-white px-4 py-2 mt-2 rounded hover:bg-pink-700 transition cursor-pointer"
                            >
                            {activeCertificate===index?'Hide Image':'View Image'}
                            </button>

                            {activeCertificate===index &&(
                                <iframe
                                    src={internship.internshipSrc}
                                    controls
                                    className="mt-4 w-full h-screen rounded-lg"    
                                />
                            )}
                        </>
                        )}
                    </div>
                ))}


            </div>
        </div>
    )
};

export default Internship;
