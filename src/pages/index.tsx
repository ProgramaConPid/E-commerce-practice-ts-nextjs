import { products } from "@/interfaces/main";

export default function Home() {
  return (
    <div className="container flex flex-col gap-4 w-full">
      <div className="container__products">
        <h1 className="text-[2.5rem] font-bold text-center mb-4 mt-[50px]">
          Our Products
        </h1>
        <p className="products__description text-center w-[50%] m-auto mb-5 text-zinc-500">
          Discover our curated collection of premium technology and accessories,
          designed to enhance your digital lifestyle.
        </p>
        <div className="products__box--container grid grid-cols-3 gap-4">
          {products.map((product) => {
            return (
              <div
                key={product.name}
                className="product border-1 p-5 text-center rounded-md border-[#e4e4e7] shadow-xl/30"
              >
                <div className="prodcut__header flex justify-between">
                  <h3 className="product__header--title text-zinc-500 font-bold">
                    {product.brand}
                  </h3>
                  <span className="product__header--rate">⭐ 4.5</span>
                </div>
                <h2 className="product__name text-left mt-3 mb-4 font-bold">
                  {product.name}
                </h2>
                <p className="product__price text-left font-bold text-[#7c3bed] text-2xl">
                  ${product.price} {product.currency}
                </p>
                <div className="product__quantity flex justify-between mt-2 mb-2 text-zinc-500">
                  <p className="product__quantity--text">Quantity:</p>
                  <span className="product__quantity--value">
                    {product.quantity}
                  </span>
                </div>
                <div className="product__quantity flex justify-between text-zinc-500">
                  <p className="product__quantity--text">Dimensions:</p>
                  <span className="product__quantity--value">
                    {product.dimensions
                      ? `${product.dimensions.width} x ${product.dimensions.height} cm`
                      : "N/A"}
                  </span>
                </div>
                <button className="product__btn mt-4 bg-purple-600 text-white font-bold w-full p-3 rounded-[.3rem] cursor-pointer">
                  Buy Product
                </button>
              </div>
            );
          })}
        </div>
      </div>
      {/* <div className="container__users">
        <h2 className="text-xl font-bold">Users</h2>
      </div> */}
    </div>
  );
}
