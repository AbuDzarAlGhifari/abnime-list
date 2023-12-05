import React from "react";
import logo from "../assets/logo.svg";

const About = () => {
  return (
    <>
      <div className="flex justify-center items-center bg-gradient-to-r from-gray-400 to-red-700 min-h-screen">
        <img
          className="flex justify-center items-center h-48"
          src={logo}
        />
      </div>
    </>
  );
};

export default About;
