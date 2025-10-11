import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Heart, CloudLightning } from "lucide-react";

const Result = () => {
  return (
    <div className="relative flex flex-col items-center justify-center text-center py-16 px-6 w-full">
      {/* Glowing gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#1e1b4b] to-[#111827] blur-3xl opacity-60"></div>

      {/* Floating sparkles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
        className="absolute -top-10 left-10 text-indigo-400"
      >
        <Sparkles size={36} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2, delay: 1, repeat: Infinity, repeatType: "mirror" }}
        className="absolute top-10 right-10 text-pink-400"
      >
        <Heart size={36} />
      </motion.div>

      {/* Main card */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl max-w-2xl z-10"
      >
        <h2 className="text-3xl font-bold text-indigo-400 tracking-wide mb-4 flex justify-center items-center gap-2">
          <CloudLightning className="text-yellow-400" /> Mood Analysis
        </h2>

        <p className="text-gray-200 mb-6 text-lg">
          You seem to be feeling{" "}
          <motion.span
            initial={{ scale: 0.8 }}
            animate={{ scale: [1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
            className="font-bold text-red-400 drop-shadow-[0_0_10px_rgba(255,0,0,0.5)]"
          >
            anxious
          </motion.span>{" "}
          today.
        </p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="italic text-gray-400 text-lg"
        >
          “Even the darkest night will end and the sun will rise.”
        </motion.p>

        {/* Animated divider */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="mt-8 h-[2px] bg-gradient-to-r from-indigo-400 via-pink-400 to-yellow-400"
        ></motion.div>

        <p className="text-sm text-gray-500 mt-4">
          🌙 Remember — feelings are temporary, but your strength is permanent.
        </p>
      </motion.div>
    </div>
  );
};

export default Result;
