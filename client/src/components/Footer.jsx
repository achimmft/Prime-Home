import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="flex justify-between max-w-6xl mx-auto p-4 items-center border-t-4">
      {/* left side */}
      <div className="">
        {/* <img src="./logo2.png" alt="" width={120} /> */}
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Prime</span>
            <span className="text-slate-700">Home</span>
          </h1>
        </Link>
        <span className="text-gray-400 text-xs sm:text-sm">
          Our vision is to make all people <br />
          the best place to live for them.
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-slate-700 font-bold text-sm sm:text-xl">
          Information
        </span>
        <span className="text-gray-400 ">
          800 W University Pkwy, Orem, UT 84058
        </span>
        <div className="flex gap-2">
          <span>Property</span>
          <span>Services</span>
          <span>Product</span>
          <span>About Us</span>
        </div>
      </div>
    </div>
  );
}
