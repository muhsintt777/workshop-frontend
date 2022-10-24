import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import Login from "./components/login/Login";
import Public from "./components/public/Public";
import DashLayout from "./components/dashLayout/DashLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />
        <Route path="dash" element={<DashLayout />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
