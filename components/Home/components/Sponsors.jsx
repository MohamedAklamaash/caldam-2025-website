import sponsorsData from "@/constants/sponsors.json";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Link from "next/link";

const Sponsors = () => {
  return (
    <div className="bg-white p-8 lg:p-14">
      <h1 className="mb-10 text-4xl font-bold uppercase text-bluecolor">
        Sponsors
      </h1>
      <>
        {/*<Marquee*/}
        {/*  className="flex flex-row overflow-x-auto text-white"*/}
        {/*  autoFill={true}*/}
        {/*  pauseOnClick={true}*/}
        {/*  pauseOnHover={true}*/}
        {/*  direction="right"*/}
        {/*>*/}
        <div className="flex justify-evenly items-center">
          {sponsorsData.map((d, index) => (
            <div
              key={index}
              className="mx-2 aspect-square w-64 rounded-lg border-2 border-bluecolor p-8 max-lg:w-60"
            >
              <Link href={d.companyPageURL} target="_blank">
                <Image
                  src={d.imageURL}
                  alt={d.organizationName}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-full w-full object-contain"
                />
              </Link>
            </div>
          ))}
          {/*</Marquee>*/}
          {/* <div className="flex items-center justify-center">
            <h1 className="text-2xl font-semibold">TBA</h1>
          </div> */}
        </div>
      </>
      <div className=" flex items-center justify-evenly max-lg:flex-col max-lg:space-y-4 ">
        {/*{sponsorsData.map((d, index) => (
        <div
          key={index}
          className="mx-2 flex items-center justify-center aspect-square w-64 rounded-lg border-2 border-bluecolor p-8 max-lg:w-60"
        >
          <h1 className=" text-center text-xl font-semibold text-black lg:text-2xl ">
            TBA
          </h1>
        </div>
      ))} */}
        {/*<p className="text-2xl font-semibold">TBA</p>*/}
      </div>
    </div>
  );
};

export default Sponsors;
