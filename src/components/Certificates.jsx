import React, { useState } from "react";

const Certificates = (props) => {
  const [activeCertificate, setActiveCertificate] = useState(null);
  const [showAllCertificates, setShowAllCertificates] = useState(false);

  const certificates = [
    {
      achievement: "Brilliant Bharath Hackathon 2K25",
      issuer: "Hackathon",
      date: "28-03-2025",
      certificateSrc: "/assets/All_Certificates.pdf",
    },
    {
      achievement: "2 Hour Bootcamp in Intro to Data Driven World",
      issuer: "NoviTech R&D Private Limited",
      date: "29-12-2024",
      certificateSrc: "/assets/All_Certificates.pdf",
    },
    {
      achievement: "MasterClass in Full Stack Development",
      issuer: "Novitech R&D Private Limited",
      date: "18-12-2024 to 28-01-2025",
      certificateSrc: "/assets/All_Certificates.pdf",
    },
    {
      achievement: "Introduction to MongoDB, AI, and Vector Search",
      issuer: "ICT Academy",
      date: "20-09-2024",
      certificateSrc: "/assets/All_Certificates.pdf",
    },
    {
      achievement: "Effective Speaking and Listening Skills",
      issuer: "Wadhwani Foundation",
      date: "27-09-2024",
      certificateSrc: "/assets/All_Certificates.pdf",
    },
    {
      achievement: "Explore Generative AI with Copilot in Bing",
      issuer: "Microsoft",
      date: "17-09-2024",
      certificateSrc: "/assets/All_Certificates.pdf",
    },
    {
      achievement: "Fundamentals of Generative AI",
      issuer: "Microsoft",
      date: "17-09-2024",
      certificateSrc: "/assets/All_Certificates.pdf",
    },
    {
      achievement: "Fundamentals of Responsible Generative AI",
      issuer: "Microsoft",
      date: "17-09-2024",
      certificateSrc: "/assets/All_Certificates.pdf",
    },
    {
      achievement: "2nd Prize in Fun Marathon",
      issuer: "Fathima College",
      date: "02-08-2024",
      certificateSrc: "/assets/All_Certificates.pdf",
    },
    {
      achievement: "Certificate of Merit MCA 3rd Sem",
      issuer: "VHNSN College",
      date: "01-06-2024",
      certificateSrc: "/assets/All_Certificates.pdf",
    },
    {
      achievement: "1st Prize in SQL Sorcerer",
      issuer: "ANJAC College",
      date: "27-02-2024",
      certificateSrc: "/assets/All_Certificates.pdf",
    },
    {
      achievement: "Entrepreneur Development Programme",
      issuer: "Coir Board (Ministry of MSME, Government of India)",
      date: "14-02-2024 to 16-02-2024",
      certificateSrc: "/assets/All_Certificates.pdf",
    },
    {
      achievement: "UMAGINE TN Global Conference",
      issuer: "ICTAcademy",
      date: "23-02-2024",
      certificateSrc: "/assets/All_Certificates.pdf",
    },
    {
      achievement: "Certificate of Merit",
      issuer: "VHNSN College",
      date: "01-06-2023",
      certificateSrc: "/assets/All_Certificates.pdf",
    },
    {
      achievement: "Certificate of Merit MCA 1st Sem",
      issuer: "Alumni Association VHNSN College",
      date: "01-06-2023",
      certificateSrc: "/assets/All_Certificates.pdf",
    },
    {
      achievement: "Value Added Course",
      issuer: "VHNSN College",
      date: "01-06-2023",
      certificateSrc: "/assets/All_Certificates.pdf",
    },
    {
      achievement: "3rd Prize in Quiz",
      issuer: "ANJAC College",
      date: "08-09-2023",
      certificateSrc: "/assets/All_Certificates.pdf",
    },
    {
      achievement: "2nd Prize in Blind Coding",
      issuer: "ANJAC College",
      date: "08-09-2023",
      certificateSrc: "/assets/All_Certificates.pdf",
    },
    {
      achievement: "Certificate of Accomplishment",
      issuer: "TCS",
      date: "03-03-2023",
      certificateSrc: "/assets/All_Certificates.pdf",
    },
    {
      achievement: "First Rank in BSc Computer Science",
      issuer: "VHNSN College",
      date: "01-06-2022",
      certificateSrc: "/assets/All_Certificates.pdf",
    },
    {
      achievement: "Google IT Automation with Python",
      issuer: "Coursera",
      date: "08-11-2022",
      certificateSrc: "/assets/All_Certificates.pdf",
    },
    {
      achievement: "Rank Certificate",
      issuer: "VHNSN College",
      date: "01-06-2020",
      certificateSrc: "/assets/All_Certificates.pdf",
    },
  ];

  return (
    <div className="bg-gray-800 w-full max-w-6xl mx-auto my-12 rounded-3xl flex flex-col items-center p-6 sm:p-8 lg:p-12 shadow-2xl">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-8 sm:mb-12 text-center">
        Certificates
      </h2>
      <div className="w-full space-y-8">
        {certificates.map((certificate, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-pink-400 mb-3">Achievement</h3>
            <p className="text-lg sm:text-xl text-gray-200 mb-4">{certificate.achievement}</p>
            <h4 className="text-lg sm:text-xl font-medium text-gray-300 mb-2">Issuer</h4>
            <p className="text-base sm:text-lg text-pink-400 mb-4">{certificate.issuer}</p>
            <h4 className="text-lg sm:text-xl font-medium text-gray-300 mb-2">Date</h4>
            <p className="text-base sm:text-lg text-pink-400">{certificate.date}</p>
          </div>
        ))}
      </div>

      {/* View All Certificates Button */}
      <div className="w-full mt-10 flex justify-center">
        <button
          onClick={() => setShowAllCertificates(!showAllCertificates)}
          className="bg-pink-500 text-white px-8 py-3 rounded-xl font-semibold text-lg hover:bg-pink-600 transition-colors duration-300 shadow-md hover:shadow-lg"
        >
          {showAllCertificates ? "Hide Certificates" : "View All Certificates"}
        </button>
      </div>

      {showAllCertificates && (
        <div className="w-full mt-8">
          <iframe
            src="/assets/All_Certificates.pdf"
            title="All Certificates"
            className="w-full h-[500px] sm:h-[700px] rounded-xl border-2 border-gray-700 shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default Certificates;