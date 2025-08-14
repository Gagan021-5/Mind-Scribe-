import { useState } from 'react'
import Footer from './components/Footer';
import Spinner from './components/Spinner';
import Header from './components/Header';
import Result from './components/Result';
import UploadForm from './components/UploadForm';


function App() {
  

  return (
   <>
   <div className="min-h-screen bg-gradient-to-t from-gray-700 to-black/70 px-6 py-10 flex flex-col items-center">
   <Header/>
   <UploadForm/>
   <Result/>
   <Spinner/>
   <Footer/>
  </div>
   </>
  )
}

export default App
