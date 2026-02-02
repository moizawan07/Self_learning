import React, { useState } from "react";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    profileImage: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("password", form.password);
    formData.append("profileImage", form.profileImage);

    const res = await fetch("http://localhost:3000/auth/signup", {
      method: "POST",
      body: formData,
    });

    console.log("res ==>", res);
    
    // console.log(form);
  };
  console.log("form ==>", form);
  

  const handleChange = (e) => {
    console.log("handle run");
    
    
    let { name, value, files } = e.target;

    if(name === "profileImage"){
      setForm({
        ...form,
        
        [name]: files[0]
      })
    }else{
      setForm({
        ...form,
        [name]: value,
      });
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          {form.profileImage && (
            <img
              src={URL.createObjectURL(form.profileImage)}
              alt="Profile"
              width="100"
            />
          )}
        </div>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        <input
          type="file"
          name="profileImage"
          onChange={handleChange}
          // onChange={(e) =>
          //   setForm({ ...form, profileImage: e.target.files[0] })
          // }
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
