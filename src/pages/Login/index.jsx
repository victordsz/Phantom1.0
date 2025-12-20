import "./login.scss";

export default function Login() {
  return (
    <section className="login">
      <div className="login-container">
        
     
        <div className="login-brand">
          <span className="login-eyebrow">PHANTOM</span>
          <h1>Exclusive Access</h1>
          <p>
            Enter your credentials to access a world where performance,
            precision and luxury meet.
          </p>
        </div>

  
        <form className="login-form">
          <h2>Sign In</h2>

          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="you@phantom.com" />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="••••••••" />
          </div>

          <button type="submit">Enter</button>

          <span className="login-footer">
            © {new Date().getFullYear()} PHANTOM
          </span>
        </form>

      </div>
    </section>
  );
}
