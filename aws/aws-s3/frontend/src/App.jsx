import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [file, setFile] = useState(null);
  const [files, setFiles] = useState([]);

  const fetchFiles = async () => {
    const res = await axios.get("http://localhost:5000/api/files");
    setFiles(res.data);
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);
    await axios.post("http://localhost:5000/api/files", formData);
    setFile(null);
    fetchFiles();
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>File Upload App</h1>
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>

      <h2>Uploaded Files</h2>
      <ul>
        {files.map(f => (
          <li key={f.id}>
            {f.name} - <a href={f.url} target="_blank">View</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
