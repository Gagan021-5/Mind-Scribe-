import { useState } from "react";
import Footer from "./components/Footer";
import Spinner from "./components/Spinner";
import Header from "./components/Header";
import Result from "./components/Result";
import UploadForm from "./components/UploadForm";

function App() {
  return (
    <div className="min-h-screen w-full  px-4 sm:px-6 lg:px-0 py-10 flex flex-col items-center">
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
  );
}

export default App;
