import React from "react";
import Image from "next/image";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

type AvailableColors = "white" | "green" | "dark" | "grey"
interface ButtonProps {
  text: string
  secondText?: string
  textBg: AvailableColors
  cardBg: AvailableColors
  imageURL: string
}

export const Card = ({text, secondText, textBg, cardBg, imageURL}:ButtonProps) => {
  const color = cardBg === "dark" ? "white" : "black"; 

  return (
    <div className={`card ${cardBg} w-[400px] h-[220px] p-6 rounded-[1.5rem] flex gap-3 justify-between border-[1px] border-b-4`}>
      <div className="w-[50%] flex flex-col justify-between">
        <h3 className={`text-black w-max flex flex-col text-[1rem] font-bold rounded-[.2rem]`}>
          <span className={`w-max px-[.2rem] rounded-[.3rem] ${textBg}`}>{text}</span>
          <span className={`w-max px-[.2rem] rounded-[.3rem] ${textBg}`}>{secondText}</span>
        </h3>
        <button className="flex gap-4 items-center cursor-pointer">
          <BsArrowUpRightCircleFill className={`text-${color} text-2xl`} />
          <span className={`text-${color}`}>Learn More</span>
        </button>
      </div>
      <div className="w-[45%] h-[80%] my-auto">
        <Image
          src={imageURL}
          width={100}
          height={100}
          alt="Image"
          className="h-[100%] w-[100%] my-auto rounded-[.4rem]"
          objectFit="cover"
        />
      </div>
    </div>
  );
};
