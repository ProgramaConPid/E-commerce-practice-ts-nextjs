import React from "react";
import { arrayUsers } from "@/helpers/utils";

export const Users = () => {
  return (
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
  );
};
