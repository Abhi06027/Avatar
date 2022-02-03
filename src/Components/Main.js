import React from "react";

export default function Main() {
  return (
    <div className="    ">
      <div className=" absolute bg-goli  z-10 px-4 sm:px-4 md:px-4 lg:px-14  ">
        <img
          className=" w-16 sm:w-16 md:w-20 lg:w-28 brightness-100  cursor-pointer  - '  "
          src="./images/netflix.png"
          alt=""
        />
      </div>

      <div className=" flex justify-center flex-col  bg-goli absolute  inset-0    items-center ">
        <div className=" flex justify-center  text-3xl sm:text-3xl md:text-3xl  lg:text-6xl  py-4 sm:py-4 md:py-4 lg:my-9 text-white ">
          <h1> Who's watching? </h1>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4  gap-2 sm:gap-2 md:gap-2 lg:gap-8 cursor-pointer    ">
          <div className=" text-gray-400 hover:text-gray-200  ">
            <a href="https://abhi06027.github.io/netflix-browse//">
              <img
                className="   w-20 sm:w-20 md:w-30 lg:w-44  hover:border-2   rounded-md   "
                src="./images/avatar1.png"
                alt=""
              />
              <p className=" text-xs sm:text-xs md:text-xs lg:text-lg py-2 text-center  font-semibold   ">
                pooja
              </p>
            </a>
          </div>
          <div className=" text-gray-400 hover:text-gray-200 ">
            <a href="https://abhi06027.github.io/netflix-browse//">
              <img
                className="   w-20 sm:w-20 md:w-30 lg:w-44  hover:border-2   rounded-md  "
                src="./images/avatar2.png"
                alt=""
              />
              <p className="  py-2  text-xs sm:text-xs md:text-xs lg:text-lg text-center font-semibold  ">
                gupta
              </p>
            </a>
          </div>
          <div className="text-gray-400 hover:text-gray-200 ">
            <a href="https://abhi06027.github.io/netflix-browse//">
              <img
                className=" w-20 sm:w-20 md:w-30 lg:w-44  hover:border-2   rounded-md   "
                src="./images/avatar3.png"
                alt=""
              />
              <p className=" py-2  text-xs sm:text-xs md:text-xs lg:text-lg text-center font-semibold  ">
                Children
              </p>
            </a>
          </div>

          <div className=" text-gray-400 hover:text-gray-200  hidden sm:block md:block  lg:block ">
            <img
              className="hover:bg-gray-300    w-20 sm:w-20 md:w-30 lg:w-44 px-4 py-4   lg:px-8 lg:py-8  hover:border-2   rounded-md   "
              src="./images/plus.png"
              alt=""
            />
            <p className="py-2 text-xs sm:text-xs md:text-xs lg:text-lg text-center font-semibold  ">
              Add Profile
            </p>
          </div>
        </div>
        <div className=" text-gray-400 hover:text-gray-200  sm:hidden  md:hidden lg:hidden ">
          <img
            className="hover:bg-gray-300 w-20 sm:w-20 md:20 lg:w-20  px-4 py-4  hover:border-2   object-contain   rounded-md transform   "
            src="./images/plus.png"
            alt=""
          />
          <p className=" text-xs sm:text-xs md:text-xs lg:text-lg text-center font-semibold  ">
            Add Profile
          </p>
        </div>
        <div className=" text-gray-400 hover:text-gray-200 mt-8 sm:mt-8 md:mt-8  lg:mt-20 ">
          <p className=" py-1 px-5  sm:py-1 sm:px-5 md:py-1 md:px-5 lg:py-2 lg:px-10 md:text-xl text-center border  border-1  font-semibold   ">
            Manage Profiles
          </p>
        </div>
      </div>
    </div>
  );
}
