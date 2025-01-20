

const ExperienceCard = ({ imgSrc, title, description }) => (
  <>
  <div className="bg-[rgb(245,252,255)] p-6 rounded-lg flex flex-col items-start border-b-4 border-b-[#5E3BEE]">
    <img 
      src={imgSrc} 
      alt={title} 
      className="w-24 h-16 object-cover rounded-lg mb-6"
    />
    <h3 className="text-[23px] font-bold mb-4">
      {title}
    </h3>
    <p className="text-[17px] text-gray-700">
      {description}
    </p>
  </div>
   
   </>
);

const ExperiencePage = () => {
  const experiences = [
    {
      imgSrc: "images/strategy.png",
      title: "Strategy & Collaboration",
      description: "Driving business success through planning, architecture and cross-functional collaboration. Facilitating communication with stakeholders, aligning objectives, and delivering impactful solutions."
    },
    {
      imgSrc: "images/reporting.png",
      title: "BI & Reporting",
      description: "Developing customized, visually impactful BI dashboards and reports tailored to business needs. Delivering actionable insights through advanced reporting."
    },
    {
      imgSrc: "images/data.png",
      title: "Data Engineering",
      description: "Building and optimizing ETL pipelines for efficient data transformation and analysis. Skilled in SQL and data modeling for seamless backend operations."
    },
    {
      imgSrc: "images/cloud.png",
      title: "Cloud Data Solutions",
      description: "Implementing scalable cloud-based data solutions to store, integrate, and analyze large datasets. Expertise in platforms like Snowflake and Azure."
    }
  ];

  return (
    <div className="mt-16 mb-16  bg-white ">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-16 py-12">
        <h2 className="text-4xl lg:text-[50px] font-bold mb-20">
          My Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              imgSrc={exp.imgSrc}
              title={exp.title}
              description={exp.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;