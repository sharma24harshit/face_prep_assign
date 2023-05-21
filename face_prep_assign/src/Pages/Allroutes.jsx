import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default Allroutes;
