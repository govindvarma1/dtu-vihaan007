import React from "react";
import {Link} from "react-router-dom"
import {useNavigate} from "react-router-dom"

export default function () {

    const navigate = useNavigate();

    const handleButtonClick = () => {
      navigate('/blood-bank/register');
     };

    return (
            <>
            <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
              {/* Logo */}
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M17.92 10.018l-7.915 7.916a.61.61 0 0 1-.863 0l-7.916-7.916a.61.61 0 0 1 0-.864l7.916-7.915a.61.61 0 0 1 .864 0l7.915 7.915a.61.61 0 0 1 0 .864zm-1.366-.498l-7.916-7.915a.61.61 0 0 0-.864 0l-7.915 7.915a.61.61 0 0 0 0 .864l7.916 7.916a.61.61 0 0 0 .864 0l7.915-7.916a.61.61 0 0 0 0-.864zM6.5 4.75a.75.75 0 0 1 1.5 0v7.5a.75.75 0 0 1-1.5 0V4.75zm2.25 0a.75.75 0 0 1 1.5 0v7.5a.75.75 0 0 1-1.5 0V4.75zm2.25 0a.75.75 0 0 1 1.5 0v7.5a.75.75 0 0 1-1.5 0V4.75z"/>
                </svg>
                <span className="text-lg font-bold">YourLogo</span>
              </div>
        
              {/* Navigation Links */}
              <nav>
                <ul className="flex space-x-4">
                  <li><a href="#" className="hover:text-gray-300">Home</a></li>
                  <li><Link to="#" className="hover:text-gray-300">About</Link></li>
                  <li><a href="#" className="hover:text-gray-300">Contact</a></li>
                </ul>
              </nav>
        
              {/* Auth and Search */}
              <div className="flex space-x-4 items-center">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Login</button>
                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50" onClick={handleButtonClick}>Sign Up</button>
                <div className="relative">
                  <input type="text" className="bg-gray-800 text-white rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50" placeholder="Search..." />
                  <button className="absolute right-0 top-0 mt-3 mr-4 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M15.42 14.835c.02-.031.038-.062.057-.093a7.956 7.956 0 1 0-1.414 1.414l-.113.113a1 1 0 0 0-.05 1.32 1 1 0 0 0 1.32.051l.114-.114a7.957 7.957 0 0 0 .086-1.788zm-4.046-1.257a6 6 0 1 1 0-4.25 6 6 0 0 1 0 4.25z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </header>




{/* search */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
  <h2 className="text-xl font-semibold mb-4">Search in Your Area</h2>
  <div className="flex">
    <input type="text" className="w-full border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none" placeholder="Enter your location"/>
    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-r-md">Search</button>
  </div>
</div>







            <footer className="bg-gray-800 py-6">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-center space-x-4">
      {/* <!-- Footer links --> */}
      <div>
        <h3 className="text-white font-semibold mb-2">Quick Links</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
        </ul>
      </div>
      
      {/* <!-- Contact Information --> */}
      <div>
        <h3 className="text-white font-semibold mb-2">Contact</h3>
        <p className="text-gray-400">123 Street Name</p>
        <p className="text-gray-400">City, State, Zip</p>
        <p className="text-gray-400">info@example.com</p>
        <p className="text-gray-400">123-456-7890</p>
      </div>
    </div>
  </div>
</footer>

        </>
    );
}
