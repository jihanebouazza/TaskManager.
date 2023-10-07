import { FcTimeline } from "react-icons/fc";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to='/' className="flex">
      <div>
        <FcTimeline className="inline-block mr-1" size={30} />
      </div>
      <p
        style={{
          fontFamily: "Righteous",
          fontWeight: 400,
          fontSize: "1.5rem",
          color: " #030438",
        }}
      >
        TaskManager
      </p>
    </Link>
  );
}

export default Logo;
