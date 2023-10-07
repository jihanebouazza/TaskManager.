import LoginForm from "../components/Login/LoginForm";

function LoginPage() {
  return (
    <div className="w-full h-full flex items-center">
      <div className="w-[60%]">
        <LoginForm />
      </div>
      <div
        style={{
          background:
            "linear-gradient(126deg, rgba(251, 194, 194, 0.64) 7.94%, rgba(251, 194, 194, 0.11) 100%)",
        }}
        className="w-[40%] h-screen"
      >
        <img className="h-screen" src="/3dimg.png" alt="" />
      </div>
    </div>
  );
}

export default LoginPage;
