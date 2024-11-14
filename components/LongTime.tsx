"use client";
import { ReactLenis } from "lenis/react";
import Image from "next/image";
import MaxWidthWrapper from "./ui/Shared/MaxWidthWrapper";
import BlurIn from "./ui/blur-in";
export default function LongTime() {
  return (
    <MaxWidthWrapper className="py-20 ">
      <ReactLenis root>
        <section className="text-white   w-full ">
          <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-6 2xl:gap-20 ">
            <div className="sticky top-0 h-screen flex items-center justify-center -z-10 ">
              <div className="">
                <Image
                  src="/person.png"
                  alt=""
                  fill
                  className="overflow-visible py-44  object-cover opacity-40 xl:opacity-100"
                />
                <BlurIn
                  word="I've Been Doing This A Long Time"
                  className="absolute  bottom-10 left-0 uppercase opacity-40 text-6xl hidden xl:block"
                />
              </div>
            </div>

            <div className="grid space-y-10 xl:py-80 ">
              {/* here todo text */}
              <h1 className=" text-xl md:text-2xl font-semibold lg:text-3xl">
                I just passed my seventh year of creating content on the
                internet.
              </h1>

              <p className="text-gray-400">
                And over that time I have watched people come along with far
                more talent, far more charisma, and far more unfair advantages
                than I had.
              </p>
              <p className="text-gray-400">
                I would witness them sky rocket past me in every perceivable
                metric of success.
              </p>
              <p className="text-gray-400">
                More followers, more money, more brand recognition.
              </p>
              <p className="text-gray-400">And then...</p>
              <h1 className=" text-xl md:text-2xl font-semibold lg:text-3xl">
                Disappear just as quick as they came.
              </h1>
              <p className="text-gray-400">
                They followed the traditional advice of “pick a narrowly defined
                niche, and stick to it.”
              </p>
              <p className="text-gray-400">
                And that rule drove them to the point where they built an
                audience of people who had no idea who they were, didn’t care
                for them, and were never going to buy their products.
              </p>
              <h1 className=" text-xl md:text-2xl font-semibold lg:text-3xl">
                And so they quit.
              </h1>
              <p className="text-gray-400">
                I want you to avoid that… Obviously.
              </p>
              <p className="text-gray-400">
                But I tell you this from experience because a few years ago,
                that was me.
              </p>
              <p className="text-gray-400">
                I had an audience of people who had no idea who I was and had no
                interest in my brand beyond the ultra-specific thing they
                followed me for.
              </p>
              <p className="font-semibold">
                Nowadays, I have a brand with real, genuine leverage.
              </p>
              <h1 className=" text-xl md:text-2xl font-semibold lg:text-3xl">
                The kind of leverage that most niche creators only dream of.
              </h1>
              <p className="text-gray-400">
                But this method hasn&apos;t just helped me…
              </p>
            </div>
          </div>
        </section>
      </ReactLenis>
    </MaxWidthWrapper>
  );
}
