import { PRODUCTS } from "@/utils/products";
import {
  capitalize,
  toLowerCaseSafe,
  truncate,
  formatPrice,
} from "@/utils/textUtils";

export default function ProductList() {
  return (
    <section className="products mt-8">
      <h2 className="products__title text-3xl font-extrabold text-center text-gray-800">Other Products:</h2>
      <div className="container__products flex items-center justify-center gap-4 mt-8">
        {PRODUCTS.map((product, index) => {
          return (
            <div key={index} className="product lg:w-[350px] bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition duration-300 text-center">
              <h3 className="text-center font-bold text-[1.5rem] text-[#7c3bed] mb-2">Product: #{index + 1}</h3>
              <p className="text-[18px]">Product Name: {truncate(product.name, 12)}</p>
              <p className="text-[18px]">Product Brand: {capitalize(product.brand)}</p>
              <p className="text-[18px]">
                Product Price: {formatPrice(product.price.amount, product.price.currency)}
              </p>
              <p className="text-[18px]">Product Quantity: {product.quantity}</p>
              <p className="text-[18px]">Product Availability: {product.isActive ? toLowerCaseSafe("Active") : toLowerCaseSafe("Not Active")}</p>

              <button className="mt-3.5 bg-[#7c3bed] text-white p-2 rounded-[.2rem] cursor-pointer">Buy Product</button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
