import React from "react";

const Header = ({ toggleDarkMode, fetchNewUser }) => {
  return (
    <header className="bg-blue-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-xl md:text-2xl font-bold">Random User Profile</h1>
        <div className="flex space-x-4">
          <button
            onClick={toggleDarkMode}
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md shadow-md hover:bg-gray-300 transition duration-200"
          >
            Toggle Dark Mode
          </button>
          <button
            onClick={fetchNewUser}
            className="bg-blue-700 px-4 py-2 rounded-md shadow-md hover:bg-blue-800 transition duration-200"
          >
            Fetch New User
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
