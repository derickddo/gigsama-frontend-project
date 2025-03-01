import React from "react";
import Logo from "../assets/vercel-logotype-dark.png"; // If you need a logo
import { FaTerminal } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { IoMdGitMerge } from "react-icons/io";
import { BiBuilding, BiMessageRounded, BiShield } from "react-icons/bi";
import Image1 from "../assets/image1.png";
import Image2 from "../assets/image2.png";
import Image3 from "../assets/image3.png";
import Image4 from "../assets/image4.png";
import chartImage from "../assets/analytics-large-dark.png"
import { FaChartLine } from "react-icons/fa6";
import { CiUndo } from "react-icons/ci";
import { FiBook } from "react-icons/fi";
import TriImage from "../assets/tri.png";

const HeroSection = () => {
  return (
    <section className="w-[80%] mx-auto mt-[10rem]">
      <div className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden">
        {/* 
          1) Multi-Stop Gradient
             - Example: from a subtle blue on the left, 
               fading to black in the center, and red on the right
             - Adjust to match your exact design screenshot 
        */}
        <div className="absolute inset-0 " />

        {/* 
          2) Grid Container (top, bottom, left, right)
             - Absolutely positioned, pointer-events-none so it doesn't block hover
        */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top Grid */}
          <div className="absolute top-0 left-0 w-full">
            <div className="border-t border-gray-800/50 w-full h-px" />
            <div className="grid grid-cols-10 w-full">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={`top-${i}`}
                  className="border-r border-gray-800/50 h-[5rem]"
                />
              ))}
            </div>
            <div className="border-b border-gray-800/50 w-full h-px" />
          </div>

          {/* Left Grid */}
          <div className="absolute top-0 left-0 h-full">
            <div className="flex h-full">
              <div className="border-l border-gray-800/50 h-[679px]" />
              <div className="grid grid-rows-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={`left-${i}`}
                    className="border-b border-gray-800/50 w-[6.6rem]"
                  />
                ))}
              </div>
              <div className="border-l border-gray-800/50 h-[679px]" />
            </div>
          </div>

          {/* Bottom Grid */}
          <div className="absolute bottom-0 left-0 w-full  bg-gradient-to-b from-black  via-green-600 to-red-600 opacity-80">
            <div className="border-t border-gray-800/50 w-full h-px" />
            <div className="grid grid-cols-10 w-full">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={`bottom-${i}`}
                  className="border-r border-gray-800/50 h-[5rem]"
                />
              ))}
            </div>
            <div className="border-b border-gray-800/50 w-full h-px" />
            <div className="border-t border-gray-800/50 w-full h-px" />
            <div className="grid grid-cols-10 w-full">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={`bottom-extra-${i}`}
                  className="border-r border-gray-800/50 h-[5rem]"
                />
              ))}
            </div>
            <div className="border-b border-gray-800/50 w-full h-px" />
            <div className="border-t border-gray-800/50 w-full h-px" />
            <div className="grid grid-cols-10 w-full">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={`bottom-extra-${i}`}
                  className="border-r border-gray-800/50 h-[5rem]"
                />
              ))}
            </div>
            <div className="border-b border-gray-800/50 w-full h-px" />
          </div>

          {/* Right Grid */}
          <div className="absolute top-0 right-0 h-full">
            <div className="flex h-full">
              <div className="border-r border-gray-800/50 h-[679px]" />
              <div className="grid grid-rows-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={`right-${i}`}
                    className="border-b border-gray-800/50 w-[6.6rem]"
                  />
                ))}
              </div>
              <div className="border-r border-gray-800/50 w-px h-[679px]" />
            </div>
          </div>
        </div>

        {/* 
          3) Main Content 
             - Positioned above the gradient and grid 
        */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
          {/* Hero Text */}
          <h1 className="text-5xl font-bold -mt-40 text-white mb-4 tracking-tight text-center">
            Your Complete Platform for the Web
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 text-center">
            Build, scale, and secure a faster, more personalized experience.
          </p>

          {/* Buttons */}
          <div className="flex space-x-4">
            <button className="px-6 py-3 bg-white text-black rounded-full font-semibold text-sm tracking-wide hover:bg-gray-200 hover:scale-105 transition-transform duration-300 cursor-pointer">
              Start Deploying
            </button>
            <button className="px-6 py-3 border border-gray-500 text-white rounded-full font-semibold text-sm tracking-wide hover:bg-[#111] hover:scale-105 transition-transform duration-300 cursor-pointer">
              Get a Demo
            </button>
          </div>
          <img src={TriImage} alt="triImage" className="absolute bottom-10 w-[12rem]" />
        </div>

          

        
      </div>
      <div className="border-l border-r border-gray-800 h-[15rem] flex justify-center items-center">
            <p className="text-white font-bold text-3xl text-center leading-1">
            Develop with your favorite tools <FaTerminal className="inline-block" /> 
            <br />
            Launch globally, <TbWorld className="inline-block"/> instantly Keep pushing <IoMdGitMerge className="inline-block" />

            </p>
      </div>
      <div className="border border-gray-800">
        <div className="border-b border-gray-800 mt-4"></div>            
        <div className="grid grid-cols-2">
          <div className="border-r border-gray-800 w-full p-12">
            <div className="flex items-center space-x-2">
            <FaTerminal className=" text-gray-300" />
            <p className="text-gray-300">Git-connected Deploys</p>
            </div>
            <p className="text-white font-medium text-2xl mt-4">
            From localhost to https,in seconds.
            <br/>
            <span className="text-gray-300">Deploy from Git or your CLI.</span>
            </p>

            <div className="mt-10">
              <img src={Image1} alt="Image1" className="w-full h-full" />
            </div>
          </div>
          <div className="p-12">
            <div className="flex items-center space-x-2">
              <BiMessageRounded className="text-gray-300" />
              <p className="text-gray-300">Collaborative pre-production</p>
            </div>
            <p className="text-white font-medium text-2xl mt-4">
            Every deploy is remarkable. 
            <span className="text-gray-300">Chat with <br/> your team on real, production-grade UI, not just designs.</span>
            </p>
            <div className="mt-10">
              <img src={Image2} alt="Image1" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-l border-r border-gray-800 p-12 bg-[#111]">
          <div className="flex gap-2 items-center">
            <FaChartLine className="text-gray-300" />
            <p className="text-gray-300">Frontend Observability</p>
          </div>
          <p className="text-white font-medium text-2xl mt-4">
            Privacy-friendly, lightweight analytics.
            <br/>
            <span className="text-gray-300">
              Upgrade your post-launch workflow with actionable,
              <br/>
              real-time insights.
            </span>
          </p>
          <img src={chartImage} alt="chartImage" className="-mt-[8rem]" />
         
      </div>
      <div className="border border-gray-800">
        <div className="grid grid-cols-2">
          <div className="border-r border-gray-800 w-full p-12">
            <div className="flex items-center space-x-2">
            <CiUndo className=" text-gray-300" />
            <p className="text-gray-300">Instant Rollbacks</p>
            </div>
            <p className="text-white font-medium text-2xl mt-4">
            Go ahead, deploy on Friday.
            <br/>
            <span className="text-gray-300">Instantly rollback to a working deployment.</span>
            </p>

            <div className="mt-10">
              <img src={Image3} alt="Image1" className="w-full h-full" />
            </div>
          </div>
          <div className="p-12">
            <div className="flex items-center space-x-2">
              <FiBook className="text-gray-300" />
              <p className="text-gray-300">Conformance</p>
            </div>
            <p className="text-white font-medium text-2xl mt-4">
            Move fast, don’t break things.
            <span className="text-gray-300">Keep <br/> quality high while maintaining velocity with Enterprise Monorepos. </span>
            </p>
            <div className="mt-10">
              <img src={Image4} alt="Image1" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>

      <div className="border-l border-r border-b border-gray-800 h-[8rem] flex justify-center items-center gap-3">
            <p className="text-white font-bold text-2xl">
              Scale your
            </p>
            <a href="#" className="text-white px-4 py-2 rounded-4xl bg-[#111] border border-gray-800 flex items-center gap-2 hover:bg-[#333]">
              <BiBuilding className="inline-block text" />
              Enterprise
            </a>
            <p className="text-white font-bold text-2xl">
              without compromising
            </p>
            <a href="#" className="text-white px-4 py-2 rounded-4xl bg-[#111] border border-gray-800 flex items-center gap-2 hover:bg-[#333]">
              <BiShield className="inline-block text" />
              Security
            </a>
      </div>
      <div className="border-l  border-r border-b border-gray-800 h-fit relative">
        <div className="absolute border-b border-gray-800 top-4 w-full"></div>  
        <div className="grid grid-cols-3 gap-3">
          {/* dotted vertical line */}
          <div className="border-r border-dotted border-gray-800 h-[14rem]"></div>
          <div className="border-r border-dotted border-gray-800 h-[14rem]"></div>
        </div>
        <div className="absolute top-0 z-10 grid grid-cols-3 gap-3 grid-lines p-12">
          <div className="col-span-2">
            <p className="text-white text-[1.3rem] font-medium">Ready to deploy? <span className="text-gray-300">Start building with a free account. </span><br/>
            <span className="text-gray-300">Speak to an expert for your</span> <span className="text-blue-400">Pro</span > <span className="text-gray-300">or </span> <span className="text-purple-400">Enterprise</span> <span className="text-gray-300">needs. </span></p>
            <div className="flex gap-4 mt-4">
                <a href="#" className="text-black px-4 py-2 hover:bg-gray-200 rounded-4xl bg-white text-sm">
              
                  Start Deploying
                </a>
                <a href="#" className="text-white px-4 py-2 rounded-4xl bg-[#111] border border-gray-800 flex items-center gap-2 hover:bg-[#333] text-sm">
                  Talk to an Expert
                </a>
            </div>
          </div>
          <div className="ml-12">
            <p className="text-white">
            Explore Vercel Enterprise with an interactive product tour, trial, or a personalized demo.
            </p>
            <a href="#" className="mt-4 text-white px-4 py-2 rounded-4xl bg-[#111] border border-gray-800 w-fit flex items-center gap-2 hover:bg-[#333] text-sm">
                  Explore Enterprise
                </a>
          </div>

        </div>
      </div>
      


    </section>
  );
};

export default HeroSection;
