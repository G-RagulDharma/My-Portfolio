import React from "react";

const Home = (props) => {
  return (
    <div className="bg-gray-800 w-full max-w-5xl mx-auto my-8 rounded-3xl flex flex-col lg:flex-row items-center justify-center p-4 sm:p-6 lg:p-8 shadow-2xl">
      <div className="flex flex-col items-center justify-center text-center w-full lg:w-1/2 p-4 lg:p-6 space-y-4">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">Hello, it's Me</h2>
        <h3 className="text-lg sm:text-xl lg:text-2xl font-extrabold italic text-pink-500 font-sans">Ragul Dharma.G</h3>
        <h4 className="text-base sm:text-lg lg:text-xl text-white">And I'm a Full Stack Developer</h4>
      </div>

      <div className="w-64 sm:w-72 lg:w-80 h-64 sm:h-72 lg:h-80 mt-6 lg:mt-0 lg:ml-8 rounded-full shadow-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-1 border-4 border-transparent overflow-hidden">
        <img
          src={`${import.meta.env.BASE_URL}assets/Me.jpg`}
          className="w-full h-full object-cover rounded-full"
          alt="Profile"
        />
      </div>
    </div>
  );
};

export default Home;