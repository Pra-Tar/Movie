import dummyImage from "../assets/dummy.jpg";
import dummyImage2 from "../assets/dummy2.jpg";
import dummyImage3 from "../assets/dummy3.jpg";
import dummyImage4 from "../assets/dummy4.jpg";
import dummyImage5 from "../assets/dummy5.png";
import dummyImage6 from "../assets/dummy6.png";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const Carousal = () => {
  const images = [
    dummyImage,
    dummyImage2,
    dummyImage3,
    dummyImage4,
    dummyImage5,
    dummyImage6,
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevCurrent) => (prevCurrent + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div className="relative w-full h-[90vh] sm:h-[90vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center flex items-center w-full h-[90vh] sm:h-[90vh] md:h-[70vh] lg:h-[80vh] px-4 transition-opacity duration-700 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          >
            <div className="bg-opacity-30 backdrop-blur-sm border border-white/30 lg:ml-6 text-white p-3 sm:p-2 md:p-3 lg:p-4 rounded-lg flex flex-col justify-between h-auto sm:h-1/2 w-full sm:w-3/4 md:w-2/3 lg:w-1/3">
              <div className="flex flex-wrap gap-2 text-xs font-extralight">
                <span>Category</span>
                <span>Year</span>
                <span>Lang</span>
                <span>Duration</span>
              </div>
              <div className="text-2xl sm:text-4xl lg:text-4xl font-bold">
                TITLE
              </div>
              <div className="text-md sm:text-xl lg:text-xl font-extralight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                delectus magni ducimus soluta. Corporis saepe ab ipsam nam
                aspernatur, molestias ratione voluptatem quos placeat neque
                iusto, nobis ad. Quae, illum!
              </div>
              <div className="flex text-sm flex-wrap gap-4 text-black">
                <button className="border flex gap-x-1 items-center justify-center bg-white cursor-pointer rounded-2xl py-2 px-4 w-full sm:w-auto">
                  <span>Watch Now</span> <Play size={18} />
                </button>
                <button className="border bg-white cursor-pointer rounded-2xl py-2 px-4 w-full sm:w-auto">
                  Add to Watchlist
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* DOTS */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === current ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrent(index)}
          ></div>
        ))}
      </div>
    </>
  );
};

export default Carousal;
