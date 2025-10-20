import { motion } from "framer-motion";
import { CloudLightning } from "lucide-react";

const Result = ({ data }) => {
  const { emotion, confidence, summary } = data || {};

  return (
    <div className="relative flex flex-col items-center justify-center text-center py-16 px-6 w-full">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#1e1b4b] to-[#111827] blur-3xl opacity-60"></div>

      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl max-w-2xl z-10"
      >
        <h2 className="text-3xl font-bold text-indigo-400 tracking-wide mb-4 flex justify-center items-center gap-2">
          <CloudLightning className="text-yellow-400" /> Mood Analysis
        </h2>

        <p className="text-gray-200 mb-6 text-lg">
          You seem to be feeling{" "}
          <span className="font-bold text-red-400">
            {emotion || "unknown"}
          </span>{" "}
          today.
        </p>

        {summary && (
          <p className="italic text-gray-400 text-lg mb-6">
            "{summary}"
          </p>
        )}

        <div className="mt-8 h-[2px] bg-gradient-to-r from-indigo-400 via-pink-400 to-yellow-400"></div>

        {confidence && (
          <p className="text-sm text-gray-400 mt-4">
            Confidence: {(confidence * 100).toFixed(1)}%
          </p>
        )}

        <p className="text-sm text-gray-500 mt-4">
          🌙 Remember — feelings are temporary, but your strength is permanent.
        </p>
      </motion.div>
    </div>
  );
};

export default Result;