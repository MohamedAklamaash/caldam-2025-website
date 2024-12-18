import Pricing from "@/components/registration/components/Pricing";
import Link from "next/link";
import React from "react";
import Accomdation from "./_components/Accomdation";
import RegistrationTable from "./_components/RegistrationTable";
import PaymentDetailsTable from "./_components/PaymentDetailsTable";

export const metadata = {
  title: "CALDAM 2025 | Registration",
  description: "Committees for CALDAM 2025.",
};

export default function Page() {
  return (
    <main>
      <div>
        <div className="p-8 lg:p-14">
          <h1 className="mb-8 text-4xl font-semibold">REGISTRATION</h1>
          <div className="mb-4 space-y-3 text-lg font-normal xl:text-lg">
            <h1>
              Developed Country is High Income country as defined in the World
              Bank Classification 2022 (see:{" "}
              <span className=" text-blue-700 ">
                <Link
                  target="_blank"
                  href={`https://datatopics.worldbank.org/world-development-indicators/the-world-by-income-and-region.html`}
                >
                  https://datatopics.worldbank.org/world-development-indicators/the-world-by-income-and-region.html
                </Link>
              </span>
              ). All other countries are considered Developing.
            </h1>
          </div>
          {/* <div className="flex max-lg:flex-col max-lg:space-y-4 lg:items-stretch lg:space-x-4">
            <div className="flex-1">
              <div className="rounded-t-lg border border-bluecolor ">
                <div className="rounded-t-md bg-bluevariants-300 px-4 py-3 text-lg text-white">
                  <h1>Developed Countries</h1>
                </div>
                <div className="flex justify-stretch max-md:flex-col">
                  <Pricing
                    className="flex-1 border max-xl:px-5 max-lg:py-8 max-md:border-b-bluecolor md:border-r-bluecolor lg:py-5 xl:p-8"
                    title="Student (Early)"
                    isEarlyBird={false}
                    regularPrice="₹ 12000"
                    earlyBirdPrice="₹ 12000"
                  />
                  <Pricing
                    className="flex-1 max-xl:px-5 max-lg:py-8 lg:py-5 xl:p-8"
                    title="Faculty (Early)"
                    isEarlyBird={false}
                    regularPrice="₹ 12000"
                    earlyBirdPrice="₹ 12000"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="rounded-t-lg border border-bluevariants-300">
                <div className="rounded-t-md bg-bluevariants-300 px-4 py-3 text-lg text-white">
                  <h1>Developing Countries</h1>
                </div>
                <div className="flex justify-stretch max-md:flex-col">
                  <Pricing
                    className="flex-1 border max-xl:px-5 max-lg:py-8 max-md:border-b-bluecolor md:border-r-bluecolor lg:py-5 xl:p-8"
                    title="Student (Early)"
                    isEarlyBird={false}
                    regularPrice="₹ 24000"
                    earlyBirdPrice="₹ 24000"
                  />
                  <Pricing
                    className="flex-1 max-xl:px-5 max-lg:py-8 lg:py-5 xl:p-8"
                    title="Faculty (Early)"
                    isEarlyBird={false}
                    regularPrice="₹ 24000"
                    earlyBirdPrice="₹ 24000"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-8 flex max-lg:flex-col max-lg:space-y-4 lg:items-stretch lg:space-x-4">
            <div className="flex-1">
              <div className="rounded-b-lg border border-bluecolor ">
                <div className="flex justify-stretch max-md:flex-col">
                  <Pricing
                    className="flex-1 border max-xl:px-5 max-lg:py-8 max-md:border-b-bluecolor md:border-r-bluecolor lg:py-5 xl:p-8"
                    title="Student (Late)"
                    isEarlyBird={false}
                    regularPrice="-"
                    earlyBirdPrice="₹ 8000"
                  />
                  <Pricing
                    className="flex-1 max-xl:px-5 max-lg:py-8 lg:py-5 xl:p-8"
                    title="Faculty (Late)"
                    isEarlyBird={false}
                    regularPrice="-"
                    earlyBirdPrice="₹ 4000"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="rounded-b-lg border border-bluevariants-300">
                <div className="flex justify-stretch max-md:flex-col">
                  <Pricing
                    className="flex-1 border max-xl:px-5 max-lg:py-8 max-md:border-b-bluecolor md:border-r-bluecolor lg:py-5 xl:p-8"
                    title="Student (Late)"
                    isEarlyBird={false}
                    regularPrice="-"
                    earlyBirdPrice="$300"
                  />
                  <Pricing
                    className="flex-1 max-xl:px-5 max-lg:py-8 lg:py-5 xl:p-8"
                    title="Faculty (Late)"
                    isEarlyBird={false}
                    regularPrice="-"
                    earlyBirdPrice="$150"
                  />
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="mb-8 w-full rounded-lg bg-bluevariants-300 px-4 py-3 text-center text-lg font-medium text-white">
            <Link href={""}>Register</Link>
          </div> */}
          <RegistrationTable />
          <div className="space-y-3 text-lg font-normal xl:text-lg">
            <p>
              * All Registered participants (except developing country student
              participants) will be entitled to receive a copy of the
              proceedings.
            </p>
            <p>
              * Early bird registration is till 31 December 2024. Registration
              done on or after 1 January 2025 will be considered late.
            </p>
            <p>* The registration fee is inclusive of 18% GST.</p>
            <p>
              * At least one author of each accepted paper must register (by the
              deadline of the camera ready version) in the appropriate category
              in order for the paper to be included in the conference
              proceedings. If an author has two papers, then one different
              author for every paper must register. Registration (regular or
              student) includes admission to all technical sessions, lunches,
              tea/coffee and banquet dinner.
            </p>
            <p>
              * Registered students of accepted papers also have the option to
              attend the pre-conference school without any additional charges.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-bluecolor p-8 lg:p-14">
        <div className=" flex max-h-fit flex-col  py-4 ">
          <h1 className="mb-8 text-4xl font-semibold uppercase text-white lg:text-4xl">
            Registration Details
          </h1>
          <div className="flex items-center gap-x-3 text-2xl font-medium text-white">
            <div>
              <svg
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="27" cy="27" r="27" fill="#FCA311" />
                <path
                  d="M25.292 40V16.96L27.812 19.48H20.252V14.8H31.124V40H25.292Z"
                  fill="white"
                />
              </svg>
            </div>
            <div>TRANSFER REGISTRATION FEE</div>
          </div>
          <div className="ml-6 border-l-8 border-orange py-4 pl-5">
            <ul className="space-y-2 text-lg font-light leading-tight text-white lg:text-xl">
              <li className="before:content-[' '] relative pl-6 before:absolute before:left-0 before:top-[5px] before:m-auto before:h-2 before:w-2 before:rounded-full before:bg-orange">
                Mode of Registration: NEFT /UPI
              </li>
              <li className="before:content-[' '] relative pl-6 before:absolute before:left-0 before:top-[5px] before:m-auto before:h-2 before:w-2 before:rounded-full before:bg-orange">
                Transfer the respective registration fee as per the above table
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-x-3 text-2xl font-medium text-white">
            <div>
              <svg
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="27" cy="27" r="27" fill="#FCA311" />
                <path
                  d="M17.188 40V36.22L26.908 27.04C27.676 26.344 28.24 25.72 28.6 25.168C28.96 24.616 29.2 24.112 29.32 23.656C29.464 23.2 29.536 22.78 29.536 22.396C29.536 21.388 29.188 20.62 28.492 20.092C27.82 19.54 26.824 19.264 25.504 19.264C24.448 19.264 23.464 19.468 22.552 19.876C21.664 20.284 20.908 20.92 20.284 21.784L16.036 19.048C16.996 17.608 18.34 16.468 20.068 15.628C21.796 14.788 23.788 14.368 26.044 14.368C27.916 14.368 29.548 14.68 30.94 15.304C32.356 15.904 33.448 16.756 34.216 17.86C35.008 18.964 35.404 20.284 35.404 21.82C35.404 22.636 35.296 23.452 35.08 24.268C34.888 25.06 34.48 25.9 33.856 26.788C33.256 27.676 32.368 28.672 31.192 29.776L23.128 37.372L22.012 35.248H36.232V40H17.188Z"
                  fill="white"
                />
              </svg>
            </div>
            <div>SOFT COPIES/DETAILS REQUIRED TO REGISTER</div>
          </div>
          <div className="ml-6 border-l-8 border-orange py-4 pl-5">
            <ul className="space-y-2 text-lg font-light leading-tight text-white lg:text-xl">
              <li className="before:content-[' '] relative pl-6 before:absolute before:left-0 before:top-[5px] before:m-auto before:h-2 before:w-2 before:rounded-full before:bg-orange">
                Payment proof - screenshot/pdf file
              </li>
              <li className="before:content-[' '] relative pl-6 before:absolute before:left-0 before:top-[5px] before:m-auto before:h-2 before:w-2 before:rounded-full before:bg-orange">
                Registration Fee - Transaction Reference Number/ID
              </li>
              <li className="before:content-[' '] relative pl-6 before:absolute before:left-0 before:top-[5px] before:m-auto before:h-2 before:w-2 before:rounded-full before:bg-orange">
                If registering under student Category (both Indian and Foreign)
                an e-copy of a certification from your supervising Guide/HoD
                stating that you are a bonafide student{" "}
              </li>
              <li className="before:content-[' '] relative pl-6 before:absolute before:left-0 before:top-[5px] before:m-auto before:h-2 before:w-2 before:rounded-full before:bg-orange">
                If you are presenting a paper during CALDAM2025 then the title
                of the paper along with paper id{" "}
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-x-3 text-2xl font-medium text-white">
            <div>
              <svg
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="27" cy="27" r="27" fill="#FCA311" />
                <path
                  d="M25.576 40.432C23.824 40.432 22.084 40.204 20.356 39.748C18.628 39.268 17.164 38.596 15.964 37.732L18.232 33.268C19.192 33.964 20.308 34.516 21.58 34.924C22.852 35.332 24.136 35.536 25.432 35.536C26.896 35.536 28.048 35.248 28.888 34.672C29.728 34.096 30.148 33.304 30.148 32.296C30.148 31.336 29.776 30.58 29.032 30.028C28.288 29.476 27.088 29.2 25.432 29.2H22.768V25.348L29.788 17.392L30.436 19.48H17.224V14.8H34.864V18.58L27.88 26.536L24.928 24.844H26.62C29.716 24.844 32.056 25.54 33.64 26.932C35.224 28.324 36.016 30.112 36.016 32.296C36.016 33.712 35.644 35.044 34.9 36.292C34.156 37.516 33.016 38.512 31.48 39.28C29.944 40.048 27.976 40.432 25.576 40.432Z"
                  fill="white"
                />
              </svg>
            </div>
            <div>FINAL STEPS</div>
          </div>
          <div className="ml-6 py-4 pl-5">
            <ul className="space-y-2 text-lg font-light leading-tight text-white lg:text-xl">
              <li className="before:content-[' '] relative pl-6 before:absolute before:left-0 before:top-[5px] before:m-auto before:h-2 before:w-2 before:rounded-full before:bg-orange">
                A registered student of accepted paper must send an e-mail to
                the conference chair for inclusion in the pre-conference school{" "}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=caldam2025@psgtech.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange"
                >
                  caldam2025@psgtech.ac.in
                </a>
              </li>
              <li className="before:content-[' '] relative pl-6 before:absolute before:left-0 before:top-[5px] before:m-auto before:h-2 before:w-2 before:rounded-full before:bg-orange">
                Thank you for CALDAM 2025 conference registration.
              </li>
              <li className="before:content-[' '] relative pl-6 before:absolute before:left-0 before:top-[5px] before:m-auto before:h-2 before:w-2 before:rounded-full before:bg-orange">
                You should be receiving a confirmation mail for the registration
                shortly.
              </li>
            </ul>
          </div>
          <button className=" ml-10 w-[150px] space-x-5 rounded-2xl bg-[#FCA311] px-5  py-3 font-semibold text-black  ">
            <Link
              prefetch
              href={`https://forms.gle/52W1hqM7yqZFbaBLA`}
              target="_blank"
              className=" flex items-center  gap-x-3 text-lg lg:text-xl "
              id="new"
            >
              Register
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.87695 0.864496C2.87695 0.387048 3.264 0 3.74145 0H18.9982V1.72899H3.74145C3.264 1.72899 2.87695 1.34194 2.87695 0.864496Z"
                  fill="#102133"
                />
                <path
                  d="M18.1349 16.1373C17.6579 16.1373 17.2712 15.7507 17.2712 15.2737V8.01086e-05H18.9985V15.2737C18.9985 15.7507 18.6118 16.1373 18.1349 16.1373Z"
                  fill="#102133"
                />
                <path
                  d="M0.534466 18.4649C0.239289 18.1695 0.239289 17.6904 0.534466 17.3949L17.9122 -7.11603e-05L18.9811 1.06993L1.6034 18.4649C1.30822 18.7604 0.829644 18.7604 0.534466 18.4649Z"
                  fill="#102133"
                />
              </svg>
            </Link>
          </button>
          <PaymentDetailsTable />
        </div>
      </div>
      <Accomdation />
    </main>
  );
}
