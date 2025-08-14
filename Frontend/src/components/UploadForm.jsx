import { useState } from "react";
import axios from "axios";

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
    setResponse(null);

    try {
      const res = await axios.post(
        "http://localhost:3000/upload/image",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (res.data.success === false) {
        setError(res.data.msg);
      } else {
        setResponse(res.data);
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="w-full max-w-md bg-slate-700 p-6 rounded-2xl shadow-md border border-gray-200 text-white">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <label className="text-sm font-medium">Upload Journal Image</label>

        <input
          onChange={handleFile}
          name="wordimage"
          type="file"
          accept="image/*"
          className="border cursor-pointer text-zinc-400 border-gray-300 p-2 rounded-md"
        />

        <button
          disabled={!file || uploading}
          type="submit"
          className={`bg-gray-600 hover:bg-slate-800 text-white py-2 rounded-md transition ${
            uploading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          {uploading ? "Analyzing..." : "Analyze"}
        </button>
      </form>

      {error && (
        <p className="text-red-400 mt-4 text-sm font-semibold">{error}</p>
      )}

      {response && (
        <div className="mt-4 bg-slate-800 p-4 rounded-md text-sm">
          <pre className="whitespace-pre-wrap break-words">
            {JSON.stringify(response, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default UploadForm;
