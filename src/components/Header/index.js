import React from "react";
import resume from "../../assets/documents/Francis_Albuna_Resume.pdf"

function Header() {

    const [navbarOpen, setNavbarOpen] = React.useState(false);

return (

<nav className="bg-blueLight1">
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div className="relative flex items-center justify-between h-16">
    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        
        <button className="inline-flex items-center justify-center p-2 rounded-md bg-gray-200 text-gray-600 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out" aria-label="Main menu" aria-expanded="false" onClick={() => setNavbarOpen(!navbarOpen)}>
          
          <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          
          <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex-shrink-0">
          {/* <img className="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/v1/workflow-mark-on-dark.svg" alt="Workflow logo" /> */}
          {/* <img className="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/v1/workflow-logo-on-dark.svg" alt="Workflow logo" /> */}
        </div>
        <div className="hidden sm:block sm:ml-6">
          <div className="flex">
            <a href={resume} className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Resume</a>
            <a href="About" className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-700 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">About</a>
            <a href="Portfolio" className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-700 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Portfolio</a>
            <a href="Contact" className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-700 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Contact</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className={(navbarOpen ? "sm:hidden" : "hidden")}>
    <div className="px-2 pt-2 pb-3 border-b border-gray-400">
      <a href={resume} className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Resume</a>
      <a href="About" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">About</a>
      <a href="Portfolio" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Portfolio</a>
      <a href="Contact" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Contact</a>
    </div>
  </div>
</nav>

    );
}


export default Header;