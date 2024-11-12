"use client";

import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const FloatingPhones = () => {
  const mockupData = [
    { src: "/videos/video1.mp4", x: -400, y: -80, rotate: -10 },
    { src: "/videos/video2.mp4", x: 400, y: -90, rotate: 10 },
    { src: "/videos/video3.mp4", x: -100, y: 20, rotate: -5 },
    { src: "/videos/video4.mp4", x: 120, y: 80, rotate: 15 },
  ];

  const mockupDataForMobile = [
    { src: "/videos/video1.mp4", x: -100, y: -80, rotate: -10 },
    { src: "/videos/video2.mp4", x: 100, y: -90, rotate: 10 },
  ];

  const mockupForMobileSecond = [
    { src: "/videos/video3.mp4", x: -100, y: 5, rotate: 15 },
    { src: "/videos/video4.mp4", x: 100, y: -60, rotate: -10 },
  ];

  const mockupDataForTablet = [
    { src: "/videos/video1.mp4", x: -300, y: -80, rotate: -10 },
    { src: "/videos/video2.mp4", x: 300, y: -90, rotate: 10 },
    { src: "/videos/video3.mp4", x: -100, y: 20, rotate: -5 },
    { src: "/videos/video4.mp4", x: 120, y: 80, rotate: 15 },
  ];

  const floatVariants = {
    animate: {
      y: [0, -12, 0],
      transition: {
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div data-aos="fade-up" className="relative pt-12">
      <div className="absolute top-1/3 left-0 w-[500px] 2xl:w-[600px] h-[200px] 2xl:h-[400px] bg-blue-500 opacity-20 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-10"></div>
      <div className="absolute top-1/2 right-0 w-[500px] 2xl:w-[600px] h-[200px] 2xl:h-[400px] bg-blue-500 opacity-20 blur-3xl -z-10 rounded-full pointer-events-none"></div>
      <div className="text-center">
        <h1 className="text-gray-300 text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold tracking-tight">
          <span>Videos</span>{" "}
          <span className="bg-gradient-to-r  text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl from-blue-500 to-purple-500 bg-clip-text text-transparent font-black ">
            that makes{" "}
          </span>{" "}
          <br /> your brand spread <br />{" "}
          <span className="bg-gradient-to-r text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl from-blue-500 to-purple-500 bg-clip-text text-transparent font-black ml-16">
            like Wildfire
          </span>{" "}
        </h1>
      </div>
      <motion.div
        animate={floatVariants.animate}
        className="relative hidden h-[600px] lg:flex justify-center items-center">
        {mockupData.map((mockup, index) => (
          <div
            key={index}
            className="absolute  w-[150px]   bg-gradient-to-tr from-purple-400 to-blue-400   h-[300px] rounded-2xl overflow-hidden p-[2px]  shadow-xl shadow-blue-500/40 flex items-center justify-center"
            style={{
              transform: `translate(${mockup.x}px, ${mockup.y}px) rotate(${mockup.rotate}deg)`,
            }}>
            <video
              src={mockup.src}
              autoPlay
              loop
              muted
              className="rounded-xl w-full h-full object-cover"
            />
            <div className="absolute top-2 w-3 h-3 bg-black rounded-full"></div>
          </div>
        ))}
      </motion.div>

      <motion.div
        animate={floatVariants.animate}
        className="relative  h-[500px]  flex sm:hidden justify-center items-center">
        {mockupDataForMobile.map((mockup, index) => (
          <div
            key={index}
            className="absolute w-[100px]  bg-gradient-to-tr from-purple-400 to-blue-400    h-[200px] rounded-2xl overflow-hidden p-[2px]  shadow-xl shadow-blue-500/40 flex items-center justify-center"
            style={{
              transform: `translate(${mockup.x}px, ${mockup.y}px) rotate(${mockup.rotate}deg)`,
            }}>
            <video
              src={mockup.src}
              autoPlay
              loop
              muted
              className="rounded-xl w-full h-full object-cover"
            />
            <div className="absolute top-2 w-3 h-3 bg-black rounded-full"></div>
          </div>
        ))}
      </motion.div>
      <motion.div
        animate={floatVariants.animate}
        className="relative  h-full flex  sm:hidden justify-center items-center">
        {mockupForMobileSecond.map((mockup, index) => (
          <div
            key={index}
            className="absolute w-[100px]  bg-gradient-to-tr from-purple-400 to-blue-400    h-[200px] rounded-2xl overflow-hidden p-[2px]  shadow-xl shadow-blue-500/40 flex items-center justify-center"
            style={{
              transform: `translate(${mockup.x}px, ${mockup.y}px) rotate(${mockup.rotate}deg)`,
            }}>
            <video
              src={mockup.src}
              autoPlay
              loop
              muted
              className="rounded-xl w-full h-full object-cover"
            />
            <div className="absolute top-2 w-3 h-3 bg-black rounded-full"></div>
          </div>
        ))}
      </motion.div>
      <motion.div
        animate={floatVariants.animate}
        className="relative h-[600px] hidden sm:flex justify-center lg:hidden items-center">
        {mockupDataForTablet.map((mockup, index) => (
          <div
            key={index}
            className="absolute w-[100px]   bg-gradient-to-tr from-purple-400 to-blue-400   h-[200px] rounded-2xl overflow-hidden p-[2px]  shadow-xl shadow-blue-500/40 flex items-center justify-center"
            style={{
              transform: `translate(${mockup.x}px, ${mockup.y}px) rotate(${mockup.rotate}deg)`,
            }}>
            <video
              src={mockup.src}
              autoPlay
              loop
              muted
              className="rounded-xl w-full h-full object-cover"
            />
            <div className="absolute top-2 w-3 h-3 bg-black rounded-full"></div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default FloatingPhones;
