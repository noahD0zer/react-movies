import React, { useState } from "react";

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    // Update user state in App component
    onLogin(username);
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;
