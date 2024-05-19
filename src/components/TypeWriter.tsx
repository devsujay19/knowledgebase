"use client";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { MovingBorderButton } from "./MovingBorderButton";
import Go from "./Go";

export function TypeWriterEffect() {
  const words = [
    {
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 34a0eed2c3096e18b89356999fbaeba4faf9139e
>>>>>>> 1c9540e (Completed Alcubierre article)
>>>>>>> c142d93 (Completed Alcubierre article)
=======
>>>>>>> 34a0eed2c3096e18b89356999fbaeba4faf9139e
      text: "Explore",
    },
    {
      text: "this",
    },
    {
      text: "Dimension",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "differently.",
    },
    {
      text: "Randomly.",
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
      text: "The",
    },
    {
      text: "Universe",
    },
    {
      text: "in",
    },
    {
      text: "my",
    },
    {
      text: "Perspective.",
>>>>>>> e379202 (Completed Alcubierre article)
=======
>>>>>>> 34a0eed2c3096e18b89356999fbaeba4faf9139e
>>>>>>> 1c9540e (Completed Alcubierre article)
>>>>>>> c142d93 (Completed Alcubierre article)
=======
>>>>>>> 34a0eed2c3096e18b89356999fbaeba4faf9139e
      className: "tex.t-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex mt-[-195px] flex-col items-center justify-center h-[40rem] ">
      <p className="text-neutral-600 dark:text-neutral-200 text-base  mb-10">
        A collection of stuffs I found interest on
      </p>
      <TypewriterEffect words={words} />
      <div className="flex flex-col md:flex-row mt-10 space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <Go to={"/base"}>
          <MovingBorderButton text="Let&apos;s GO!" />
        </Go>
      </div>
    </div>
  );
}
