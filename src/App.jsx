import LoginPage from "./Pages/LoginPage";
import DashboardPage from "./Pages/DashboardPage";
import { Routes, Route } from "react-router-dom";
import "./App.css";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
};

export default App;
