"use client";

import { useIntersection } from "@/components/context/useIntersection";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const PreTimeline = () => {
  const TIMELINE_LETTERS = "TIMELINE".split("").reverse();
  const DAYS = ["DAY-0", "DAY-1", "DAY-2"].map((t) => t.split(""));

  const [currentDay, setCurrentDay] = useState(0);

  const dayZeroTrigger = useRef(null);
  const dayZero = useIntersection(dayZeroTrigger, "0px");

  const dayOneTrigger = useRef(null);
  const dayOne = useIntersection(dayOneTrigger, "0px");

  const dayTwoTrigger = useRef(null);
  const dayTwo = useIntersection(dayTwoTrigger, "0px");

  useEffect(() => {
    if (dayZero) {
      setCurrentDay(0);
    }

    if (dayOne) {
      setCurrentDay(1);
    }

    if (dayTwo) {
      setCurrentDay(2);
    }
  }, [dayOne, dayTwo, dayZero]);

  return (
    <AnimatePresence>
      <div className="flex max-lg:flex-col p-8 lg:p-14 h-[500px] lg:h-[700px]">
        <div className="hidden lg:block">
          <motion.div
            variants={{
              initial: {},
              animate: {
                transition: {
                  staggerChildren: 0.09,
                },
              },
            }}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="h-full max-w-fit flex flex-col items-center justify-center -space-y-6 text-bluecolor"
          >
            {TIMELINE_LETTERS.map((t, index) => (
              <div key={index} className="overflow-hidden">
                <motion.h1
                  variants={{
                    initial: {
                      translateY: 200,
                      rotateZ: "-90deg",
                    },
                    animate: {
                      translateY: 0,
                      rotateZ: "-90deg",
                      transition: {
                        ease: [0.47, 0.0, 0.745, 0.715],
                      },
                    },
                  }}
                  className="text-8xl -rotate-90 origin-center max-w-fit font-bold px-5"
                >
                  {t}
                </motion.h1>
              </div>
            ))}
          </motion.div>
        </div>
        <div className="lg:hidden py-4 text-bluecolor">
          <h1 className="text-4xl font-bold">TIMELINE</h1>
        </div>
        <div className="w-full overflow-y-auto text-white">
          <div className="flex flex-row items-stretch justify-between">
            <div className="flex flex-col items-end flex-1 px-5 max-lg:hidden">
              <div className="w-60 flex flex-col -space-y-2">
                <div className="bg-orange rounded-lg px-4 py-2 w-fit ml-3 z-10 text-black">
                  <p className="text-sm">7:30PM - 9:30PM</p>
                </div>
                <div className="bg-bluecolor rounded-md px-4 py-2">
                  <p className="text-2xl">Welcome Dinner</p>
                </div>
              </div>
              <div className="w-60 flex flex-col -space-y-2 mt-20">
                <div className="bg-orange rounded-lg px-4 py-2 w-fit ml-3 z-10 text-black">
                  <p className="text-sm">7:30PM - 9:30PM</p>
                </div>
                <div className="bg-bluecolor rounded-md px-4 py-2">
                  <p className="text-2xl">Welcome Dinner</p>
                </div>
              </div>
            </div>
            <div className="w-1 bg-bluecolor rounded-full"></div>
            <div className="flex flex-col flex-1 px-5">
              <div
                className="w-60 flex flex-col -space-y-2 mt-20 relative"
                ref={dayZeroTrigger}
              >
                <div className="bg-orange rounded-lg px-4 py-2 w-fit ml-3 z-10 text-black">
                  <p className="text-sm">7:30PM - 9:30PM</p>
                </div>
                <div className="bg-bluecolor rounded-md px-4 py-2">
                  <p className="text-2xl">Welcome Dinner</p>
                </div>
              </div>
              <div className="w-60 flex flex-col -space-y-2 mt-20">
                <div className="bg-orange rounded-lg px-4 py-2 w-fit ml-3 z-10 text-black">
                  <p className="text-sm">7:30PM - 9:30PM</p>
                </div>
                <div className="bg-bluecolor rounded-md px-4 py-2">
                  <p className="text-2xl">Welcome Dinner</p>
                </div>
              </div>
              <div className="w-60 flex flex-col -space-y-2 mt-20">
                <div className="bg-orange rounded-lg px-4 py-2 w-fit ml-3 z-10 text-black">
                  <p className="text-sm">7:30PM - 9:30PM</p>
                </div>
                <div className="bg-bluecolor rounded-md px-4 py-2">
                  <p className="text-2xl">Welcome Dinner</p>
                </div>
              </div>
              <div className="w-60 flex flex-col -space-y-2 mt-20">
                <div className="bg-orange rounded-lg px-4 py-2 w-fit ml-3 z-10 text-black">
                  <p className="text-sm">7:30PM - 9:30PM</p>
                </div>
                <div className="bg-bluecolor rounded-md px-4 py-2">
                  <p className="text-2xl">Welcome Dinner</p>
                </div>
              </div>
              <div className="w-60 flex flex-col -space-y-2 mt-20">
                <div className="bg-orange rounded-lg px-4 py-2 w-fit ml-3 z-10 text-black">
                  <p className="text-sm">7:30PM - 9:30PM</p>
                </div>
                <div className="bg-bluecolor rounded-md px-4 py-2">
                  <p className="text-2xl">Welcome Dinner</p>
                </div>
              </div>
              <div className="w-60 flex flex-col -space-y-2 mt-20">
                <div className="bg-orange rounded-lg px-4 py-2 w-fit ml-3 z-10 text-black">
                  <p className="text-sm">7:30PM - 9:30PM</p>
                </div>
                <div className="bg-bluecolor rounded-md px-4 py-2">
                  <p className="text-2xl">Welcome Dinner</p>
                </div>
              </div>
              <div className="w-60 flex flex-col -space-y-2 mt-20">
                <div className="bg-orange rounded-lg px-4 py-2 w-fit ml-3 z-10 text-black">
                  <p className="text-sm">7:30PM - 9:30PM</p>
                </div>
                <div className="bg-bluecolor rounded-md px-4 py-2">
                  <p className="text-2xl">Welcome Dinner</p>
                </div>
              </div>
              <div
                className="w-60 flex flex-col -space-y-2 mt-20"
                ref={dayOneTrigger}
              >
                <div className="bg-orange rounded-lg px-4 py-2 w-fit ml-3 z-10 text-black">
                  <p className="text-sm">7:30PM - 9:30PM</p>
                </div>
                <div className="bg-bluecolor rounded-md px-4 py-2">
                  <p className="text-2xl">Welcome Dinner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-lg:hidden">
          <motion.div
            variants={{
              initial: {},
              animate: {
                transition: {
                  staggerChildren: 0.09,
                },
              },
            }}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="h-full max-w-fit flex flex-col items-center justify-center -space-y-6 text-bluecolor"
          >
            {DAYS[currentDay].map((t, index) => (
              <div key={index} className="overflow-hidden">
                <motion.h1
                  variants={{
                    initial: {
                      translateY: 200,
                      rotateZ: "90deg",
                    },
                    animate: {
                      translateY: 0,
                      rotateZ: "90deg",
                      transition: {
                        ease: [0.47, 0.0, 0.745, 0.715],
                      },
                    },
                  }}
                  className="text-8xl origin-center max-w-fit font-bold px-5"
                >
                  {t}
                </motion.h1>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default PreTimeline;