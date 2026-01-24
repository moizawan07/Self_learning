import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("http://localhost:3000/");
      const data = await res.json();
      console.log(data);
      setMessage(data.message);
    };
    loadData();
  }, []);
  return <div>
   Api Response is ==!  {message}
  </div>;
}

export default App;
