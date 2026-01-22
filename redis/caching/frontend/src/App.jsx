import { useEffect, useState } from "react";
import BlogForm from "./components/BlogForm";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [editBlog, setEditBlog] = useState(null);

  const fetchBlogs = async () => {
    const res = await fetch("http://localhost:5000/api/blogs");
    const data = await res.json();
    setBlogs(data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const deleteBlog = async (id) => {
    await fetch(`http://localhost:5000/api/blogs/${id}`, {
      method: "DELETE"
    });
    fetchBlogs();
  };

  return (
    <div>
      <BlogForm
        selectedBlog={editBlog}
        onSuccess={() => {
          setEditBlog(null);
          fetchBlogs();
        }}
      />

      <hr />

      <h2>All Blogs</h2>

      {blogs.map(b => (
        <div key={b._id} style={{ border: "1px solid #ccc", margin: 10 }}>
          <h3>{b.title}</h3>

          {b.imageUrl && (
            <img src={b.imageUrl} width="200" />
          )}

          <p>{b.content}</p>

          <button onClick={() => setEditBlog(b)}>Edit</button>
          <button onClick={() => deleteBlog(b._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
