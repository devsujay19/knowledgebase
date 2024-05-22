import React from "react";
import { Spotlight } from "./ui/Spotlight";

export function Hero() {
  return (
    <div className="h-[39rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden pb-[-200px]">
      <Spotlight
        className="-top-40 left-10 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="px-4 max-w-7xl pb-[-20rem]  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Things<br />I&apos;ve Learnt so far.
        </h1>
        <p className="mt-4 -mb-20 sm:-mb-40 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          The human mind holds a vast amount of knowledge during every events near it, but sharing it all can be overwhelming. This app captures some of my insights that might be helpful and interesting to others.
        </p>
      </div>
    </div>
  );
}
