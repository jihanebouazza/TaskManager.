import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const { login, isAuthenticated } = useAuth();
  const [email, setEmail] = useState("johndoe@gmail.com");
  const [password, setPassword] = useState("qwerty");
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated === true) {
      navigate("/dashboard", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  function handleSubmit(e) {
    e.preventDefault();
    login(email, password);
  }

  return (
    <div className="flex items-center justify-center">
      <div className="w-[60%]">
        <h1 className="text-[32px] font-bold text-center text-[#030307] pb-4">
          Login to your account
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col pb-3">
            <label className="pb-1 pl-1 text-[#030438] font-medium">
              Email
            </label>
            <input
              value={email}
              type="text"
              placeholder="Enter your email"
              className="ease-in duration-300 p-2 border border-[#E5E6FF] rounded-lg focus:ring-2 focus:ring-offset-2 outline-none focus:outline-none focus:ring-[#E5E6FF] focus:border-[#C2C4F9]"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col pb-3">
            <label className="pb-1 pl-1 text-[#030438] font-medium">
              Password
            </label>
            <input
              value={password}
              type="password"
              placeholder="Enter your password"
              className="ease-in duration-300 p-2 border border-[#E5E6FF] rounded-lg focus:ring-2 focus:ring-offset-2 outline-none focus:outline-none focus:ring-[#E5E6FF] focus:border-[#C2C4F9]"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="pt-4" style={{ float: "right" }}>
            <Button>Login</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
