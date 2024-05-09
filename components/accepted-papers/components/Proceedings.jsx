import React from "react";
import Banner from "@/assets/banner.png";
import Image from "next/image";
import Link from "next/link";
export default function Proceedings() {
  return (
    <div>
      <div className="flex justify-start">
        <div className="px-3 pb-4 pt-10 text-3xl font-bold text-black">
          <h1>PROCEEDINGS</h1>
        </div>
      </div>
      <div className=" max-lg:text-md px-4 text-xl font-semibold ">
        Click on the banner below to access the proceedings of the conference.
      </div>
      <div className=" w-full px-4 py-4">
        <Link
          prefetch
          target="_blank"
          rel="external"
          // href="https://link.springer.com/book/10.1007/978-3-031-52213-0"
          href="/" //temporary
        >
          {/* <Image src={Banner} alt="Banner" className=" w-full  max-md:h-48" /> */}  
          <div className="flex justify-center items-center aspect-square lg:h-[5vw] bg-bluecolor w-full " >
            <div className="font-semibold text-2xl text-white">
              TBA
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
