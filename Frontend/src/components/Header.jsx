import React from "react";
import {motion} from "framer-motion"
const Header = () => {
  return (
    <>
      <header className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white/95">
          MindScribe
        </h1>
        <p className="text-lg text-gray-400 mt-2 max-w-xl mx-auto">
          Upload your handwritten journal or sketch and let AI decode your
          emotions.
        </p>
      </header>
    </>
  );
};

export default Header;
