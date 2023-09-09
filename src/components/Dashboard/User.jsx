import { useState } from "react";
import { TbTriangleInvertedFilled } from "react-icons/tb";

function User() {
  // eslint-disable-next-line
  const [open, setOpen] = useState(false);

  return (
    <div className="relative z-20">
      <button onClick={() => setOpen((prev) => !prev)}>
        <img
          className="rounded-full w-12 h-12 inline-block mr-1 ml-4 object-cover"
          src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        <TbTriangleInvertedFilled className="inline-block mt-3" />
      </button>
      {open && (
        <div className="absolute top-[40px] right-0 rounded-md block px-4 py-2 shadow-md w-full">
          <button onClick={() => {}}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default User;
