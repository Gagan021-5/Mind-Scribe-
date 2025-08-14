import React from "react";
import { Loader } from "lucide-react";
const Spinner = () => {
  return (
    <>
      <div className="mt-10 flex justify-center items-center gap-2">
        <Loader className="opacity-50 size-5 animate-spin fill-gray-100"></Loader>
        <span className="text-white animate-pulse">Analyzing...</span>
      </div>
    </>
  );
};

export default Spinner;
