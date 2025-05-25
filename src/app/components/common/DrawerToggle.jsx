'use client'

const DrawerToggle = ({ isOpen }) => {
  return (
    <label 
      htmlFor="graph-drawer" 
      className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-400 text-primary-content hover:bg-primary-focus transition-all duration-300 rounded-r-md h-16 w-6 flex items-center justify-center cursor-pointer shadow-md"
    >
      {isOpen ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      )}
    </label>
  );
};

export default DrawerToggle;
