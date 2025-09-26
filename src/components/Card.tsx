import React, { JSX } from "react";
import Image from "next/image";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { Button, Variant } from "./Button";
import { Badge, Status } from "./Badge";

type AvailableColors = "white" | "green" | "dark" | "grey";
interface CardProps {
  text: string;
  secondText?: string;
  textBg: AvailableColors;
  cardBg: AvailableColors;
  imageURL: string;
  btnProps: {
    btnText: string;
    btnVariant?: Variant;
    btnDisabled?: boolean;
    leftIcon?: JSX.Element;
    rightIcon?: JSX.Element;
    onClick?: () => void;
  };
  badgeProps: {
    label: string;
    status?: Status;
    icon?: JSX.Element;
    title?: string;
  };
}

export const Card = ({
  text,
  secondText,
  textBg,
  cardBg,
  imageURL,
  btnProps,
  badgeProps,
}: CardProps) => {
  const color = cardBg === "dark" ? "white" : "black";

  return (
    <div
      className={`card ${cardBg} w-[400px] p-6 rounded-[1.5rem] grid grid-cols-2 gap-3 justify-between border-[1px] border-b-4`}
    >
      <div className="flex flex-col justify-between">
        <h3
          className={`text-black w-max flex flex-col text-[1rem] font-bold rounded-[.2rem]`}
        >
          <span className={`w-max px-[.2rem] rounded-[.3rem] ${textBg}`}>
            {text}
          </span>
          <span className={`w-max px-[.2rem] rounded-[.3rem] ${textBg}`}>
            {secondText}
          </span>
        </h3>
        <button className="flex gap-4 items-center cursor-pointer">
          <BsArrowUpRightCircleFill className={`text-${color} text-2xl`} />
          <span className={`text-${color}`}>Learn More</span>
        </button>
      </div>
      <div className="my-auto">
        <Image
          src={imageURL}
          width={100}
          height={100}
          alt="Image"
          className="h-[100%] w-[100%] my-auto rounded-[.4rem]"
          objectFit="cover"
        />
      </div>
      <Button
        text={btnProps.btnText}
        variant={btnProps.btnVariant}
        disabled={btnProps.btnDisabled}
        onClick={btnProps.onClick}
        leftIcon={btnProps.leftIcon}
      />
      <Badge
        label={badgeProps.label}
        status={badgeProps.status}
        icon={badgeProps.icon}
        title={badgeProps.title}
      />
    </div>
  );
};
