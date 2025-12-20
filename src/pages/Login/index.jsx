import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/auth";
import "./login.scss";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const success = login(email, password);

    if (success) {
      navigate("/"); // entra no site
    } else {
      setError("Invalid credentials");
    }
  }

  return (
    <section className="login">
      <div className="login-container">

        <div className="login-brand">
          <span className="login-eyebrow">PHANTOM</span>
          <h1>Exclusive Access</h1>
          <p>Luxury, performance and precision.</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Sign In</h2>

          {error && <span className="login-error">{error}</span>}

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@phantom.com"
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="123456"
            />
          </div>

          <button type="submit">Enter</button>
        </form>

      </div>
    </section>
  );
}
