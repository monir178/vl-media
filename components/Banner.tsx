"use client";

import { motion } from "framer-motion";

import { ArrowRight, PhoneCall } from "lucide-react";
import Link from "next/link";
import MaxWidthWrapper from "./ui/Shared/MaxWidthWrapper";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="w-full  h-screen xl:h-full flex items-center  pt-20 md:pt-32  pb-8 z-10">
      {/* <div className="absolute top-1/3 left-0 w-[500px] 2xl:w-[600px] h-[200px] 2xl:h-[400px] bg-blue-500 opacity-20 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-10"></div>
      <div className="absolute top-1/2 right-0 w-[500px] 2xl:w-[600px] h-[200px] 2xl:h-[400px] bg-blue-500 opacity-20 blur-3xl -z-10 rounded-full pointer-events-none"></div> */}

      <MaxWidthWrapper className="text-center ">
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex gap-4 justify-center items-center mt-8 relative">
          <motion.div
            initial={{ y: -8 }}
            animate={{ y: 0 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              stiffness: 100,
              ease: "easeInOut",
              repeatType: "reverse",
            }}
            className="absolute top-full right-1/4 -translate-x-1/2 -translate-y-1/2 -z-10">
            <Image
              src="/rocket.png"
              alt=""
              width={70}
              height={70}
              className="size-12 "
            />
          </motion.div>

          <h1 className="text-2xl leading-relaxed md:text-3xl lg:text-4xl  2xl:text-5xl font-bold tracking-tight text-gray-300 ">
            We Will Get You{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-black ">
              +300K Views
            </span>{" "}
            In 90 Days <br />
            Only Taking{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-black ">
              3 Hours
            </span>{" "}
            A Month <br />
            <span className="text-xl md:text-2xl">(Or You Don&apos;t Pay)</span>
          </h1>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex  flex-col items-center justify-center mt-12 gap-6 md:gap-10 lg:gap-20">
          <div className="flex items-center gap-4 justify-center my-8 md:my-0">
            <Link href="#">
              <button className="relative inline-flex items-center gap-2 px-6 py-3 font-semibold text-blue-50 bg-gradient-to-tr from-blue-900/30 via-blue-900/70 to-blue-900/30 ring-4 ring-blue-900/20 rounded-full overflow-hidden hover:opacity-90 transition-opacity before:absolute before:top-4 before:left-1/2 before:-translate-x-1/2 before:w-[100px] before:h-[100px] before:rounded-full before:bg-gradient-to-b before:from-blue-50/10 before:blur-xl text-xs md:text-base">
                <PhoneCall className="mr-2 size-4 md:size-6" /> Claim Your Call
              </button>
            </Link>
            <Link href="#">
              <button className="text-xs md:text-base relative inline-flex items-center gap-2 px-6 py-3 font-semibold text-blue-50 bg-gradient-to-r from-purple-700/40 via-purple-800/80 to-purple-700/40 border border-purple-800 ring-4 ring-purple-800/20 rounded-full overflow-hidden hover:opacity-90 transition-opacity before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-[120px] before:h-[120px] before:rounded-full before:bg-gradient-to-b before:from-purple-500/10 before:blur-2xl ">
                Our Work
                <ArrowRight className="mr-2 size-4 md:size-6" />
              </button>
            </Link>
          </div>
          {/* <HeroVideoDialogDemo /> */}
          <motion.iframe
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="rounded-3xl shadow-[0px_0px_100px_3px_rgba(59,130,246,0.4)] w-full md:w-[600px]  lg:w-[900px] h-[200px] md:h-[350px] lg:h-[500px] mx-auto"
            src="https://www.youtube.com/embed/cHBqwj0Ed_I"
            title="copyright free nature videos | No copyright video nature | Download copyright free nature video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen></motion.iframe>
        </motion.div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Banner;
