import React, { useState } from "react";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { Email: email, Password: password };

    try {
      const response = await fetch("http://localhost:9183/createadmin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      alert(result.message);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Error:", error);
      alert("Login Failed!");
    }
  };

  return (
    <div className="parent">
      <form className="one" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="social-icons">
        <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
        </div>
        <p>Or use your account</p>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <a href="#">Forgot your password?</a><br />
        <button type="submit">Login</button>
      </form>
      <div className="Two">
        <h1>REACT CSS LOGIN FORM</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  );
};

export default Login;
