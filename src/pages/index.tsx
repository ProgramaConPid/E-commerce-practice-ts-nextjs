import { products, users } from "@/interfaces/main";

export default function Home() {
  return (
    <div className="container flex flex-col gap-4 w-full">
      <div className="container__products">
        <h1 className="text-[2.5rem] font-bold text-center mb-4">
          Our Products
        </h1>
        <p className="products__description text-center w-[50%] m-auto mb-5 text-zinc-500">
          Discover our curated collection of premium technology and accessories,
          designed to enhance your digital lifestyle.
        </p>
        <div className="products__box--container grid grid-cols-3 gap-5">
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
      <div className="container__users w-full">
        <h2 className="text-3xl font-extrabold text-center mt-12 mb-10 text-gray-800">
          Users
        </h2>

        <div className="users grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:flex flex-wrap items-center justify-center gap-6">
          {users.map((user) => {
            return (
              <div
                key={user.name}
                className="user__box lg:w-[300px] w-[250px] bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition duration-300"
              >
                <h3 className="user__box--name text-lg font-semibold text-indigo-600 mb-2">
                  {user.name.toUpperCase()}
                </h3>
                <p className="user__box--email text-sm text-gray-500 mb-1">
                  {user.email}
                </p>
                <p className="user__box--age text-sm text-gray-700 mb-3">
                  Age: {user.age}
                </p>

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
  );
}
