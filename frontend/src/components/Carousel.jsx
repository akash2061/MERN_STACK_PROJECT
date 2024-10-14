import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Silder1 from "../assets/carousel/wifi_pen.webp";
import Silder2 from "../assets/carousel/pen_duck.webp";
import Silder3 from "../assets/carousel/duck.webp";
import Silder4 from "../assets/carousel/ipinfo.webp";

const Carousel = () => {
  const settings = {
    dots: true,           // Pagination dots visible
    infinite: true,       // Infinite loop
    speed: 500,           // Transition speed in ms
    slidesToShow: 1,      // Number of slides to show at a time
    slidesToScroll: 1,    // Number of slides to scroll at a time
    autoplay: true,       // Auto-play enabled
    autoplaySpeed: 2000,  // Auto-play speed in ms
    pauseOnHover: true,   // Pause auto-play on hover
  };

  return (
    <div className="hidden md:block md:w-11/12 md:mx-auto md:pt-5 text-[#EAEAEA]">
      <Slider {...settings}>
        <div className="relative">
          <img
            src={Silder1}
            alt="Image 1"
            className="w-full h-auto rounded-lg"
          />
          <div className="absolute top-1/2 left-1/2 backdrop-blur-sm text-[#EAEAEA] font-semibold bg-black bg-opacity-50 p-4 rounded-lg transform -translate-x-1/2 -translate-y-1/2">
            <h2 className="text-lg md:text-2xl font-bold">WiFi Pentesting</h2>
            <p>Pentest WiFi with the industry standard platforms. <br />Equip your red team with the enterprise-ready WiFi Pineapple® and accessories.</p>
          </div>
        </div>
        <div className="relative">
          <img
            src={Silder2}
            alt="Image 2"
            className="w-full h-auto rounded-lg"
          />
          <div className="absolute bottom-5 left-5 backdrop-blur-sm text-[#EAEAEA] font-semibold bg-black bg-opacity-50 p-4 rounded-lg">
            <h2 className="text-2xl font-bold">Hotplug Attack & IT Automation.</h2>
            <p>With a few seconds of physical access, all bets are off...</p>
          </div>
        </div>
        <div className="relative">
          <img
            src={Silder3}
            alt="Image 3"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="relative">
          <img
            src={Silder4}
            alt="Image 4"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
