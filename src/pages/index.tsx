// Import React hooks (currently commented out)
// import { useState } from "react";

// Import utility functions and data arrays from helpers
import {
  handleNotification
} from "@/helpers/utils";

// Import custom components for the page layout
import NavBar from "@/components/NavBar";
import Cars from "@/components/Cars";
import Footer from "@/components/Footer";
import ProductList from "@/components/ProductList";
import { arrayCards } from "@/components/Card";

// Import toast notification container for displaying notifications
import { ToastContainer } from "react-toastify";

// Import custom Card component for displaying service cards
import { Card } from "@/components/Card";
import { Products } from "@/components/Products";
import { Users } from "@/components/Users";

// Import Hooks

// Main Home component - the entry point for the e-commerce homepage
export default function Home() {
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
            <Products />
          </div>

          {/* Users section */}
          <div className="container__users w-full">
            {/* Users section title */}
            <h2 className="text-3xl font-extrabold text-center mt-12 mb-10 text-gray-800">
              Users
            </h2>

            {/* Users grid container with responsive layout */}
            <Users />
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
                    text: card.btnProps.text,
                    variant: card.btnProps.variant,
                    disabled: card.btnProps.disabled,
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
      </div>

      {/* Footer component */}
      <Footer />
    </div>
  )
}