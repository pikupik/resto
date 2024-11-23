/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";

export default function Headers() {
  return (
    <div
      className="relative flex justify-center items-center bg-[#7cffc4] gap-2 p-4 sm:p-6 md:p-8 min-h-20 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://thumbs.dreamstime.com/b/vector-banner-restaurant-interior-people-having-dinner-cafe-party-concept-71403600.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="relative flex flex-row justify-center items-center gap-1">
        {/* Logo */}
        <img
          src="https://assets.untappd.com/site/beer_logos_hd/beer-10434_25e04_hd.jpeg"
          alt="Vck Store Logo"
          className="w-16 h-16 ml-8 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full"
        />

        {/* Information Section */}
        <div className="flex flex-col justify-center text-left lg:h-32 h-auto p-4 whitespace-nowrap rounded-md w-auto">
          <h1 className="text-sm sm:text-lg md:text-xl lg:text-3xl font-bold leading-tight mb-1">
            Your Store Name
          </h1>
          <p className="text-xs sm:text-sm md:text-base">
            Menu virtual / daring secara online dan simpel
          </p>
          <div className="flex justify-start gap-2 sm:gap-2 items-center text-xs sm:text-sm lg:text-base whitespace-nowrap">
            <p>Buka sampai 22.00 - 24.00</p>
            <p>New York</p>
            <p>08123456789</p>
          </div>
        </div>
      </div>
    </div>
  );
}
