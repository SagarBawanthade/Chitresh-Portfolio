import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="bg-[#F5FCFF]">
      <div className="mx-4 sm:mx-8 md:mx-16 px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Content Section */}
          <div className="w-52 md:w-1/2 space-y-8">
            <p className="font-roboto text-2xl font-body md:text-4xl font-semibold text-center lg:text-left leading-[32px]">
              Hey, I am Chitresh Rahamatkar
            </p>
            
            <h1 className="text-4xl md:text-5xl font-bold text-center lg:text-left">
              I'm a <span className="text-[#5E3BEE]">BI Consultant and Data Analyst</span>
            </h1>
            
            <p className="text-lg text-gray-800 max-w-prose text-center lg:text-left">
              Experienced data professional specializing in business intelligence solutions 
              and advanced analytics. Transforming complex data into actionable insights 
              to drive business decisions and growth strategies.
            </p>

            {/* Social Media Icons - Adjusted spacing */}
            <div className="flex space-x-6 justify-center md:justify-start mt-24">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 p-2">
                <FaLinkedin size={32} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 p-2">
                <FaInstagram size={32} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 p-2">
                <FaTwitter size={32} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 p-2">
                <FaFacebook size={32} />
              </a>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="w-full lg:w-1/2">
            <img 
              src="/images/home.png" 
              alt="Chitresh Rahamatkar"
              className="w-full h-auto max-w-[760px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;