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
        background: `
          radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, 
            rgba(107, 33, 168, 0.9) 0%, 
            rgba(76, 29, 149, 0.8) 25%, 
            rgba(30, 27, 75, 0.7) 50%,
            rgba(15, 23, 42, 1) 100%),
          radial-gradient(circle at ${100 - mousePos.x}% ${100 - mousePos.y}%, 
            rgba(139, 92, 246, 0.3) 0%, 
            rgba(99, 102, 241, 0.2) 30%, 
            transparent 70%),
          linear-gradient(135deg, 
            rgba(30, 27, 75, 0.95) 0%, 
            rgba(17, 24, 39, 1) 100%)
        `,
        backgroundBlendMode: "overlay, screen, normal",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Ultra-subtle animated particles */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(2px 2px at ${mousePos.x * 0.01}vw ${mousePos.y * 0.01}vh, rgba(168, 85, 247, 0.8), transparent),
            radial-gradient(2px 2px at ${mousePos.x * 0.8 + 10}vw ${mousePos.y * 0.6 + 20}vh, rgba(99, 102, 241, 0.6), transparent),
            radial-gradient(1px 1px at ${100 - mousePos.x * 0.5}vw ${mousePos.y * 0.3}vh, rgba(236, 72, 153, 0.7), transparent)
          `,
          animation: "particle-float 20s linear infinite",
        }}
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

      <style jsx>{`
        @keyframes particle-float {
          0% { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(-100vh) rotate(360deg); }
        }
        
        @media (prefers-reduced-motion: no-preference) {
          .particle-float {
            animation: particle-float 25s ease-in-out infinite;
          }
        }
      `}</style>
    </div>
  );
}

export default App;