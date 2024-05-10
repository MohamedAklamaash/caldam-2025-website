"use client";

import React from "react";
import { BiSolidNavigation } from "react-icons/bi";
import { FaCalendar } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import BackgroundImage from "@/public/image2.png";
import TextContraction from "@/components/Home/components/TextContraction";
import { HiSpeakerWave } from "react-icons/hi2";
import speak from "@/components/actions/speak";

function Landing() {
  return (
    <div
      className="min-h-fit bg-cover bg-center lg:bg-left-top"
      style={{
        backgroundImage: `url(${BackgroundImage.src})`,
      }}
    >
      <AnimatePresence>
        <div className="min-h-fit w-full bg-gradient-to-r from-white to-transparent p-8 transition-all max-lg:from-20% lg:via-white lg:p-14">
          <motion.div
            variants={{
              initial: {},
              animate: {
                transition: {
                  staggerChildren: 0.3,
                },
              },
            }}
            initial="initial"
            animate="animate"
            className="  mb-8 lg:flex lg:flex-row lg:items-stretch lg:justify-start lg:space-x-14"
          >
            <div className=" overflow-hidden lg:flex text-5xl lg:text-6xl lg:space-x-4 ">
              <motion.h1
                variants={{
                  initial: { translateX: -500, opacity: 0 },
                  animate: {
                    translateX: 0,
                    opacity: 1,
                    transition: {
                      ease: [0.47, 0.0, 0.745, 0.715],
                    },
                    transitionDuration: 0.1,
                  },
                }}
              >
                Indo-Spanish
              </motion.h1>
              <motion.h1
              variants={{
                initial:{
                  translateY:-400,opacity:0
                },
                animate: {
                  translateY: 0,
                  opacity: 1,
                  transition: {
                    ease: [0.47, 0.0, 0.745, 0.715],
                  },
                  transitionDuration: 0.1,
                },
              }}
              >
                CALDAM
              </motion.h1>
              <motion.h1
                variants={{
                  initial: { translateX: 500, opacity: 0 },
                  animate: {
                    translateX: 0,
                    opacity: 1,
                    transition: {
                      ease: [0.47, 0.0, 0.745, 0.715],
                    },
                    transitionDuration: 0.3,
                  },
                }}
                className=" lg:ml-3 "
              >
                {" "}
                Pre-Conference School
              </motion.h1>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-8 flex font-medium max-lg:flex-col max-lg:justify-center max-lg:space-y-4 lg:mb-14 lg:flex-row lg:items-center lg:space-x-10"
          >
            <div className="flex flex-row items-center text-2xl">
              <FaCalendar className="mr-4 inline text-2xl lg:text-4xl" />
              <div className="inline">
                <p>February 10 - 11 </p>
                <p className="text-sm">2025</p>
              </div>
            </div>
            <div className="hidden h-9 w-1 rounded-full bg-bluecolor lg:block"></div>
            <div className="flex flex-row items-center text-2xl">
              <BiSolidNavigation className="mr-4 inline text-2xl lg:text-4xl" />
              <div className="inline">
                <p>PSG College of Technology </p>
                <p className="text-sm">Coimbatore, Tamilnadu, India</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-14 hidden max-w-[65%] font-medium lg:block lg:text-base xl:text-xl"
          >
            <TextContraction
              className="mb-8 font-medium max-lg:hidden"
              contentStart="The school is being organized for PhD students and teachers in computer science and discrete mathematics during February 10 - 11, 2025 by Department of Applied Mathematics and Computational Sciences, PSG College of Technology, India. The school is aimed at fulfilling two purposes"
              contentRemaining="(i) as a pre-conference school for CALDAM 2025, (ii) as an Indo-Spanish School"
            />
          </motion.div>

          <TextContraction
            className="mb-8 font-medium lg:hidden"
            contentStart="The school is being organized for PhD students and teachers in computer science and discrete mathematics during February 10 - 11, 2025 by Department of Applied Mathematics and Computational Sciences, PSG College of Technology, India. The school is aimed at fulfilling two purposes"
            contentRemaining="(i) as a pre-conference school for CALDAM 2025, (ii) as an Indo-Spanish School"
          />
        </div>
      </AnimatePresence>
    </div>
  );
}

export default Landing;
