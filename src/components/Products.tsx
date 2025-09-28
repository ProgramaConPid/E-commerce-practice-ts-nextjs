import Image from "next/image";
import React from "react";
import { arrayProducts } from "@/helpers/utils";

export const Products = () => {
  // Default fallback image URL for products without images
  const defaultImage: string =
    "https://images.unsplash.com/photo-1656543802898-41c8c46683a7?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="products__box--container grid grid-cols-3 gap-5">
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
  );
};
