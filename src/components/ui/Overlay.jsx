function Overlay({ children }) {
  return (
    <div
      className="fixed top-0 left-0 w-[100%] h-screen flex justify-center items-center z-50 bg-black/50"
    >
      {children}
    </div>
  );
}

export default Overlay;
