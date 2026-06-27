import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import Todo from "./pages/Todo/Todo";
import Notes from "./pages/Notes/Notes";
import Expenses from "./pages/Expenses/Expenses";
import Health from "./pages/Health/Health";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/todo" element={<Todo />} />

        <Route path="/notes" element={<Notes />} />

        <Route path="/expenses" element={<Expenses />} />

        <Route path="/health" element={<Health />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;