import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Spinner from "./components/Spinner";
import Header from "./components/Header";
import Result from "./components/Result";
import UploadForm from "./components/UploadForm";

function App() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, #6b21a8, #4c1d95, #1e1b4b)`,
        transition: "background 0.1s ease-out",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        className="absolute w-[400px] h-[400px] rounded-full filter blur-[220px] bg-purple-700 opacity-50 pointer-events-none animate-float"
        style={{ top: "15%", left: "25%" }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full filter blur-[220px] bg-indigo-500 opacity-50 pointer-events-none animate-float"
        style={{ top: "65%", left: "70%" }}
      />
      <div
        className="absolute w-[300px] h-[300px] rounded-full filter blur-[200px] bg-pink-600 opacity-40 pointer-events-none animate-float"
        style={{ top: "40%", left: "50%" }}
      />

      <div className="min-h-screen w-full px-4 sm:px-6 lg:px-0 py-10 flex flex-col items-center relative z-10">
        <Header />
        <UploadForm />
        <div className="w-full max-w-xl mx-auto mt-6">
          <Result />
        </div>
        <div className="w-full flex justify-center mt-6">
          <Spinner />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
