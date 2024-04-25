import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <div className="max-w-6xl mx-auto border-t-4 p-3">
      <div className="inner-container">
        <span className="text-white font-semibold text-3xl lg:text-3xl">
          Get started with PrimeHome
        </span>
        <span className="text-slate-300">
          Subscribe and find super attractive price quotes from us.
          <br />
          Find your residence soon
        </span>
        <button className="button font-semibold" href>
          <a href="mailto:achimmft@gmail.com">Get Started</a>
        </button>
      </div>
    </div>
  );
};

export default GetStarted;
