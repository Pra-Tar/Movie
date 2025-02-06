import dummyImage from "../assets/dummy.jpg";

const Carousal = () => {
  return (
    <div
      className="bg-cover bg-center w-full h-[90vh] sm:h-[90vh] md:h-[70vh] lg:h-[80vh]"
      style={{ backgroundImage: `url(${dummyImage})` }}
    >
      Lorem
    </div>
  );
};

export default Carousal;
