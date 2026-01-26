import { useEffect, useState } from "react";
const BASE_URL = "http://localhost:5000/api";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await fetch(`${BASE_URL}/users`);
    const data = await res.json();
    setUsers(data);
  };

  const submitUser = async () => {
    if (editId) {
      await fetch(`${BASE_URL}/users/${editId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
    } else {
      await fetch(`${BASE_URL}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
    }

    setName("");
    setEmail("");
    setEditId(null);
    fetchUsers();
  };

  const deleteUser = async (id) => {
    await fetch(`${BASE_URL}/users/${id}`, {
      method: "DELETE",
    });
    fetchUsers();
  };

  const editUser = (user) => {
    setName(user.name);
    setEmail(user.email);
    setEditId(user.id);
  };

  return (
    <div>
      <h2>User Management</h2>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={submitUser}>
        {editId ? "Update User" : "Add User"}
      </button>

      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.name} - {u.email}
            <button onClick={() => editUser(u)}>Edit</button>
            <button onClick={() => deleteUser(u.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
