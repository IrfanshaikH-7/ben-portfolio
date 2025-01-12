import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white px-8 py-12 flex items-center">
      <div className="max-w-7xl mx-auto relative">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[600px]">
          <img
            src="../images/about.jpg"
            alt="Portrait"
            className="w-full h-full object-cover grayscale opacity-80"
          />
        </div>

        <div className="relative z-10">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 font-serif">
            Hi, I'm Benjamin
          </h1>

          <div className="text-orange-500">
            <p className="text-xl md:text-2xl font-semibold">
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
        </div>
      </div>
    </div>
  );
}
