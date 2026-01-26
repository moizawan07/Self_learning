import express from "express";
import cors from "cors";
import usersRoutes from "./routes/users.routes.js";
import todosRoutes from "./routes/todos.routes.js";

const app = express();

app.use(cors());
app.use(express.json());


app.use("/api/users", usersRoutes);

app.use("/api/todos", todosRoutes);


app.listen(5000, () => {
  console.log("Server running on port 5000 🚀");
});
