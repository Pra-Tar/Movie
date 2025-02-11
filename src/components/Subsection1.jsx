import { useState } from "react";

const Subsection1 = () => {
  // This is just an example, replace it with real data or an API.
  const items = new Array(10).fill("Item"); // You can replace 'Item' with actual data

  const [scrollPosition, setScrollPosition] = useState(0);

  // Scroll left function
  const scrollLeft = () => {
    setScrollPosition((prev) => Math.max(prev - 1, 0)); // Prevents scroll before the first item
  };

  // Scroll right function
  const scrollRight = () => {
    setScrollPosition((prev) => Math.min(prev + 1, items.length - 1)); // Prevents scroll after the last item
  };

  return (
    <div className="lg:m-12 md:m-10 sm:m-4 m-4">
      <h1 className="text-white text-2xl font-bold">Trending Now</h1>

      {/* Container for the carousel */}
      <div className="relative">
        {/* Left Scroll Button */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 text-white rounded-full z-10"
          onClick={scrollLeft}
        >
          &lt;
        </button>

        {/* Carousel Content */}
        <div
          className="flex overflow-x-auto space-x-4 scrollbar-hide"
          style={{ scrollBehavior: "smooth" }}
        >
          {/* List of items */}
          {items.map((item, index) => (
            <div
              key={index}
              className="w-36 h-48 bg-pink-200 rounded-lg flex-none"
              style={{
                transform: `translateX(-${scrollPosition * 100}%)`,
              }}
            >
              <p className="text-center text-white">{item}</p>
            </div>
          ))}
        </div>

        {/* Right Scroll Button */}
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 text-white rounded-full z-10"
          onClick={scrollRight}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Subsection1;
