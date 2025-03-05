import Image from "next/image";
import { ChevronDownIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

export default function HeroSection() {
  return (
    <>
      <nav className="bg-primary h-[92px] flex items-center justify-around">
        <Image
          src="/logo.svg"
          alt="logo"
          quality={100}
          height={35}
          width={190}
        ></Image>
        <ul className="flex items-center text-white gap-10 font-dm-sans text-lg">
          {["Products", "Solutions", "Resources", "Pricing"].map(
            (item, index) => (
              <li
                key={index}
                className="flex items-center gap-2 cursor-pointer"
              >
                {item}
                <ChevronDownIcon className="w-4 h-4 text-white"></ChevronDownIcon>
              </li>
            )
          )}

          <button className="ml-8 bg-yellow text-black px-8 py-3 rounded-lg cursor-pointer">
            Login
          </button>
          <button className="bg-blue text-white px-8 py-3 rounded-lg flex gap-2 items-center cursor-pointer">
            {`Try whitespace free`}
            <ArrowRightIcon className="w-5 h-5 text-white"></ArrowRightIcon>
          </button>
        </ul>
      </nav>
    </>
  );
}
