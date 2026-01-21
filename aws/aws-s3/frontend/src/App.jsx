import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [file, setFile] = useState(null);
  const [isPublic, setIsPublic] = useState(true);
  const [files, setFiles] = useState([]);

  const fetchFiles = async () => {
    const res = await axios.get("http://localhost:5000/api/files");
    setFiles(res.data);
    localStorage.setItem("files", JSON.stringify(res.data));
  };

  useEffect(() => {
    const saved = localStorage.getItem("files");
    if (saved) setFiles(JSON.parse(saved));
    fetchFiles();
  }, []);

  const upload = async () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("isPublic", isPublic);

    await axios.post("http://localhost:5000/api/upload", formData);
    fetchFiles();
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Upload Image</h2>

      <input type="file" onChange={e => setFile(e.target.files[0])} />

      <select onChange={e => setIsPublic(e.target.value === "true")}>
        <option value="true">Public</option>
        <option value="false">Private</option>
      </select>

      <button onClick={upload}>Upload</button>

      <hr />

      <h2>Images</h2>
      {files.map(f => (
        <div key={f.id}>
          <p>{f.name} ({f.isPublic ? "Public" : "Private"})</p>
          <img src={f.url} width="200" />
        </div>
      ))}
    </div>
  );
}
