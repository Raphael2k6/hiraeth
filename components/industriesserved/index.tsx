import AutoPlay from "../carousels";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const IndustriesServed = () => {
  return (
    <div className="bg-[#D1E3FF] py-12">
      <div className="px-[8%] py-8">
        <h6 className="text-black font-gilmer font-[600] text-[2.25rem] tracking-[-2%]">
          Industries We Serve
        </h6>
      </div>
      <AutoPlay />
    </div>
  );
};

export default IndustriesServed;
