import React from "react";

const Result = () => {
  return (
    <>
      <div className="mt-10 text-center w-full max-w-2xl">
        <h2 className="text-2xl font-semibold text-indigo-700 mb-2">
          Mood Analysis
        </h2>
        <p className="text-gray-300 mb-4">
          You seem to be feeling{" "}
          <span className="font-semibold text-red-500">anxious</span> today.
        </p>
        <p className="italic text-gray-500">
          "Even the darkest night will end and the sun will rise."
        </p>
      </div>
    </>
  );
};

export default Result;
