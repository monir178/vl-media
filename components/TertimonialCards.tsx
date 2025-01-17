"use client";

import Image from "next/image";
import MaxWidthWrapper from "./ui/Shared/MaxWidthWrapper";

import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
const testimonials = [
  {
    id: 1,
    image: "/test1.webp",
    followersFrom: "2.5K",
    followersTo: "175K",
    timePeriod: "under 3 months",
    quote:
      "This was probably the best investment of my entire life so far. I can't thank you enough! You have changed my life. You have changed my life.",
    name: "STEVEN ZUBER",
    occupation: "Filmmaker / Content Creator",
    community: "173K community",
    handle: "@stevenzuber",
  },
  {
    id: 2,
    image: "/test2.webp",
    followersFrom: "3K",
    followersTo: "800K",
    timePeriod: "under 2 months",
    quote:
      "I have already made my money back through implementing all my learnings. I can't thank you enough! You have changed my life. ",
    name: "BEN HARGREAVES",
    occupation: "Content Photographer",
    community: "800K community",
    handle: "@lifethroughphotos_",
  },
  {
    id: 3,
    image: "/test3.webp",
    followersFrom: "€0",
    followersTo: "€10K+",
    timePeriod: "per month",
    quote:
      "This is my number one recommendation for people who want to build a personal brand online.I can't thank you enough! You have changed my life.",
    name: "GEORGE SIDIROPOULOS",
    occupation: "Content Creator / Artist",
    community: "89.3K community",
    handle: "@gsidirops",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

const TestimonialCards = () => {
  return (
    <div id="testimonial">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-600 to-blue-600 opacity-30 blur-2xl rounded h-[70px] w-[350px] mx-auto -top-3"></div>

        <h1 className="relative uppercase text-3xl md:text-4xl font-bold text-center mb-4 font-sans z-10">
          Testimonial
        </h1>
      </div>
      <MaxWidthWrapper className="grid grid-cols-1 pb-12 md:pb-32 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 ">
        {testimonials.map((testimonial, index) => (
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.3,
              stiffness: 300,
              ease: "easeOut",
            }}
            key={testimonial.id}
            className="bg-gray-950  rounded-2xl text-white  shadow-lg overflow-hidden flex flex-col"
          >
            <div className="relative overflow-hidden">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={500}
                height={500}
                className="w-full h-72  object-cover rounded-t-2xl "
              />{" "}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-4 flex justify-between w-full items-center">
                <div>
                  <p className="uppercase  leading-[1] font-semibold">
                    From <br />
                    <span className="text-orange-500 font-black text-3xl">
                      {testimonial.followersFrom}
                    </span>{" "}
                    <br />
                    Followers
                  </p>
                </div>
                <BsArrowRight className="w-[100px] h-[50px] " />
                <div>
                  <p className="uppercase  leading-[1] font-semibold text-right">
                    To over <br />
                    <span className="text-orange-500 font-black text-3xl">
                      {testimonial.followersTo}
                    </span>{" "}
                    <br />
                    Followers In <br /> {testimonial.timePeriod}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="p-6 relative">
                <div className="absolute top-6 left-0 w-[100px] h-[50px] bg-sky-400 opacity-40 blur-2xl rounded-full pointer-events-none" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  viewBox="0 0 52 43"
                  fill="none"
                  className="quotation-icon size-12 pb-4"
                >
                  <path
                    d="M9.45598 12.7145L9.45595 12.7144L9.45235 12.7198C7.89073 15.0271 7.0849 17.7626 7.14602 20.5477C7.04323 22.0093 7.42241 23.4645 8.22575 24.6903C8.49788 25.1221 8.87147 25.4808 9.31401 25.7351C9.75806 25.9904 10.2579 26.1327 10.7698 26.1497L10.7959 26.1506L10.8218 26.1487C11.6681 26.0887 12.4978 25.8839 13.2748 25.5434C14.3786 25.1309 15.5401 24.8936 16.7172 24.84C17.7334 24.8427 18.7389 25.0475 19.6752 25.4425C20.615 25.8391 21.4661 26.4194 22.1786 27.1493L22.1849 27.1556L22.1913 27.1618C22.9711 27.9057 23.5863 28.8049 23.9972 29.8013C24.4081 30.7977 24.6054 31.8692 24.5766 32.9466L24.576 32.9685L24.5774 32.9904C24.6461 34.1192 24.4681 35.2495 24.056 36.3027C23.6446 37.3538 23.0096 38.303 22.1952 39.0845C20.043 41.0389 17.2303 42.1057 14.3232 42.07C12.4997 42.0453 10.7027 41.6306 9.05275 40.8537C7.40283 40.0769 5.93827 38.956 4.75747 37.5662L4.7503 37.5578L4.74276 37.5497C1.91105 34.5014 0.38968 30.463 0.506236 26.304L0.506432 26.304V26.29C0.506432 19.9689 2.85981 14.1993 7.60543 8.96741C10.6511 5.66484 15.0342 2.90986 20.7864 0.720411V3.2495C15.3112 6.60543 11.5132 9.75722 9.45598 12.7145ZM36.196 12.7145L36.1959 12.7144L36.1924 12.7198C34.6307 15.0271 33.8249 17.7626 33.886 20.5477C33.7832 22.0091 34.1623 23.4642 34.9655 24.6899C35.237 25.1225 35.6105 25.4818 36.0533 25.7363C36.4978 25.9918 36.9984 26.1338 37.5108 26.1498L37.5369 26.1506L37.5628 26.1487C38.4084 26.087 39.2373 25.8823 40.0144 25.5435C41.1138 25.1324 42.2706 24.8952 43.4431 24.8402C45.5564 24.8839 47.5679 25.7582 49.0416 27.2742C50.5191 28.794 51.3367 30.8357 51.3165 32.9552L51.3163 32.9724L51.3173 32.9895C51.3841 34.1185 51.2053 35.2484 50.7931 36.3015C50.3819 37.3522 49.7482 38.3014 48.9356 39.084C46.7654 41.0386 43.9352 42.0985 41.0147 42.0501L41.0129 42.05C39.1893 42.0265 37.3919 41.6124 35.7419 40.8355C34.0919 40.0587 32.6276 38.9371 31.4477 37.5465L31.4407 37.5383L31.4334 37.5304C28.6135 34.4838 27.0996 30.4537 27.2162 26.3041L27.2164 26.3041V26.29C27.2164 19.9691 29.5696 14.1998 34.3148 8.96806C37.38 5.66501 41.767 2.91016 47.5064 0.720951V3.24985C42.0442 6.60581 38.253 9.75753 36.196 12.7145Z"
                    stroke="currentColor"
                  ></path>
                </svg>
                <blockquote className="italic text-gray-200 mb-4">
                  &apos;{testimonial.quote}&apos;
                </blockquote>
              </div>
              <div className="flex gap-4 flex-col xl:flex-row  justify-between  p-6 items-center ">
                <div>
                  {" "}
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">
                    {testimonial.occupation}
                  </p>
                </div>
                <p className="text-sm text-gray-300 border border-white/30 rounded-2xl py-1  px-3 font-bold">
                  {testimonial.community}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </MaxWidthWrapper>
    </div>
  );
};
// ok
export default TestimonialCards;
