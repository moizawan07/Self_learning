import { useState, useEffect } from "react";

export default function BlogForm({ selectedBlog, onSuccess }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (selectedBlog) {
      setTitle(selectedBlog.title);
      setContent(selectedBlog.content);
    }
  }, [selectedBlog]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (image) formData.append("image", image);

    const url = selectedBlog
      ? `http://localhost:5000/api/blogs/${selectedBlog._id}`
      : "http://localhost:5000/api/blogs";

    const method = selectedBlog ? "PUT" : "POST";

    await fetch(url, {
      method,
      body: formData
    });

    setTitle("");
    setContent("");
    setImage(null);
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{selectedBlog ? "Edit Blog" : "Create Blog"}</h2>

      <input
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />

      <textarea
        placeholder="Content"
        value={content}
        onChange={e => setContent(e.target.value)}
        required
      />

      <input type="file" onChange={e => setImage(e.target.files[0])} />

      <button type="submit">
        {selectedBlog ? "Update" : "Create"}
      </button>
    </form>
  );
}
