function Overlay({ children }) {
  return (
    <div
      style={{ backgroundColor: "rgba(0,0,0, 0.5)" }}
      className="fixed top-0 left-0 w-[100%] h-screen flex justify-center items-center z-50"
    >
      {children}
    </div>
  );
}

export default Overlay;
