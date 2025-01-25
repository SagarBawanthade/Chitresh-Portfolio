import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="bg-[#F5FCFF] min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Left Content Section */}
          <div className="w-full md:w-1/2 space-y-6 sm:space-y-8">
            <p className="font-roboto text-xl sm:text-2xl md:text-4xl font-semibold text-center md:text-left leading-snug">
              Hey, I am Chitresh Rahamatkar
            </p>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center md:text-left leading-tight">
              I'm a <span className="text-[#5E3BEE]">BI Consultant and Data Analyst</span>
            </h1>
            
            <p className="text-base sm:text-lg text-gray-800 text-center md:text-left leading-relaxed">
              Experienced data professional specializing in business intelligence solutions 
              and advanced analytics. Transforming complex data into actionable insights 
              to drive business decisions and growth strategies.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4 sm:space-x-6 justify-center md:justify-start pt-8 sm:pt-12">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                 className="text-blue-600 hover:text-blue-800 p-2 transition-colors">
                <FaLinkedin className="w-6 h-6 sm:w-8 sm:h-8" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                 className="text-pink-600 hover:text-pink-800 p-2 transition-colors">
                <FaInstagram className="w-6 h-6 sm:w-8 sm:h-8" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                 className="text-blue-400 hover:text-blue-600 p-2 transition-colors">
                <FaTwitter className="w-6 h-6 sm:w-8 sm:h-8" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                 className="text-blue-700 hover:text-blue-900 p-2 transition-colors">
                <FaFacebook className="w-6 h-6 sm:w-8 sm:h-8" />
              </a>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img 
              src="/images/home.png" 
              alt="Chitresh Rahamatkar"
              className="w-full h-auto max-w-[500px] mx-auto md:max-w-[760px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;