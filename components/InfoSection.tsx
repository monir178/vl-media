"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import MaxWidthWrapper from "./ui/Shared/MaxWidthWrapper";
import CustomHeading from "./ui/CustomHeading";
import useMediaQuery from "@/hooks/useMediaQuery";

const InfoSection = () => {
  const notForYouRef = useRef(null);
  const forYouRef = useRef(null);
  const isMediumOrLarger = useMediaQuery("(min-width: 768px)");

  return (
    <div className="text-white p-6 md:p-12">
      <MaxWidthWrapper className="flex flex-col md:flex-row gap-8 md:gap-12">
        {/* This is Not for You Section */}
        <motion.div
          ref={notForYouRef}
          className="flex-1 space-y-6"
          initial={isMediumOrLarger ? { opacity: 0, x: -50 } : {}} // animation only on md+
          animate={isMediumOrLarger ? { opacity: 1, x: 0 } : {}}
          transition={isMediumOrLarger ? { duration: 0.5 } : {}}
          viewport={isMediumOrLarger ? { amount: 0.2 } : {}}>
          <CustomHeading
            text="THIS IS NOT FOR YOU IF YOU..."
            className="text-3xl md:text-5xl 2xl:text-6xl text-gray-800"
          />
          <ul className="space-y-4">
            {[
              "Are looking for growth hacks or some basic information you can learn for free on YouTube.",
              "Want some get rich quick method that will make you money overnight.",
              "Aren’t passionate about anything or not interested in learning something new you can share with the world.",
              "Don’t want to help people and just want to make a quick buck.",
              "Are looking for a pre-recorded course that the creator hasn’t touched or changed since day one...",
              "Aren’t serious about building a real online business leveraging a personal brand.",
              "Don’t want to invest time in growing your brand and business.",
              "Are looking for a “passive income” opportunity",
              "Think this is “easy”",
            ].map((text, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-red-500">✖</span>
                <p className="text-gray-300">{text}</p>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* This is For You Section */}
        <motion.div
          ref={forYouRef}
          className="flex-1 space-y-6"
          initial={isMediumOrLarger ? { opacity: 0, x: 50 } : {}} // animation only on md+
          animate={isMediumOrLarger ? { opacity: 1, x: 0 } : {}}
          transition={isMediumOrLarger ? { duration: 0.5 } : {}}
          viewport={isMediumOrLarger ? { amount: 0.2 } : {}}>
          <h1 className="text-3xl md:text-5xl 2xl:text-6xl font-bold text-[#81ae37]">
            THIS IS FOR YOU IF YOU...
          </h1>
          <ul className="space-y-4">
            {[
              "Are tired of being stuck in a loop of surface-level advice, buying course after course...",
              "Can’t find the “niche” to commit to and constantly feel that no matter what you decide...",
              "Are tired of always learning new information and listening to others tell you what you have to do...",
              "Overwhelm yourself with the process of content creation...",
              "Feel like you aren’t ready to heavily monetize what you’ve learned...",
              "Already have an audience but you’re not able to consistently sell your products...",
              "Constantly struggle with impostor syndrome and feel like you’re not qualified...",
              "Feel like nobody understands you and you’re looking to make more friends...",
              "Are looking for a no BS formula that will take you to a high paying, sustainable...",
              "Want to learn how to create incredibly valuable products and serve others.",
            ].map((text, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-[#81ae37]">✔</span>
                <p className="text-gray-300">{text}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </MaxWidthWrapper>
    </div>
  );
};

export default InfoSection;
