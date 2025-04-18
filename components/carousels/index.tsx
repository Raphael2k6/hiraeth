import React from "react";
import Slider from "react-slick";
import CustomImage from "../customimage";

function AutoPlay() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container mx-3">
      <Slider {...settings}>
        <div className="mx-2">
          <CustomImage
            width={320}
            height={356}
            className="object-cover w-[95%] xl:w-[320px]"
            src={"/slide1.png"}
            alt=""
          />
        </div>
        <div className="mx-2">
          <CustomImage
            width={320}
            height={356}
            className="object-cover w-[95%] xl:w-[320px]"
            src={"/slide2.png"}
            alt=""
          />{" "}
        </div>
        <div className="mx-2">
          <CustomImage
            width={320}
            height={356}
            className="object-cover w-[95%] xl:w-[320px]"
            src={"/slide3.png"}
            alt=""
          />{" "}
        </div>
        <div className="mx-2">
          <CustomImage
            width={320}
            height={356}
            className="object-cover w-[95%] xl:w-[320px]"
            src={"/slide4.png"}
            alt=""
          />{" "}
        </div>
        <div className="mx-2">
          <CustomImage
            width={320}
            height={356}
            className="object-cover w-[95%] xl:w-[320px]"
            src={"/slide5.png"}
            alt=""
          />{" "}
        </div>
        <div className="mx-2">
          <CustomImage
            width={320}
            height={356}
            className="object-cover w-[95%] xl:w-[320px]"
            src={"/slide6.png"}
            alt=""
          />{" "}
        </div>
        <div className="mx-2">
          <CustomImage
            width={320}
            height={356}
            className="object-cover w-[95%] xl:w-[320px]"
            src={"/slide7.png"}
            alt=""
          />{" "}
        </div>
        <div className="mx-2">
          <CustomImage
            width={320}
            height={356}
            className="object-cover w-[95%] xl:w-[320px]"
            src={"/slide8.png"}
            alt=""
          />{" "}
        </div>
        <div className="mx-2">
          <CustomImage
            width={320}
            height={356}
            className="object-cover w-[95%] xl:w-[320px]"
            src={"/slide9.png"}
            alt=""
          />{" "}
        </div>
        <div className="mx-2">
          <CustomImage
            width={320}
            height={356}
            className="object-cover w-[95%] xl:w-[320px]"
            src={"/slide10.png"}
            alt=""
          />{" "}
        </div>
        <div className="mx-2">
          <CustomImage
            width={320}
            height={356}
            className="object-cover w-[95%] xl:w-[320px]"
            src={"/slide11.png"}
            alt=""
          />{" "}
        </div>
        <div className="mx-2">
          <CustomImage
            width={320}
            height={356}
            className="object-cover w-[95%] xl:w-[320px]"
            src={"/slide12.png"}
            alt=""
          />{" "}
        </div>
      </Slider>
    </div>
  );
}

export default AutoPlay;
