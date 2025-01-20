import Card1 from "../component/Card1";
import Card2 from "../component/Card2";
import Card3 from "../component/Card3";
import Card4 from "../component/Card4";
import Card5 from "../component/Card5";
import Card6 from "../component/Card6";

function Portfolio() {
  return (
    <>
    <div className="min-h-screen bg-white">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-16 py-12">
        <h2 className="text-4xl lg:text-[50px] font-bold mb-10">
          My Portfolio
        </h2>
        {/* Wrapper for cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card1 />
          <Card2 />
          <Card3 />
         

          <Card4 />
          <Card5 />
          <Card6 />
        </div>
      </div>
    </div>
    <div className="bg-[#5E3BEE] py-2">

    </div>
    </>
  );
}

export default Portfolio;
