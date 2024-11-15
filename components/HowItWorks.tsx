"use client";
import { motion } from "framer-motion";
import MaxWidthWrapper from "./ui/Shared/MaxWidthWrapper";
import Image from "next/image";

const HowItWorksSection = () => {
  return (
    <div className="bg-[#0a0f26]  w-full">
      <MaxWidthWrapper className="py-12  flex flex-col gap-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            What You Get
          </h2>
          <p className="text-center text-sm text-[#8a8fac] mb-10">
            Value Estimated Compared To The Average Return The Benefits Bring
            Our Clients.
          </p>

          <div className="space-y-10">
            {/* Feature 1 */}
            <motion.div
              className="space-y-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ amount: 0.2 }}>
              <h3 className="text-2xl font-bold">
                1. You Will Get 300K Views In Just 90 Days.
              </h3>
              <p className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-semibold">
                $3,000 Value
              </p>
              <p className="text-gray-300">
                Bringing you hundreds if not thousands of warm leads, which will
                translate to at least thousands of dollars in additional
                revenue.
              </p>
              <p className="text-gray-300">
                You will make more than your money back in extra revenue you
                wouldn’t have made without us.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              className="space-y-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ amount: 0.2 }}>
              <h3 className="text-2xl font-bold">
                2. A Hard-Working Creative Team Just For You.
              </h3>
              <p className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-semibold">
                $3,000 Value
              </p>
              <p className="text-gray-300">
                You’ll have a team of dedicated experts—video editors,
                designers, scriptwriters, data analysts, automation specialists,
                and more—all working together to drive success.
              </p>
              <p className="text-gray-300">
                You will waste virtually ZERO time on any type of content
                production.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              className="space-y-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ amount: 0.2 }}>
              <h3 className="text-2xl font-bold">
                3. We Implement The Hybrid Content Funnel.
              </h3>
              <p className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-semibold">
                $5,000 Value
              </p>
              <p className="text-gray-300">
                This is a funnel I’ve spent close to one entire year on
                crafting—and that, after spending +$5,000 on coaches,
                mentorships & business programs.
              </p>
              <p className="text-gray-300">
                It’s a system that leverages both organic content (w/ social
                omnipresence) and paid ads. Here’s a video that goes deeper into
                it.
              </p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div
              className="space-y-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ amount: 0.2 }}>
              <h3 className="text-2xl font-bold">
                4. You Become an Industry Leader.
              </h3>
              <p className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-semibold">
                $2,000 Value
              </p>
              <p className="text-gray-300">
                People will respect you for who you are, and will be ready to
                hand you their money asking for YOUR help - that’s the kind of
                following we build.
              </p>
              <p className="text-gray-300">
                A more engaged audience increases DM response rates, appointment
                show-up rates, closing rates and ultimately gets you more
                converted clients.
              </p>
            </motion.div>
          </div>

          {/* Money Back Guarantee */}
          <div className="mt-10 text-center">
            <h3 className="text-2xl font-bold mb-2">Or Your Money Back</h3>
            <p className="text-[#8a8fac] text-sm">Total Estimated Value</p>
            <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mt-2">
              $13,000
            </p>
          </div>

          {/* Final Note */}
          <p className="text-center text-gray-300 mt-8 text-sm">
            Fortunately, That’s Not Even Close To What We Charge.
            <br />
            Our Prices Vary Depending On The Needs Of Our Every Single Client,
            But They’re Certainly Not Close To The 5-Figure Mark - Not Even Our
            3 Month Retainers.
          </p>
          <div className="mt-10 flex justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-3 px-8 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition-transform">
              Claim Your Call
            </button>
          </div>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            How It Works
          </h2>
          <p className="text-center text-lg mb-10">Simple 4 Step Process</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Section - Steps */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ amount: 0.2 }}>
              {/* Step 1 */}
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  1. Ideation & Scripting ✏️
                </h3>
                <p className="text-gray-300">
                  We do niche research to come up with viral, conversion-driven
                  ideas and give you fill-in scripts.
                </p>
              </div>

              {/* Step 2 */}
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  2. Quick Filming Session 🎥
                </h3>
                <p className="text-gray-300">
                  Record everything in one session a month. We will coach you on
                  how to make the filming setup look as good as possible.
                </p>
              </div>

              {/* Step 3 */}
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  3. We Produce Them 🛠️
                </h3>
                <p className="text-gray-300">
                  Our creative team takes over this entire process, delivering
                  CRISP videos promptly.
                </p>
              </div>

              {/* Step 4 */}
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  4. Social Omnipresence 🌐
                </h3>
                <p className="text-gray-300">
                  We post on EVERY social platform you’re active on. You can
                  even let us handle the posting for you.
                </p>
                <div className="flex space-x-4 mt-3 text-2xl text-blue-500">
                  <i className="fab fa-instagram"></i>
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-youtube"></i>
                  <i className="fab fa-linkedin"></i>
                  <i className="fab fa-tiktok"></i>
                  <i className="fab fa-facebook"></i>
                </div>
              </div>
            </motion.div>

            {/* Right Section - Flowchart */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ amount: 0.2 }}>
              <div className="bg-[#0f1736] p-6 rounded-2xl">
                <p className="text-center mx-auto max-w-fit mb-4  border border-blue-700/30 rounded-2xl px-6 py-2 text-gray-300">
                  Detailed View
                </p>
                <div className="h-96 w-64 border border-gray-700 rounded-2xl">
                  <Image
                    src="/graph.webp"
                    alt="graph"
                    width={500}
                    height={700}
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA Button */}
          <div className="mt-10 flex justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-3 px-8 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition-transform">
              Claim Your Call
            </button>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default HowItWorksSection;
