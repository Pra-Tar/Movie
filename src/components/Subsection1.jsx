import { useRef } from "react";

const Subsection1 = () => {
  const carouselRef = useRef(null); // Create a ref for the carousel container

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -150, behavior: "smooth" }); // Scroll left by 150px
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 150, behavior: "smooth" }); // Scroll right by 150px
    }
  };

  const items = new Array(10).fill("Item"); // Replace with your data

  return (
    <div className="lg:m-12 md:m-10 sm:m-4 m-4">
      <h1 className="text-white text-2xl font-bold">Trending Now</h1>

      <div className="relative">
        {/* Left Scroll Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full z-10"
        >
          &#60;
        </button>

        {/* Carousel container with overflow-x-auto, snap functionality */}
        <div
          ref={carouselRef} // Attach the ref to the container
          className="flex overflow-x-auto space-x-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollBehavior: "smooth" }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="w-36 h-48 bg-pink-200 rounded-lg flex-none snap-start"
            >
              <p className="text-center text-white">{item}</p>
            </div>
          ))}
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full z-10"
        >
          &#62;
        </button>
      </div>
    </div>
  );
};

export default Subsection1;
