import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginScreen.css";

export default function LoginScreen() {
  const [userId, setUserId] = useState("");
  const [userPass, setUserPass] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (userId === "nitesh" && userPass === "1234") {
      navigate("/dashboard");
    } else {
      alert("Incorrect login details");
    }
  };

  return (
    <main className="login-wrapper">
      <h1 className="type-header">Welcome to TaskMate</h1>
      <form onSubmit={handleLogin} className="login-box">
        <input
          type="text"
          placeholder="Enter Username"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={userPass}
          onChange={(e) => setUserPass(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
    </main>
  );
}
