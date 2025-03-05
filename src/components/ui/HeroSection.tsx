"use client";
import Image from "next/image";
import {
  ChevronDownIcon,
  ArrowRightIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

export default function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["Products", "Solutions", "Resources", "Pricing"];
  return (
    <>
      <nav className="bg-primary h-[92px] flex items-center justify-between px-8 xl:justify-around">
        <Image
          src="/logo.svg"
          alt="logo"
          quality={100}
          height={35}
          width={190}
        ></Image>

        {/* Desktop menu */}
        <ul className="hidden xl:flex items-center text-white gap-10 font-dm-sans text-base">
          {navLinks.map((item, index) => (
            <li key={index} className="flex items-center gap-2 cursor-pointer">
              {item}
              <ChevronDownIcon className="w-4 h-4 text-white"></ChevronDownIcon>
            </li>
          ))}

          <button className="ml-8 bg-yellow text-black px-7 py-2.5 rounded-lg cursor-pointer">
            Login
          </button>
          <button className="bg-blue text-white px-7 py-2.5 rounded-lg flex gap-2 items-center cursor-pointer">
            {`Try whitespace free`}
            <ArrowRightIcon className="w-5 h-5 text-white"></ArrowRightIcon>
          </button>
        </ul>

        {/* Mobile menu */}
        <button className="xl:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <XMarkIcon className="w-8 h-8 text-white"></XMarkIcon>
          ) : (
            <Bars3Icon className="w-8 h-8 text-white"></Bars3Icon>
          )}
        </button>

        {isOpen && (
          <div className="absolute top-[92px] left-0 w-full bg-primary p-6 flex flex-col items-center gap-6 xl:hidden">
            {navLinks.map((item, index) => (
              <a key={index} href="#" className="text-white text-lg">
                {item}
              </a>
            ))}
            <button className="bg-yellow text-black px-8 py-3 rounded-lg cursor-pointer w-full text-center">
              Login
            </button>
            <button className="bg-blue text-white px-8 py-3 rounded-lg flex gap-2 items-center cursor-pointer w-full justify-center">
              Try whitespace free
            </button>
          </div>
        )}
      </nav>
    </>
  );
}
