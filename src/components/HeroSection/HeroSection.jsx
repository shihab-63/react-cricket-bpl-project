import React from "react";
import bgShadow from "../../assets/bg-shadow.png";
import bgImg from "../../assets/banner-main.png";

const HeroSection = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bgShadow})` }}
      className="max-w-7xl mx-auto py-12 mt-3 rounded-2xl bg-cover bg-no-repeat bg-center bg-black flex justify-center items-center text-center"
    >
      <div className="text-white">
        <img className="mx-auto" src={bgImg} alt="" />
        <h1 className="text-4xl font-bold my-4">Assemble Your Ultimate Dream 11 Cricket Team</h1>
        <p className="text-2xl text-gray-300 mb-4">Beyond Boundaries Beyond Limits</p>
        <div className="border-2 border-[#E7FE29] w-fit mx-auto p-1.5 hover:bg-[#E7FE29] transition-all active:scale-95 duration-700 cursor-pointer rounded-xl">
          <button className="bg-[#E7FE29] cursor-pointer text-black p-1.5 px-4 rounded-lg font-semibold">Claim Free Credit</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
