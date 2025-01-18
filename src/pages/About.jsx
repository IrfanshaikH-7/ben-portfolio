import React from "react";
import { about } from "../assets";

export default function About() {
  return (
    <>
      <div className="min-h-screen bg-black text-white px-8 py-12 flex items-center">
        <div className="max-w-7xl mx-auto relative">
          <div className="absolute right-0 left-0 mx-auto w-[400px] h-[600px] top-1/2 -translate-y-1/2 scale-75 mt-8">
            <img
              src={about}
              alt="Portrait"
              className="w-full h-full object-cover grayscale opacity-80"
            />
          </div>

          <div className="relative z-10">
            <h1 className="text-6xl md:text-8xl  font-bold mb-8 font-glock">
              Hi, I'm Benjamin
            </h1>

            <div className="text-orange-500">
              <p className="text-xl md:text-2xl font-semibold font-glock">
                <span>6 figure business mentor</span>
                <br />
                <span className="mx-2">/</span>
                <span>Dog mom</span>
                <span className="mx-2">/</span>
                <span>
                  Avid <br /> traveler
                </span>
                <span className="mx-2">/</span>
                <span>Dreamer</span>
              </p>
            </div>
            <div className="flex-end flex  flex-col justify-end items-end ">
              <div className="mt-8 max-w-xl ">
                <p className="text-sm leading-relaxed ">
                  I'm Rilea, and I've been where you are—overwhelmed, burned
                  out, and questioning if success is worth the struggle. I
                  started my first business with endless ambition but quickly
                  realized that traditional "hustle" culture wasn't sustainable.
                  After hitting burnout, I knew I had to find a different way.
                  Through trial, error, and a lot of learning, I discovered the
                  balance between growth and well-being, and I'm here to help
                  you do the same.
                </p>
              </div>

              <button className="bg-orange-500 text-white px-8 py-4 mt-8 hover:bg-orange-600 transition-colors">
                WORK WITH ME
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
