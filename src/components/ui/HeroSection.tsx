import Image from "next/image";
import CustomButton from "./CustomButton";
import Navbar from "./Navbar";

export default function HeroSection() {
  return (
    <>
      <Navbar></Navbar>
      <section className="relative h-[829px] bg-primary text-white font-inter">
        <Image
          src="/waves.svg"
          alt="Waves"
          fill
          quality={100}
          sizes="100vw"
        ></Image>
        <div className="absolute inset-0 flex items-center flex-col xl-custom:flex-row justify-center text-center z-10 gap-10 max-w-[1280px] mx-auto">
          <div className="flex flex-col gap-8 w-1/2 text-left">
            <h1 className="text-6xl">Get More Done with whitespace</h1>
            <p>
              Project management software that enables your teams to
              collaborate, plan, analyze and manage everyday tasks
            </p>
            <CustomButton
              text="Try whitespace free"
              bgColor="bg-blue"
              textColor="text-white"
              hasArrow={true}
            ></CustomButton>
          </div>
          <div className="w-1/2">
            <Image
              src="/hero.svg"
              alt="Hero section image"
              quality={100}
              width={800}
              height={800}
            ></Image>
          </div>
        </div>
      </section>
    </>
  );
}
