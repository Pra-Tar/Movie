import Carousal from "./Carousal";
import Subsection1 from "./Subsection1.jsx";
import Subsection2 from "./Subsection2.jsx";
import Subsection3 from "./Subsection3.jsx";

const MainContainer = () => {
  return (
    <>
        <Carousal />
        <h1 className=" lg:m-12 md:m-10 sm:m-4 m-4 text-white text-4xl font-bold mb-4">Movies</h1>
        <Subsection1 />
        <Subsection2/>
        <Subsection3/>
    </>
  );
};

export default MainContainer;
