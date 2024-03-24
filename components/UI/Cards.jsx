import React from "react";

export default function Card({ title, speakers, researchResourceLink }) {
    return (
        <div className=" rounded-xl space-y-6 p-6 h-auto flex flex-col text-black justify-around items-center bg-gradient-to-b from-[#FCA311]  to-[#FFEBCB] ">
            <p className=" font-bold text-xl max-lg:text-lg ">
                {speakers.join(", ")}
            </p>
            <h1 className=" pl-5 text-lg max-lg:text-md">{title}</h1>
            
        </div>
    );
}
