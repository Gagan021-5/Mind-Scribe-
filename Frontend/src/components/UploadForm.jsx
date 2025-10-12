import { useState } from "react";
import axios from "axios";
import Result from "./Result";

const UploadForm = () => {
  const [uploading, setUploading] = useState(false);
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleFile = (e) => {
    setFile(e.target.files[0]);
    setResponse(null);
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append("wordimage", file);

    setUploading(true);
    setError(null);

    try {
      const res = await axios.post(
        "http://localhost:3000/upload/image",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (res.data.success === false) {
        setError(res.data.msg);
      } else {
        const analysis = JSON.parse(res.data.emotionAnalysis || "{}");
        setResponse(analysis);
      }
    } catch (err) {
      console.error(err);
      setError("Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-8 text-white w-full px-4 sm:px-6 lg:px-0">
      <form
        className="flex flex-col gap-4 bg-slate-700 p-6 rounded-2xl shadow-md w-full max-w-md sm:max-w-lg lg:max-w-xl"
        onSubmit={handleSubmit}
      >
        <label className="text-sm font-medium">Upload Journal Image</label>

        <input
          onChange={handleFile}
          name="wordimage"
          type="file"
          accept="image/*"
          className="border cursor-pointer text-zinc-400 border-gray-300 p-2 rounded-md w-full"
        />

        <button
          disabled={!file || uploading}
          type="submit"
          className={`bg-gray-600 hover:bg-slate-800 text-white py-2 rounded-md transition ${
            uploading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {uploading ? "Analyzing..." : "Analyze"}
        </button>
      </form>

      {error && (
        <p className="text-red-400 mt-4 text-sm font-semibold text-center sm:text-left">
          {error}
        </p>
      )}

      {response && <Result data={response} />}
    </div>
  );
};

export default UploadForm;
