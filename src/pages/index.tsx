// Import React hooks (currently commented out)
// import { useState } from "react";

// Import utility functions and data arrays from helpers
import {
  arrayProducts,
  arrayUsers,
  handleNotification,
  showConfirmAlert,
  showErrorAlert,
  showInfoAlert,
  showSuccessAlert,
} from "@/helpers/utils";

// Import Next.js Image component for optimized image rendering
import Image from "next/image";

// Import custom components for the page layout
import NavBar from "@/components/NavBar";
import Cars from "@/components/Cars";
import Footer from "@/components/Footer";
import ProductList from "@/components/ProductList";
import Login from "@/components/Login";
import { CardProps } from "@/components/Card";

// Import toast notification container for displaying notifications
import { ToastContainer } from "react-toastify";
import { AiFillCheckCircle, AiOutlineClose } from "react-icons/ai";
import { CiCircleInfo, CiWarning } from "react-icons/ci";
import { FaRegCircleCheck } from "react-icons/fa6";
import { PiWarningDiamondFill } from "react-icons/pi";

// Import custom Card component for displaying service cards
import { Card } from "@/components/Card";

// Main Home component - the entry point for the e-commerce homepage
export default function Home() {
  // Default fallback image URL for products without images
  const defaultImage: string =
    "https://images.unsplash.com/photo-1656543802898-41c8c46683a7?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  // Notification handler functions for different types of messages

  // Function to display error notification
  const errorNotification = () => {
    handleNotification(
      "Error, no fue posible acceder al perfil",
      "error",
      6000
    );
  };

  // Function to display success notification
  const successNotification = () => {
    handleNotification("Perfil actualizado con exito!", "success", 4000);
  };

  // Function to display warning notification
  const warningNotification = () => {
    handleNotification(
      "Cuidado!, Se estan agotando los productos",
      "warning",
      6000
    );
  };

  // Function to display info notification
  const infoNotification = () => {
    handleNotification(
      "Tienes mensajes sin leer en tu bandeja de entrada",
      "info"
    );
  };

  // Array Cards
  const arrayCards: CardProps[] = [
    {
      text: "Search Engine",
      secondText: "Optimization",
      textBg: "green",
      cardBg: "grey",
      imageURL: "/image-1.png",
      btnProps: {
        btnText: "Info Product",
        btnVariant: "secondary",
        btnDisabled: true,
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
        btnText: "Save Product",
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
        btnText: "View Product",
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
        btnText: "Save Product",
        btnVariant: "danger",
        btnDisabled: true,
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
        btnText: "Delete Product",
        btnVariant: "danger",
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
        btnText: "Save Product",
        btnVariant: "secondary",
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

  return (
    // Main container div for the entire page
    <div>
      {/* Navigation bar component */}
      <NavBar />

      {/* Main content container with flex layout */}
      <div className="container flex flex-col gap-4 w-full">
        {/* Notification testing buttons section */}
        <div className="my-6 flex gap-4 mx-auto">
          {/* Button to trigger error notification */}
          <button
            onClick={errorNotification}
            className="bg-red-600 text-white p-3 rounded-[.4rem] cursor-pointer"
          >
            Error Notification
          </button>

          {/* Button to trigger success notification */}
          <button
            onClick={successNotification}
            className="bg-green-600 text-white p-3 rounded-[.4rem] cursor-pointer"
          >
            Success Notification
          </button>

          {/* Button to trigger warning notification */}
          <button
            onClick={warningNotification}
            className="bg-orange-600 text-white p-3 rounded-[.4rem] cursor-pointer"
          >
            Warning Notification
          </button>

          {/* Button to trigger info notification */}
          <button
            onClick={infoNotification}
            className="bg-violet-600 text-white p-3 rounded-[.4rem] cursor-pointer"
          >
            Info Notification
          </button>
        </div>

        {/* Toast container for displaying notifications */}
        <ToastContainer />

        {/* Main content area with products and users */}
        <div className="container__content" id="containerContent">
          {/* Products section */}
          <div className="container__products">
            {/* Products section title */}
            <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">
              Our Products
            </h1>

            {/* Products description */}
            <p className="products__description text-center w-[50%] m-auto mb-5 text-zinc-500">
              Discover our curated collection of premium technology and
              accessories, designed to enhance your digital lifestyle.
            </p>

            {/* Products grid container */}
            <div className="products__box--container grid grid-cols-3 gap-5">
              {/* Map through products array to render product cards */}
              {arrayProducts.map((product) => {
                return (
                  // Individual product card container
                  <div
                    key={product.name}
                    className="product flex flex-col border-1 p-5 text-center rounded-md border-[#e4e4e7] shadow-xl/30 relative"
                  >
                    {/* Product image with fallback to default image */}
                    {product?.imageURL ? (
                      <Image
                        src={product.imageURL}
                        alt={product.name}
                        width={200}
                        height={200}
                        objectFit="cover"
                        className="block mx-auto w-full h-[300px] rounded-2xl mb-4"
                      />
                    ) : (
                      <Image
                        src={defaultImage}
                        alt={product.name}
                        width={200}
                        height={200}
                        objectFit="cover"
                        className="block mx-auto w-full h-[300px] rounded-2xl mb-4"
                      />
                    )}
                    {/* Product category badge */}
                    <span className="product__category absolute left-9 top-8 py-[3px] bg-white px-3 rounded-3xl border-1 border-[#7c3bed] text-[#7c3bed]">
                      {product.category}
                    </span>

                    {/* Product header with brand and rating */}
                    <div className="prodcut__header flex justify-between">
                      <h3 className="product__header--title text-zinc-500 font-bold">
                        {product.brand}
                      </h3>
                      <span className="product__header--rate">⭐ 4.5</span>
                    </div>

                    {/* Product name */}
                    <h2 className="product__name text-left mt-3 mb-4 font-bold">
                      {product.name}
                    </h2>

                    {/* Product price */}
                    <p className="product__price text-left font-bold text-[#7c3bed] text-2xl">
                      ${product.price} {product.currency}
                    </p>
                    {/* Product quantity information */}
                    <div className="product__quantity flex justify-between mt-2 mb-2 text-zinc-500">
                      <p className="product__quantity--text">Quantity:</p>
                      <span className="product__quantity--value">
                        {product.quantity}
                      </span>
                    </div>

                    {/* Product dimensions information */}
                    <div className="product__quantity flex justify-between text-zinc-500">
                      <p className="product__quantity--text">Dimensions:</p>
                      <span className="product__quantity--value">
                        {product.dimensions
                          ? `${product.dimensions.width} x ${product.dimensions.height} cm`
                          : "N/A"}
                      </span>
                    </div>

                    {/* Buy product button */}
                    <button className="product__btn mt-4 bg-purple-600 text-white font-bold w-full p-3 rounded-[.3rem] cursor-pointer">
                      Buy Product
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Users section */}
          <div className="container__users w-full">
            {/* Users section title */}
            <h2 className="text-3xl font-extrabold text-center mt-12 mb-10 text-gray-800">
              Users
            </h2>

            {/* Users grid container with responsive layout */}
            <div className="users grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:flex flex-wrap items-center justify-center gap-6">
              {/* Map through users array to render user cards */}
              {arrayUsers.map((user) => {
                return (
                  // Individual user card container
                  <div
                    key={user.name}
                    className="user__box lg:w-[300px] w-[220px] bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition duration-300"
                  >
                    {/* User name */}
                    <h3 className="user__box--name text-lg font-semibold text-indigo-600 mb-2">
                      {user.name.toUpperCase()}
                    </h3>

                    {/* User email */}
                    <p className="user__box--email text-sm text-gray-500 mb-1">
                      {user.email}
                    </p>

                    {/* User age */}
                    <p className="user__box--age text-sm text-gray-700 mb-3">
                      Age: {user.age}
                    </p>

                    {/* User address information */}
                    <div className="space-y-1 text-sm text-gray-600">
                      <p>City: {user.address.city}</p>
                      <p>Street: {user.address.street}</p>
                      <p>Country: {user.address.country}</p>
                      <p>Zip: {user.address.zipCode || "N/A"}</p>
                      <p>State: {user.address.state || "N/A"}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* COMPONENT CARDS */}
        {/* Services cards section */}
        <div className="container__cards my-[3rem] mx-auto grid grid-cols-2 gap-4">
          {arrayCards.map((card, index) => {
            return (
              <div key={index}>
                <Card
                  text={card.text}
                  secondText={card.secondText}
                  textBg={card.textBg}
                  cardBg={card.cardBg}
                  imageURL={card.imageURL}
                  btnProps={{
                    btnText: card.btnProps.btnText,
                    btnVariant: card.btnProps.btnVariant,
                    btnDisabled: card.btnProps.btnDisabled,
                    leftIcon: card.btnProps.leftIcon,
                    onClick: card.btnProps.onClick
                  }}
                  badgeProps={{
                    label: card.badgeProps.label,
                    status: card.badgeProps.status,
                    icon: card.badgeProps.icon,
                    title: card.badgeProps.title
                  }}
                />
              </div>
            )
          })}
        </div>

        {/* Additional components */}
        <Cars />
        <ProductList />
        <Login />
      </div>

      {/* Footer component */}
      <Footer />
    </div>
  )
}
