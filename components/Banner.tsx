"use client";

import { motion } from "framer-motion";

import { ArrowRight, PhoneCall } from "lucide-react";
import Link from "next/link";
import MaxWidthWrapper from "./ui/Shared/MaxWidthWrapper";

const Banner = () => {
  return (
    <div className="w-full  h-full  pt-20 md:pt-32  pb-16">
      {/* <div className="absolute top-1/3 left-0 w-[500px] 2xl:w-[600px] h-[200px] 2xl:h-[400px] bg-blue-500 opacity-20 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-10"></div>
      <div className="absolute top-1/2 right-0 w-[500px] 2xl:w-[600px] h-[200px] 2xl:h-[400px] bg-blue-500 opacity-20 blur-3xl -z-10 rounded-full pointer-events-none"></div> */}
      <MaxWidthWrapper className="text-center">
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex gap-4 justify-center items-center mt-8">
          <h1 className="text-2xl  md:text-3xl lg:text-4xl  2xl:text-5xl font-bold tracking-tight text-gray-300 ">
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
        <div className="flex flex-col items-center justify-center mt-12 gap-20">
          <div className="flex items-center gap-4 justify-center ">
            <Link href="#">
              <motion.button
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="relative inline-flex items-center gap-2 px-6 py-3 font-semibold text-blue-50 bg-gradient-to-tr from-blue-900/30 via-blue-900/70 to-blue-900/30 ring-4 ring-blue-900/20 rounded-full overflow-hidden hover:opacity-90 transition-opacity before:absolute before:top-4 before:left-1/2 before:-translate-x-1/2 before:w-[100px] before:h-[100px] before:rounded-full before:bg-gradient-to-b before:from-blue-50/10 before:blur-xl text-xs md:text-base">
                <PhoneCall className="mr-2 size-4 md:size-6" /> Claim Your Call
              </motion.button>
            </Link>
            <Link href="#">
              <motion.button
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-xs md:text-base relative inline-flex items-center gap-2 px-6 py-3 font-semibold text-blue-50 bg-gradient-to-r from-purple-700/40 via-purple-800/80 to-purple-700/40 border border-purple-800 ring-4 ring-purple-800/20 rounded-full overflow-hidden hover:opacity-90 transition-opacity before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-[120px] before:h-[120px] before:rounded-full before:bg-gradient-to-b before:from-purple-500/10 before:blur-2xl ">
                Our Work
                <ArrowRight className="mr-2 size-4 md:size-6" />
              </motion.button>
            </Link>
          </div>
          {/* <HeroVideoDialogDemo /> */}
          <motion.iframe
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="rounded-3xl shadow-[0px_0px_70px_3px_rgba(59,130,246,0.3)] w-full max-w-4xl h-[200px] md:h-[350px] lg:h-[500px] mx-auto"
            src="https://www.youtube.com/embed/cHBqwj0Ed_I"
            title="copyright free nature videos | No copyright video nature | Download copyright free nature video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen></motion.iframe>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Banner;

// export function HeroVideoDialogDemo() {
//   return (
//     <div
//       id="home"
//       className="relative w-full md:w-[500px] lg:w-[700px] mx-auto mt-20  rounded-3xl  ">
//       {/* Background Circles */}
//       <div className="absolute inset-0 -top-20 flex items-center justify-center z-20">
//         <div className="rounded-full w-[180px] h-[180px] md:w-[280px] md:h-[280px] lg:w-[370px] lg:h-[370px]  shadow-2xl shadow-blue-500"></div>
//       </div>
//       <div className="absolute inset-0  -top-24 flex items-center justify-center z-10">
//         <div className="rounded-full w-[210px] h-[210px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] shadow-  shadow-blue-500 "></div>
//       </div>

//       {/* Hero Video Dialog */}
//       {/* <div className="relative z-20 p-4 border border-gray-400 bg-[#744bb7] rounded-3xl ">
//         <HeroVideoDialog
//           animationStyle="top-in-bottom-out"
//           videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
//           thumbnailSrc={thumbnail.src}
//           thumbnailAlt="Hero Video"
//         />

//         <motion.div
//           animate={{
//             y: [0, -10, 0],
//           }}
//           transition={{
//             duration: 2,
//             repeat: Infinity,
//             repeatType: "reverse",
//             ease: "easeInOut",
//           }}
//           className="hidden xl:flex absolute top-0 -right-60  items-center gap-2 bg-white py-3 px-6 rounded-xl shadow-lg border">
//           <Image
//             src="/icon1.png"
//             alt="Icon"
//             width={100}
//             height={100}
//             className="size-6"
//           />
//           <p className="text-sm">
//             Pre-Approval <br /> <span className="font-semibold">Services</span>
//           </p>
//         </motion.div>
//         <motion.div
//           animate={{
//             y: [0, -10, 0],
//           }}
//           transition={{
//             duration: 2,
//             repeat: Infinity,
//             repeatType: "reverse",
//             ease: "easeInOut",
//           }}
//           className="hidden xl:flex absolute top-1/2 -left-60  items-center gap-2 bg-white py-3 px-6 rounded-xl shadow-lg border">
//           <Image
//             src="/icon2.png"
//             alt="Icon"
//             width={100}
//             height={100}
//             className="size-6"
//           />
//           <p className="text-sm">
//             Pre-Approval <br /> <span className="font-semibold">Services</span>
//           </p>
//         </motion.div>
//       </div> */}
//     </div>
//   );
// }
