"use client";

import { motion } from "framer-motion";

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
      y: [0, -20, 0],
      transition: {
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  return (
    <div>
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
            className="absolute w-[150px] border-2 border-blue-900   h-[300px] rounded-2xl overflow-hidden bg-gray-800 shadow-xl shadow-blue-500/40 flex items-center justify-center"
            style={{
              transform: `translate(${mockup.x}px, ${mockup.y}px) rotate(${mockup.rotate}deg)`,
            }}>
            <video
              src={mockup.src}
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 w-5 h-5 bg-black rounded-full"></div>
          </div>
        ))}
      </motion.div>

      <motion.div
        animate={floatVariants.animate}
        className="relative  h-[500px] flex sm:hidden justify-center items-center">
        {mockupDataForMobile.map((mockup, index) => (
          <div
            key={index}
            className="absolute w-[100px] border-2 border-blue-900   h-[200px] rounded-2xl overflow-hidden bg-gray-800 shadow-xl shadow-blue-500/40 flex items-center justify-center"
            style={{
              transform: `translate(${mockup.x}px, ${mockup.y}px) rotate(${mockup.rotate}deg)`,
            }}>
            <video
              src={mockup.src}
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 w-5 h-5 bg-black rounded-full"></div>
          </div>
        ))}
      </motion.div>
      <motion.div
        animate={floatVariants.animate}
        className="relative  h-full flex sm:hidden justify-center items-center">
        {mockupForMobileSecond.map((mockup, index) => (
          <div
            key={index}
            className="absolute w-[100px] border-2 border-blue-900   h-[200px] rounded-2xl overflow-hidden bg-gray-800 shadow-xl shadow-blue-500/40 flex items-center justify-center"
            style={{
              transform: `translate(${mockup.x}px, ${mockup.y}px) rotate(${mockup.rotate}deg)`,
            }}>
            <video
              src={mockup.src}
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 w-5 h-5 bg-black rounded-full"></div>
          </div>
        ))}
      </motion.div>
      <motion.div
        animate={floatVariants.animate}
        className="relative h-[600px] hidden sm:flex justify-center lg:hidden items-center">
        {mockupDataForTablet.map((mockup, index) => (
          <div
            key={index}
            className="absolute w-[100px] border-2 border-blue-900   h-[200px] rounded-2xl overflow-hidden bg-gray-800 shadow-xl shadow-blue-500/40 flex items-center justify-center"
            style={{
              transform: `translate(${mockup.x}px, ${mockup.y}px) rotate(${mockup.rotate}deg)`,
            }}>
            <video
              src={mockup.src}
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 w-5 h-5 bg-black rounded-full"></div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default FloatingPhones;
