import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Users from "./component/Users";
import Create from "./component/CreateUser";
import Update from "./component/Update";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/Create" element={<Create />} />
        <Route path="/Update" element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
