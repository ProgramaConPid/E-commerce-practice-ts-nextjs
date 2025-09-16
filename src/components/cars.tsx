import React from "react";
import { arrayCars } from "@/helpers/utils";

export default function Cars() {
  return (
    <div className="container__cars">
      <h2 className="text-3xl font-extrabold text-center mt-12 mb-10 text-gray-800">
        Cars
      </h2>
      <div className="cars grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:flex flex-wrap items-center justify-center gap-6">
        {arrayCars.map((car) => {
          return (
            <div
              key={car.model}
              className="car__box lg:w-[300px] w-[250px] bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition duration-300"
            >
              <h3 className="car__box--name text-lg font-semibold text-indigo-600 mb-2">
                {car.brand} - {car.model}
              </h3>
              <p className="car__box--year text-sm text-gray-500 mb-1">
                Year: {car.year}
              </p>
              <p className="car__box--electric text-sm text-gray-700 mb-3">
                {car.isElectric ? "Electric" : "Gasoline"}
              </p>

              <div className="space-y-1 text-sm text-gray-600">
                <p>Mileage: {car.mileage ? `${car.mileage} km` : "N/A"}</p>
                <p>Color: {car.color || "N/A"}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
