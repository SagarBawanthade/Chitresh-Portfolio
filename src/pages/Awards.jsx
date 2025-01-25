import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const AwardsCard = ({ number, image, description }) => (
  <div className="flex flex-col md:flex-row  gap-12 mb-24 relative">
    {/* Number in circle - positioned absolutely */}
    <div className="absolute -left-6 -top-6 z-10">
      <div className="w-20 h-20 bg-[#5E3BEE]/10 rounded-full flex items-center justify-center">
        <span className="text-5xl font-bold text-[#5E3BEE]">{number}</span>
      </div>
    </div>

    {/* Image container with shadow */}
    <div className="relative flex-1 pt-8">
      <div className="relative rounded-xl p-4 border border-[#5E3BEE]/20">
        <img 
          src={image} 
          alt={`Dashboard ${number}`} 
          className="w-full rounded-lg"
        />
        {/* Shadow overlay */}
        <div className="absolute top-[8px] left-[8px] w-full h-full bg-[#5E3BEE]/5 -z-10 rounded-xl"></div>
      </div>
    </div>

    <div className="flex-1 flex flex-col justify-center items-center text-center relative min-h-[200px]">
  <p className="text-gray-700 text-xl leading-relaxed mb-8">
    {description}
  </p>
</div>
  </div>
);

const AwardsCard2 = ({ number, image, description, reverse }) => (
  <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} gap-12 mb-24  relative`}>
    {/* Description container */}
    <div className="flex-1 flex flex-col justify-center items-center text-center relative min-h-[200px]">
      <p className="text-gray-700 text-xl leading-relaxed mb-8">
        {description}
      </p>
    </div>

    {/* Image container with shadow */}
    <div className="relative flex-1 pt-8">
      <div className="relative rounded-xl p-4 border border-[#5E3BEE]/20">
        <img 
          src={image} 
          alt={`Dashboard ${number}`} 
          className="w-full rounded-lg"
        />
        {/* Shadow overlay */}
        <div className="absolute top-[8px] left-[8px] w-full h-full bg-[#5E3BEE]/5 -z-10 rounded-xl"></div>
      </div>
    </div>

    {/* Number in circle - positioned absolutely */}
    <div className={`absolute ${reverse ? '-left-6' : '-right-6'} -top-6 z-10`}>
      <div className="w-20 h-20 bg-[#5E3BEE]/10 rounded-full flex items-center justify-center">
        <span className="text-5xl font-bold text-[#5E3BEE]">{number}</span>
      </div>
    </div>
  </div>
);

const Awards = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  const dashboards = [
    {
      number: "1",
      image: "/images/award1.png",
      description: "Microsoft Certified: Power BI Data Analyst Associate."
    },
    {
      number: "2",
      image: "/images/award2.png",
      description: "Business Special Award"
    },
    {
      number: "3",
      image: "/images/award3.png",
      description: "Business Special Award"
    },
    {
      number: "4",
      image: "/images/award4.png",
      description: "Business Special Award"
    },
 
   
  
  ];

  return (
    <>
    <div className="min-h-screen bg-white">
      {/* Back button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link to="/" className="text-[#5E3BEE] flex items-center gap-2 mb-6 hover:opacity-80 transition-opacity">
          <ArrowLeft className="w-5 h-5" /> Back
        </Link>
      </div>
      
      {/* Main content */}
      <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-12 py-8">
        <h1 className="text-4xl lg:text-[50px] font-bold text-[#5E3BEE] mb-20">
    Certificates and Awards
        </h1>

        <div >
            {dashboards.length > 0 && (
              <AwardsCard
              key={0}
              number={dashboards[0].number}
              image={dashboards[0].image}
              description={dashboards[0].description}
              />
            )}
        <div className="absolute right-0 w-3/4 h-0.5  bg-[#5E3BEE]"></div><br/><br/><br/>
        </div>

        <div>
          {dashboards.length > 0 && (
            <AwardsCard2
              key={1}
              number={dashboards[1].number}
              image={dashboards[1].image}
              description={dashboards[1].description}
            />
          )}
          <div className="absolute left-0 w-3/4 h-0.5 bg-[#5E3BEE]"></div><br/><br/><br/>
        </div>

        <div>
          {dashboards.length > 0 && (
            <AwardsCard
              key={2}
              number={dashboards[2].number}
              image={dashboards[2].image}
              description={dashboards[2].description}
            />
          )}
          <div className="absolute right-0 w-3/4 h-0.5 bg-[#5E3BEE]"></div><br/><br/><br/>
        </div>

        <div>
          {dashboards.length > 0 && (
            <AwardsCard2
              key={3}
              number={dashboards[3].number}
              image={dashboards[3].image}
              description={dashboards[3].description}
            />
          )}
        
        </div>

       

      

      </div>
      
    </div>
    <div className="bg-[#5E3BEE] py-2">
    </div>
    
   </>
  );
};

export default Awards;