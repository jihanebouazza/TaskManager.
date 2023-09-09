import { FcTimeline } from "react-icons/fc";

function Logo() {
  return (
    <div className="flex">
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
    </div>
  );
}

export default Logo;
