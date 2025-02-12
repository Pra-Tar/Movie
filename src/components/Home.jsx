import img from "../assets/dummy6.png";

const Home = () => {
  return (
    <>
      <div className="w-full lg:h-[88vh] h-[83vh] flex flex-col justify-center items-center bg-cover bg-center opacity-80 gap-7">
        <h1 className="lg:text-8xl text-6xl text-white">Get started</h1>
        <div className="flex gap-4 text-xl">
          <a
            href="#"
            className=" shadow-2xl bg-white text-red-500 hover:bg-red-500 hover:text-white border w-30 text-center rounded-full lg:p-4 p-2"
          >
            SignIn
          </a>
          <a
            href="#"
            className="shadow-2xl bg-red-500 text-white hover:bg-white hover:text-red-500 border w-30 text-center rounded-full lg:p-4 p-2"
          >
            Register
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
