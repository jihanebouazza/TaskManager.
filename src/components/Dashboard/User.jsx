import { useState } from "react";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function User() {
  const { logout, user } = useAuth();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="relative z-20">
      <button onClick={() => setOpen((prev) => !prev)}>
        <img
          className="rounded-full w-12 h-12 inline-block mr-1 ml-4 object-cover"
          src={user.avatar}
        />
        <TbTriangleInvertedFilled className="inline-block mt-3" />
      </button>
      {open && (
        <div className="absolute top-[40px] right-0 rounded-md block px-4 py-2 shadow-md w-full">
          <button
            onClick={() => {
              logout();
              navigate("/");
            }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default User;
