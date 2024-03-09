"use client"
import React from "react";
import preConfSchoolConstants from "@/constants/preSchoolConstants.json";
import linkIcon from "@/assets/link.svg";
import Image from "next/image";

export default function PreConferenceSchoolLinksComponent() {
    return (
        <div className=" mt-[10%] mb-[3%] flex flex-col items-center justify-center">
            <div className="mb-4">
                <h1 className="text-5xl font-bold">UPDATES</h1>
            </div>
            <div className="flex flex-col items-center">
                {preConfSchoolConstants.map((preConfSchool, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between w-full p-4 mb-4 bg-white border border-gray-300 rounded-md shadow-md"
                    >
                        <div className="w-12 h-12 bg-headingColor rounded-full" />
                        <div className="flex items-center flex-1 ml-4">
                            <h2 className="mr-4">{preConfSchool.preConferenceSchoolEventName}</h2>
                            <Image
                                src={linkIcon}
                                alt="Link Icon"
                                className="w-8 h-8 cursor-pointer"
                                onClick={() => {
                                    const anchorElement = document.createElement("a");
                                    anchorElement.href = preConfSchool.navigateTo;
                                    anchorElement.target = "_blank";
                                    anchorElement.click();
                                }}
                            />
                            {!preConfSchool.isOpen ? (
                                <button className="bg-red px-4 py-2 bg-red-500 text-white rounded-md ml-4">Closed</button>
                            ) : (
                                ""
                            )}
                            <span className="ml-4">Starts On {preConfSchool.StartDate}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
