// US-W3 -CardComponent
import Image from "next/image";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { CardProps } from "@/interfaces/main";
import { Button } from "./Button";
import { Badge } from "./Badge";
import { AiFillCheckCircle, AiOutlineClose } from "react-icons/ai";
import { CiCircleInfo, CiWarning } from "react-icons/ci";
import { FaRegCircleCheck } from "react-icons/fa6";
import { PiWarningDiamondFill } from "react-icons/pi";
import { showConfirmAlert, showErrorAlert, showInfoAlert, showSuccessAlert } from "@/helpers/utils";

export const arrayCards: CardProps[] = [
  {
    text: "Search Engine",
    secondText: "Optimization",
    textBg: "green",
    cardBg: "grey",
    imageURL: "/image-1.png",
    btnProps: {
      text: "Info Product",
      variant: "secondary",
      disabled: true,
    },
    badgeProps: {
      label: "Out of stock",
      status: "warning",
      icon: <CiWarning className="text-[22px]" />,
      title: "Hurry, there are only a few references left!",
    },
  },
  {
    text: "Pay-per click ",
    secondText: "advertising",
    textBg: "white",
    cardBg: "green",
    imageURL: "/image-2.png",
    btnProps: {
      text: "Save Product",
      onClick: showConfirmAlert,
      leftIcon: <AiFillCheckCircle />,
    },
    badgeProps: {
      label: "Notify me",
      status: "info",
      icon: <CiCircleInfo className="text-[22px]" />,
      title: "Product posted the date:",
    },
  },
  {
    text: "Social Media",
    secondText: "Marketing",
    textBg: "white",
    cardBg: "dark",
    imageURL: "/image-3.png",
    btnProps: {
      text: "View Product",
      onClick: showInfoAlert,
    },
    badgeProps: {
      label: "Notify me",
      status: "neutral",
      title: "Not Available",
    },
  },
  {
    text: "Email",
    secondText: "Marketing",
    textBg: "green",
    cardBg: "grey",
    imageURL: "/image-6.png",
    btnProps: {
      text: "Save Product",
      variant: "danger",
      disabled: true,
    },
    badgeProps: {
      label: "Notify me",
      status: "success",
      icon: <FaRegCircleCheck className="text-[22px]" />,
      title: "Product added successfully",
    },
  },
  {
    text: "Content",
    secondText: "Creation",
    textBg: "white",
    cardBg: "green",
    imageURL: "/image-5.png",
    btnProps: {
      text: "Delete Product",
      variant: "danger",
      onClick: showErrorAlert,
      leftIcon: <AiOutlineClose />,
    },
    badgeProps: {
      label: "View Info",
      status: "info",
      icon: <CiCircleInfo className="text-[22px]" />,
      title: "Product posted the date:",
    },
  },
  {
    text: "Analytics And",
    secondText: "Tracking",
    textBg: "green",
    cardBg: "dark",
    imageURL: "/image-4.png",
    btnProps: {
      text: "Save Product",
      variant: "secondary",
      onClick: showSuccessAlert,
    },
    badgeProps: {
      label: "No references",
      status: "error",
      icon: <PiWarningDiamondFill />,
      title: "Error adding the product!",
    },
  },
];

export type AvailableColors = "white" | "green" | "dark" | "grey";
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
      className={`card ${cardBg} w-[400px] h-full p-6 rounded-[1.5rem] grid grid-cols-2 gap-3 justify-between border-[1px] border-b-4`}
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
          className="h-[150px] w-[100%] my-auto rounded-[.4rem]"
          objectFit="cover"
        />
      </div>
      <Button
        text={btnProps.text}
        variant={btnProps.variant}
        disabled={btnProps.disabled}
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
