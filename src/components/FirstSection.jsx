import React, { useState } from "react";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { RxDotFilled } from "react-icons/rx";

function FirstSection() {
  const slides = [
    {
      url: "https://images8.alphacoders.com/117/1174099.jpg",
    },
    {
      url: "https://wallpaperswide.com/download/living_room_design_2-wallpaper-3840x2160.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <>
      <div className="hidden md:flex justify-evenly h-12 items-center">
        <div>element</div>
        <div>element</div>
        <div>element</div>
        <div>element</div>
        <div>element</div>
      </div>

      <div className="h-[200px] md:h-[300px] lg:h-[500px] xl:h-[600px] relative group">
        <div
          className="w-full h-full bg-cover bg-center duration-700"
          style={{
            backgroundImage: `url(${slides[currentIndex].url})`,
          }}
        ></div>
        {/* left arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] left-5 text-2xl p-2 rounded-md bg-black/20 text-white cursor-pointer">
          <NavigateBeforeIcon onClick={prevSlide} size={30} />
        </div>
        {/* right arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] right-5 text-2xl p-2 rounded-md bg-black/20 text-white cursor-pointer">
          <NavigateNextIcon onClick={nextSlide} size={30} />
        </div>
        <div className="absolute flex justify-center top-[90%] right-20 py-2 text-white">
          {slides.map((_, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer hover:text-white/50"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>

      <div className=" flex items-center absolute top-[660px] left-[22vh]">
        <div className="grid grid-cols-4">
          <div className="text-white pt-6 flex flex-col items-center bg-red-400 border h-[380px] w-[280px] bg-cover"
               style={{background: "url(https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg?auto=compress&cs=tinysrgb&w=800)"}}>
            <h6>Collection</h6>
            <h2 className="text-3xl">Fashion</h2>
          </div>
          <div className="text-white pt-6 flex flex-col items-center bg-red-400 border h-[380px] w-[280px]"
              style={{background: "url(https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?cs=srgb&dl=pexels-juan-mendez-1536619.jpg&fm=jpg)"}}>
            <h6>New Arrivals</h6>
            <h2 className="text-3xl">Electronics</h2>
          </div>
          <div className="text-white pt-6 flex flex-col items-center bg-red-400 border h-[380px] w-[280px]"
               style={{ background: "url(https://images.pexels.com/photos/4753996/pexels-photo-4753996.jpeg?auto=compress&cs=tinysrgb&w=800)"}}>
            <h6>Up to 50% off</h6>
            <h2 className="text-3xl">Sporting</h2>
          </div>
          <div className="text-white pt-6 flex flex-col items-center bg-red-400 border h-[380px] w-[280px]"
               style={{ background: "url(https://images.pexels.com/photos/1732419/pexels-photo-1732419.jpeg?auto=compress&cs=tinysrgb&w=800)"}}>
            <h6>Save big on</h6>
            <h2 className="text-3xl">Outdoors</h2>
          </div>
        </div>
      </div>

      <div className="h-96 flex items-end justify-center pb-9">
        <h1 className="text-2xl">View All Categories</h1>
      </div>
    </>
  );
}

export default FirstSection;
