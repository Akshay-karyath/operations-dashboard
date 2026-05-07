import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    navigate("/dashboard");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-50">

      <div className="bg-white w-96 p-8 rounded-2xl shadow-lg">

        {/* TITLE */}
        <h2 className="text-2xl font-bold text-center mb-6">
          Operations Dashboard
        </h2>

        <p className="text-center text-gray-500 mb-6">
          Login to continue
        </p>

        {/* EMAIL */}
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-3 rounded-xl mb-4 focus:ring-2 focus:ring-blue-400 outline-none"
        />

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-3 rounded-xl mb-6 focus:ring-2 focus:ring-blue-400 outline-none"
        />

        {/* LOGIN BUTTON */}
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white p-3 rounded-xl hover:bg-blue-600 transition-all"
        >
          Login
        </button>

      </div>

    </div>
  );
}

export default Login;