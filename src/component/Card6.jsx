import { Link } from "react-router-dom";


const Card6 = () => {
    return (
      <div className="max-w-[554px] rounded-2xl shadow-lg">
        
         
            <img 
              src="/images/card6.png" 
              alt="Car" 
              className="w-full h-50 object-cover"
            />
         <div className="bg-white rounded-b-2xl">
  
          {/* Title - with gap */}
          <div className="mt-4">
            <h1 className="text-2xl px-4 font-bold text-gray-900">Awards and Certifications</h1>
          </div>
  
          {/* Description - with gap */}
          <div className="mt-2">
            <p className="text-sm  px-4 text-gray-800 leading-relaxed">
            Showcasing achievements, certifications, and professional recognitions.
            </p>
          </div>
  
          {/* View Button - with gap and 45-degree arrow */}
           <div className="mt-1">
        <div className="inline-block">
          <button className="group inline-flex p-4 items-center text-sm relative">
          <Link to="/awards">
          <span className="relative">
              View
              <svg 
                className="w-5 h-5 ml-1 inline transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 19L19 5M19 5H8M19 5V16" 
                />
              </svg>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-black"></span>
            </span></Link>
          </button>
        </div>
      </div>
          </div>
      </div>
    );
  };
  
  export default Card6;