import React from "react";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter()

  const redirect = () => {
    router.push("/login");
  }

  return (
    <nav className="nav flex justify-between items-center p-5 border-b-2 border-zinc-200 mb-4">
      <div className="nav__logo">
        <h3 className="text-[#7c3bed] font-bold">Felipe Marin</h3>
      </div>
      <ul className="nav__links flex gap-6">
        <li className="nav__item relative">
          <a
            href="#"
            className="decoration-0 cursor-pointer hover:text-[#7c3bed] duration-300"
          >
            Home
          </a>
        </li>
        <li className="nav__item relative">
          <a
            href="#"
            className="decoration-0 cursor-pointer hover:text-[#7c3bed] duration-300"
          >
            About Us
          </a>
        </li>
        <li className="nav__item relative">
          <a
            href="#"
            className="decoration-0 cursor-pointer hover:text-[#7c3bed] duration-300"
          >
            Services
          </a>
        </li>
        <li className="nav__item relative">
          <a
            href="#"
            className="decoration-0 cursor-pointer hover:text-[#7c3bed] duration-300"
          >
            Contact
          </a>
        </li>
        <li onClick={redirect} className="nav__item relative">
          <a
            href="#"
            className="decoration-0 cursor-pointer hover:text-[#7c3bed] duration-300"
          >
            Log In
          </a>
        </li>
      </ul>
    </nav>
  );
}
